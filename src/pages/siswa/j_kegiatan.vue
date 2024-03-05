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
                <span class="text-center text-black" style="font-size: x-large">Periode : 3 Desember 2023 s/d 29 Desember
                  2023</span>
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
      getJadwalKegiatan,
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
