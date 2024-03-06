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

const rows = [
{ senin: 'Buka Kelas, Sholat Dhuha', selasa: 'Apel , Buka Kelas', rabu: 'Upacara Buka Kelas', kamis: 'Buka Kelas, Sholat Dhuha', jumat: 'Buka Kelas, Sholat Dhuha' },
{ senin: 'Tahsin, Tahfizh', selasa: 'Sholat dhuha', rabu: 'Sholat Dhuha', kamis: 'Tahsin Tahfizh', jumat: 'Tahsin, Tahfizh' },
{ senin: 'Snacktime', selasa: 'Snacktime', rabu: 'Tahsin Tahfizh', kamis: 'Snacktime', jumat: 'Snacktime' },
{ senin: 'Freeplay', selasa: 'Freeplay', rabu: 'Snacktime', kamis: 'Freeplay', jumat: 'Freeplay' },
{ senin: 'Aktivitas 1', selasa: 'SASS', rabu: 'Freeplay', kamis: 'Aktivitas 1', jumat: 'Jumsih' },
{ senin: 'ISHOMA', selasa: 'ISHOMA', rabu: 'Aktivitas 1', kamis: 'ISHOMA', jumat: 'ISHOMA' },
{ senin: 'Aktivitas 2', selasa: 'Islamika', rabu: 'ISHOMA', kamis: 'Aktivitas 2', jumat: 'Tutup Kelas' },
{ senin: 'Tutup Kelas', selasa: 'Tutup Kelas', rabu: 'Aktivitas 2', kamis: 'Tutup Kelas', jumat: 'Ekstrakulikuler' },
{ senin: '', selasa: '', rabu: 'Tutup Kelas', kamis: '', jumat: '' },
]

export default {
  setup() {
    const columns = ref([ ]);
    const rows = ref([]);
    return {
      separator: ref('cell'),
      columns,
      rows
    }
  },
  
  methods: {
    // fetchJadwal(){
    //   const idSiswa = sessionStorage.getItem("idSiswa");
    //   const token = sessionStorage.getItem("token");
    //   try {
    //     const response = await axios.get(`https://api-dev.curaweda.com:7000/api/timetable/show/${idSiswa}`, {
    //       headers: {
    //         'Authorization': `Bearer ${token}`
    //       }
    //     });
    //     columns.value = response.data.data
    //     rows.value = response.data.data
    //     // rekapSampah.value = response.data.data
    //   } catch (error) {
    //     console.log(error);
    //   }
    // }
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
