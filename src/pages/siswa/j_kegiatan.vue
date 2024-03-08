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

                <q-markup-table separator="cell" flat bordered>
                  <thead>
                    <tr class="bg-blue-3 text-bold">
                      <th class="text-center">Senin</th>
                      <th class="text-center">Selasa</th>
                      <th class="text-center">Rabu</th>
                      <th class="text-center">Kamis</th>
                      <th class="text-center">Jum'at</th>
                      <th class="text-center">Sabtu</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="text-center">Buka Kelas</td>
                      <td class="text-center">Apel</td>
                      <td class="text-center">Upacara</td>
                      <td class="text-center">Sholat Dhuha</td>
                      <td class="text-center">Sholat Dhuha</td>
                      <td class="text-center">Sholat Dhuha</td>
                     
                    </tr>
                    <tr>
                      <td class="text-center">Buka Kelas</td>
                      <td class="text-center">Apel</td>
                      <td class="text-center">Upacara</td>
                      <td class="text-center">Sholat Dhuha</td>
                      <td class="text-center">Sholat Dhuha</td>
                      <td class="text-center">Sholat Dhuha</td>
                     
                    </tr>
                    <tr>
                      <td class="text-center">Buka Kelas</td>
                      <td class="text-center">Apel</td>
                      <td class="text-center">Upacara</td>
                      <td class="text-center">Sholat Dhuha</td>
                      <td class="text-center"></td>
                      <td class="text-center">Sholat Dhuha</td>
                     
                    </tr>
                    <tr>
                      <td class="text-center">Buka Kelas</td>
                      <td class="text-center">Apel</td>
                      <td class="text-center">Upacara</td>
                      <td class="text-center">Sholat Dhuha</td>
                      <td class="text-center">Sholat Dhuha</td>
                      <td class="text-center"></td>
                     
                    </tr>
                    
                  </tbody>
                </q-markup-table>

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



export default {
  setup() {
    const columns = ref([]);
    const rows = ref([]);


    const getJadwalKegiatan = async () => {
      const idSiswa = sessionStorage.getItem("idSiswa")
      const token = sessionStorage.getItem("token");
      try {
        const response = await axios.get(`https://api-dev.curaweda.com:7000/api/timetable/show/${idSiswa}`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        console.log(response);
        // columns.value = response.data.data
        // rows.value = response.data.data
        // rekapSampah.value = response.data.data
      } catch (error) {
        console.log(error);
      }
    }

    onMounted(() => {
      getJadwalKegiatan();
    });
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
        console.log(data);
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
