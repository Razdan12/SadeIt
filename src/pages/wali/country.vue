<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <q-card class="text-center bg-blue-2" style="height: 87vh">
          <q-card-section>
            <div class="text-center">
              <p>
                <span
                  class="text-center text-black text-bold"
                  style="font-size: x-large"
                  >ONE DAY FOR YOUR COUNTRY</span
                >
                <br />
              </p>
            </div>
          </q-card-section>
          <q-card-section>
            <q-card style="height: 700px">
              <q-card-section>
                <div class="row">
                  <div class="col-md-6">
                    <div class="q-pa-md">
                      <div class="text-h6 text-left">Filter</div>
                      <q-select
                        dense
                        outlined
                        v-model="selectedActivity"
                        :options="activityOptions"
                        label=""
                        style="width: 50%"
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="q-pa-md text-right text-bold">
                      <br /><br />
                      <span style="font-size: large">
                        Target : <br />
                        8 Jam Pertahun
                      </span>
                    </div>
                  </div>
                </div>
              </q-card-section>
              <q-card-section>
                <div class="q-pa-md">
                  <div
                    class="q-my-md text-left text-bold"
                    style="font-size: x-large"
                  >
                    Rekap
                  </div>
                  <q-markup-table separator="cell">
                    <thead>
                      <tr>
                        <th class="text-center" style="width: 10px">No</th>
                        <th class="text-center" style="width: 500px">
                          Aktivitas
                        </th>
                        <th class="text-center">Durasi</th>
                        <th class="text-center">Total Durasi</th>
                        <th class="text-center">Keterangan</th>
                        <th class="text-center" style="width: 100px"></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        v-for="(activity, index) in filteredActivities"
                        :key="index"
                      >
                        <td class="text-center">{{ index + 1 }}</td>
                        <td class="text-left">{{ activity.name }}</td>
                        <td class="text-right">{{ activity.duration }}</td>
                        <td class="text-right">{{ activity.totalDuration }}</td>
                        <td class="text-right">{{ activity.keterangan }}</td>
                        <td class="text-right">
                          <q-btn color="secondary" label="Sertifikat" />
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
import { ref, computed, watch } from "vue";

export default {
  setup() {
    const activities = ref([
      { id: 1, name: "Guru Tamu", duration: "2 jam", totalDuration: "2 jam" },
      {
        id: 2,
        name: "Perpustakaan",
        duration: "2 jam",
        totalDuration: "4 jam",
      },
      // Tambahkan aktivitas lain sesuai kebutuhan Anda
    ]);

    const selectedActivity = ref(null);
    const filteredActivities = ref(activities.value); // Inisialisasi filteredActivities dengan semua aktivitas

    // Fungsi untuk mendapatkan daftar unik dari aktivitas
    const getActivityOptions = computed(() => {
      const uniqueActivities = [
        ...new Set(activities.value.map((activity) => activity.name)),
      ];
      return uniqueActivities.map((activity) => ({
        label: activity,
        value: activity,
      }));
    });

    // Memperbarui filteredActivities ketika selectedActivity berubah
    watch(selectedActivity, (newValue, oldValue) => {
      if (!newValue) {
        filteredActivities.value = activities.value; // Kembalikan semua aktivitas jika tidak ada yang dipilih
      } else {
        filteredActivities.value = activities.value.filter(
          (activity) => activity.name === newValue.value
        );
      }
    });

    return {
      activityOptions: getActivityOptions,
      selectedActivity,
      filteredActivities,
    };
  },
};
</script>
