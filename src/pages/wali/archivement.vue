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
                  >Achievement</span
                >
                <br />
              </p>
            </div>
          </q-card-section>
          <q-card-section>
            <q-card style="height: 700px">
              <q-card-section>
                <div class="q-pa-md">
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="text-bold" style="font-size: x-large">
                      <div class="text-left" style="font-size: x-large">
                        List
                      </div>
                      <div class="text-right text-bold" style="font-size: x-large">
                        <q-btn
                          dense
                          round
                          color="blue-2"
                          icon="add"
                          @click="showAddDialog = true"
                          style="margin-right: 10px; margin-bottom: 10px;"
                        />
                      </div>
                    </div>
                  </div>
                  <q-markup-table separator="cell">
                    <thead>
                      <tr>
                        <th class="text-center" style="width: 10px">No</th>
                        <th class="text-center" style="width: 500px">
                          Kegiatan
                        </th>
                        <th class="text-center">Tanggal</th>
                        <th class="text-center" style="width: 100px">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(activity, index) in filteredActivities" :key="index">
                        <td class="text-center">{{ index + 1 }}</td>
                        <td class="text-left">{{ activity.name }}</td>
                        <td class="text-right">{{ activity.tanggal }}</td>
                        <td class="text-right">
                          <q-btn
                            round
                            dense
                            color="blue-2"
                            icon="file_download"
                          />
                          <q-btn
                            dense
                            round
                            color="blue-2"
                            icon="file_upload"
                            class="tw-ml-2"
                            @click="fileUploadModalOpen = true"
                          />
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
    <!-- Dialog untuk menambahkan aktivitas -->
    <q-dialog v-model="showAddDialog" persistent>
      <q-card>
        <q-card-section>
          <q-input v-model="newActivityName" label="Kegiatan" />
          <q-input v-model="newActivityDate" label="Tanggal" type="date" />
          <q-uploader
            v-model="uploadedFiles"
            label="Unggah File"
            accept=".jpg, .png"
            color="blue-2"
            @added="fileAdded"
            @removed="fileRemoved"
          />
        </q-card-section>
        <q-card-actions align="right">
          <q-btn label="Cancel" color="secondary" @click="cancelAddActivity" />
          <q-btn label="Submit" color="primary" @click="submitNewActivity" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { ref, computed, watch } from "vue";

export default {
  setup() {
    const activities = ref([
      { id: 1, name: "Guru Tamu", tanggal: "22-02-2024" },
      {
        id: 2,
        name: "Perpustakaan",
        tanggal: "25-02-2024",
      },
      // Tambahkan aktivitas lain sesuai kebutuhan Anda
    ]);
    const uploadedFiles = ref([]);
    const selectedActivity = ref(null);
    const filteredActivities = ref(activities.value);
    const showAddDialog = ref(false); // variabel untuk mengontrol apakah dialog harus ditampilkan atau tidak
    const newActivityName = ref(""); // variabel untuk menyimpan nilai input kegiatan baru
    const newActivityDate = ref(""); // variabel untuk menyimpan nilai input tanggal baru
    const fileAdded = (file) => {
      uploadedFiles.value.push(file);
    };
    const fileRemoved = (file) => {
      const index = uploadedFiles.value.indexOf(file);
      if (index !== -1) {
        uploadedFiles.value.splice(index, 1);
      }
    };
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
        filteredActivities.value = activities.value;
      } else {
        filteredActivities.value = activities.value.filter(
          (activity) => activity.name === newValue.value
        );
      }
    });

    // Fungsi untuk menambahkan aktivitas baru
    const submitNewActivity = () => {
      // Lakukan logika untuk menyimpan aktivitas baru, misalnya, dengan menambahkannya ke array activities
      activities.value.push({
        id: activities.value.length + 1,
        name: newActivityName.value,
        tanggal: newActivityDate.value, 
      });
      console.log(uploadedFiles.value);
      // Tutup dialog setelah menambahkan aktivitas
      showAddDialog.value = false;
      // Kosongkan nilai input setelah menambahkan aktivitas
      newActivityName.value = "";
      newActivityDate.value = "";
    };

    // Fungsi untuk membatalkan penambahan aktivitas
    const cancelAddActivity = () => {
      // Tutup dialog tanpa menyimpan aktivitas
      showAddDialog.value = false;
      // Kosongkan nilai input setelah membatalkan
      newActivityName.value = "";
      newActivityDate.value = "";
    };

    return {
      activityOptions: getActivityOptions,
      selectedActivity,
      filteredActivities,
      showAddDialog,
      newActivityName,
      newActivityDate,
      submitNewActivity,
      cancelAddActivity,
      uploadedFiles,
      fileAdded,
      fileRemoved,
    };
  },
};
</script>
