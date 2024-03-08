<template>
  <div class="container">
    <div>
      <div class="bg-blue-2 tw-min-h-screen">
        <div class="q-pa-md">
          <q-layout view="lHh Lpr lff" container style="height: 820px" class="shadow-2 rounded-borders">
            <q-header elevated class="bg-cyan-8">
              <q-toolbar>
                <q-btn flat @click="drawer = !drawer" round dense icon="arrow_back" />
                <q-toolbar-title>{{ currentReceiverName }}</q-toolbar-title>
              </q-toolbar>
            </q-header>

            <q-drawer v-model="drawer" show-if-above :width="300" :breakpoint="400">
              <q-scroll-area style="height: calc(100% - 150px); margin-top: 80px; border-right: 1px solid #ddd">
                <q-list padding>
                  <q-item clickable @click="setUpMessage(userChat)" v-ripple v-for="userChat in users">
                    <q-item-section avatar>
                      <q-avatar>
                        <img src="https://thinksport.com.au/wp-content/uploads/2020/01/avatar-.jpg">
                      </q-avatar>
                    </q-item-section>

                    <q-item-section>
                      <p class="text-bold">{{ userChat.withUser.full_name }}</p>
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
                      <q-infinite-scroll>
                        <div class="q-pa-md row" style="height: 100%">

                          <div style="width: 100%; height: 100%;" class="text-left" v-for="message in messages">
                            <q-chat-message :name="message.sender" :text="[message.text]" :stamp="message.stamp"
                              :sent="message.isSender" :bg-color="message.color" :text-color="message.textColor" />
                          </div>

                        </div>
                      </q-infinite-scroll>
                    </div>
                  </div>
                </q-scroll-area>
                <div class="flex justify-center items-center">
                  <div class="tw-w-5/6 flex justify-start">
                    <q-input rounded @keyup.enter="sendMessage" outlined v-model="inputMessage"
                      class="input bg-white tw-w-full" placeholder="Type Here" />
                  </div>
                  <div class="tw-w-1/6 flex tw-pl-2">
                    <q-btn round color="green" icon="send" @click="sendMessage" />
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
import Swal from 'sweetalert2';


export default {
  components: {
    NavbarSiswa,
  },
  setup() {
    return {
      medium: ref(false),
      drawer: ref(true),
      users: ref([]),
      messages: ref([]),
      currentMessageId: ref(),
      currentReceiverId: ref(),
      currentReceiverName: ref(''),
      token: ref(sessionStorage.getItem("token")),
      idUser: ref(sessionStorage.getItem("idUser")),
      idSender: ref('')
      // inputMessage: ref('')
    }
  },
  mounted() {
    this.getUserChats()
  },
  watch: {
    currentMessageId: {
      handler(value) {
        this.getMessages()
      }
    }
  },
  methods: {
    //GET ALL USER CHAT
    async getUserChats() {
      try {
        const response = await this.$api.get(`user-chat/show-by-user/${this.idUser}`, {
          headers: {
            'Authorization': `Bearer ${this.token}`
          }
        })
        console.log(response.data.data);
        this.users = response.data.data

      } catch (err) {
        Swal.fire({
          title: err.message,
          text: "Tunggu sebentar ya, atau refresh kembali",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Refresh Now"
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.reload()
          }
        });
      }
    },

    //GET MESSAGE
    async setUpMessage(rowData) {
      this.currentReceiverId = rowData.with_id
      this.currentReceiverName = rowData.withUser.full_name
      try {
        const currentTime = new Date()
        const response = await this.$api.get(`user-chat/show-conversation?userid=${this.idUser}&withid=${rowData.with_id}`, {
          headers: {
            'Authorization': `Bearer ${this.token}`
          }
        })
       
        const data = response.data.data[0].messages
        this.messages = data?.map(message => ({
          text: message.message,
          sender: message.sender_id != this.idUser ? this.currentReceiverName : "Me",
          color: message.sender_id != this.idUser ? "primary" : "amber-7",
          textColor: message.sender_id != this.idUser ? "white" : "black",
          isSender: message.sender_id != this.idUser ? false : true,
          stamp: this.countTime(currentTime, new Date(message.createdAt))
        }))
      } catch (err) {
        console.log(err)
      }
    },


    countTime(newestDate, time) {
      try {
        const timeDiff = newestDate - time;
        const hours = Math.floor(timeDiff / (1000 * 60 * 60));
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

        if (hours > 0) {
          return `${hours} ${hours === 1 ? 'hour' : 'hours'} ago`;
        } else if (minutes > 0) {
          return `${minutes} ${minutes === 1 ? 'minute' : 'minutes'} ago`;
        } else {
          return `${seconds} ${seconds === 1 ? 'second' : 'seconds'} ago`;
        }
      } catch (err) {
        console.log(err)
      }
    },

    //SEND MESSAGE 
    async sendMessage() {
      try {
        const data = {
          user_id: 19,
          with_id: 9,
          message: "contoh pesan ya okee"
        }
        console.log(data);
        const response = await this.$api.post('message/create', data, {
          headers: {
            'Authorization': `Bearer ${this.token}`,
            'Content-Type': 'Application/json'
          }
        })

        console.log(response);

      } catch (err) {
        console.log(err)
      }
    },
  }
}

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