<template>
  <div class="row">
    <div class="col-md-12 ">
      <div class="text-center bg-blue-2 tw-min-h-screen">
        <q-card-section>
          <div class="text-center">
            <p>
              <span class="text-center text-black text-bold" style="font-size: x-large">DASHBOARD WALI MURID</span>
            </p>
          </div>
          <!-- Student Selection Dropdown -->
          <q-select v-model="selectedStudent" :options="dataSiswa" label="Pilih Siswa" outlined
            class="tw-mb-3"></q-select>
          <!-- <div v-if="selectedSiswa"> -->
          <div class="tw-mt-3 tw-flex tw-flex-wrap row">
            <div class="tw-w-1/3 tw-p-3 col-12 col-md ">
              <q-card class="bg-green-1 tw-w-full tw-h-80">
                <q-card-section>
                  <div class="row flex tw-flex-col justify-center items-center">
                    <p><span style="font-size: xx-large">Absensi</span></p>
                    <div class="row flex justify-center items-center tw-w-full">

                      <div class="img">
                        <q-img src="../../assets/sadeicon.png" />
                      </div>
                      <div class="col-md col-12 text-left">

                        <q-markup-table class="bg-green-1" flat>
                          <tbody>
                            <tr>
                              <td class="text-left">Hadir (Ontime)</td>
                              <td class="text-right">159</td>
                            </tr>
                            <tr>
                              <td class="text-left">Hadir (Late)</td>
                              <td class="text-right">237</td>
                            </tr>
                            <tr>
                              <td class="text-left">Sakit</td>
                              <td class="text-right">262</td>
                            </tr>
                            <tr>
                              <td class="text-left">Alfa</td>
                              <td class="text-right">305</td>
                            </tr>
                          </tbody>
                        </q-markup-table>
                      </div>
                    </div>
                  </div>
                </q-card-section>
              </q-card>
            </div>
            <div class="tw-w-1/3 tw-p-3 col-12 col-md">

              <q-card class="bg-pink-1 tw-w-full tw-h-80">
                <q-card-section>
                  <div class="row flex tw-flex-col justify-center items-center">
                    <p>
                      <span style="font-size: xx-large">Asesmen</span>
                      <br />
                      <span> Semester 1 </span>
                    </p>
                    <div class="row flex justify-center items-center tw-w-full">

                      <div class="img">
                        <q-img src="../../assets/Asesmen.png" style="width: 70%" />
                      </div>
                      <div class="col-md-8 text-left">

                        <q-markup-table class="bg-pink-1" flat>
                          <tbody>
                            <tr>
                              <td class="text-left">Narasi</td>
                              <td class="text-right">23 juni 2023</td>
                              <td>
                                <q-btn round color="blue-2" icon="file_download" />
                              </td>
                            </tr>
                            <tr>
                              <td class="text-left">Portofolio</td>
                              <td class="text-right">23 juni 2023</td>
                              <td>
                                <q-btn round color="blue-2" icon="file_download" />
                              </td>
                            </tr>
                            <tr>
                              <td class="text-left">Raport Angka</td>
                              <td class="text-right">23 juni 2023</td>
                              <td>
                                <q-btn round color="blue-2" icon="file_download" />
                              </td>
                            </tr>
                          </tbody>
                        </q-markup-table>
                      </div>
                    </div>
                  </div>
                </q-card-section>
              </q-card>
            </div>
            <div class="tw-w-1/3 tw-p-3 col-12 col-md">

              <q-card class="bg-light-green-1 tw-w-full tw-h-80">
                <q-card-section>
                  <P class="text-bold text-left">Overview <br />
                    Tema : <span class="text-blue">Lingkungan Hidup</span>
                    <br />
                    Pemahaman Bermakna : <br />
                    periode : <br />
                    TUP :
                    <span class="text-blue"></span>
                  </P>

                  <div class="text-justify" style="width: 95%">
                    <p>
                      Bertani atau berkebun ini juga merupakan salah satu
                      contoh pendidikan lingkungan hidup. Kegiatan ini
                      memiliki tujuan untuk mencintai lingkungan dan bisa
                      menghargai alam. <br />Kegiatannya bisa dilakukan
                      semacam menanam bunga di halaman sekolah misalnya.
                      Atau membersihkan sampah yang ada di sekitar sekolah
                      sehingga lingkungan nampak bersih dan asri.
                    </p>
                  </div>
                </q-card-section>
              </q-card>
            </div>
          </div>
          <div class=" flex tw-flex-wrap tw-mt-2 row">
            <div class="tw-w-1/3 tw-p-3  col-12 col-md">

              <q-card class="bg-yellow-1 ">
                <q-card-section>
                  <div class="row flex justify-center items-center">
                    <div class="col-md-4">

                      <q-img src="../../assets/camper.png" style="width: 60%" />
                    </div>
                    <div class="col-md-8 text-left">
                      <p>
                        <span style="font-size: xx-large">Agenda Kegiatan</span>
                      </p>
                      <q-markup-table class="bg-yellow-1 text-bold" flat>
                        <tbody>
                          <tr>
                            <td class="text-left">Field Trip Bandung</td>
                            <td class="text-right">23 Oktober 2023</td>
                          </tr>
                          <tr>
                            <td class="text-left">Field Trip Bandung</td>
                            <td class="text-right">23 Oktober 2023</td>
                          </tr>
                        </tbody>
                      </q-markup-table>
                    </div>
                  </div>
                </q-card-section>
              </q-card>
            </div>
            <div class="tw-w-1/3 tw-p-3 col-12 col-md">

              <q-card class="bg-light-blue-1 ">
                <q-card-section>
                  <div class="row flex justify-center items-center">
                    <div class="col-md-4">

                      <q-img src="../../assets/book/total.png" style="width: 60%" />
                    </div>
                    <div class="col-md-8 text-left">
                      <p>
                        <span style="font-size: xx-large">Bank Sampah</span>
                      </p>
                      <q-markup-table class="bg-light-blue-1" flat>
                        <tbody>
                          <tr>
                            <td class="text-left">Terkumpul</td>
                            <td class="text-right">159</td>
                            <td class="text-left">kg</td>
                          </tr>
                          <tr>
                            <td class="text-left">Target</td>
                            <td class="text-right">5</td>
                            <td class="text-left">Hari</td>
                          </tr>
                        </tbody>
                      </q-markup-table>
                    </div>
                  </div>
                </q-card-section>
              </q-card>
            </div>
            <div class="tw-w-1/3 tw-p-3 col-12 col-md">

              <q-card class="bg-light-blue-1 ">
                <q-card-section>
                  <div class="row flex justify-center items-center">
                    <div class="col-md-4">

                      <q-img src="../../assets/Achievement.png" style="width: 60%" />
                    </div>
                    <div class="col-md-8 text-left">
                      <p>
                        <span style="font-size: xx-large">Achievement</span>
                      </p>
                      <q-markup-table class="bg-light-blue-1" flat>
                        <tbody>
                          <tr>
                            <td class="text-left" style="font-size: medium">
                              Sertﬁkat Lomba Panjat
                            </td>
                          </tr>
                          <tr>
                            <td class="text-left"></td>
                          </tr>
                        </tbody>
                      </q-markup-table>
                    </div>
                  </div>
                </q-card-section>
              </q-card>
            </div>
          </div>

          <div class="tw-w-full tw-p-3">

            <q-card class="tw-h-40">
              <q-card-section class="text-left">
                <p class="text-left">
                  <br />
                  <span class="text-bold">Pengumuman</span><br />- Tugas Mata
                  Pelajaran Matematika - Hal 23 - 24
                </p>
              </q-card-section>
            </q-card>
          </div>
          <!-- </div> -->

        </q-card-section>
      </div>
    </div>
  </div>
</template>

<script>

import axios from "axios";
import NavbarSiswa from "../../components/siswa/HederSiswa.vue"
import { ref, onMounted, getCurrentInstance, watch } from "vue";
export default {
  components: {
    NavbarSiswa,
  },
  setup() {
    const dataSiswa = ref([]);
    const selectedSiswa = ref(false);
    const selectedStudent = ref(null);

    const rekapSampah = ref([]);
    const getDataSiswa = async () => {
      try {
        const token = sessionStorage.getItem("token");
        const idSiswa = sessionStorage.getItem("idUser");

        // Use getCurrentInstance to get access to the current component instance
        const instance = getCurrentInstance();
        const response = await instance.appContext.config.globalProperties.$api.get(
          `user-access/show-by-user/${idSiswa}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const data = response.data.data;

        dataSiswa.value = await Promise.all(
          data.map((Item) => {
            return {
              label: Item.student.nickname,
              value: Item.student.id,
            };
          })
        );
        selectedStudent.value = dataSiswa.value[0]
      } catch (error) {
        console.log(error);
      }
    };
    const getRekapSampahbulan = async () => {
      const idSiswa = sessionStorage.getItem("idStudent")
      const token = sessionStorage.getItem("token");
      try {
        const response = await axios.get(`https://api-dev.curaweda.com:7000/api/waste-collection/show/${idSiswa}`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        rekapSampah.value = response.data.data
      } catch (error) {
        console.log(error);
      }
    }

    const getRekapAbsensi = async () => {
      const idSiswa = sessionStorage.getItem("idStudent")
      const token = sessionStorage.getItem("token");
      try {
        const response = await axios.get(`https://api-dev.curaweda.com:7000/api/student-attendance/show-by-student/${idSiswa}`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        console.log(response);
        // rekapSampah.value = response.data.data
      } catch (error) {
        console.log(error);
      }
    }
    // Call getDataSiswa when component is mounted
    onMounted(() => {
      getDataSiswa();
      getRekapSampahbulan();
      getRekapAbsensi();
    });
    watch(selectedStudent, (newVal, oldVal) => {
      // console.log(oldVal);
      // console.log('selectedStudent changed:', newVal.value);
      sessionStorage.setItem('idStudent', newVal.value)
      getRekapSampahbulan();
      // Update selectedSiswa.value or perform any other actions
      selectedSiswa.value = true;
    });



    return {
      dataSiswa,
      selectedSiswa,
      selectedStudent,
      getDataSiswa,
    };
  },
};
</script>


<style>
/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  .img {
    display: none;
  }
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
  .img {
    display: flex;
    width: 30%;
  }
}
</style>
