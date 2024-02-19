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
                                    {{Math.round(rekapSampah[0]?.today)}}
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
                                    {{Math.round(rekapSampah[0]?.this_month)}}
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
                        <div class="text-center flex tw-flex-col tw-justify-center items-center">
                          <p class="text-bold" style="font-size: x-large">
                            Target dan Capaian
                          </p>
                          <p class="text-blue-4 text-bold" style="font-size: larger">
                            Capaian bulan lalu 15 Kg
                          </p>
                        
                         <p class="tw-mt-5 tw-text-xl tw-font-bold">Target</p>
                          <div id="chart" class="tw-w-full">
                            <apexchart type="radialBar" :options="chartOptions1" :series="series1"></apexchart>
                          </div>
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
                                    {{rekapMinggu[0]?.weight}}
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
                                    {{rekapMinggu[1]?.weight}}
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
                                    {{rekapMinggu[2]?.weight}}
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
                                    {{rekapMinggu[3]?.weight}}
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
                                    {{rekapMinggu[4]?.weight}}
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
                <div id="chart">
                  <apexchart type="bar" height="350" :options="chartOptions" :series="series"></apexchart>
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
import { ref } from "vue";
export default {
  name: 'chartBar',
  data() {
    return {
      series: [
        {
          name: 'senin',
          data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
        },
        {
          name: 'selasa',
          data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
        },
        {
          name: 'rabu',
          data: [35, 41, 36, 26, 45, 48, 52, 53, 24]
        },
        {
          name: 'kamis',
          data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
        },
        {
          name: 'Jumat',
          data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
        }
      ],
      chartOptions: {
        chart: {
          type: 'bar',
          height: 350
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '55%',
            endingShape: 'rounded'
          },
        },
        dataLabels: {
          enabled: true
        },
        stroke: {
          show: true,
          width: 1,
          colors: ['transparent']
        },
        xaxis: {
          categories: ['plastik', 'kertas', 'kantong', 'karung', 'daun', 'sampah 1', 'sampah 2', 'sampah 5', 'sampah 6'],
        },
        yaxis: {
          title: {
            text: 'g (gram)'
          }
        },
        fill: {
          opacity: 1
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return val + " Gram"
            }
          }
        }
      },

      series1: [90],
      chartOptions1: {
        chart: {
          type: 'radialBar',
          offsetY: -20,
          sparkline: {
            enabled: true
          }
        },
        plotOptions: {
          radialBar: {
            startAngle: -90,
            endAngle: 90,
            track: {
              background: "#e7e7e7",
              strokeWidth: '97%',
              margin: 5, // margin is in pixels
              dropShadow: {
                enabled: true,
                top: 2,
                left: 0,
                color: '#999',
                opacity: 1,
                blur: 2
              }
            },
            dataLabels: {
              name: {
                show: false
              },
              value: {
                offsetY: -2,
                fontSize: '22px'
              }
            }
          }
        },
        grid: {
          padding: {
            top: -10
          }
        },
        fill: {
          type: 'gradient',
          gradient: {
            shade: 'light',
            shadeIntensity: 0.4,
            inverseColors: false,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 50, 53, 91]
          },
        },
        labels: ['Average Results'],
      },

      token: ref(sessionStorage.getItem("token")),
      idSiswa: ref(sessionStorage.getItem("idSiswa")),
      rekapMinggu: ref([]),
      rekapSampah: ref([]),
    }

  },
  methods: {
    async getRekapSampah() {
     try {
      const response = await this.$api.get(`waste-collection/collection-week-by-student/${this.idSiswa}`, {
          headers: {
            'Authorization': `Bearer ${this.token}`
          }
        });

        this.rekapMinggu = response.data.data
     } catch (error) {
      
     }
    },
    
    async getRekapSampahbulan() {
     try {
      const response = await this.$api.get(`waste-collection/show-recap-history/${this.idSiswa}`, {
          headers: {
            'Authorization': `Bearer ${this.token}`
          }
        });
        console.log(response.data.data);
        this.rekapSampah = response.data.data
     } catch (error) {
      
     }
    },
  },
  mounted() {
   this.getRekapSampah()
   this.getRekapSampahbulan()
  },

}
</script>
