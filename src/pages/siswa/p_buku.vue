<template>
  <div class="container">
    <!-- <NavbarService/> -->
    <div class="row">
      <div class="col-md-12">
        <q-card class="text-center bg-blue-2" style="height: 87vh">

          <q-card-section>
            <div class="text-center">
              <p>
                <span class="text-center text-black text-bold" style="font-size: x-large">Peminjaman Buku</span>
              </p>
            </div>
          </q-card-section>
          <q-card-section>
            <q-card style="height: 76vh;">
              <q-card-section>
                <div class="row">
                  <div class="col-6 ">
                    <q-card style="width: 95%; height: 25vh">
                      <q-card-section>
                        <p><span style="font-size: xx-large">History</span></p>
                        <div class="row flex justify-center items-center">
                          <div class="col-md-5">
                           
                            <q-img src="../../assets/book/book.png" style="width: 50%;" />
                          </div>
                         
                          <div class="col-md-6 text-left">
                           
                            <q-markup-table flat>
                              <tbody class="text-bold text-blue">
                                <tr>
                                  <td class="text-left"  style="font-size: x-large;">Wajib</td>
                                  <td class="text-right"  style="font-size: x-large;">3</td>
                                </tr>
                                <tr>
                                  <td class="text-left"  style="font-size: x-large;">Pilihan</td>
                                  <td class="text-right"  style="font-size: x-large;">1</td>
                                </tr>
                                <tr>
                                  <td class="text-left"  style="font-size: x-large;">Target</td>
                                  <td class="text-right"  style="font-size: x-large;">10</td>
                                </tr>

                              </tbody>
                            </q-markup-table>
                          </div>
                        </div>
                      </q-card-section>
                    </q-card>
                  </div>
                  <div class="col-6">
                    <q-card style="width: 95%; height: 25vh;">
                      <q-card-section>
                        <p class="text-center text-bold text-h6 text-blue-grey-8">Rekomendasi Buku</p>
                        <div>
                          <q-carousel v-model="slide" transition-prev="scale" transition-next="scale" swipeable animated
                            control-color="grey" navigation padding arrows height="18vh">
                            <q-carousel-slide name="style">
                              <div class=" text-center">
                                <div class="row">
                                  <div class="col-md-3">
                                    <q-img src="../../assets/book/1.jpg" style="width: 70%;" />
                                  </div>
                                  <div class="col-md-9 text-left text-bold">
                                    <p class="q-pl-md">Judul Buku : <span class="text-indigo">Reach For The Sky</span></p>
                                    <p class="q-pl-md">Pengarang : <span class="text-indigo">unknow</span></p>
                                    <p class="q-pl-md">Penerbit : <span class="text-indigo">pt.gramedia</span></p>
                                  </div>
                                </div>
                              </div>
                            </q-carousel-slide>
                            <q-carousel-slide name="tv">
                              <div class=" text-center">
                                <div class="row">
                                  <div class="col-md-3">
                                    <q-img src="../../assets/book/1.jpg" style="width: 70%;" />
                                  </div>
                                  <div class="col-md-9 text-left">
                                    <p class="q-pl-sm">Judul Buku : <span class="text-indigo">Reach For The Sky</span></p>
                                    <p class="q-pl-sm">Pengarang : <span class="text-indigo">unknow</span></p>
                                    <p class="q-pl-sm">Penerbit : <span class="text-indigo">pt.gramedia</span></p>
                                  </div>
                                </div>
                              </div>
                            </q-carousel-slide>
                            <q-carousel-slide name="layers">
                              <div class=" text-center">
                                <div class="row">
                                  <div class="col-md-3">
                                    <q-img src="../../assets/book/1.jpg" style="width: 70%;" />
                                  </div>
                                  <div class="col-md-9 text-left">
                                    <p class="q-pl-sm">Judul Buku : <span class="text-indigo">Reach For The Sky</span></p>
                                    <p class="q-pl-sm">Pengarang : <span class="text-indigo">unknow</span></p>
                                    <p class="q-pl-sm">Penerbit : <span class="text-indigo">pt.gramedia</span></p>
                                  </div>
                                </div>
                              </div>
                            </q-carousel-slide>
                            <q-carousel-slide name="map">
                              <div class=" text-center">
                                <div class="row">
                                  <div class="col-md-3">
                                    <q-img src="../../assets/book/1.jpg" style="width: 70%;" />
                                  </div>
                                  <div class="col-md-9 text-left">
                                    <p class="q-pl-sm">Judul Buku : <span class="text-indigo">Reach For The Sky</span></p>
                                    <p class="q-pl-sm">Pengarang : <span class="text-indigo">unknow</span></p>
                                    <p class="q-pl-sm">Penerbit : <span class="text-indigo">pt.gramedia</span></p>
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
              </q-card-section>
              <q-card-section>
                <q-card class="bg-blue-grey-4 text-white text-bold">
                  <p>13 Oktober 2023 buku dengan judul <span class="text-amber-12"> Reach For The Sky</span> telah dikembalikan</p>
                </q-card>
              </q-card-section>
              <q-card-section>
                <div class="row">
                  <div class="col-md-6 text-center">
                    <div class="text-h6 text-blue">BUKU WAJIB</div>
                    
                    <q-markup-table style="width: 95%; height: 32vh; margin-top: 10px;">
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

                  <div class="col-md-6 text-center">
                    <div class="text-h6 text-blue">BUKU PILIHAN</div>
                  
                    <q-markup-table style="width: 95%; height: 32vh; margin-top: 10px;" class="text-bold">
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
              </q-card-section>
            </q-card>
          </q-card-section>



        </q-card>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import NavbarService from '../../components/siswa/HederSiswa.vue'

export default {
  components : {
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
