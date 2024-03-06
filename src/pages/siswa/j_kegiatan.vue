<template>
  <div class="container">
    <!-- <NavbarSiswa /> -->
    <div class="row">
      <div class="col">
        <div class="text-center bg-blue-2 tw-min-h-screen">
          <q-card-section>
            <div class="text-center">
              <p>
                <span class="text-center text-black text-bold" style="font-size: x-large">Rencana Pekanan</span>
              </p>
              <p>
                <span class="text-center text-black" style="font-size: x-large">{{ periode  }}</span>
              </p>
            </div>
          </q-card-section>
          <q-card-section>
            <q-card class="my-card tw-w-full">
              <q-card-section>

                <q-table class="my-sticky-header-table" flat bordered :separator="separator" :rows="rows"
                  :rows-per-page-options="[10]" :columns="columns" row-key="name" style="height: fit-content;">
                  <template v-slot:body-cell-senin="props">
                    <q-td :props="props"
                      :style="{ backgroundColor: props.row.senin === 'Aktivitas 1' ? 'yellow' : props.row.senin === 'Aktivitas 2' ? 'green' : 'white' }">
                      {{ props.row.senin }}
                    </q-td>
                  </template>
                  <template v-slot:body-cell-rabu="props">
                    <q-td :props="props"
                      :style="{ backgroundColor: props.row.rabu === 'Aktivitas 1' ? 'yellow' : props.row.rabu === 'Aktivitas 2' ? 'green' : 'white' }">
                      {{ props.row.rabu }}
                    </q-td>
                  </template>
                  <template v-slot:body-cell-kamis="props">
                    <q-td :props="props"
                      :style="{ backgroundColor: props.row.kamis === 'Aktivitas 1' ? 'yellow' : props.row.kamis === 'Aktivitas 2' ? 'green' : 'white' }">
                      {{ props.row.kamis }}
                    </q-td>
                  </template>
                </q-table>


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

const columns = [
  { name: 'senin', label: 'Senin', field: 'senin', align: 'center' },
  { name: 'selasa', label: 'Selasa', field: 'selasa', align: 'center' },
  { name: 'rabu', label: 'Rabu', field: 'rabu', align: 'center' },
  { name: 'kamis', label: 'Kamis', field: 'kamis', align: 'center' },
  { name: 'jumat', label: 'Jumat', field: 'jumat', align: 'center' },
]

export default {
  setup() {
    return {
      separator: ref('cell'),
      columns,
      periode: ref(''),
      rows: ref([]),
      token: sessionStorage.getItem("token")
    }
  },
  mounted(){
    this.getJadwalKegiatan()
  },
  methods: {
    async getJadwalKegiatan(){
      try {
        const { schedules, pushIndex } = this.createEmptySchedule()
        console.log(schedules, pushIndex)
        const { data } = await axios.get(`https://api-dev.curaweda.com:7000/api/timetable?page=0&limit=10`, {
          headers: {
            'Authorization': `Bearer ${this.token}`
          }
        });
        for(let activity of data.data.result){
          const activityDate = new Date(activity.updatedAt).getDate()
          schedules[activityDate - 1] = activity.title
        }
        for (let i = 0; i < pushIndex; i++) {
          schedules.unshift("");
        }
        this.rows = this.formatSchedule(schedules)
      } catch (error) {
        console.log(error);
      }
      
    },
    formatSchedule(array){
      const result = [];
      // SPLICE EACH ARRAY TO MAKE IT 7 FOR every array, And then make it into Object and name it by columns
      for (let i = 0; i < array.length; i += 7) {
        const rawRows = {}
        const slicedArray = array.slice(i, i + 7);
        slicedArray.shift(), slicedArray.pop()
        if(slicedArray.length < 1) break
        for(let colIndex in this.columns){
          const propertiesName = this.columns[colIndex].field
          rawRows[propertiesName] = slicedArray[colIndex]
        }
        result.push(rawRows);
      }
      return result
    },
    createEmptySchedule(){
      const currentDate = new Date()
      const currentYear = currentDate.getFullYear()
      const currentMonth = currentDate.getMonth() + 1
      const daysInMonth = new Date(currentYear, currentMonth , 0).getDate();
      const pushIndex = new Date(currentYear, currentMonth - 1, 1).getDay();
      return { schedules: Array.from({ length: daysInMonth }, () => "No Activity"), pushIndex}
      // const startDate = `${} Month ${currentYear}`
      // const endDate = `${daysInMonth} Month ${currentYear}`
      // this.periode = `${startDate} s/d ${endDate}`
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
