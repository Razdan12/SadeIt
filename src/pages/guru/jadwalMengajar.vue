<template>
  <div class="container">
    <!-- <NavbarSiswa/> -->
    <div class="row">
      <div class="col-md-12">
        <div class="text-center bg-blue-2 flex tw-flex-col tw-min-h-screen">

          <q-card-section>
            <div class="text-center">
              <p>
                <span class="text-center text-black text-bold" style="font-size: x-large">JADWAL MENGAJAR GURU</span><br>
                <span class="text-center text-black text-bold" style="font-size: large"> Bulan {{ currentmonth }}</span>

              </p>
            </div>
          </q-card-section>
          <q-card-section>
            <q-card class="my-card tw-h-full flex tw-w-full ">
              <q-card-section class=" tw-w-full">
                <div class="subcontent tw-h-full">
                  <navigation-bar @today="onToday" @prev="onPrev" @next="onNext" style="color: green;" flat />

                  <div class="row justify-center">
                    <div style=" width: 90%; ">
                      <q-calendar-month ref="calendar" v-model="selectedDate" animated bordered focusable hoverable
                        locale="id" no-active-date :day-min-height="80" :day-height="0" @change="onChange"
                        @moved="onMoved" @click-date="onClickDate" @click-day="onClickDay"
                        @click-workweek="onClickWorkweek" @click-head-workweek="onClickHeadWorkweek"
                        @click-head-day="onClickHeadDay">
                        <template #week="{ scope: { week, weekdays } }">
                          <template v-for="(computedEvent, index) in getWeekEvents(week, weekdays)" :key="index">
                            <div :class="badgeClasses(computedEvent)" :style="badgeStyles(computedEvent, week.length)">
                              <div v-if="computedEvent.event && computedEvent.event.details"
                                class="title q-calendar__ellipsis">
                                {{ computedEvent.event.title + (computedEvent.event.time ? ' - ' +
                                  computedEvent.event.time : '') }}
                                <q-tooltip>{{ computedEvent.event.details }}</q-tooltip>

                              </div>
                            </div>
                          </template>
                        </template>
                      </q-calendar-month>
                    </div>
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </q-card-section>



        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  QCalendarMonth,
  daysBetween,
  isOverlappingDates,
  parsed,
  parseDate,
  today,
  indexOf
} from '@quasar/quasar-ui-qcalendar/src/index.js'
import '@quasar/quasar-ui-qcalendar/src/QCalendarVariables.sass'
import '@quasar/quasar-ui-qcalendar/src/QCalendarTransitions.sass'
import '@quasar/quasar-ui-qcalendar/src/QCalendarMonth.sass'

import { defineComponent, ref } from 'vue'
import NavigationBar from '../../components/NavigationBar.vue'
import NavbarSiswa from '../../components/siswa/HederSiswa.vue'

// The function below is used to set up our demo data
const CURRENT_DAY = new Date()
function getCurrentDay(day) {
  const newDay = new Date(CURRENT_DAY)
  newDay.setDate(day)
  const tm = parseDate(newDay)
  return tm.date
}

export default defineComponent({
  name: 'MonthSlotWeek',
  components: {
    NavigationBar,
    QCalendarMonth,
    NavbarSiswa
  },
  data() {
    return {
      selectedDate: today(),
      events: ref([]),
      currentmonth: ref(''),
      year: ref(''),
      month: ref(''),
      token: sessionStorage.getItem("token")

    }
  },

  methods: {
    getCurrentDateTime() {
      const now = new Date();
      const options = { month: 'long', year: 'numeric' };
      this.currentmonth = now.toLocaleDateString('id-ID', options);
      this.year = now.getFullYear()
      this.month = now.getMonth() + 1
    },

    getWeekEvents(week, weekdays) {
      const firstDay = parsed(week[0].date + ' 00:00')
      const lastDay = parsed(week[week.length - 1].date + ' 23:59')

      const eventsWeek = []
      this.events.forEach((event, id) => {
        const startDate = parsed(event.start + ' 00:00')
        const endDate = parsed(event.end + ' 23:59')

        if (isOverlappingDates(startDate, endDate, firstDay, lastDay)) {
          const left = daysBetween(firstDay, startDate, true)
          const right = daysBetween(endDate, lastDay, true)

          eventsWeek.push({
            id, // index event
            left, // Position initial day [0-6]
            right, // Number days available
            size: week.length - (left + right), // Size current event (in days)
            event // Info
          })
        }
      })

      const events = []
      if (eventsWeek.length > 0) {
        const infoWeek = eventsWeek.sort((a, b) => a.left - b.left)
        infoWeek.forEach((_, i) => {
          this.insertEvent(events, week.length, infoWeek, i, 0, 0)
        })
      }

      return events
    },

    insertEvent(events, weekLength, infoWeek, index, availableDays, level) {
      const iEvent = infoWeek[index]
      if (iEvent !== undefined && iEvent.left >= availableDays) {
        // If you have space available, more events are placed
        if (iEvent.left - availableDays) {
          // It is filled with empty events
          events.push({ size: iEvent.left - availableDays })
        }
        // The event is built
        events.push({ size: iEvent.size, event: iEvent.event })

        if (level !== 0) {
          // If it goes into recursion, then the item is deleted
          infoWeek.splice(index, 1)
        }

        const currentAvailableDays = iEvent.left + iEvent.size

        if (currentAvailableDays < weekLength) {
          const indexNextEvent = indexOf(infoWeek, e => e.id !== iEvent.id && e.left >= currentAvailableDays)

          this.insertEvent(
            events,
            weekLength,
            infoWeek,
            indexNextEvent !== -1 ? indexNextEvent : index,
            currentAvailableDays,
            level + 1
          )
        } // else: There are no more days available, end of iteration
      }
      else {
        events.push({ size: weekLength - availableDays })
        // end of iteration
      }
    },

    badgeClasses(computedEvent) {
      if (computedEvent.event !== undefined) {
        return {
          'my-event': true,
          'text-white': true,
          'text-bold': true,
          [`bg-${computedEvent.event.bgcolor}`]: true,
          'rounded-border': true,
          'q-calendar__ellipsis': true
        }
      }
      return {
        'my-void-event': true
      }
    },

    badgeStyles(computedEvent, weekLength) {
      const s = {}
      if (computedEvent.size !== undefined) {
        s.width = ((100 / weekLength) * computedEvent.size) + '%'
      }
      return s
    },

    isBetweenDatesWeek(dateStart, dateEnd, weekStart, weekEnd) {
      return (
        (dateEnd < weekEnd && dateEnd >= weekStart)
        || dateEnd === weekEnd
        || (dateEnd > weekEnd && dateStart <= weekEnd)
      )
    },

    onToday() {
      this.$refs.calendar.moveToToday()
    },
    onPrev() {
      this.$refs.calendar.prev()
    },
    onNext() {
      this.$refs.calendar.next()
    },
    onMoved(data) {
      const tanggalBaru = new Date(data.date)
      this.year = tanggalBaru.getFullYear()
      this.month = tanggalBaru.getMonth() + 1
      const options = { month: 'long', year: 'numeric' };
      this.currentmonth = tanggalBaru.toLocaleDateString('id-ID', options);
    },
    onChange(data) {
      // console.log('onChange', data)
    },
    onClickDate(data) {
      // console.log('onClickDate', data)
    },
    onClickDay(data) {
      // console.log('onClickDay', data)
    },
    onClickWorkweek(data) {
      // console.log('onClickWorkweek', data)
    },
    onClickHeadDay(data) {
      // console.log('onClickHeadDay', data)
    },
    onClickHeadWorkweek(data) {
      // console.log('onClickHeadWorkweek', data)
    },

   
  },
  mounted() {
  
    this.getCurrentDateTime();
  },

})
</script>

<style lang="sass" scoped>
.my-event
  position: relative
  display: inline-flex
  white-space: nowrap
  font-size: 12px
  height: 16px
  max-height: 16px
  margin: 1px 0 0 0
  justify-content: center
  text-overflow: ellipsis
  overflow: hidden
  cursor: pointer

.title
  position: relative
  display: flex
  justify-content: center
  align-items: center
  height: 100%

.my-void-event
  display: inline-flex
  white-space: nowrap
  height: 1px

.text-white
  color: white

.bg-blue
  background: blue

.bg-green
  background: green

.bg-orange
  background: orange

.bg-red
  background: red

.bg-teal
  background: teal

.bg-grey
  background: grey

.bg-purple
  background: purple

.rounded-border
  border-radius: 2px
</style>
