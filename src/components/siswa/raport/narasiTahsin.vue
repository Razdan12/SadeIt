<template>
    <div class="text-h4 text-bold text-left">Tahsin</div>
    <div class="text-h6 text-bold text-left">Kualitas Tilawah</div>
    <div>
        <q-markup-table flat bordered h-scroll>
            <thead>
                <tr>
                    <th colspan="5" class="bg-teal">
                        <div class="row no-wrap items-center">
                            <div class="text-h4 q-ml-md text-white">Al Qur’an</div>
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
                    <td class="text-left">Mampu mengikuti aktifitas kelompok dengan tertib dan disiplin</td>
                    <td class="text-center">3 (muntaz)</td> 
                </tr>
                <tr>
                    <td class="text-left">Mengetahui urutan aktifitas dalam kelompok</td>
                    <td class="text-center">2 (jayyid jiddan)</td> 
                </tr>
                <tr>
                    <td class="text-left">Mampu bersikap tenang dalam aktifitas kelompok tahsin</td>
                    <td class="text-center">1 (jayyid)</td> 
                </tr>
                <tr>
                    <td class="text-left">Ananda lengkap membawa al qur’an Iqro, buku monitoring</td>
                    <td class="text-center">1 (jayyid)</td> 
                </tr>
                <tr>
                    <td class="text-left">Mampu murojaah bersama dengan suara yang jelas</td>
                    <td class="text-center">1 (jayyid)</td> 
                </tr>
                <tr>
                    <td class="text-left">Mampu menyiapkan bacaan saat antrian dalam kelompok</td>
                    <td class="text-center">1 (jayyid)</td> 
                </tr>
                <tr>
                    <td class="text-left">Sabar dalam antrian setoran bacaan</td>
                    <td class="text-center">1 (jayyid)</td> 
                </tr>
                <tr>
                    <td class="text-left">Mampu mendengarkan arahan fasil tahsin</td>
                    <td class="text-center">1 (jayyid)</td> 
                </tr>
                <tr>
                    <td class="text-left">Berorientasi untuk membaca dengan kemampuan terbaik</td>
                    <td class="text-center">1 (jayyid)</td> 
                </tr>
                <tr>
                    <td class="text-left">Mampu memperbaiki kekeliruan dalam bacaan</td>
                    <td class="text-center">1 (jayyid)</td> 
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
                    <div class="text-h6 text-bold text-italic	text-left">Komentar Tahsin :</div>
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
                    <q-separator />
                    <br>
                    <div class="text-h6 text-bold text-italic	text-left">Komentar Tahfidz:</div>
                    <P class="text-left">
                        Aisha mampu menghapalkan ayat-ayat Al Qur’an secara mandiri. Panjang pendeknya sudah tepat,
                        begitu pula dengan makhroj hurufnya. Setiap pertemuan tahfidz sepekan sekali, Aisha mampu
                        menambah hapalan ayat sebanyak 3-4 ayat. Alangkah baik jika Aisha bisa menambah hapalan 1-2
                        ayat per hari di rumah. Hal ini juga bertujuan agar aktivitas menambah hapalan qur’an menjadi
                        rutinitas harian Aisha. Tidak apa menambah hapalan ayat dalam jumlah kecil, namun dilakukan
                        rutin
                        setiap hari <br><br>
                        Kuantitas Tilawah <br>
                        Tahfidz : Al Ma’arij <br>
                        Ayat : 34
                    </P>
                    <br>
                    <q-separator />
                    <br>
                    <div class="text-h6 text-bold text-italic	text-left">Rekomendasi :</div>
                    <P class="text-left">
                        Merutinkan membaca Al Qur’an di rumah sebanyak 1 halam setiap hari. Saat tilawah, latihan untuk
                        dapat membaca tanpa berhenti di tengah-tengah ayat. Merutinkan murojaah hapalan surat setiap
                        hari minimal selama 10-15 menit. Menambah hapalan ayat sebanyak 1-2 ayat per hari. Semangat ya,
                        Aisha ^_^
                    </P>

                </q-card-section>
            </q-card>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'Tahsin',

  setup() {
    return {
    
      shape: ref('line'),
    }
  },



}
</script>