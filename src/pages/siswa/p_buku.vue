<template>
  <div class="container">
    <!-- <NavbarService/> -->
    <div class="row">
      <div class="col">
        <div class="text-center bg-blue-2 tw-min-h-screen ">

          <q-card-section>
            <div class="text-center">
              <p>
                <span class="text-center text-black text-bold" style="font-size: x-large">Peminjaman Buku</span>
              </p>
            </div>
          </q-card-section>
          <q-card-section>
            <q-card style="height: auto;">
              <q-card-section>
                <div class="row">
                  <div class="col-md col-12">
                    <div class="tw-p-2">

                      <q-card>
                        <q-card-section>
                          <p><span style="font-size: xx-large">History</span></p>
                          <div class="row flex justify-center items-center">
                            <div class="col-md-5">

                              <q-img src="../../assets/book/book.png" class="tw-w-1/2" />
                            </div>

                            <div class="col text-left">

                              <q-markup-table flat>
                                <tbody class="text-bold text-blue">
                                  <tr>
                                    <td class="text-left">Wajib</td>
                                    <td class="text-right">3</td>
                                  </tr>
                                  <tr>
                                    <td class="text-left">Pilihan</td>
                                    <td class="text-right">1</td>
                                  </tr>
                                  <tr>
                                    <td class="text-left">Target</td>
                                    <td class="text-right">10</td>
                                  </tr>

                                </tbody>
                              </q-markup-table>
                            </div>
                          </div>
                        </q-card-section>
                      </q-card>
                    </div>
                  </div>
                  <div class="col-md col-12">
                    <div class="tw-p-2">

                      <q-card>
                        <q-card-section>
                          <p class="text-center text-bold text-h6 text-blue-grey-8">Rekomendasi Buku</p>
                          <div>
                            <q-carousel v-model="slide" transition-prev="scale" transition-next="scale" swipeable animated
                              control-color="black" arrows height="18vh">

                              <q-carousel-slide name="style">
                                <div class="tw-w-full">
                                  <div class=" flex tw-flex-wrap justify-between">
                                    <div class="tw-w-1/2">
                                      <q-img src="../../assets/book/1.jpg" class="tw-w-24" />
                                    </div>
                                    <div class="tw-w-1/2 text-left">
                                      <p class="q-pl-md">Judul Buku : <span class="text-indigo">Reach For The Sky</span>
                                      </p>
                                      <p class="q-pl-md">Pengarang : <span class="text-indigo">unknow</span></p>
                                      <p class="q-pl-md">Penerbit : <span class="text-indigo">pt.gramedia</span></p>
                                    </div>

                                  </div>
                                </div>

                              </q-carousel-slide>
                              <q-carousel-slide name="book">
                                <div class="tw-w-full">
                                  <div class=" flex tw-flex-wrap justify-between">
                                    <div class="tw-w-1/2">
                                      <q-img src="../../assets/book/1.jpg" class="tw-w-24" />
                                    </div>
                                    <div class="tw-w-1/2 text-left">
                                      <p class="q-pl-md">Judul Buku : <span class="text-indigo">Reach For The Sky</span>
                                      </p>
                                      <p class="q-pl-md">Pengarang : <span class="text-indigo">unknow</span></p>
                                      <p class="q-pl-md">Penerbit : <span class="text-indigo">pt.gramedia</span></p>
                                    </div>

                                  </div>
                                </div>

                              </q-carousel-slide>
                              <q-carousel-slide name="name">
                                <div class="tw-w-full">
                                  <div class=" flex tw-flex-wrap justify-between">
                                    <div class="tw-w-1/2">
                                      <q-img src="../../assets/book/1.jpg" class="tw-w-24" />
                                    </div>
                                    <div class="tw-w-1/2 text-left">
                                      <p class="q-pl-md">Judul Buku : <span class="text-indigo">Reach For The Sky</span>
                                      </p>
                                      <p class="q-pl-md">Pengarang : <span class="text-indigo">unknow</span></p>
                                      <p class="q-pl-md">Penerbit : <span class="text-indigo">pt.gramedia</span></p>
                                    </div>

                                  </div>
                                </div>

                              </q-carousel-slide>

                            </q-carousel>
                          </div>
                        </q-card-section>
                      </q-card>
                    </div>
                  </div>

                </div>
              </q-card-section>
              <q-card-section>
                <q-card class="bg-blue-grey-4 text-white text-bold">
                  <p>13 Oktober 2023 buku dengan judul <span class="text-amber-12"> Reach For The Sky</span> telah
                    dikembalikan</p>
                </q-card>
              </q-card-section>
              <q-card-section>
                <div class="row">
                  <div class="col-md col-12 tw-p-2">

                    <div class="text-center">
                      <div class="text-h6 text-blue">BUKU WAJIB</div>

                      <q-markup-table class="tw-h-96 tw-mt-5">
                        <thead>
                          <tr>
                            <th class="text-left">Judul Buku</th>
                            <th class="text-center">cover</th>
                            <th class="text-center">Tanggal pinjam</th>
                            <th class="text-center">Tanggal kembali</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td class="text-left">Matematika 3 </td>
                            <td class="text-center">
                              <q-img src="../../assets/book/matematika3.png" />
                            </td>
                            <td class="text-center">1 Juli 2023</td>
                            <td class="text-center">30 Desember 2023</td>
                          </tr>
                          <tr>
                            <td class="text-left">IPA 3 </td>
                            <td class="text-center">
                              <q-img src="../../assets/book/ipa3.jpg" />
                            </td>
                            <td class="text-center">1 Juli 2023</td>
                            <td class="text-center">30 Desember 2023</td>
                          </tr>
                          <tr>
                            <td class="text-left">IPS 3 </td>
                            <td class="text-center">
                              <q-img src="../../assets/book/ips3.jpg" />
                            </td>
                            <td class="text-center">1 Juli 2023</td>
                            <td class="text-center">30 Desember 2023</td>
                          </tr>
                        </tbody>
                      </q-markup-table>
                    </div>
                  </div>
                  <div class="col-md col-12 tw-p-2">

                    <div class="text-center">
                      <div class="text-h6 text-blue">BUKU PILIHAN</div>

                      <q-markup-table class="tw-h-96 tw-mt-5">
                        <thead>
                          <tr>
                            <th class="text-left">Judul Buku</th>
                            <th class="text-center">cover</th>
                            <th class="text-center">Katagori</th>
                            <th class="text-center">Tanggal pinjam</th>
                            <th class="text-center">Tanggal kembali</th>
                            <th class="text-center">Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td class="text-left">Reach For The Sky </td>
                            <td class="text-center">
                              <q-img src="../../assets/book/1.jpg" />
                            </td>
                            <td class="text-center">Non Fiksi</td>
                            <td class="text-center">10 Oktober 2023</td>
                            <td class="text-center">13 Oktober 2023</td>
                            <td class="text-center text-green">Kembali</td>
                          </tr>

                        </tbody>
                      </q-markup-table>
                    </div>
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
import { ref } from 'vue'
import NavbarService from '../../components/siswa/HederSiswa.vue'

export default {
  components: {
    NavbarService

  },

  setup() {
    return {
      slide: ref('style'),
      lorem: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo.'
    }
  },

}
</script>
