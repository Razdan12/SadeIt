<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <q-card class="text-center bg-blue-2" style="height: 87vh">
          <q-card-section>
            <div class="text-center">
              <p>
                <span class="text-center text-black text-bold" style="font-size: x-large">BILLING</span>
              </p>
            </div>
            <div class="q-px-md">
              <q-card style="height: 75vh">
                <q-card-section>
                  <div class="row">
                    <div class="col-md-9 col-9">
                      <p class="text-left q-ml-md q-mt-sm text-grey">
                        <span style="font-size: large">Billing History</span><br />
                        <span style="font-size: smaller">
                          manage Billing information and view receips</span>
                      </p>
                      <q-markup-table flat class="q-px-lg">
                        <thead>
                          <tr>
                            <th class="text-center" style="width: 10px">No</th>
                            <th class="text-left">Date</th>
                            <th class="text-left">Billing Type</th>
                            <th class="text-left">Receipt</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td class="text-left">1</td>
                            <td class="text-left">01 Agustus 2023</td>
                            <td class="text-left">Spp Bulan Agustus</td>
                            <td class="text-left">
                              <q-btn outline style="color: grey" label="Download" />
                            </td>
                          </tr>

                          <tr>
                            <td class="text-left">3</td>
                            <td class="text-left">01 September 2023</td>
                            <td class="text-left">Spp Bulan September</td>
                            <td class="text-left">
                              <q-btn outline style="color: grey" label="Download" />
                            </td>
                          </tr>
                          <tr>
                            <td class="text-left">4</td>
                            <td class="text-left">01 Oktober 2023</td>
                            <td class="text-left">Spp Bulan Oktober</td>
                            <td class="text-left">
                              <q-btn outline style="color: grey" label="Download" />
                            </td>
                          </tr>

                          <tr>
                            <td class="text-left">2</td>
                            <td class="text-left">01 November 2023</td>
                            <td class="text-left">Spp Bulan November</td>
                            <td class="text-left">
                              <q-btn outline style="color: grey" label="Download" />
                            </td>
                          </tr>
                        </tbody>
                      </q-markup-table>
                      <div>

                      </div>
                    </div>
                    <div></div>
                    <div class="col-md-3 col-3 q-px-md"  style="height: 60vh;">
                      <br /><br /><br /><br />
                      <q-card class="q-px-sm q-mt-lg text-center bg-red-5" style="height: 100%;">
                        <q-card-section>
                          <div class="text-left">
                            <p class="text-left text-bold q-ml-md text-white">
                              <span style="font-size: large">Next Payment</span>
                            </p>
                          </div>
                          <q-separator color="white" inset />
                          <div class="q-mx-md">
                            <p class="text-bold q-mt-md text-white text-left">
                              <span style="font-size: large">Payment Options</span><br />
                              <q-checkbox v-model="januaryCheckbox"
                                label="DPP bulan Januari Rp. 500.000"></q-checkbox><br />
                              <q-checkbox v-model="februaryCheckbox"
                                label="DPP bulan Februari Rp. 500.000"></q-checkbox><br />
                              <q-checkbox v-model="marchCheckbox" label="DPP bulan Maret Rp. 500.000"></q-checkbox><br />
                              <span style="font-size: smaller">Payment deadline</span>
                              <span class="text-warning" style="font-size: smaller">10 Desember 2023</span>
                            </p>
                            <p class="text-white" style="font-size: larger; margin-top: 10px"> Total: Rp. {{ totalAmount.toLocaleString("id-ID") }}</p>
                            <q-btn class="full-width q-mt-lg" outline style="color: white" label="Pay Now"
                              />

                          </div>
                        </q-card-section>
                      </q-card>
                    </div>

                  </div>
                </q-card-section>
                <div class="absolute-bottom text-subtitle2 text-center q-gutter-sm">
                  <q-card class="bg-blue-grey-1" style="height: 25vh;">
                    <q-card-section>
                      <div class="text-left text-bold q-pt-sm q-px-md">
                        <span style="font-size: large;">Payment Method</span>
                      </div>

                    </q-card-section>
                  </q-card>
                </div>
              </q-card>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, watch } from "vue";

export default {
  setup() {
    const januaryCheckbox = ref(false);
    const februaryCheckbox = ref(false);
    const marchCheckbox = ref(false);
    const amountPerMonth = 500000;
    const totalAmount = ref(0);

    const calculateTotal = () => {
      totalAmount.value = (januaryCheckbox.value ? amountPerMonth : 0) +
                          (februaryCheckbox.value ? amountPerMonth : 0) +
                          (marchCheckbox.value ? amountPerMonth : 0);
    };
    watch([januaryCheckbox, februaryCheckbox, marchCheckbox], () => {
      calculateTotal();
    });
    return {
      tab: ref("mails"),
      innerTab: ref("innerMails"),
      small: ref(false),
      medium: ref(false),
      splitterModel: ref(20),
      shape: ref(),
      shape2: ref(),
      model: ref(null),
      januaryCheckbox,
      februaryCheckbox,
      marchCheckbox,
      totalAmount,
      calculateTotal,
    };
  },
};
</script>
