<template>
  <div class="container">
    <!-- <NavbarSiswa /> -->
    <div class="row">
      <div class="col-md-12">
        <q-card class="text-center bg-blue-2" style="height: 87vh">
          <q-card-section>
            <div class="text-center">
              <p>
                <span
                  class="text-center text-black text-bold"
                  style="font-size: x-large"
                  >RAPORT SISWA</span
                >
              </p>
            </div>
            <div>
              <q-card>
                <q-tabs
                  v-model="tab"
                  dense
                  class="text-grey"
                  active-color="primary"
                  indicator-color="primary"
                  align="justify"
                >
                  <q-tab name="mails" label="Semester Ganjil" />
                  <q-tab name="alarms" label="Semester Genap" />
                </q-tabs>

                <q-separator />

                <q-tab-panels v-model="tab" animated>
                  <q-tab-panel name="mails" class="q-pa-none">
                    <Rapot />
                  </q-tab-panel>

                  <q-tab-panel name="alarms">
                    <Rapot />
                  </q-tab-panel>
                </q-tab-panels>
              </q-card>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import NavbarSiswa from "../../components/siswa/HederSiswa.vue";
import Rapot from "../../components/siswa/RaportSiswa.vue";

export default {
  components: {
    NavbarSiswa,
    Rapot,
  },

  setup() {
    return {
      tab: ref("mails"),
    };
  },
};
</script>
