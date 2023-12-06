
const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { 
        path: "", 
        component: () => import("pages/IndexPage.vue") 
      },
      { 
        path: "/login", 
        component: () => import("pages/login.vue") 
      },
    ],
  },
  {
    path: "/siswa",
    component: () => import("layouts/LayoutSiswa.vue"),
    children: [
      {
         path: "/siswa", 
         component: () => import("pages/siswa/IndexPage.vue"),
         meta: { requiresAuth: true }
      },
      {
        path: "/siswa/jadwal",
        component: () => import("pages/siswa/jadwal.vue"),
        meta: { requiresAuth: true }
      },
      {
        path: "/siswa/raport",
        component: () => import("pages/siswa/raport.vue"),
        meta: { requiresAuth: true }
      },
      {
        path: "/siswa/tugas",
        component: () => import("pages/siswa/tugas.vue"),
        meta: { requiresAuth: true }
      },
      {
        path: "/siswa/absen",
        component: () => import("pages/siswa/absen.vue"),
         meta: { requiresAuth: true }
      },
      {
        path: "/siswa/bsampah",
        component: () => import("pages/siswa/b_sampah.vue"),
         meta: { requiresAuth: true }
      },
      {
        path: "/siswa/kkegiatan",
        component: () => import("pages/siswa/k_kegiatan.vue"),
         meta: { requiresAuth: true }
      },
      {
        path: "/siswa/jkegiatan",
        component: () => import("pages/siswa/j_kegiatan.vue"),
         meta: { requiresAuth: true }
      },
      {
        path: "/siswa/pbuku",
        component: () => import("pages/siswa/p_buku.vue"),
         meta: { requiresAuth: true }
      },
      {
        path: "/siswa/cs",
        component: () => import("pages/siswa/customer_care.vue"),
         meta: { requiresAuth: true }
      },
    ],
   
  },
  {
    path: "/timbangan",
    component: () => import("layouts/TimbanganLayout.vue"),
    children: [
      {
        path: "/timbangan",
        component: () => import("pages/banksampah/timbangan.vue"),
      },
    ],
  },
  {
    path: "/wali",
    component: () => import("layouts/WaliLayout.vue"),
    children: [
      { 
        path: "/wali", 
        component: () => import("pages/wali/dashboard.vue"),
         meta: { requiresAuth: true } 
      },
      { 
        path: "/wali/absen", 
        component: () => import("pages/wali/absen.vue"),
         meta: { requiresAuth: true } 
      },
      {
        path: "/wali/raport",
        component: () => import("pages/wali/raport.vue"),
         meta: { requiresAuth: true }
      },
      {
        path: "/wali/billing",
        component: () => import("pages/wali/billing.vue"),
         meta: { requiresAuth: true }
      },
      {
        path: "/wali/kkegiatan",
        component: () => import("pages/wali/k_kegiatan.vue"),
         meta: { requiresAuth: true }
      },
      {
        path: "/wali/lkegiatan",
        component: () => import("pages/wali/l_kegiatan.vue"),
         meta: { requiresAuth: true }
      },
    ],
    meta: { requiresAuth: true },
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];


export default routes;
