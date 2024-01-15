<template>
  <q-splitter v-model="splitterModel" style="height: 75vh">

    <template v-slot:before>
      <q-tabs v-model="innerTab" vertical class="text-teal">
        <q-tab name="innerMails" icon="filter_9_plus" label="Angka" />
        <q-tab name="innerAlarms" icon="history_edu" label="Narasi" />
        <q-tab name="innerMovies" icon="text_snippet" label="Portofolio" />
        <q-tab name="ortu" icon="people" label="Komentar Orang tua" />
      </q-tabs>
    </template>

    <template v-slot:after>
      <q-tab-panels v-model="innerTab" animated transition-prev="slide-down" transition-next="slide-up">
        <q-tab-panel name="innerMails">
          <div class="text-h4 q-mb-md">Raport Angka</div>
          <div>
            <q-markup-table class="text-bold" separator="cell" bordered="">
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
                <tr>
                  <td class="text-left" style="width: 10px;">1</td>
                  <td class="text-left">Pendidikan Agama</td>
                  <td class="text-center">7.50</td>
                  <td class="text-center">9.00</td>
                  <td class="text-left">Sembilan koma nol nol</td>
                </tr>

                <tr>
                  <td class="text-left" style="width: 10px;">2</td>
                  <td class="text-left">Pendidikan Kewarganegaraan</td>
                  <td class="text-center">7.50</td>
                  <td class="text-center">8.66</td>
                  <td class="text-left">Delapan koma enam enam</td>
                </tr>

                <tr>
                  <td class="text-left" style="width: 10px;">3</td>
                  <td class="text-left">Bahasa Indonesia</td>
                  <td class="text-center">7.50</td>
                  <td class="text-center">8.66</td>
                  <td class="text-left">Delapan koma enam enam</td>
                </tr>

                <tr>
                  <td class="text-left" style="width: 10px;">4</td>
                  <td class="text-left">Matematika</td>
                  <td class="text-center">7.50</td>
                  <td class="text-center">8.66</td>
                  <td class="text-left">Delapan koma enam enam</td>
                </tr>

                <tr>
                  <td class="text-left" style="width: 10px;">5</td>
                  <td class="text-left">Ilmu Pengetahuan Alam</td>
                  <td class="text-center">7.50</td>
                  <td class="text-center">8.66</td>
                  <td class="text-left">Delapan koma enam enam</td>
                </tr>

                <tr>
                  <td class="text-left" style="width: 10px;">6</td>
                  <td class="text-left">Ilmu Pengetahuan Sosial</td>
                  <td class="text-center">7.50</td>
                  <td class="text-center">8.66</td>
                  <td class="text-left">Delapan koma enam enam</td>
                </tr>

                <tr>
                  <td class="text-left" style="width: 10px;">7</td>
                  <td class="text-left">Seni Budaya dan Keterampilan</td>
                  <td class="text-center">7.50</td>
                  <td class="text-center">8.66</td>
                  <td class="text-left">Delapan koma enam enam</td>
                </tr>

                <tr>
                  <td class="text-left" style="width: 10px;">8</td>
                  <td class="text-left">Pendidikan Jasmani, Olahraga dan Kesehatan</td>
                  <td class="text-center">7.50</td>
                  <td class="text-center">8.66</td>
                  <td class="text-left">Delapan koma enam enam</td>
                </tr>

                <tr>
                  <td class="text-left" style="width: 10px;">9</td>
                  <td class="text-left">Bahasa Inggris</td>
                  <td class="text-center">7.50</td>
                  <td class="text-center">8.66</td>
                  <td class="text-left">Delapan koma enam enam</td>
                </tr>

              </tbody>
            </q-markup-table>
          </div>
          <br>
          <q-separator />
          <br>
          <div>
            <q-markup-table class="text-bold" separator="cell" bordered="">
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
                  <td class="text-center">A</td>
                  <td class="text-left">Izin</td>
                  <td class="text-left">-</td>
                </tr>

                <tr>
                  <td class="text-left" style="width: 10px;">1</td>
                  <td class="text-left">Kerajinan</td>
                  <td class="text-center">A</td>
                  <td class="text-left">Sakit</td>
                  <td class="text-left">-</td>
                </tr>

                <tr>
                  <td class="text-left" style="width: 10px;">1</td>
                  <td class="text-left">Kebersihan dan Kerapihan</td>
                  <td class="text-center">A</td>
                  <td class="text-left">Tanpa Keterangan</td>
                  <td class="text-left">-</td>
                </tr>





              </tbody>
            </q-markup-table>
          </div>
        </q-tab-panel>

        <q-tab-panel name="innerAlarms">
          <div class="text-h4 q-mb-md">Raport Narasi</div>
          <q-card>
            <q-tab-panels v-model="tab2" animated>
              <q-tab-panel name="page1">
                <div class="text-h4 text-bold text-left">Tahsin</div>
                <div class="text-h6 text-bold text-left">Kualitas Tilawah</div>
                <div>
                  <q-markup-table flat bordered style="height: 50vh;" h-scroll>
                    <thead>
                      <tr>
                        <th colspan="5" class="bg-teal">
                          <div class="row no-wrap items-center">
                            <div class="text-h4 q-ml-md text-white">Al Qur’an</div>
                          </div>
                        </th>
                      </tr>
                      <tr>
                        <th class="text-left"></th>
                        <th class="text-center text-bold " style="width: 20px; font-size: medium;">
                          Jayyid</th>
                        <th class="text-center" style="width: 20px; font-size: medium;">Jayyid <br>
                          Jiddan</th>
                        <th class="text-center" style="width: 20px ; font-size: medium;">Mumtâz</th>

                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="text-left">Siswa mampu melafadzkan ta’awudz dan basmallah dengan
                          intonasi nada yang dicontohkan pembimbing</td>
                        <td class="text-center"><q-radio left-label v-model="shape" val="line1" /></td>
                        <td class="text-center"><q-radio left-label v-model="shape" val="line2" /></td>
                        <td class="text-center"><q-radio left-label v-model="shape" val="line" /></td>
                      </tr>
                      <tr>
                        <td class="text-left"> Mampu mengucapkan huruf hijaiyah sesuai dengan makhrojnya
                        </td>
                        <td class="text-center"><q-radio left-label v-model="shape" val="line1" /></td>
                        <td class="text-center"><q-radio left-label v-model="shape" val="line2" /></td>
                        <td class="text-center"><q-radio left-label v-model="shape" val="line" /></td>
                      </tr>
                      <tr>
                        <td class="text-left">Siswa mampu membedakan pengucapan huruf hijaiyah yang satu
                          makhroj</td>
                        <td class="text-center"><q-radio left-label v-model="shape" val="line1" /></td>
                        <td class="text-center"><q-radio left-label v-model="shape" val="line2" /></td>
                        <td class="text-center"><q-radio left-label v-model="shape" val="line" /></td>
                      </tr>
                      <tr>
                        <td class="text-left">Siswa mengetahui perbedaan bacaan pendek dan panjang</td>
                        <td class="text-center"><q-radio left-label v-model="shape" val="line1" /></td>
                        <td class="text-center"><q-radio left-label v-model="shape" val="line2" /></td>
                        <td class="text-center"><q-radio left-label v-model="shape" val="line" /></td>
                      </tr>
                      <tr>
                        <td class="text-left"> Siswa mampu membaca huruf idghom dengan dua ketukan dan
                          didengungkan
                        </td>
                        <td class="text-center"><q-radio left-label v-model="shape" val="line1" /></td>
                        <td class="text-center"><q-radio left-label v-model="shape" val="line2" /></td>
                        <td class="text-center"><q-radio left-label v-model="shape" val="line" /></td>
                      </tr>
                      <tr>
                        <td class="text-left">Siswa mampu membaca dengan jelas setiap huruf idzhar
                          syafawi</td>
                        <td class="text-center"><q-radio left-label v-model="shape" val="line1" /></td>
                        <td class="text-center"><q-radio left-label v-model="shape" val="line2" /></td>
                        <td class="text-center"><q-radio left-label v-model="shape" val="line" /></td>
                      </tr>
                      <tr>
                        <td class="text-left">Siswa mampu membaca huruf yang diwaqafkan di akhir ayat
                        </td>
                        <td class="text-center"><q-radio left-label v-model="shape" val="line1" /></td>
                        <td class="text-center"><q-radio left-label v-model="shape" val="line2" /></td>
                        <td class="text-center"><q-radio left-label v-model="shape" val="line" /></td>
                      </tr>
                      <tr>
                        <td class="text-left"> Mampu membedakan bacaan mad wajib dan mad jaiz
                        </td>
                        <td class="text-center"><q-radio left-label v-model="shape" val="line1" /></td>
                        <td class="text-center"><q-radio left-label v-model="shape" val="line2" /></td>
                        <td class="text-center"><q-radio left-label v-model="shape" val="line" /></td>
                      </tr>
                      <tr>
                        <td class="text-left">Siswa mampu memanjangkan bacaaan mad wajib muttasshil dan
                          mad jaiz munfashil</td>
                        <td class="text-center"><q-radio left-label v-model="shape" val="line1" /></td>
                        <td class="text-center"><q-radio left-label v-model="shape" val="line2" /></td>
                        <td class="text-center"><q-radio left-label v-model="shape" val="line" /></td>
                      </tr>
                      <tr>
                        <td class="text-left">Siswa mampu membaca huruf huruf fawatihussuwar</td>
                        <td class="text-center"><q-radio left-label v-model="shape" val="line1" /></td>
                        <td class="text-center"><q-radio left-label v-model="shape" val="line2" /></td>
                        <td class="text-center"><q-radio left-label v-model="shape" val="line" /></td>
                      </tr>
                      <tr>
                        <td class="text-left">Siswa mampu membaca panjang pendek bacaan huruf huruf
                          fawatihussuwar</td>
                        <td class="text-center"><q-radio left-label v-model="shape" val="line1" /></td>
                        <td class="text-center"><q-radio left-label v-model="shape" val="line2" /></td>
                        <td class="text-center"><q-radio left-label v-model="shape" val="line" /></td>
                      </tr>
                      <tr>
                        <td class="text-left">Mampu membaca Alquran dengan tulisan Rasm Ustmani</td>
                        <td class="text-center"><q-radio left-label v-model="shape" val="line1" /></td>
                        <td class="text-center"><q-radio left-label v-model="shape" val="line2" /></td>
                        <td class="text-center"><q-radio left-label v-model="shape" val="line" /></td>
                      </tr>
                      <tr>
                        <td class="text-left">Siswa mengerti tanda waqof rosm Utsmani</td>
                        <td class="text-center"><q-radio left-label v-model="shape" val="line1" /></td>
                        <td class="text-center"><q-radio left-label v-model="shape" val="line2" /></td>
                        <td class="text-center"><q-radio left-label v-model="shape" val="line" /></td>
                      </tr>
                    </tbody>
                  </q-markup-table>
                  <br>
                  <q-separator />
                  <br>

                  <div class="text-h6 text-bold text-left">Komentar pembimbing:</div>

                  <div>
                    <q-card>
                      <q-card-section>
                        <div class="text-h6 text-bold text-italic	text-left">Komentar Tahsin :</div>
                        <P class="text-left">
                          Aisha mampu membaca Al Qur’an dengan lancar. Masih sama seperti semester sebelumnya, yang
                          perlu dilatih adalah melatih nafas saat membaca qur’an agar dapat membaca satu ayat tanpa
                          berhenti di tengah-tengah ayat. Kalau perlu berhenti, Aisha perlu berlatih untuk berhenti di
                          tanda
                          waqaf. Tanda 15 jenis tanda waqaf yang perlu dikenali lebih dalam agar dapat digunakan dengan
                          tepat saat membaca Al Qur’an <br><br>
                          Kuantitas Qira’ah tahsin : <br>
                          Al Qur’an : Al Maidah <br>
                          Ayat : 95
                        </P>
                        <br>
                        <q-separator />
                        <br>
                        <div class="text-h6 text-bold text-italic	text-left">Komentar Tahfidz:</div>
                        <P class="text-left">
                          Aisha mampu menghapalkan ayat-ayat Al Qur’an secara mandiri. Panjang pendeknya sudah tepat,
                          begitu pula dengan makhroj hurufnya. Setiap pertemuan tahfidz sepekan sekali, Aisha mampu
                          menambah hapalan ayat sebanyak 3-4 ayat. Alangkah baik jika Aisha bisa menambah hapalan 1-2
                          ayat per hari di rumah. Hal ini juga bertujuan agar aktivitas menambah hapalan qur’an menjadi
                          rutinitas harian Aisha. Tidak apa menambah hapalan ayat dalam jumlah kecil, namun dilakukan
                          rutin
                          setiap hari <br><br>
                          Kuantitas Tilawah <br>
                          Tahfidz : Al Ma’arij <br>
                          Ayat : 34
                        </P>
                        <br>
                        <q-separator />
                        <br>
                        <div class="text-h6 text-bold text-italic	text-left">Rekomendasi :</div>
                        <P class="text-left">
                          Merutinkan membaca Al Qur’an di rumah sebanyak 1 halam setiap hari. Saat tilawah, latihan untuk
                          dapat membaca tanpa berhenti di tengah-tengah ayat. Merutinkan murojaah hapalan surat setiap
                          hari minimal selama 10-15 menit. Menambah hapalan ayat sebanyak 1-2 ayat per hari. Semangat ya,
                          Aisha ^_^
                        </P>

                      </q-card-section>
                    </q-card>
                  </div>
                </div>
              </q-tab-panel>

              <q-tab-panel name="page2">
                <div class="text-h6">page2</div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </q-tab-panel>

              <q-tab-panel name="page3">
                <div class="text-h6">page3</div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </q-tab-panel>

              <q-tab-panel name="page4">
                <div class="text-h6">page3</div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </q-tab-panel>

              <q-tab-panel name="page5">
                <div class="text-h6">page3</div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </q-tab-panel>

              <q-tab-panel name="page6">
                <div class="text-h6">page3</div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </q-tab-panel>

              <q-tab-panel name="page7">
                <div class="text-h6">page3</div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </q-tab-panel>

              <q-tab-panel name="page8">
                <div class="text-h6">page3</div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </q-tab-panel>
            </q-tab-panels>

            <q-separator />

            <q-tabs v-model="tab2" dense :class="$q.dark.isActive ? 'bg-grey-9' : 'bg-grey-3'" align="justify"
              narrow-indicator>
              <q-tab name="page1" label="1" />
              <q-tab name="page2" label="2" />
              <q-tab name="page3" label="3" />
              <q-tab name="page4" label="4" />
              <q-tab name="page5" label="5" />
              <q-tab name="page6" label="6" />
              <q-tab name="page7" label="7" />
              <q-tab name="page8" label="8" />
              <q-tab name="page9" label="9" />
              <q-tab name="page10" label="10" />
              <q-tab name="page11" label="11" />
              <q-tab name="page12" label="12" />
              <q-tab name="page13" label="13" />
              <q-tab name="page14" label="14" />
              <q-tab name="page15" label="15" />
              <q-tab name="page16" label="16" />
              <q-tab name="page17" label="17" />
            </q-tabs>
          </q-card>
        </q-tab-panel>

        <q-tab-panel name="innerMovies">
          <div class="text-h4 q-mb-md">Raport Portofolio</div>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam
            odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur
            culpa fuga nulla ullam. In, libero.</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam
            odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur
            culpa fuga nulla ullam. In, libero.</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam
            odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur
            culpa fuga nulla ullam. In, libero.</p>
        </q-tab-panel>
        
        <q-tab-panel name="ortu">
          <div class="text-h4 q-mb-md">Komentar Orang Tua</div>
          <div class="tw-flex tw-w-full">
            <q-editor v-model="editor" min-height="10rem" class=" tw-w-full text-left"/>
          </div>
          <div class="tw-flex tw-w-full justify-end tw-p-5">
            <q-btn color="secondary" label="Simpan" />
          </div>
        </q-tab-panel>
      </q-tab-panels>
    </template>

  </q-splitter>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'Rapot',

  setup() {
    return {
      tab: ref('mails'),
      tab2: ref('page1'),
      innerTab: ref('innerMails'),
      shape: ref('line'),
      splitterModel: ref(20),
      editor: ref('Sangat Baik !')
    }
  },



}
</script>