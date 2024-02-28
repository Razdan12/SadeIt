<template>
  <div class="container">
    <!-- <NavbarSiswa /> -->
    <div class="row">
      <div class="col">
        <div class="text-center bg-blue-2 tw-min-h-screen">
          <q-card-section>
            <div class="text-center tw-mb-10">
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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { ref, onMounted, getCurrentInstance, watch } from "vue";
import NavbarSiswa from "../../components/siswa/HederSiswa.vue";
import Rapot from "../../components/siswa/RaportSiswa.vue";

export default {
  components: {
    NavbarSiswa,
    Rapot,
  },

   setup() {
    const nilai = ref([])
    const getJadwalKegiatan = async () => {
      const idSiswa = sessionStorage.getItem("idSiswa")
      const token = sessionStorage.getItem("token");
      try {
        const response = await axios.get(`https://api-dev.curaweda.com:7000/api/number-report/show-by-student/${idSiswa}`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        nilai.value = response.data.data
        // rekapSampah.value = response.data.data
      } catch (error) {
        console.log(error);
      }
    }

    onMounted(() => {
      getJadwalKegiatan();
    });
    return {
      tab: ref("mails"),
      getJadwalKegiatan
    };
  },
};
</script>
