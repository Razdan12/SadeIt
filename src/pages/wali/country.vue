<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <q-card class="text-center bg-blue-2" style="height: 87vh">

          <q-card-section>
            <div class="text-center">
              <p>
                <span class="text-center text-black text-bold" style="font-size: x-large">ONE DAY FOR YOUR COUNTRY</span> <br>

              </p>
            </div>
          </q-card-section>
          <q-card-section>
            <q-card style="height: 700px;">
              <q-card-section>
                <div class="row">
                  <div class="col-md-6">
                    <div class="q-pa-md">
                      <div class="text-h6 text-left "> Filter
                      </div>
                      <q-select dense outlined v-model="model" :options="options" label="" style="width: 50%;" />

                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="q-pa-md text-right text-bold">
                      <br><br>
                      <span style="font-size: large;">
                        Target : <br> 8 Jam Pertahun
                      </span>
                    </div>
                  </div>
                </div>
              </q-card-section>
              <q-card-section>
                <div class="q-pa-md">
                  <div class="q-my-md text-left text-bold" style="font-size: x-large">Rekap </div>
                  <q-markup-table separator="cell">

                    <thead>
                      <tr>
                        <th class="text-center" style="width: 10px;">No</th>
                        <th class="text-center" style="width: 500px;">Aktivitas</th>
                        <th class="text-center">Durasi</th>
                        <th class="text-center">Total Durasi</th>
                        <th class="text-center" style="width: 100px;" ></th>
                      </tr>
                    </thead>
                    <tbody>

                      <tr>
                        <td class="text-center">1</td>
                        <td class="text-left">Guru Tamu</td>
                        <td class="text-right">2 jam</td>
                        <td class="text-right">2 jam</td>
                        <td class="text-right">
                          <q-btn color="secondary" label="Sertifikat" />
                        </td>
                      </tr>

                      <tr>
                        <td class="text-center">2</td>
                        <td class="text-left">Perpustakaan</td>
                        <td class="text-right">2 jam</td>
                        <td class="text-right">4 jam</td>
                        <td class="text-right">
                          <q-btn color="secondary" label="Sertifikat" />
                        </td>
                      </tr>

                    </tbody>
                  </q-markup-table> <br>

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



export default {
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

    }
  }
}
</script>
