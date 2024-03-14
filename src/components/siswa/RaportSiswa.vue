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
          <NumberRaport :TabPilihan="TabPilihan" />
        </q-tab-panel>

        <q-tab-panel name="innerAlarms">
          <div>
            <q-tabs v-model="tab2" inline-label outside-arrows mobile-arrows class="bg-blue-5 text-white shadow-2">
              <q-tab name="page1" label="Tahsin" />
              <q-tab name="page2" label="akhlak & Perilaku" />
              <q-tab name="page3" label="kepemimpinan" />
              <q-tab name="page4" label="kemampuan berfikir" />
              <q-tab name="page5" label="islamika" />
              <q-tab name="page6" label="IPA" />
              <q-tab name="page7" label="MTK" />
              <q-tab name="page8" label="Bhs indo" />
              <q-tab name="page9" label="sosial" />
              <q-tab name="page10" label="sass" />
              <q-tab name="page11" label="karya seni" />
              <q-tab name="page12" label="english" />

            </q-tabs>
          </div>
          <q-space />
          <q-separator />

          <div class="text-h4 q-mb-md" style="margin-top: 20px;">Raport Narasi</div>
          <q-card>
            <q-tab-panels v-model="tab2" animated>
              <q-tab-panel name="page1">
                <Tahsin />
              </q-tab-panel>

              <q-tab-panel name="page2">
                <Akhlak />
              </q-tab-panel>

              <q-tab-panel name="page3">
                <Pemimpin sub="2" />
              </q-tab-panel>

              <q-tab-panel name="page4">
                <Pemimpin sub="3" />
              </q-tab-panel>

              <q-tab-panel name="page5">
                <Pemimpin sub="4" />
              </q-tab-panel>

              <q-tab-panel name="page6">
                <Pemimpin sub="5" />
              </q-tab-panel>

              <q-tab-panel name="page7">
                <Pemimpin sub="6" />
              </q-tab-panel>

              <q-tab-panel name="page8">
                <Pemimpin sub="7" />
              </q-tab-panel>
              <q-tab-panel name="page9">
                <Pemimpin sub="8" />
              </q-tab-panel>
              <q-tab-panel name="page10">
                <Pemimpin sub="9" />
              </q-tab-panel>
              <q-tab-panel name="page11">
                <Pemimpin sub="10" />
              </q-tab-panel>
              <q-tab-panel name="page12">
                <Pemimpin sub="11" />
              </q-tab-panel>
              <q-tab-panel name="page13">
                <Pemimpin sub="12" />
              </q-tab-panel>
            </q-tab-panels>

            <q-separator />


          </q-card>
        </q-tab-panel>

        <q-tab-panel name="innerMovies">
          <div>
            <q-tabs v-model="tab2" inline-label outside-arrows mobile-arrows class="bg-blue-5 text-white shadow-2">
              <q-tab name="page1" label="Akhlaq" />
              <q-tab name="page2" label="Pengendalian Diri" />
              <q-tab name="page3" label="Independent" />
              <q-tab name="page4" label="Profesional" />
              <q-tab name="page5" label="Berfikir Intelek" />
              <q-tab name="page6" label="MTK" />
              <q-tab name="page7" label="Bhs indo" />
              <q-tab name="page8" label="Sains" />
              <q-tab name="page9" label="Sosial" />
              <q-tab name="page10" label="Art" />
              <q-tab name="page11" label="english" />
              <q-tab name="page12" label="Komentar Umum" />

            </q-tabs>
          </div>
          <q-space />
          <q-separator />

          <q-card>
            <q-tab-panels v-model="tab2" animated>
              <q-tab-panel name="page1">
                <RapotPortofolio />
              </q-tab-panel>

              <q-tab-panel name="page2">
                <RapotPortofolio />
              </q-tab-panel>

              <q-tab-panel name="page3">
                <RapotPortofolio />
              </q-tab-panel>

              <q-tab-panel name="page4">
                <RapotPortofolio />
              </q-tab-panel>

              <q-tab-panel name="page5">
                <RapotPortofolio />
              </q-tab-panel>

              <q-tab-panel name="page6">
                <RapotPortofolio />
              </q-tab-panel>

              <q-tab-panel name="page7">
                <RapotPortofolio />
              </q-tab-panel>

              <q-tab-panel name="page8">
                <RapotPortofolio />
              </q-tab-panel>
              <q-tab-panel name="page9">
                <RapotPortofolio />
              </q-tab-panel>
              <q-tab-panel name="page10">
                <RapotPortofolio />
              </q-tab-panel>
              <q-tab-panel name="page11">
                <RapotPortofolio />
              </q-tab-panel>
              <q-tab-panel name="page12">
                <KomentarUmum />
              </q-tab-panel>

            </q-tab-panels>

            <q-separator />


          </q-card>
        </q-tab-panel>

        <q-tab-panel name="ortu">
          <div class="text-h4 q-mb-md">Komentar Orang Tua</div>
          <div class="tw-flex tw-w-full">
            <div class="tw-w-full tw-p-3 text-left tw-border-2 tw-rounded-md">
              <p>

              
              Alhamdulillahirobbil ‘alamiin Aisha telah melalui proses belajar jarak jauh selama 2,5 bulan dengan baik.
              Aisha adalah siswa yang senantiasa hadir tepat waktu dalam pertemuan belajar secara online.
              5 menit sebelum kelas dimulai biasanya aisha sudah hadir di lokasi. Maksimal keterlambatannya berkisar
              antara 3 hingga 5 menit dari jadwal yang telah ditetapkan. Saat pembelajaran daring berlangsung, Asiha ti
              dak perlu diingatkan untuk menyalakan videonya. Namun ia meminta izin kepada fasil untuk menonaktifkan microphone miliknya sebab seringkali kondisi di rumah cukup berisik dan banyak suara-
              suara yang dapat mengganggu kenyamanan proses belajar daring. Walaupun ia menonaktifkn microphoe,
                <br/>
                <br/>
              Aisha tetap dapat mengikuti pembelajaran daring dengan aktif.
              Jika ia diberi pertanyaan atau diminta menyampaikan pendapatnya, Aisha akan langsung menyalakan mic
              rophonenya dan menyampaikan jawaban atau tanggapannya secara lisan jika kondisi di rumah sedang ko
              ndusif/ tenang. Jika tidak, Aisha akan segera merespon via chat di Zoom. Jika Aisha merespon via chat di
              Zoom, biasanya responnya singkat dan to the point. Namun jika Aisha menjawab secara lisan,
              Aisha dapat menjelaskan dengan cukup detail dengan bahasanya sendiri.
              <br/>
                <br/>
              Aisha adalah siswa yang serius namun santai dalam belajar. Ia tidak ragu-
              ragu menyampaikan pertanyaan pada fasilitator jika ada hal yang tidak ia pahami atau jika ada hal yang p
              <br/>
                <br/>
              erlu ia klarifikasi. Jika ia memang sudah memahami pembelajaran yang dilakukan dan tidak ada yang ingin
              ditanyakan, maka Aisha tidak akan mengajukan pertanyaan.
              Pengerjaan tugas-tugas yang diberikan kepada Aisha cukup baik.
              Aisha mampu menyelesaikan 80% penugasan yang diberikan tepat waktu. Sementara 20% tugas lainnya d
              ikumpulkan terlambat dari batas waktu yang diberikan. Kisaran keterlambatannya antara 1 hingga 8 hari.
              Semoga di tema 2 dan selanjutnya Aisha bisa mengelola waktu penyelesaian tugas dengan lebih baik.
              Jika meninjau rutinitas harian Aisha, ada 4 aktivitas yang masih belum rutin dilakukan oleh Aisha setiap
              ha
              ri, yaitu olahraga ringan, dzikir al ma’tsurat, tahsin dan tahfidz. Untuk olahraga ringan, melihat hobi
              dan k
              esukaannya adalah mendengarkan musik, menyanyi dan menari,
              Aisha bisa menggunakan video dance yang diiringi musik sebagai aktivitas olahraganya di rumah agar tera
              sa menyenangkan. Untuk dzikir al ma’tsurat, tahsin dan tahfidz, mohon bantuan Ayah dan Bunda untuk bi
              sa mengingatkan ananda setiap harinya.
            </p>
            </div>
          </div>
          <div class="tw-flex tw-w-full justify-end tw-p-5">
            <!-- <q-btn color="secondary" label="Simpan" /> -->
          </div>
        </q-tab-panel>
      </q-tab-panels>
    </template>

  </q-splitter>
</template>

<script>
import { ref } from 'vue'
import Tahsin from "./raport/narasiTahsin.vue";
import Akhlak from "./raport/narasiAkhlak.vue";
import Pemimpin from "./raport/narasiPemimpin.vue";
import Berfikir from "./raport/narasiBerfikir.vue";
import NumberRaport from "./raport/numberRaport.vue"
import KomentarUmum from "./raport/portoKomentar.vue"
import RapotPortofolio from "./raport/rapotPortofolio.vue"

export default {
  name: 'Rapot',
  props: {
    TabPilihan: {
      type: String,
      required: true
    }
  },
  components: {
    Tahsin,
    Akhlak,
    Pemimpin,
    Berfikir,
    NumberRaport,
    KomentarUmum,
    RapotPortofolio
  },

  setup(props) {
    return {
      tab: ref('mails'),
      tab2: ref('page1'),
      innerTab: ref('innerMails'),
      shape: ref('line'),
      splitterModel: ref(20),
      editor: ref('Sangat Baik !'),
      TabPilihan: props.TabPilihan
    }
  },

}
</script>
