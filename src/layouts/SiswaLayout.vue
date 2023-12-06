<template>
  <q-layout view="lHh lpR fFf">
    <q-drawer v-model="drawer" show-if-above :width="350" :breakpoint="500" bordered>
      <!-- drawer content -->
      <br />
      <div class="row">
        <div class="col-md-5">
          <q-avatar class="q-pl-md" size="80px">
            <img src="../assets/sarrah.png" />
          </q-avatar>
        </div>
        <div class="col-md-7">
          <div class="text-bold text-left">
            <p>Sarrah Aditya Nareswari <br />120002312 <br />Kelas 3 D</p>
          </div>
        </div>
      </div>
      <br />
      <q-separator />
      <br /><br />
      <q-list padding class="menu-list">
        <q-item class="text-blue-4" clickable v-ripple to="/siswa">
          <q-item-section avatar>
            <q-icon name="dashboard" style="font-size: 2rem" />
          </q-item-section>

          <q-item-section class="text-bold" style="font-size: 1rem">
            Dashboard
          </q-item-section>
        </q-item>

        <q-item to="/siswa/bsampah" class="text-blue-4" active-class="text-orange" clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="recycling" style="font-size: 2rem" />
          </q-item-section>

          <q-item-section class="text-bold" style="font-size: 1rem">
            Bank Sampah
          </q-item-section>
        </q-item>

        <q-item to="/siswa/kkegiatan" class="text-blue-4" active-class="text-orange" clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="event_available" style="font-size: 2rem" />
          </q-item-section>

          <q-item-section class="text-bold" style="font-size: 1rem">
            Kalender Kegiatan Semester
          </q-item-section>
        </q-item>

        <q-item to="/siswa/jkegiatan" class="text-blue-4" active-class="text-orange" clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="calendar_month" style="font-size: 2rem" />
          </q-item-section>

          <q-item-section class="text-bold" style="font-size: 1rem">
            Jadwal Kegiatan
          </q-item-section>
        </q-item>

        <q-item to="/siswa/pbuku" class="text-blue-4" active-class="text-orange" clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="auto_stories" style="font-size: 2rem" />
          </q-item-section>

          <q-item-section class="text-bold" style="font-size: 1rem">
            Peminjaman Buku
          </q-item-section>
        </q-item>

        <q-item to="/siswa/absen" class="text-blue-4" active-class="text-orange" clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="update" style="font-size: 2rem" />
          </q-item-section>

          <q-item-section class="text-bold" style="font-size: 1rem">
            Absensi
          </q-item-section>
        </q-item>

        <q-item to="/siswa/tugas" class="text-blue-4" active-class="text-orange" clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="assignment_add" style="font-size: 2rem" />
          </q-item-section>

          <q-item-section class="text-bold" style="font-size: 1rem">
            Tugas
          </q-item-section>
        </q-item>

        <q-item to="/siswa/raport" class="text-blue-4" active-class="text-orange" clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="summarize" style="font-size: 2rem" />
          </q-item-section>

          <q-item-section class="text-bold" style="font-size: 1rem">
            Raport Digital
          </q-item-section>
        </q-item>

        <q-item to="/siswa/cs" class="text-blue-4" active-class="text-orange" clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="headset_mic" style="font-size: 2rem" />
          </q-item-section>

          <q-item-section class="text-bold" style="font-size: 1rem">
            Customer Care
          </q-item-section>
        </q-item>
      </q-list>
      <div class="text-center">
        <q-btn style="background: red; color: white; width: 90%" label="Logout" @click="logOut" />
      </div>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const leftDrawerOpen = ref(false);

    return {
      active: ref(true),
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },

  methods: {
    async logOut() {
      try {
        const token = sessionStorage.getItem("token"); // Ganti dengan token akses Anda
        const response = await this.$api.post(
          "/auth/logout",
          {},
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        this.$router.push("/login");
        sessionStorage.removeItem("token");
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
