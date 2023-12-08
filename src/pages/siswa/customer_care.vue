<template>
  <div class="container">
    <!-- <NavbarSiswa /> -->
    <div class="row">
      <div class="col-md-12">
        <div class="text-center bg-blue-2 tw-min-h-screen">
          <q-card-section>
            <div class="text-center">
              <p>
                <span class="text-center text-black text-bold" style="font-size: x-large">Customer Care</span>
              </p>
            </div>
          </q-card-section>
          <q-card-section>
            <q-card style="height: 76vh" class="flex">
              <q-card-section style="width: 100%; max-height: 76vh">
                <div class="q-pa-md" rounded style="
                    height: 100%;
                    max-height: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: end;
                    background-image: url(https://i.pinimg.com/600x315/8c/98/99/8c98994518b575bfd8c949e91d20548b.jpg);
                  ">
                  <div ref="scrollTargetRef" class="q-pa-md" style="max-height: 100%; overflow: auto">
                    <q-infinite-scroll @load="onLoadRef" :scroll-target="scrollTargetRef">
                      <div class="q-pa-md row" style="height: 100%">
                        <div style="width: 100%; height: 100%;" class="text-left">
                          <q-chat-message name="me" avatar="https://cdn.quasar.dev/img/avatar1.jpg" :text="[
                            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ',
                          ]" stamp="7 minutes ago" sent bg-color="amber-7" />
                          <q-chat-message name="Jane" avatar="https://cdn.quasar.dev/img/avatar5.jpg" :text="[
                            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ',
                          ]" stamp="4 minutes ago" text-color="white" bg-color="primary" />
                          <q-chat-message name="me" avatar="https://cdn.quasar.dev/img/avatar1.jpg" :text="[
                            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ',
                          ]" stamp="7 minutes ago" sent bg-color="amber-7" />
                          <q-chat-message name="Jane" avatar="https://cdn.quasar.dev/img/avatar5.jpg" :text="[
                            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ',
                          ]" stamp="4 minutes ago" text-color="white" bg-color="primary" />
                          <q-chat-message name="me" avatar="https://cdn.quasar.dev/img/avatar1.jpg" :text="[
                            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ',
                          ]" stamp="7 minutes ago" sent bg-color="amber-7" />
                          <q-chat-message name="Jane" avatar="https://cdn.quasar.dev/img/avatar5.jpg" :text="[
                            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ',
                          ]" stamp="4 minutes ago" text-color="white" bg-color="primary" />
                          <q-chat-message name="me" avatar="https://cdn.quasar.dev/img/avatar1.jpg" :text="[
                            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ',
                          ]" stamp="7 minutes ago" sent bg-color="amber-7" />
                          <q-chat-message name="Jane" avatar="https://cdn.quasar.dev/img/avatar5.jpg" :text="[
                            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ',
                          ]" stamp="4 minutes ago" text-color="white" bg-color="primary" />
                        </div>
                      </div>
                    </q-infinite-scroll>
                  </div>

                  <div class="flex tw-justify-center items-center tw-gap-5 bg-white">
                    <q-input rounded outlined v-model="text" class="tw-w-5/6"
                      placeholder="Type Here" />
                    <q-btn round color="primary" icon="send" />
                   
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </q-card-section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavbarSiswa from "../../components/siswa/HederSiswa.vue";

export default {
  components: {
    NavbarSiswa,
  },
};
</script>
