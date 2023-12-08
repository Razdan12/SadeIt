<template>
  <div class="q-pa-md bg-image">
    <q-page class="vertical-middle tw-h-screen">
      <div class="flex justify-center items-center tw-w-full tw-h-full">
        <div class="col-8 flex justify-center items-center">

          <q-card style="width: 100%; height: auto">
            <q-card-section class="tw-w-full">
              <div class="row">
                <div class="img col-md col-12 text-center bg-image2">
                  <q-img class="q-my-lg" src="../assets/sade.png" style="width: 30%" />
                </div>
                <div class="flex col-md col-12 text-left tw-my-10" style="height: auto">
                  <div class="tw-w-full flex ">
                    <div class=" tw-w-full flex tw-flex-col justify-center items-center">
                      <p class="text-center text-blue-6 text-bold" style="font-size: x-large">
                        SISTEM INFORMASI SEKOLAH <br />
                        <span class="text-blue-6" style="font-size: large">SEKOLAH ALAM DEPOK</span>
                      </p>
                      <div class="text-center tw-my-10">
                        <q-img class="tw-w-32" src="../assets/lock2.png" />
                      </div>
                    </div>
                    <div class="flex tw-w-full justify-center items-center">

                      <div class="col flex justify-center">
                        <q-form @submit.prevent="loginUser" class="tw-w-full flex justify-center">
                          <q-input v-model="email" class="text-center " bottom-slots filled type="text"
                            label="Username/Email" style="width: 70%">
                            <template v-slot:prepend>
                              <q-icon name="email" />
                            </template>
                          </q-input>

                          <q-input v-model="password" class="tw-w-full" bottom-slots filled type="password"
                            label="Password" style="width: 70%">
                            <template v-slot:prepend>
                              <q-icon name="key" />
                            </template>
                          </q-input>
                          <q-btn type="submit" color="blue-grey-6" glossy label="Login" style="width: 70%" />
                        </q-form>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </q-card-section>
          </q-card>
        </div>

      </div>
    </q-page>
  </div>
</template>

<script>
import Swal from 'sweetalert2'


export default {

  methods: {
    async loginUser() {
      const loginData = {
        email: this.email,
        password: this.password,
      };
      try {
        const response = await this.$api.post("/auth/login", loginData);
        const status = response.data.code
        const token = response.data.tokens.refresh.token
        const role = response.data.data.role_id

        status === 200 ? role === 7 ? this.$router.push("/siswa") : role === 8 ? this.$router.push("/wali") : "" : ""
        sessionStorage.setItem("token", token)

      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Email atau Password salah!",

        });
      } finally {

      }
    },
  },

  data() {
    return {
      email: "",
      password: "",
    };
  },
};
</script>

<style>
.bg-image {
  background-image: url("../assets/bg2.png");
  background-repeat: no-repeat;
  background-size: cover, contain;
}

.bg-image2 {
  background-image: url("../assets/sesi2.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

@media (max-width: 768px) {
  .img {
    display: none;
  }
}
</style>
