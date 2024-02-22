<template>
  <div class="container">
    <!-- <NavbarSiswa/> -->
    <div class="row ">
      <div class="col">
        <div class="text-center bg-blue-2 tw-max-w-1/2 tw-min-h-screen">

          <q-card-section>
            <div class="text-center">
              <p>
                <span class="text-center text-black text-bold" style="font-size: x-large">TUGAS SISWA</span>
              </p>
            </div>
          </q-card-section>

          <q-card-section>
            <q-card>
              <q-card-section>
                <div>
                  <div class="test-center text-h6"> Work With Parents</div>
                  <br>
                  <q-markup-table style="height: 28vh;" h-scroll>
                    <thead>
                      <tr>
                        <th class="text-center">Tanggal</th>
                        <th class="text-center">Mata Pelajaran</th>
                        <th class="text-center">Topik</th>
                        <th class="text-center">Sifat</th>
                        <th class="text-center">Mulai</th>
                        <th class="text-center">selesai</th>
                        <th class="text-center">Status</th>
                        <th class="text-center">Feedforward</th>
                        <th class="text-center">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(item, index) in task" :key="item.id">
                        <td class="text-center">{{ getDateTime(item?.createdAt) }}</td>
                        <td class="text-center">{{ item?.subject.name }}</td>
                        <td class="text-center">{{ item?.topic }}</td>
                        <td class="text-center">{{ item?.characteristic }}</td>
                        <td class="text-center">{{ getDateTime(item?.start_date) }}</td>
                        <td class="text-center">{{ getDateTime(item?.end_date) }}</td>
                        <td class="text-center">{{ item?.status }}</td>
                        <td class="text-center">-</td>
                        <td class="text-center">
                          <div>
                            <q-btn class="q-mx-sm" icon="download" color="green" />
                            <q-btn class="q-mx-sm" icon="upload" color="blue" @click="getTaskId(item.id)" />
                          </div>
                        </td>
                      </tr>

                    </tbody>
                  </q-markup-table>
                </div>
              </q-card-section>
              <br>
              <q-separator color="blue" inset />
              <q-card-section>
                <div>
                  <div class="test-center text-h6"> Project Kelompok</div>
                  <br>
                  <q-markup-table style="height: 28vh;" h-scroll>
                    <thead>
                      <tr>
                        <th class="text-center">Tanggal</th>
                        <th class="text-center">Mata Pelajaran</th>
                        <th class="text-center">Topik</th>
                        <th class="text-center">Sifat</th>
                        <th class="text-center">Mulai</th>
                        <th class="text-center">selesai</th>
                        <th class="text-center">Status</th>
                        <th class="text-center">Nilai</th>
                        <th class="text-center">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(item, index) in task2" :key="item.id">
                        <td class="text-center">{{ getDateTime(item?.createdAt) }}</td>
                        <td class="text-center">{{ item?.subject.name }}</td>
                        <td class="text-center">{{ item?.topic }}</td>
                        <td class="text-center">{{ item?.characteristic }}</td>
                        <td class="text-center">{{ getDateTime(item?.start_date) }}</td>
                        <td class="text-center">{{ getDateTime(item?.end_date) }}</td>
                        <td class="text-center">{{ item?.status }}</td>
                        <td class="text-center">-</td>
                        <td class="text-center">
                          <div>
                            <q-btn class="q-mx-sm" icon="upload" color="blue" @click="getTaskId(item.id)" />
                          </div>
                        </td>
                      </tr>

                    </tbody>
                  </q-markup-table>
                </div>
              </q-card-section>
            </q-card>
          </q-card-section>

        </div>
      </div>
    </div>
  </div>
  <q-dialog v-model="small">
    <q-card style="width: 700px; max-width: 80vw;">
      <q-card-section>
        <div class="text-h6 text-center">Upload Tugas</div>
      </q-card-section>
    
      <br>
      <q-card-section class="q-pt-none">
        <q-markup-table flat>
          <tbody>
            <tr>
              <td class="text-left text-bold">Mata Pelajaran</td>
              <td class="text-left">: {{ dataTask?.subject.name }}</td>
            </tr>
            <tr>
              <td class="text-left text-bold">Topik</td>
              <td class="text-left">: {{ dataTask?.topic }}</td>
            </tr>
            <tr>
              <td class="text-left text-bold">Tanggal Mulai</td>
              <td class="text-left">: {{ getDateTime(dataTask?.start_date) }}</td>
            </tr>
            <tr>
              <td class="text-left text-bold">Tanggal Selesai</td>
              <td class="text-left">: {{ getDateTime(dataTask?.end_date) }} | {{ getTimeDeadline(dataTask?.end_date) }}</td>
            </tr>

          </tbody>
        </q-markup-table>

        <br>
        <q-uploader color="teal" flat bordered style="width: 100%;" />
      </q-card-section>

      <q-card-actions align="right" class="bg-white text-teal">
        <q-btn flat label="close" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
import { ref } from 'vue'
import NavbarSiswa from '../../components/siswa/HederSiswa.vue'


export default {

  components: {
    NavbarSiswa
  },
  setup() {
    return {
      tab: ref('mails'),
      innerTab: ref('innerMails'),
      small: ref(false),
      medium: ref(false),
      splitterModel: ref(20),
      shape: ref(),
      shape2: ref(),
      model: ref(null),
      token: ref(sessionStorage.getItem("token")),
      idSiswa: ref(sessionStorage.getItem("idSiswa")),
      task: ref(),
      task2: ref(),
      idTask: ref(''),
      dataTask: ref(),
    }
  },
  methods: {
    getDateTime(date) {
      const now = new Date(date);
      const formattedDate = now.toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });
      return formattedDate
    },

    getTimeDeadline(date) {

      const durasi = new Date(new Date(date) - new Date());
      const hari = durasi.getUTCDate() - 1; 
      const jam = durasi.getUTCHours();
      const menit = durasi.getUTCMinutes();

      return (`${hari} hari, ${jam} jam, ${menit} menit`);
    },
    async getDataTugas() {
      try {
        const taskParent = await this.$api.get(`student-task/show-by-student/${this.idSiswa}?cat=Work With Parents`, {
          headers: {
            'Authorization': `Bearer ${this.token}`
          }
        });
        const taskKelompok = await this.$api.get(`student-task/show-by-student/${this.idSiswa}?cat=Project Kelompok`, {
          headers: {
            'Authorization': `Bearer ${this.token}`
          }
        });
     
        this.task = taskParent.data.data
        this.task2 = taskKelompok.data.data

      } catch (error) {
        console.log(error);
      }
    },
    async getTaskById(id) {
      try {
        const response = await this.$api.get(`student-task/show/${id}`, {
          headers: {
            'Authorization': `Bearer ${this.token}`
          }
        });
        console.log(response);
        this.dataTask = response.data.data[0]
      } catch (error) {
        console.log(error);
      }
    },

    getTaskId(id) {
      this.idTask = id
      this.getTaskById(id)
      this.small = true

    }
  },

  mounted() {
    this.getDataTugas()

  },

}
</script>
