<template>
    <div class="text-h4 text-bold text-left">Akhlak / Perilaku</div>
   
    <div style="margin-top: 30px">
        <q-markup-table flat bordered h-scroll>
            <thead>
                <tr>
                    <th colspan="5" class="bg-teal">
                        <div class="row no-wrap items-center">
                            <div class="text-h5 q-ml-md text-white">Kesopanan</div>
                        </div>
                    </th>
                </tr>
                <tr>
                    <th class="text-left text-bold" style="width: 20px; font-size: medium;">Keterangan</th>
                    <th class="text-center text-bold " style="width: 20px; font-size: medium;">Nilai</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="text-left">Bersikap sopan terhadap semua orang</td>
                    <td class="text-center">3 (mandiri)</td>  
                </tr>
                <tr>
                    <td class="text-left">Menghargai orang yang berbicara</td>
                    <td class="text-center">3 (mandiri)</td>  
                </tr>
                     
            </tbody>
            <thead>
                <tr>
                    <th colspan="5" class="bg-teal">
                        <div class="row no-wrap items-center">
                            <div class="text-h5 q-ml-md text-white">Kejujuran</div>
                        </div>
                    </th>
                </tr>
                <tr>
                    <th class="text-left text-bold" style="width: 20px; font-size: medium;">Keterangan</th>
                    <th class="text-center text-bold " style="width: 20px; font-size: medium;">Nilai</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="text-left">Mengekspresikan ketidaksukaan dan ketidakmampuan secara jujur</td>
                    <td class="text-center">3 (mandiri)</td>  
                </tr>
                
            </tbody>
            <thead>
                <tr>
                    <th colspan="5" class="bg-teal">
                        <div class="row no-wrap items-center">
                            <div class="text-h5 q-ml-md text-white">Keteguhan</div>
                        </div>
                    </th>
                </tr>
                <tr>
                    <th class="text-left text-bold" style="width: 20px; font-size: medium;">Keterangan</th>
                    <th class="text-center text-bold " style="width: 20px; font-size: medium;">Nilai</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="text-left">Mampu menuntaskan pekerjaan yang telah dimulai</td>
                    <td class="text-center">3 (mandiri)</td>  
                </tr>
                <tr>
                    <td class="text-left">Berorientasi untuk melakukan sesuatu dengan kemampuan terbaik</td>
                    <td class="text-center">3 (mandiri)</td>  
                </tr>
                
            </tbody>
            <thead>
                <tr>
                    <th colspan="5" class="bg-teal">
                        <div class="row no-wrap items-center">
                            <div class="text-h5 q-ml-md text-white">Emosi - Sosial</div>
                        </div>
                    </th>
                </tr>
                <tr>
                    <th class="text-left text-bold" style="width: 20px; font-size: medium;">Keterangan</th>
                    <th class="text-center text-bold " style="width: 20px; font-size: medium;">Nilai</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="text-left">Mampu bersikap tenang</td>
                    <td class="text-center">3 (mandiri)</td>  
                </tr>
                <tr>
                    <td class="text-left">Mengekspresikan emosi secara wajar</td>
                    <td class="text-center">3 (mandiri)</td>  
                </tr>
                <tr>
                    <td class="text-left">Sabar dalam  menunggu giliran</td>
                    <td class="text-center">3 (mandiri)</td>  
                </tr>
                
            </tbody>
            <thead>
                <tr>
                    <th colspan="5" class="bg-teal">
                        <div class="row no-wrap items-center">
                            <div class="text-h5 q-ml-md text-white">Keterampilan Beradaptasi</div>
                        </div>
                    </th>
                </tr>
                <tr>
                    <th class="text-left text-bold" style="width: 20px; font-size: medium;">Keterangan</th>
                    <th class="text-center text-bold " style="width: 20px; font-size: medium;">Nilai</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="text-left">Mampu beradaptasi dengan kondisi sekitar</td>
                    <td class="text-center">3 (mandiri)</td>  
                </tr>
                <tr>
                    <td class="text-left">Bersikap ramah</td>
                    <td class="text-center">3 (mandiri)</td>  
                </tr>
                <tr>
                    <td class="text-left">Menyapa/salam kepada semua guru dan teman</td>
                    <td class="text-center">3 (mandiri)</td>  
                </tr>
                <tr>
                    <td class="text-left">Mampu memperkenalkan diri</td>
                    <td class="text-center">3 (mandiri)</td>  
                </tr>
                
            </tbody>
        </q-markup-table>
      
        <br>
        <q-separator />
        <br>

        <div class="text-h6 text-bold text-left">Komentar pembimbing:</div>

        <div>
            <q-card>
                <q-card-section>
                  
                    <P class="text-left">
                        Aisha mampu membaca Al Qur’an dengan lancar. Masih sama seperti semester sebelumnya, yang
                        perlu dilatih adalah melatih nafas saat membaca qur’an agar dapat membaca satu ayat tanpa
                        berhenti di tengah-tengah ayat. Kalau perlu berhenti, Aisha perlu berlatih untuk berhenti di
                        tanda
                        waqaf. Tanda 15 jenis tanda waqaf yang perlu dikenali lebih dalam agar dapat digunakan dengan
                        tepat saat membaca Al Qur’an <br><br>
                        Kuantitas Qira’ah tahsin : <br>
                        Al Qur’an : Al Maidah <br>
                        Ayat : 95
                    </P>
                    <br>
                   
                </q-card-section>
            </q-card>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'Akhlak',

  setup() {
    return {
    
      shape: ref('line'),
    }
  },



}
</script>