<template>
  <div class="container">
    <!-- <NavbarSiswa /> -->
    <div class="row">
      <div class="col-md-12">
        <div class="text-center bg-blue-2 tw-min-h-screen">
          <q-card-section>
            <div class="text-center">
              <p>
                <span class="text-center text-black text-bold" style="font-size: x-large">BANK SAMPAH</span>
              </p>
            </div>
          </q-card-section>
          <q-card-section>
            <q-card style="height: auto">
              <q-card-section>
                <div class="row flex justify-center tw-gap-3">
                  <div class="col-md col-12">
                    <q-card class="bg-light-green-1 tw-h-80">
                      <q-card-section>
                        <p>
                          <span style="font-size: xx-large">History</span>
                        </p>
                        <div class="row flex justify-center items-center">
                          <div class="col-md-4">
                            <q-img src="../../assets/garbage.png" style="width: 70%" />
                          </div>
                          <div class="col-md-8 text-left tw-w-full">
                            <q-markup-table class="bg-light-green-1 tw-w-full" flat>
                              <tbody class="text-bold text-blue tw-w-full">
                                <tr>
                                  <td class="text-left" style="font-size: larger">
                                    Hari ini
                                  </td>
                                  <td class="text-right" style="font-size: larger">
                                    2
                                  </td>
                                  <td class="text-left text-red" style="font-size: small">
                                    Kg
                                  </td>
                                </tr>
                                <tr>
                                  <td class="text-left" style="font-size: larger">
                                    Bulan ini
                                  </td>
                                  <td class="text-right" style="font-size: larger">
                                    4
                                  </td>
                                  <td class="text-left text-red" style="font-size: small">
                                    Kg
                                  </td>
                                </tr>
                              </tbody>
                            </q-markup-table>
                          </div>
                        </div>
                      </q-card-section>
                    </q-card>
                  </div>
                  <div class="col-md col-12 text center">
                    <q-card class=" tw-h-80">
                      <q-card-section>
                        <div class="text-center">
                          <p class="text-bold" style="font-size: x-large">
                            Target dan Capaian
                          </p>
                          <p class="text-blue-4 text-bold" style="font-size: larger">
                            Capaian bulan lalu 15 Kg
                          </p>
                          <q-separator class="q-my-lg" color="orange" inset />
                          <p class="text-bold" style="font-size: large">
                            Target <br />

                            <q-img src="../../assets/target.png" style="width: 55%" />
                          </p>
                        </div>
                      </q-card-section>
                    </q-card>
                  </div>
                  <div class="col-md col-12">
                    <q-card class="bg-light-green-1 tw-h-80">
                      <q-card-section>
                        <div class="row">
                          <div class="col-md-12 text-left flex justify-center">
                            <p class="text-center">
                              <span class="text-bold" style="font-size: larger">Rekap Periode:
                              </span>
                            </p>
                            <q-markup-table class="bg-light-green-1 tw-w-full" flat>
                              <tbody class="text-bold text-blue">
                                <tr>
                                  <td class="text-left" style="font-size: small">
                                    Senin
                                  </td>
                                  <td class="text-right" style="font-size: small">
                                    2
                                  </td>
                                  <td class="text-left text-red" style="font-size: smaller">
                                    Kg
                                  </td>
                                </tr>
                                <tr>
                                  <td class="text-left" style="font-size: small">
                                    Selasa
                                  </td>
                                  <td class="text-right" style="font-size: small">
                                    3
                                  </td>
                                  <td class="text-left text-red" style="font-size: smaller">
                                    Kg
                                  </td>
                                </tr>
                                <tr>
                                  <td class="text-left" style="font-size: small">
                                    Rabu
                                  </td>
                                  <td class="text-right" style="font-size: small">
                                    2
                                  </td>
                                  <td class="text-left text-red" style="font-size: smaller">
                                    Kg
                                  </td>
                                </tr>
                                <tr>
                                  <td class="text-left" style="font-size: small">
                                    Kamis
                                  </td>
                                  <td class="text-right" style="font-size: small">
                                    1
                                  </td>
                                  <td class="text-left text-red" style="font-size: smaller">
                                    Kg
                                  </td>
                                </tr>
                                <tr>
                                  <td class="text-left" style="font-size: small">
                                    Jumat
                                  </td>
                                  <td class="text-right" style="font-size: small">
                                    5
                                  </td>
                                  <td class="text-left text-red" style="font-size: smaller">
                                    Kg
                                  </td>
                                </tr>
                              </tbody>
                            </q-markup-table>
                          </div>
                        </div>
                      </q-card-section>
                    </q-card>
                  </div>
                </div>
              </q-card-section>
              <q-separator color="blue" inset />
              <br />
              <p class="text-center text-bold" style="font-size: large">
                Periode : 16 - 20 Oktober
              </p>

              <div>
                <div class="row flex justify-center tw-gap-3 tw-p-5">
                  <div>
    <canvas id="myChart"></canvas>
  </div>
                </div>
              </div>
            </q-card>
          </q-card-section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Chart } from 'chart.js';
import { ref, onMounted } from 'vue';

export default {
  setup() {
    const chart = ref(null);

    onMounted(() => {
      const data = [
        { venue: "sen", count1: 24, count2: 32 },
        { venue: "sel", count1: 25, count2: 32 },
        { venue: "rab", count1: 21, count2: 12 },
        { venue: "kam", count1: 40, count2: 12 },
        { venue: "jum", count1: 32, count2: 34 },
      ];

      chart.value = new Chart(document.getElementById('myChart'), {
        type: 'bar',
        data: {
          labels: data.map(item => item.venue),
          datasets: [{
            label: 'Count 1',
            data: data.map(item => item.count1),
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
          }, {
            label: 'Count 2',
            data: data.map(item => item.count2),
            backgroundColor: 'rgba(153, 102, 255, 0.2)',
            borderColor: 'rgba(153, 102, 255, 1)',
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    });

    return { chart };
  }
};
</script>
