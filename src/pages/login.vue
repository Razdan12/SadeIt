<template>
  <div class="q-pa-md bg-image">
    <q-page class="vertical-middle" style="height: 100vh;">
      <div class="flex justify-center items-center" style="width: 100%; height: 100%;">
        <div class="col-8 flex justify-center items-center" style="width: 70%;">
         
          <q-card style="width: 100%; height: 60vh">
            <q-card-section>
              <div class="row">
                <div class="col-6 text-center bg-image2">
                  <q-img
                    class="q-my-lg"
                    src="../assets/sade.png"
                    style="width: 30%"
                  />
                </div>
               
                <div class="col-6 text-left q-my-lg" style="height: 52vh">
                  <br />
                  <p
                    class="text-center text-blue-6 q-ml-xl text-bold"
                    style="font-size: x-large"
                  >
                    SISTEM INFORMASI SEKOLAH <br />
                    <span class="text-blue-6" style="font-size: large"
                      >SEKOLAH ALAM DEPOK</span
                    >
                  </p>
                  <div class="text-center q-ml-xl">
                    <q-img
                      class="q-my-lg"
                      src="../assets/lock2.png"
                      style="width: 20%"
                    />
                  </div>
                  <br />
                  <div class="row">
                    <div class="col-2"></div>
                    <div class="col-10">
                      <q-form @submit.prevent="loginUser">
                        <q-input
                          v-model="email"
                          class="text-center q-ml-xl"
                          bottom-slots
                          filled
                          type="text"
                          label="Username/Email"
                          style="width: 70%"
                        >
                          <template v-slot:prepend>
                            <q-icon name="email" />
                          </template>
                        </q-input>

                        <q-input
                          v-model="password"
                          class="q-ml-xl"
                          bottom-slots
                          filled
                          type="password"
                          label="Password"
                          style="width: 70%"
                        >
                          <template v-slot:prepend>
                            <q-icon name="key" />
                          </template>
                        </q-input>
                        <q-btn
                          type="submit"
                          class="q-ml-xl"
                          color="blue-grey-6"
                          glossy
                          label="Login"
                          style="width: 70%"
                        />
                      </q-form>
                    </div>
                    <div class="col-1"></div>
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

        status === 200 ? this.$router.push("/siswa") : ""
        sessionStorage.setItem("token", token)
      
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Email atau Password salah!",
         
        });
      }finally{

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
</style>
