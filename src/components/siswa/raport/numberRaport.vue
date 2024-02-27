<template>
    <div class="text-h4 q-mb-md">Raport Angka</div>
    <div>
        <q-markup-table class="" separator="cell" bordered="">
            <thead>
                <tr>
                    <th rowspan="2" class="text-center">No</th>
                    <th rowspan="2" class="text-center">Nama Pelajaran</th>
                    <th rowspan="2" class="text-center">Kriteria <br>
                        Ketuntasan <br>
                        Minimal</th>
                    <th colspan="2" class="text-center">Nilai</th>
                </tr>
                <tr>
                    <th class="text-center">Angka</th>
                    <th class="text-center">Huruf</th>
                </tr>

            </thead>
            <tbody>
                <tr v-for="(item, index) in dataRaport" :key="item.id">
                    <td class="text-left" style="width: 10px;">{{ index + 1 }}</td>
                    <td class="text-left">{{ item?.subject.name }}</td>
                    <td class="text-center">7.50</td>
                    <td class="text-center">{{ item?.grade }}</td>
                    <td class="text-left">{{ item?.grade_text }}</td>
                </tr>


            </tbody>
        </q-markup-table>
    </div>
    <br>
    <q-separator />
    <br>
    <div>
        <q-markup-table class="" separator="cell" bordered="">
            <thead>
                <tr>
                    <th class="text-center">No</th>
                    <th class="text-center">Kepribadian</th>
                    <th class="text-center">Nilai <br></th>
                    <th class="text-center">Ketidak Hadiran</th>
                    <th class="text-center">Hari</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="text-left" style="width: 10px;">1</td>
                    <td class="text-left">Sikap</td>
                    <td class="text-center">-</td>
                    <td class="text-left">Izin</td>
                    <td class="text-left">-</td>
                </tr>

                <tr>
                    <td class="text-left" style="width: 10px;">2</td>
                    <td class="text-left">Kerajinan</td>
                    <td class="text-center">-</td>
                    <td class="text-left">Sakit</td>
                    <td class="text-left">-</td>
                </tr>

                <tr>
                    <td class="text-left" style="width: 10px;">3</td>
                    <td class="text-left">Kebersihan dan Kerapihan</td>
                    <td class="text-center">-</td>
                    <td class="text-left">Tanpa Keterangan</td>
                    <td class="text-left">-</td>
                </tr>
            </tbody>
        </q-markup-table>
    </div>
    <P>

    </P>
</template>

<script>
import { ref } from 'vue'

export default {
    name: 'NumberRapot',

    setup() {
        return {
            shape: ref('line'),
            idSiswa: ref(sessionStorage.getItem("idSiswa")),
            token: ref(sessionStorage.getItem("token")),
            dataRaport: ref()
        }
    },
    methods: {

    async getRaport() {
      try {
        const response = await this.$api.get(`number-report/show-by-student/${this.idSiswa}`, {
          headers: {
            'Authorization': `Bearer ${this.token}`
          }
        });
        this.dataRaport = response.data.data

      } catch (error) {
        console.log(error);
      }
    },

  },
  mounted() {
    this.getRaport()
  },
}
</script>
