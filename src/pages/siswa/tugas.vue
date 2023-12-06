<template>
  <div class="container">
    <!-- <NavbarSiswa/> -->
    <div class="row">
      <div class="col-md-12">
        <q-card class="text-center bg-blue-2" style="height: 87vh">

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
                        <th class="text-left">Tanggal</th>
                        <th class="text-right">Mata Pelajaran</th>
                        <th class="text-right">Topik</th>
                        <th class="text-right">Sifat</th>
                        <th class="text-right">Mulai</th>
                        <th class="text-right">selesai</th>
                        <th class="text-right">Status</th>
                        <th class="text-right">Feedforward</th>
                        <th class="text-right">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="text-left">20 sep 2023</td>
                        <td class="text-right">Matematika</td>
                        <td class="text-right">Trigonometri</td>
                        <td class="text-right">individu</td>
                        <td class="text-right">20 sep 2023</td>
                        <td class="text-right">21 sep 2023</td>
                        <td class="text-right">Berjalan</td>
                        <td class="text-right">-</td>
                        <td class="text-right">
                          <div>
                            <q-btn class="q-mx-sm" icon="download" color="blue"/>
                            <q-btn class="q-mx-sm" icon="upload" color="blue"/>

                            <q-dialog v-model="small">
                              <q-card style="width: 300px">
                                <q-card-section>
                                  <div class="text-h6 text-center">Upload Tugas</div>
                                </q-card-section>
                                <q-separator />
                                <br>
                                <q-card-section class="q-pt-none">
                                  <p>Mata pelajaran : <span> Matematika</span></p>
                                  <p>Topik : <span> Trigonometri</span></p>

                                  <q-separator />
                                  <br>
                                  <q-file color="teal" filled v-model="model" label="upload file">
                                    <template v-slot:prepend>
                                      <q-icon name="cloud_upload" />
                                    </template>
                                  </q-file>
                                </q-card-section>

                                <q-card-actions align="right" class="bg-white text-teal">
                                  <q-btn flat label="submit" v-close-popup />
                                </q-card-actions>
                              </q-card>
                            </q-dialog>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td class="text-left">20 sep 2023</td>
                        <td class="text-right">Matematika</td>
                        <td class="text-right">Trigonometri</td>
                        <td class="text-right">individu</td>
                        <td class="text-right">20 sep 2023</td>
                        <td class="text-right">21 sep 2023</td>
                        <td class="text-right">Berjalan</td>
                        <td class="text-right">-</td>
                        <td class="text-right">
                          <div>
                            <q-btn class="q-mx-sm" icon="download" color="blue"/>
                            <q-btn class="q-mx-sm" icon="upload" color="blue"/>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td class="text-left">20 sep 2023</td>
                        <td class="text-right">Matematika</td>
                        <td class="text-right">Trigonometri</td>
                        <td class="text-right">individu</td>
                        <td class="text-right">20 sep 2023</td>
                        <td class="text-right">21 sep 2023</td>
                        <td class="text-right">Berjalan</td>
                        <td class="text-right">-</td>
                        <td class="text-right">
                          <div>
                            <q-btn class="q-mx-sm" icon="download" color="blue"/>
                            <q-btn class="q-mx-sm" icon="upload" color="blue"/>
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
                        <th class="text-left">Tanggal</th>
                        <th class="text-right">Mata Pelajaran</th>
                        <th class="text-right">Topik</th>
                        <th class="text-right">Sifat</th>
                        <th class="text-right">Mulai</th>
                        <th class="text-right">selesai</th>
                        <th class="text-right">Status</th>
                        <th class="text-right">Nilai</th>
                        <th class="text-right">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="text-left">20 sep 2023</td>
                        <td class="text-right">Matematika</td>
                        <td class="text-right">Trigonometri</td>
                        <td class="text-right">individu</td>
                        <td class="text-right">20 sep 2023</td>
                        <td class="text-right">21 sep 2023</td>
                        <td class="text-right">Berjalan</td>
                        <td class="text-right">-</td>
                        <td class="text-right">
                          <div>
                            <q-btn label="Upload" color="green" @click="small = true" />
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td class="text-left">20 sep 2023</td>
                        <td class="text-right">Matematika</td>
                        <td class="text-right">Trigonometri</td>
                        <td class="text-right">individu</td>
                        <td class="text-right">20 sep 2023</td>
                        <td class="text-right">21 sep 2023</td>
                        <td class="text-right">Berjalan</td>
                        <td class="text-right">-</td>
                        <td class="text-right">
                          <div>
                            <q-btn label="Upload" color="green" @click="small = true" />

                            <q-dialog v-model="small">
                              <q-card style="width: 300px">
                                <q-card-section>
                                  <div class="text-h6 text-center">Upload Tugas</div>
                                </q-card-section>
                                <q-separator />
                                <br>
                                <q-card-section class="q-pt-none">
                                  <p>Mata pelajaran : <span> Matematika</span></p>
                                  <p>Topik : <span> Trigonometri</span></p>

                                  <q-separator />
                                  <br>
                                  <q-file color="teal" filled v-model="model" label="upload file">
                                    <template v-slot:prepend>
                                      <q-icon name="cloud_upload" />
                                    </template>
                                  </q-file>
                                </q-card-section>

                                <q-card-actions align="right" class="bg-white text-teal">
                                  <q-btn flat label="submit" v-close-popup />
                                </q-card-actions>
                              </q-card>
                            </q-dialog>
                          </div>
                        </td>
                      </tr>

                    </tbody>
                  </q-markup-table>
                </div>
              </q-card-section>
            </q-card>
          </q-card-section>

        </q-card>
      </div>
    </div>
  </div>
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
      model: ref(null)
    }
  },
 
}
</script>
