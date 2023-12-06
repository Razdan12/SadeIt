<template>
  <div class="container">
    <!-- <NavbarSiswa /> -->
    <div class="row">
      <div class="col-md-12">
        <q-card class="text-center bg-blue-2" style="height: 87vh">
          <q-card-section>
            <div class="text-center">
              <p>
                <span class="text-center text-black text-bold" style="font-size: x-large">Rencana Pekanan</span>
              </p>
              <p>
                <span class="text-center text-black" style="font-size: x-large">Periode : 3 Desember 2023 s/d 29 Desember
                  2023</span>
              </p>
            </div>
          </q-card-section>
          <q-card-section>
            <q-card class="my-card">
              <q-card-section>
                <q-table class="my-sticky-header-table" flat bordered :rows="rows"  :rows-per-page-options="[10]" :columns="columns"
                  row-key="name" style="height: 70vh;" />

                <!-- <div class="subcontent">
                  <navigation-bar
                    @today="onToday"
                    @prev="onPrev"
                    @next="onNext"
                    style="color: green"
                    flat
                  />

                  <div class="row justify-center">
                    <div
                      style="display: max-width: 900px; width: 90%; height: 60vh;"
                    >
                      <q-calendar-month
                        ref="calendar"
                        v-model="selectedDate"
                        animated
                        bordered
                        focusable
                        hoverable
                        wrap
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
                                  computedEvent.event &&
                                  computedEvent.event.details
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
                    </div>
                  </div>
                </div> -->
              </q-card-section>
            </q-card>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script>
const columns = [

  { name: 'senin', label: 'Senin', field: 'senin', align: 'center' },
  { name: 'selasa', label: 'Selasa', field: 'selasa', align: 'center' },
  { name: 'rabu', label: 'Rabu', field: 'rabu', align: 'center' },
  { name: 'kamis', label: 'Kamis', field: 'kamis', align: 'center' },
  { name: 'jumat', label: 'Jum\'at', field: 'jumat', align: 'center' },

]

const rows = [
  { senin: 'Buka Kelas, upacara bersama', selasa: 'Upacara', rabu: 'Senam', kamis: 'pelajaran', jumat: 'olahraga' },
  { senin: 'Buka Kelas', selasa: 'Upacara', rabu: 'Senam', kamis: 'pelajaran', jumat: 'olahraga' },
  { senin: 'Buka Kelas', selasa: 'Upacara', rabu: 'Senam', kamis: 'pelajaran', jumat: 'olahraga' },
  { senin: 'Buka Kelas', selasa: 'Upacara', rabu: 'Senam', kamis: 'pelajaran', jumat: 'olahraga' },
  { senin: 'Buka Kelas', selasa: 'Upacara', rabu: 'Senam', kamis: 'pelajaran', jumat: 'olahraga' },
  { senin: 'Buka Kelas', selasa: 'Upacara', rabu: 'Senam', kamis: 'pelajaran', jumat: 'olahraga' },
  { senin: 'Buka Kelas', selasa: 'Upacara', rabu: 'Senam', kamis: 'pelajaran', jumat: 'olahraga' },
  { senin: 'Buka Kelas', selasa: 'Upacara', rabu: 'Senam', kamis: 'pelajaran', jumat: 'olahraga' },
  { senin: 'Buka Kelas', selasa: 'Upacara', rabu: 'Senam', kamis: 'pelajaran', jumat: 'olahraga' },
  { senin: 'Buka Kelas', selasa: 'Upacara', rabu: 'Senam', kamis: 'pelajaran', jumat: 'olahraga' },
  { senin: 'Buka Kelas', selasa: 'Upacara', rabu: 'Senam', kamis: 'pelajaran', jumat: 'olahraga' },
  { senin: 'Buka Kelas', selasa: 'Upacara', rabu: 'Senam', kamis: 'pelajaran', jumat: 'olahraga' },
  { senin: 'Buka Kelas', selasa: 'Upacara', rabu: 'Senam', kamis: 'pelajaran', jumat: 'olahraga' },
  { senin: 'Buka Kelas', selasa: 'Upacara', rabu: 'Senam', kamis: 'pelajaran', jumat: 'olahraga' },
  { senin: 'Buka Kelas', selasa: 'Upacara', rabu: 'Senam', kamis: 'pelajaran', jumat: 'olahraga' },
  { senin: 'Buka Kelas', selasa: 'Upacara', rabu: 'Senam', kamis: 'pelajaran', jumat: 'olahraga' },
  { senin: 'Buka Kelas', selasa: 'Upacara', rabu: 'Senam', kamis: 'pelajaran', jumat: 'olahraga' },
  { senin: 'Buka Kelas', selasa: 'Upacara', rabu: 'Senam', kamis: 'pelajaran', jumat: 'olahraga' },

]

export default {
  setup() {
    return {
      columns,
      rows
    }
  }
}
</script>

<style lang="sass">
.my-sticky-header-table
  /* height or max-height is important */
  height: 310px

  .q-table__top,
  .q-table__bottom,
  thead tr:first-child th
    /* bg color is important for th; just specify one */
    background-color: #00b4ff

  thead tr th
    position: sticky
    z-index: 1
  thead tr:first-child th
    top: 0

  /* this is when the loading indicator appears */
  &.q-table--loading thead tr:last-child th
    /* height of all previous header rows */
    top: 48px

  /* prevent scrolling behind sticky top row on focus */
  tbody
    /* height of all previous header rows */
    scroll-margin-top: 48px
</style>