<template>
  <div class="container">
    <!-- <NavbarSiswa /> -->
    <div class="row">
      <div class="col">
        <div class="text-center bg-blue-2 tw-min-h-screen">
          <q-card-section>
            <div class="text-center">
              <p>
                <span
                  class="text-center text-black text-bold"
                  style="font-size: x-large"
                  >Rencana Pekanan</span
                >
              </p>
              <p>
                <span class="text-center text-black" style="font-size: x-large"
                  >Periode : 3 Desember 2023 s/d 29 Desember 2023</span
                >
              </p>
            </div>
          </q-card-section>
          <q-card-section>
            <q-card class="my-card tw-w-full">
              <q-card-section>
                <!-- <q-table
                  class="my-sticky-header-table"
                  flat
                  bordered
                  :separator="separator"
                  :rows="rows"
                  :rows-per-page-options="[10]"
                  :columns="columns"
                  row-key="name"
                  style="height: fit-content"
                >
                  <template v-slot:body-cell-senin="props">
                    <q-td
                      :props="props"
                      :style="{
                        backgroundColor:
                          props.row.senin === 'Aktivitas 1'
                            ? 'yellow'
                            : props.row.senin === 'Aktivitas 2'
                            ? 'green'
                            : 'white',
                      }"
                    >
                      {{ props.row.senin }}
                    </q-td>
                  </template>
                  <template v-slot:body-cell-rabu="props">
                    <q-td
                      :props="props"
                      :style="{
                        backgroundColor:
                          props.row.rabu === 'Aktivitas 1'
                            ? 'yellow'
                            : props.row.rabu === 'Aktivitas 2'
                            ? 'green'
                            : 'white',
                      }"
                    >
                      {{ props.row.rabu }}
                    </q-td>
                  </template>
                  <template v-slot:body-cell-kamis="props">
                    <q-td
                      :props="props"
                      :style="{
                        backgroundColor:
                          props.row.kamis === 'Aktivitas 1'
                            ? 'yellow'
                            : props.row.kamis === 'Aktivitas 2'
                            ? 'green'
                            : 'white',
                      }"
                    >
                      {{ props.row.kamis }}
                    </q-td>
                  </template>
                </q-table> -->

                <q-calendar-month
                  ref="calendar"
                  v-model="selectedDate"
                  animated
                  bordered
                  focusable
                  hoverable
                  locale="id"
                  no-active-date
                  :day-min-height="80"
                  :day-height="0"
                  @change="onChange"
                  @moved="onMoved"
                  @click-date="onClickDate"
                  @click-day="onClickDay"
                  @click-workweek="onClickWorkweek"
                  @click-head-workweek="onClickHeadWorkweek"
                  @click-head-day="onClickHeadDay"
                >
                  <template #week="{ scope: { week, weekdays } }">
                    <template
                      v-for="(computedEvent, index) in getWeekEvents(
                        week,
                        weekdays
                      )"
                      :key="index"
                    >
                      <div
                        :class="badgeClasses(computedEvent)"
                        :style="badgeStyles(computedEvent, week.length)"
                      >
                        <div
                          v-if="
                            computedEvent.event && computedEvent.event.details
                          "
                          class="title q-calendar__ellipsis"
                        >
                          {{
                            computedEvent.event.title +
                            (computedEvent.event.time
                              ? " - " + computedEvent.event.time
                              : "")
                          }}
                          <q-tooltip>{{
                            computedEvent.event.details
                          }}</q-tooltip>
                        </div>
                      </div>
                    </template>
                  </template>
                </q-calendar-month>
              </q-card-section>
            </q-card>
          </q-card-section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { ref, onMounted, getCurrentInstance, watch } from "vue";
import Swal from "sweetalert2";
import {
  QCalendarMonth,
  daysBetween,
  isOverlappingDates,
  parsed,
  parseDate,
  today,
  indexOf,
} from "@quasar/quasar-ui-qcalendar/src/index.js";
import "@quasar/quasar-ui-qcalendar/src/QCalendarVariables.sass";
import "@quasar/quasar-ui-qcalendar/src/QCalendarTransitions.sass";
import "@quasar/quasar-ui-qcalendar/src/QCalendarMonth.sass";

// const columns = [
//   { name: "senin", label: "Senin", field: "senin", align: "center" },
//   { name: "selasa", label: "Selasa", field: "selasa", align: "center" },
//   { name: "rabu", label: "Rabu", field: "rabu", align: "center" },
//   { name: "kamis", label: "Kamis", field: "kamis", align: "center" },
//   { name: "jumat", label: "Jumat", field: "jumat", align: "center" },
// ];

// const rows = [
//   {
//     senin: "Buka Kelas, Sholat Dhuha",
//     selasa: "Apel , Buka Kelas",
//     rabu: "Upacara Buka Kelas",
//     kamis: "Buka Kelas, Sholat Dhuha",
//     jumat: "Buka Kelas, Sholat Dhuha",
//   },
//   {
//     senin: "Tahsin, Tahfizh",
//     selasa: "Sholat dhuha",
//     rabu: "Sholat Dhuha",
//     kamis: "Tahsin Tahfizh",
//     jumat: "Tahsin, Tahfizh",
//   },
//   {
//     senin: "Snacktime",
//     selasa: "Snacktime",
//     rabu: "Tahsin Tahfizh",
//     kamis: "Snacktime",
//     jumat: "Snacktime",
//   },
//   {
//     senin: "Freeplay",
//     selasa: "Freeplay",
//     rabu: "Snacktime",
//     kamis: "Freeplay",
//     jumat: "Freeplay",
//   },
//   {
//     senin: "Aktivitas 1",
//     selasa: "SASS",
//     rabu: "Freeplay",
//     kamis: "Aktivitas 1",
//     jumat: "Jumsih",
//   },
//   {
//     senin: "ISHOMA",
//     selasa: "ISHOMA",
//     rabu: "Aktivitas 1",
//     kamis: "ISHOMA",
//     jumat: "ISHOMA",
//   },
//   {
//     senin: "Aktivitas 2",
//     selasa: "Islamika",
//     rabu: "ISHOMA",
//     kamis: "Aktivitas 2",
//     jumat: "Tutup Kelas",
//   },
//   {
//     senin: "Tutup Kelas",
//     selasa: "Tutup Kelas",
//     rabu: "Aktivitas 2",
//     kamis: "Tutup Kelas",
//     jumat: "Ekstrakulikuler",
//   },
//   { senin: "", selasa: "", rabu: "Tutup Kelas", kamis: "", jumat: "" },
// ];

export default {
  components: {
    QCalendarMonth,
  },
  setup() {
    // const getJadwalKegiatan = async () => {
    //   const idSiswa = sessionStorage.getItem("idSiswa");
    //   const token = sessionStorage.getItem("token");
    //   try {
    //     const response = await axios.get(
    //       `https://api-dev.curaweda.com:7000/api/timetable/show/${idSiswa}`,
    //       {
    //         headers: {
    //           Authorization: `Bearer ${token}`,
    //         },
    //       }
    //     );
    //     columns.value = response.data.data;
    //     rows.value = response.data.data;
    //     // rekapSampah.value = response.data.data
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };
    const CURRENT_DAY = new Date();
    function getCurrentDay(day) {
      const newDay = new Date(CURRENT_DAY);
      newDay.setDate(day);
      const tm = parseDate(newDay);
      return tm.date;
    }
    return {
      separator: ref("cell"),
      // columns,
      // getJadwalKegiatan,
      token: ref(sessionStorage.getItem("token")),
      idSiswa: ref(sessionStorage.getItem("idSiswa")),
      // rows,
      selectedDate: today(),
      events: [
        {
          id: 1,
          title: "Ekskul",
          details: "Ekskul",
          start: getCurrentDay(20),
          end: getCurrentDay(20),
          bgcolor: "green",
        },
        {
          id: 2,
          title: "Acara Khusus",
          details: "Acara Khusus",
          start: getCurrentDay(3),
          end: getCurrentDay(3),
          bgcolor: "blue",
        },
        {
          id: 3,
          title: "Acara Khusus",
          details: "Acara Khusus",
          start: getCurrentDay(4),
          end: getCurrentDay(4),
          bgcolor: "blue",
        },
        {
          id: 4,
          title: "Acara Khusus",
          details: "Acara Khusus",
          start: getCurrentDay(5),
          end: getCurrentDay(5),
          bgcolor: "blue",
        },
        {
          id: 5,
          title: "Acara Khusus",
          details: "Acara Khusus",
          start: getCurrentDay(14),
          end: getCurrentDay(14),
          bgcolor: "blue",
        },
        {
          id: 6,
          title: "Acara Khusus",
          details: "Acara Khusus",
          start: getCurrentDay(17),
          end: getCurrentDay(17),
          bgcolor: "blue",
        },
        {
          id: 7,
          title: "Acara Khusus",
          details: "Acara Khusus",
          start: getCurrentDay(24),
          end: getCurrentDay(24),
          bgcolor: "blue",
        },
        {
          id: 8,
          title: "Ekskul",
          details: "Ekskul",
          start: getCurrentDay(13),
          end: getCurrentDay(13),
          bgcolor: "green",
        },
        {
          id: 9,
          title: "Libur",
          details: "libur",
          start: getCurrentDay(2),
          end: getCurrentDay(6),
          bgcolor: "red",
        },
        {
          id: 10,
          title: "Acara Khusus",
          details: "Acara Khusus",
          start: getCurrentDay(25),
          end: getCurrentDay(25),
          bgcolor: "blue",
        },
        {
          id: 11,
          title: "Acara Khusus",
          details: "Acara Khusus",
          start: getCurrentDay(26),
          end: getCurrentDay(26),
          bgcolor: "blue",
        },
      ],
    };
  },
  mounted() {
    this.getDataTable();
  },
  methods: {
    async getDataTable() {
      try {
        const response = this.$api.get(
          `https://api-dev.curaweda.com:7000/api/timetable/show/1`,
          {
            headers: {
              Authorization: `Bearer ${this.token}`,
            },
          }
        );

        if (response.status == 200) {
          console.log("hai");
        }
      } catch (error) {
        Swal.fire({
          title: "Gagal Mengambil data tugas !",
          text: "Refresh halaman atau hubungi admin",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Refresh Now",
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.reload();
          }
        });
        console.log(error);
      }
    },

    getWeekEvents(week, weekdays) {
      const firstDay = parsed(week[0].date + " 00:00");
      const lastDay = parsed(week[week.length - 1].date + " 23:59");

      const eventsWeek = [];
      this.events.forEach((event, id) => {
        const startDate = parsed(event.start + " 00:00");
        const endDate = parsed(event.end + " 23:59");

        if (isOverlappingDates(startDate, endDate, firstDay, lastDay)) {
          const left = daysBetween(firstDay, startDate, true);
          const right = daysBetween(endDate, lastDay, true);

          eventsWeek.push({
            id, // index event
            left, // Position initial day [0-6]
            right, // Number days available
            size: week.length - (left + right), // Size current event (in days)
            event, // Info
          });
        }
      });

      const events = [];
      if (eventsWeek.length > 0) {
        const infoWeek = eventsWeek.sort((a, b) => a.left - b.left);
        infoWeek.forEach((_, i) => {
          this.insertEvent(events, week.length, infoWeek, i, 0, 0);
        });
      }

      return events;
    },

    insertEvent(events, weekLength, infoWeek, index, availableDays, level) {
      const iEvent = infoWeek[index];
      if (iEvent !== undefined && iEvent.left >= availableDays) {
        // If you have space available, more events are placed
        if (iEvent.left - availableDays) {
          // It is filled with empty events
          events.push({ size: iEvent.left - availableDays });
        }
        // The event is built
        events.push({ size: iEvent.size, event: iEvent.event });

        if (level !== 0) {
          // If it goes into recursion, then the item is deleted
          infoWeek.splice(index, 1);
        }

        const currentAvailableDays = iEvent.left + iEvent.size;

        if (currentAvailableDays < weekLength) {
          const indexNextEvent = indexOf(
            infoWeek,
            (e) => e.id !== iEvent.id && e.left >= currentAvailableDays
          );

          this.insertEvent(
            events,
            weekLength,
            infoWeek,
            indexNextEvent !== -1 ? indexNextEvent : index,
            currentAvailableDays,
            level + 1
          );
        } // else: There are no more days available, end of iteration
      } else {
        events.push({ size: weekLength - availableDays });
        // end of iteration
      }
    },

    badgeClasses(computedEvent) {
      if (computedEvent.event !== undefined) {
        return {
          "my-event": true,
          "text-white": true,
          "text-bold": true,
          [`bg-${computedEvent.event.bgcolor}`]: true,
          "rounded-border": true,
          "q-calendar__ellipsis": true,
        };
      }
      return {
        "my-void-event": true,
      };
    },

    badgeStyles(computedEvent, weekLength) {
      const s = {};
      if (computedEvent.size !== undefined) {
        s.width = (100 / weekLength) * computedEvent.size + "%";
      }
      return s;
    },

    isBetweenDatesWeek(dateStart, dateEnd, weekStart, weekEnd) {
      return (
        (dateEnd < weekEnd && dateEnd >= weekStart) ||
        dateEnd === weekEnd ||
        (dateEnd > weekEnd && dateStart <= weekEnd)
      );
    },

    onToday() {
      this.$refs.calendar.moveToToday();
    },
    onPrev() {
      this.$refs.calendar.prev();
    },
    onNext() {
      this.$refs.calendar.next();
    },
    onMoved(data) {
      console.log("onMoved", data);
    },
    onChange(data) {
      console.log("onChange", data);
    },
    onClickDate(data) {
      console.log("onClickDate", data);
    },
    onClickDay(data) {
      console.log("onClickDay", data);
    },
    onClickWorkweek(data) {
      console.log("onClickWorkweek", data);
    },
    onClickHeadDay(data) {
      console.log("onClickHeadDay", data);
    },
    onClickHeadWorkweek(data) {
      console.log("onClickHeadWorkweek", data);
    },
  },
};
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
