<template>
  <div class="container">
    <div>
      <div class="bg-blue-2 tw-min-h-screen">
        <div class="q-pa-md">
          <q-layout view="lHh Lpr lff" container style="height: 820px" class="shadow-2 rounded-borders">
            <q-header elevated class="bg-cyan-8">
              <q-toolbar>
                <q-btn flat @click="drawer = !drawer" round dense icon="arrow_back" />
                <q-toolbar-title>Nama</q-toolbar-title>
              </q-toolbar>
            </q-header>

            <q-drawer v-model="drawer" show-if-above :width="300" :breakpoint="400">
              <q-scroll-area style="height: calc(100% - 150px); margin-top: 80px; border-right: 1px solid #ddd">
                <q-list padding>
                  <q-item clickable v-ripple>
                    <q-item-section avatar>
                      <q-avatar>
                        <img src="https://cdn.quasar.dev/img/avatar.png">
                      </q-avatar>
                    </q-item-section>

                    <q-item-section>
                      <p class="text-bold text-h6"> nama</p>
                      <p> isi pesan ...</p>
                    </q-item-section>
                  </q-item>

                </q-list>
              </q-scroll-area>

              <q-img class="absolute-top" src="https://cdn.quasar.dev/img/material.png" style="height: 80px">
                <div class="absolute-bottom bg-transparent">
                  <div class="text-weight-bold text-h4">Chats</div>

                </div>
              </q-img>
              <div class="bg-red" style=" position: fixed; right: 80px; bottom: 80px;" @click="medium = true">
                <q-btn key="btn_size_round_md" round color="primary" size="lg" icon="add" class="absolute" />
              </div>

            </q-drawer>

            <q-page-container class="bg-white">
              <q-page padding class=""
                style="width: 100%;   background-image: url(https://i.pinimg.com/600x315/8c/98/99/8c98994518b575bfd8c949e91d20548b.jpg);">
                <q-scroll-area class="kolom_chat">
                  <div class="q-pa-md" rounded style="
                    height: 100%;   
                    display: flex;
                    flex-direction: column;
                    justify-content: end;
                    
                  ">
                    <div ref="scrollTargetRef" class="q-pa-md" style="max-height: 100%; overflow: auto">
                      <q-infinite-scroll @load="onLoadRef" :scroll-target="scrollTargetRef">
                        <div class="q-pa-md row" style="height: 100%">
                          <div style="width: 100%; height: 100%;" class="text-left">
                            <q-chat-message name="me" :text="[
                              'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ',
                            ]" stamp="7 minutes ago" sent bg-color="amber-7" />
                            <q-chat-message name="Jane" :text="[
                              'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ',
                            ]" stamp="4 minutes ago" text-color="white" bg-color="primary" />
                            <q-chat-message name="Jane" :text="[
                              'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ',
                            ]" stamp="4 minutes ago" text-color="white" bg-color="primary" />
                            <q-chat-message name="Jane" :text="[
                              'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ',
                            ]" stamp="4 minutes ago" text-color="white" bg-color="primary" />
                            <q-chat-message name="Jane" :text="[
                              'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ',
                            ]" stamp="4 minutes ago" text-color="white" bg-color="primary" />

                          </div>
                        </div>
                      </q-infinite-scroll>
                    </div>
                  </div>
                </q-scroll-area>
                <div class="flex justify-center items-center">
                  <div class="tw-w-5/6 flex justify-start">
                    <q-input rounded outlined v-model="text" class="input bg-white tw-w-full" placeholder="Type Here" />
                  </div>
                  <div class="tw-w-1/6 flex tw-pl-2">
                    <q-btn round color="green" icon="send" />
                  </div>

                </div>
              </q-page>
            </q-page-container>

          </q-layout>
        </div>
      </div>




    </div>

  </div>

  <q-dialog v-model="medium">
    <q-card style="width: 700px; max-width: 80vw;">
      <q-card-section>
        <div class="text-h6">Kirim Pesan</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <q-card class="tw-m-1 tw-cursor-pointer">
          <div class="flex justify-start items-center q-pa-md">
            <div class="tw-w-1/6">
              <q-avatar>
                <img src="https://cdn.quasar.dev/img/avatar.png">
              </q-avatar>
            </div>
            <div class="flex tw-flex-col justify-start items-start q-pl-md tw-w-5/6">
              <p class="text-bold text-h6"> nama</p>
            </div>

          </div>
        </q-card>
        <q-card class="tw-m-1 tw-cursor-pointer">
          <div class="flex justify-start items-center q-pa-md">
            <div class="tw-w-1/6">
              <q-avatar>
                <img src="https://cdn.quasar.dev/img/avatar.png">
              </q-avatar>
            </div>
            <div class="flex tw-flex-col justify-start items-start q-pl-md tw-w-5/6">
              <p class="text-bold text-h6"> nama</p>
            </div>

          </div>
        </q-card>
        <q-card class="tw-m-1 tw-cursor-pointer">
          <div class="flex justify-start items-center q-pa-md">
            <div class="tw-w-1/6">
              <q-avatar>
                <img src="https://cdn.quasar.dev/img/avatar.png">
              </q-avatar>
            </div>
            <div class="flex tw-flex-col justify-start items-start q-pl-md tw-w-5/6">
              <p class="text-bold text-h6"> nama</p>
            </div>

          </div>
        </q-card>
      </q-card-section>

      <q-card-actions align="right" class="bg-white text-teal">
        <q-btn flat label="Cencel" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
import NavbarSiswa from "../../components/siswa/HederSiswa.vue";
import { ref } from 'vue'
export default {
  components: {
    NavbarSiswa,
  },
  setup() {
    return {
      medium: ref(false),
      drawer: ref(true)
    }
  },
};

</script>

<style>


@media (max-width: 600px) {
  .kolom_chat {
  height: 89vh;
}
}

/* Gaya untuk layar dengan lebar antara 601px dan 1024px */
@media (min-width: 601px) and (max-width: 1024px) {
  .kolom_chat {
    height: 62vh;
  }
}
@media (min-width: 1025px) and (max-width: 1324px) {
  .kolom_chat {
  height: 85vh;
}
}
@media (min-width: 1325px) {
  .kolom_chat {
  height: 68vh;
}
}
</style>