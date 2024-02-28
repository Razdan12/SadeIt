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
         <NumberRaport/>
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
                <q-tab name="page13" label="perkusi" />
                <q-tab name="page14" label="silat" />
                <q-tab name="page15" label="tari" />
                <q-tab name="page16" label="futsal" />

              </q-tabs>
          </div>
            <q-space />
            <q-separator />

          <div class="text-h4 q-mb-md" style="margin-top: 20px;">Raport Narasi</div>
          <q-card>
            <q-tab-panels v-model="tab2" animated>
              <q-tab-panel name="page1">
                <Tahsin/>
              </q-tab-panel>

              <q-tab-panel name="page2">
               <Akhlak/>
              </q-tab-panel>

              <q-tab-panel name="page3">
                <Pemimpin/>
              </q-tab-panel>

              <q-tab-panel name="page4">
                <Berfikir/>
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
            <q-editor v-model="editor" min-height="10rem" class=" tw-w-full text-left" />
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
import Tahsin from "./raport/narasiTahsin.vue";
import Akhlak from "./raport/narasiAkhlak.vue";
import Pemimpin from "./raport/narasiPemimpin.vue";
import Berfikir from "./raport/narasiBerfikir.vue";
import NumberRaport from "./raport/numberRaport.vue"

export default {
  name: 'Rapot',
  components: {
   Tahsin,
   Akhlak,
   Pemimpin,
   Berfikir,
   NumberRaport
  },

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
