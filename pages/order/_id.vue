<template>
  <div style="background: #f5f3f2;">
    <div style="background: #b2ada7; color: white; text-align: center; padding: 14px;">
      <span>ORDER</span>
      <span>TRACKING #{{form.orderID}}</span>
    </div>

    <div style="background: white; text-align: center; padding: 24px;">
      <v-layout row>
        <v-flex xs3></v-flex>
        <v-flex xs1>
          <div>
            <img :src="status.p1" style="max-height: 28px;" />
          </div>
          <div>
            <i class="material-icons">{{status.s1}}</i>
          </div>
          <div class="th s10">{{status.t1}}</div>
        </v-flex>
        <v-flex>
          <i class="material-icons" style="margin-top: 32px;">more_horiz</i>
        </v-flex>
        <v-flex xs1>
          <div>
            <img :src="status.p2" style="max-height: 28px;" />
          </div>
          <div>
            <i class="material-icons">{{status.s2}}</i>
          </div>
          <div class="th s10">{{status.t2}}</div>
        </v-flex>
        <v-flex>
          <i class="material-icons" style="margin-top: 32px;">more_horiz</i>
        </v-flex>
        <v-flex xs1>
          <div>
            <img :src="status.p3" style="max-height: 28px;" />
          </div>
          <div>
            <i class="material-icons">{{status.s3}}</i>
          </div>
          <div class="th s10">{{status.t3}}</div>
        </v-flex>
        <v-flex>
          <i class="material-icons" style="margin-top: 32px;">more_horiz</i>
        </v-flex>
        <v-flex xs1>
          <div>
            <img :src="status.p4" style="max-height: 28px;" />
          </div>
          <div>
            <i class="material-icons">{{status.s4}}</i>
          </div>
          <div class="th s10">{{status.t4}}</div>
        </v-flex>
        <v-flex>
          <i class="material-icons" style="margin-top: 32px;">more_horiz</i>
        </v-flex>
        <v-flex xs1>
          <div>
            <img :src="status.p5" style="max-height: 28px;" />
          </div>
          <div>
            <i class="material-icons">{{status.s5}}</i>
          </div>
          <div class="th s10">{{status.t5}}</div>
        </v-flex>
        <v-flex xs3></v-flex>
      </v-layout>
    </div>

    <div style="background: white; margin: 14px; padding: 24px;" class="th">
      <v-layout wrap>
        <v-flex xs3>
          <div class="th">ที่อยู่สำหรับการจัดส่ง</div>
          <a class="th" @click="clickEditAddress">แก้ไขที่อยู่</a>
        </v-flex>
        <v-flex xs3>
          <div class="th">{{form.name}}</div>
          <div class="th">โทร {{form.phone}}</div>
        </v-flex>
        <v-flex xs6>
          <div
            class="th"
          >{{form.ad.address}} {{form.ad.district}} {{form.ad.sub_district}} {{form.ad.province}} {{form.ad.post_code}}</div>
        </v-flex>
      </v-layout>
    </div>
    <div>
      <div class="columns" style="margin: 14px;">
        <div class="column" style="background: white; padding: 24px;">
          <div class="th">ORDER SUMMARY</div>
          <v-divider></v-divider>

          <v-layout row wrap v-for="item in orderItems" :key="item.id">
            <v-flex xs6 class="th s12">{{item.name}}</v-flex>
            <v-flex
              xs6
              class="th s12"
              style="text-align: right;"
            >฿{{formatNum(item.price * item.quantity)}}</v-flex>
          </v-layout>

          <v-divider></v-divider>

          <!-- <v-layout row wrap>
            <v-flex xs6 class="th s12">DISCOUNT</v-flex>
            <v-flex xs6 class="th s12" style="text-align: right; color: red;">-฿1000</v-flex>
          </v-layout>-->
          <v-layout row wrap>
            <v-flex xs6 class="th s12">SHIPPING</v-flex>
            <v-flex xs6 class="th s12" style="text-align: right;">FREE</v-flex>
          </v-layout>
          <v-layout row wrap>
            <v-flex xs6 class="th s12">TOTAL</v-flex>
            <v-flex xs6 class="th s12" style="text-align: right;">฿{{formatNum(total)}}</v-flex>
          </v-layout>
          <v-layout row wrap>
            <v-flex xs6 class="th s12">RESERVATION COST</v-flex>
            <v-flex xs6 class="th s12" style="text-align: right;">฿{{formatNum(reservation)}}</v-flex>
          </v-layout>

          <v-divider></v-divider>

          <v-layout row wrap>
            <v-flex xs6 class="th">TOTAL</v-flex>
            <v-flex xs6 class="th" style="text-align: right;">฿{{formatNum(reservation)}}</v-flex>
          </v-layout>
        </div>
      </div>
    </div>
    <div style="text-align: right; margin: 14px;">
      <button
        class="button color-brown"
        style="border-radius: 4px; padding: 0px 25px;"
        @click="clickConfirm()"
      >Confirm Order</button>
    </div>

    <b-modal :active.sync="isComponentPayment" has-modal-card>
      <modal-payment :valuePayment="valuePayment" v-on:childToParent="onPaymentClick"></modal-payment>
    </b-modal>

    <b-modal :active.sync="isComponentChangeAddress" has-modal-card>
      <modal-change-address :valueAddress="valueAddress" v-on:childToParent="onChangeAddressClick"></modal-change-address>
    </b-modal>

    <b-modal :active.sync="isComponentAddAddress" has-modal-card>
      <modal-add-address
        :customerID="this.userObj.customerID"
        v-on:childToParent="onAddressClick"
        style="min-width: 300px;"
      ></modal-add-address>
    </b-modal>
  </div>
</template>

<script>
import ModalPayment from "~/components/payment";
import ModalChangeAddress from "~/components/changeAddress";
import ModalAddAddress from "~/components/addAddress";

export default {
  components: {
    ModalPayment,
    ModalChangeAddress,
    ModalAddAddress
  },
  data() {
    return {
      isComponentPayment: false,
      isComponentChangeAddress: false,
      isComponentAddAddress: false,

      form: {
        orderID: "",
        name: "",
        phone: "",
        ad: {
          address: "",
          district: "",
          post_code: "",
          province: "",
          sub_district: ""
        }
      },

      reservation: 10000,

      status: {
        p1: "/icon/showroom.png",
        p2: "/icon/showroom.png",
        p3: "/icon/showroom.png",
        p4: "/icon/showroom.png",
        p5: "/icon/showroom.png",
        s1: "lens",
        s2: "panorama_fish_eye",
        s3: "panorama_fish_eye",
        s4: "panorama_fish_eye",
        s5: "panorama_fish_eye",
        t1: "NEW",
        t2: "PAID",
        t3: "CONFIRM DATE",
        t4: "TO DELIVERY",
        t5: "JOB DONE"
      },

      data1: {},
      data2: {},

      address: [],
      orderItems: [],

      valuePayment: {},
      valueAddress: {},

      userObj: JSON.parse(window.sessionStorage.getItem("user")) || {}
    };
  },

  async created() {
    console.log("created", this.$route.params.id);

    console.log("created reservation >> ", this.amountString(this.reservation));

    this.form.orderID = this.$route.params.id;
    console.log("created >> orderID", this.form.orderID);

    if (window.sessionStorage.getItem("user")) {
      console.log("created query >> ", this.$route.query);
      console.log("created params >> ", this.$route.params);

      await this.getData();
      console.log("getData form >> ", this.form);
    }
  },

  methods: {
    onPaymentClick() {
      console.log("onPaymentClick");
    },

    onChangeAddressClick(data) {
      console.log("onChangeAddressClick");

      this.form.ad = data;

      this.isComponentChangeAddress = false;
    },

    onRegisterClick(data) {
      console.log("onRegisterClick");
    },

    clickEditAddress() {
      this.valueAddress = {
        address: this.address,
        ad: this.form.ad
      };

      this.isComponentChangeAddress = true;
    },

    onAddressClick() {
      console.log("onAddressClick");
      this.isComponentAddAddress = false;
    },

    async clickConfirm() {
      console.log("clickConfirm");

      await this.$http
        .post(
          "https://dezignserves.com/encrypt2c2p/",
          {
            orderID: this.form.orderID,
            amountString: this.amountString(this.reservation),
            payment_description: "paymentOrder" + this.form.orderID,
            result_url: "http://localhost:3000/#/result"
            // result_url: "http://localhost:3000/#/order/" + this.form.orderID
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Basic YWRtaW46cXdlcjEyMzQ="
            }
          }
        )
        .then(res => {
          console.log("res >> ", res);
          if (res.status === 200) {
            console.log("res.data >> ", res.data);
            this.valuePayment = {
              amountString: res.data.amountString,
              currency: res.data.currency,
              hash_val: res.data.hash_val,
              merchant_id: res.data.merchant_id,
              orderID: res.data.orderID,
              payment_description: res.data.payment_description,
              result_url: res.data.result_url,
              version: res.data.version
            };
            this.isComponentPayment = true;
          } else {
            console.log("res.statusText >> ", res.statusText);
          }
        })
        .catch(error => {
          console.error("clickConfirm error >> ", error);
        });
    },

    async getData() {
      console.log("getData");
      this.form.name = "test test";
      this.form.phone = "089-999-9999";

      await this.getAddress();
      await this.getOrder();

      this.form.ad = this.address[0];

      console.log("getData address >> ", this.form.ad);
    },

    async getAddress() {
      console.log("getAddress");

      await this.$http
        .get("https://dezignserves.com/api/addresses/", {
          params: {
            customer: this.userObj.customerID
          },
          headers: {
            "Content-Type": "application/json",
            Authorization: "Basic YWRtaW46cXdlcjEyMzQ="
          }
        })
        .then(res => {
          if (res.status === 200) {
            console.log("res >> ", res);

            this.address = res.data;
          } else {
            console.error("res.statusText >> ", res.statusText);
          }
        })
        .catch(error => {
          console.error("clickConfirm error >> ", error);
        });
    },

    async getOrder() {
      console.log("getOrder");

      await this.$http
        .get("https://dezignserves.com/api/orderitems", {
          params: {
            order: this.form.orderID
          },
          headers: {
            "Content-Type": "application/json",
            Authorization: "Basic YWRtaW46cXdlcjEyMzQ="
          }
        })
        .then(res => {
          if (res.status === 200) {
            this.orderItems = res.data;
            console.log("getOrder order >> ", this.orderItems);
          } else {
            console.error("res.statusText >> ", res.statusText);
          }
        })
        .catch(error => {
          console.error("clickConfirm error >> ", error);
        });
    },

    formatNum(number) {
      var newNum = "";
      var oldNumStr = number + "";
      var done = 0;
      var parts = oldNumStr.split(".");
      var newPart1 = "";
      var newPart2 = parts[1];
      for (var j = parts[0].length - 1; j >= 0; j--) {
        newNum = parts[0][j] + newNum;
        done++;
        if (done % 3 == 0) newNum = "," + newNum;
      }
      if (newNum.charAt(0) === ",") {
        newNum = newNum.substr(1, newNum.length);
      }
      return newNum;
    },

    amountString(amount) {
      let price = "";
      let decimal = "00";

      let isDecimal = amount.toString().split(".").length > 1;

      if (isDecimal) {
        if (amount.toString().split(".")[1].length === 1) {
          decimal = amount.toString().split(".")[1] + "0";
        } else {
          decimal = amount.toString().split(".")[1];
        }
      }

      if (amount.toString().split(".")[0].length < 10) {
        for (let i = 0; i < 10 - amount.toString().split(".")[0].length; i++) {
          price += "0";
        }
      }
      price += amount.toString().split(".")[0];

      return price + decimal;
    }
  },

  computed: {
    total() {
      console.log("orderItems >> ", this.orderItems);
      return this.orderItems.reduce(
        (accumulator, currentValue) =>
          accumulator + currentValue.price * currentValue.quantity,
        0
      );
    }
  },

  watch: {}
};
</script>
