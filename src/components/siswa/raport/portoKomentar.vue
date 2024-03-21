<template>
    <q-page class="flex tw-flex-col tw-items-start">

        <div class="text-h5 text-bold">
            Komentar Umum
        </div>
        <div class="tw-mt-10">

            <p class="text-left">
                Alhamdulillahirobbil ‘alamiin Aisha telah melalui proses belajar jarak jauh selama 2,5 bulan dengan baik.
                Aisha adalah siswa yang senantiasa hadir tepat waktu dalam pertemuan belajar secara online.
                5 menit sebelum kelas dimulai biasanya aisha sudah hadir di lokasi. Maksimal keterlambatannya berkisar
                antara 3 hingga 5 menit dari jadwal yang telah ditetapkan. Saat pembelajaran daring berlangsung, Asiha ti
                dak perlu diingatkan untuk menyalakan videonya. Namun ia meminta izin kepada fasil untuk menonaktifk
                an microphone miliknya sebab seringkali kondisi di rumah cukup berisik dan banyak suara-
                suara yang dapat mengganggu kenyamanan proses belajar daring. Walaupun ia menonaktifkn microphoe,
                <br/>
                <br/>
                Aisha tetap dapat mengikuti pembelajaran daring dengan aktif.
                Jika ia diberi pertanyaan atau diminta menyampaikan pendapatnya, Aisha akan langsung menyalakan mic
                rophonenya dan menyampaikan jawaban atau tanggapannya secara lisan jika kondisi di rumah sedang ko
                ndusif/ tenang. Jika tidak, Aisha akan segera merespon via chat di Zoom. Jika Aisha merespon via chat di
                Zoom, biasanya responnya singkat dan to the point. Namun jika Aisha menjawab secara lisan,
                Aisha dapat menjelaskan dengan cukup detail dengan bahasanya sendiri.
            </p>
            <q-input
            v-model="editedComment"
            filled
            outlined
            label="Edit Komentar"
            placeholder="Edit komentar Anda di sini..."
            type="textarea"
            />
    <q-btn @click="submitComment" class="q-mt-md" color="primary" label="Submit" />
        </div>
    </q-page>
</template>