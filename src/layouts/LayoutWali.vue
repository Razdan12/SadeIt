<template>
    <q-layout view="hHh lpR fFf">
        <q-header elevated class="bg-white text-blue flex" style="height: 80px;">
            <q-toolbar>
                <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />
                <q-toolbar-title>
                    {{ currentTime }} | {{ currentDate }}
                </q-toolbar-title>
                <q-img src="../assets/sade.png" style="width: 60px"></q-img>
            </q-toolbar>

        </q-header>

        <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
            <div class="flex q-pl-md" style="margin-top: 10px;flex-direction: row;">
                <q-avatar class="" size="60px">
                    <img src="../assets/sarrah.png" />
                </q-avatar>

                <div class="q-pl-md">
                    <div class="text-bold text-left">
                        <p>Sarrah Aditya Nareswari <br />120002312 <br />Kelas 3 D</p>
                    </div>
                </div>
            </div>
            <q-list padding class="menu-list">
                <q-item class="text-blue-4" clickable v-ripple to="/wali">
                    <q-item-section avatar>
                        <q-icon name="dashboard" style="font-size: 2rem" />
                    </q-item-section>

                    <q-item-section class="text-bold" style="font-size: 1rem">
                        Dashboard
                    </q-item-section>
                </q-item>
                <q-item to="/wali/kkegiatan" class="text-blue-4" active-class="text-orange" clickable v-ripple>
                    <q-item-section avatar>
                        <q-icon name="event_available" style="font-size: 2rem" />
                    </q-item-section>

                    <q-item-section class="text-bold" style="font-size: 1rem">
                        Kalender Kegiatan
                    </q-item-section>
                </q-item>
                <q-item to="/wali/absen" class="text-blue-4" active-class="text-orange" clickable v-ripple>
                    <q-item-section avatar>
                        <q-icon name="update" style="font-size: 2rem" />
                    </q-item-section>

                    <q-item-section class="text-bold" style="font-size: 1rem">
                        Abesnsi
                    </q-item-section>
                </q-item>

                <q-item to="/wali/lkegiatan" class="text-blue-4" active-class="text-orange" clickable v-ripple>
                    <q-item-section avatar>
                        <q-icon name="assignment_add" style="font-size: 2rem" />
                    </q-item-section>

                    <q-item-section class="text-bold" style="font-size: 1rem">
                        Laporan Program dan Kegiatan
                    </q-item-section>
                </q-item>

                <q-item to="/wali/raport" class="text-blue-4" active-class="text-orange" clickable v-ripple>
                    <q-item-section avatar>
                        <q-icon name="summarize" style="font-size: 2rem" />
                    </q-item-section>

                    <q-item-section class="text-bold" style="font-size: 1rem">
                        Raport Digital
                    </q-item-section>
                </q-item>

                <q-item to="/wali/billing" class="text-blue-4" active-class="text-orange" clickable v-ripple>
                    <q-item-section avatar>
                        <q-icon name="account_balance_wallet" style="font-size: 2rem" />
                    </q-item-section>

                    <q-item-section class="text-bold" style="font-size: 1rem">
                        Billing Info
                    </q-item-section>
                </q-item>

                <q-item to="/wali/cs" class="text-blue-4" active-class="text-orange" clickable v-ripple>
                    <q-item-section avatar>
                        <q-icon name="headset_mic" style="font-size: 2rem" />
                    </q-item-section>

                    <q-item-section class="text-bold" style="font-size: 1rem">
                        Customer Care
                    </q-item-section>
                </q-item>
            </q-list>
            <div class="text-center">
                <q-btn style="background: rgb(248, 87, 87); color: white; width: 90%" label="Logout" @click="logOut" />
            </div>
        </q-drawer>

        <q-page-container>
            <router-view />
        </q-page-container>
    </q-layout>
</template>

<script>
import { ref } from "vue";
import Swal from 'sweetalert2'

export default {
    setup() {
        const leftDrawerOpen = ref(false);

        return {
            leftDrawerOpen,
            toggleLeftDrawer() {
                leftDrawerOpen.value = !leftDrawerOpen.value;
            },
        };
    },
    data() {
        return {
            currentDate: "",
            currentTime: "",
        };
    },

    mounted() {
        this.getCurrentDateTime();
        setInterval(() => {
            this.getCurrentDateTime();
        }, 60000);
    },

    methods: {
        getCurrentDateTime() {
            const now = new Date();
            const formattedDate = now.toLocaleDateString('id-ID', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
            const formattedTime = now.toLocaleTimeString('id-ID', { hour: 'numeric', minute: 'numeric' });
            this.currentDate = formattedDate;
            this.currentTime = formattedTime;
        },
        async logOut() {
            Swal.fire({
                title: "Log out?",
                text: "anda akan diarahkan ke halaman utama",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, logout"
            }).then((result) => {
                if (result.isConfirmed) {
                    sessionStorage.removeItem("token");
                    this.$router.push("/");
                }
            });

            //   try {
            //     const token = sessionStorage.getItem("token"); // Ganti dengan token akses Anda
            //     const response = await this.$api.post(
            //       "/auth/logout",
            //       {},
            //       {
            //         headers: { Authorization: `Bearer ${token}` },
            //       }
            //     );
            //     this.$router.push("/login");
            //     sessionStorage.removeItem("token");
            //   } catch (error) {
            //     console.log(error);
            //     sessionStorage.removeItem("token");
            //     this.$router.push("/login");
            //   }
        },
    },


};
</script>
