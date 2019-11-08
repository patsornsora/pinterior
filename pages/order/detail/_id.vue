<template>
  <div style="background: #f5f3f2;">
    <div style="background: #b2ada7; color: white; text-align: center; padding: 14px;">
      <span>ORDER</span>
      <span>TRACKING #{{form.orderID}}</span>
    </div>
    <v-layout row wrap>
      <v-flex xs12 md6>
        <div class="s12" style="text-align: left;">
          <v-btn icon @click="$router.go(-1)">
            <v-icon>keyboard_arrow_left</v-icon>
          </v-btn>
          <a class="has-text-black" @click="$router.go(-1)">BACK</a>
        </div>
      </v-flex>
    </v-layout>

    <div class="columns">
      <div class="column is-12">
        <div style="margin-bottom: 10px;">
          <div style="background: white; margin: 14px; padding: 24px;" class="th">
            <v-layout wrap>
              <v-flex xs3>
                <div class="th">ที่อยู่สำหรับการจัดส่ง</div>
              </v-flex>
              <v-flex xs3>
                <div class="th">{{form.name}}</div>
                <div class="th">โทร {{form.phone}}</div>
              </v-flex>
              <v-flex xs6>
                <div
                  class="th"
                >{{form.address.address}} {{form.address.district}} {{form.address.sub_district}} {{form.address.province}} {{form.address.post_code}}</div>
              </v-flex>
            </v-layout>
          </div>
        </div>

        <!-- <div style="margin: 0px 14px;">
          <div style="background-size: contain;">
            <v-img
              :src="form.src"
              style="width: 100%; height: 300px; padding: 14px; background-size: contain;"
              :aspect-ratio="1"
              target="_blank"
            ></v-img>
          </div>
        </div>-->

        <section>
          <div style="margin: 14px;">
            <b>Order Detail</b>
          </div>
          <b-table :data="orderItems" style="margin: 14px;">
            <template slot-scope="props">
              <b-table-column
                class="s14"
                field="name"
                label="NAME"
                centered
                style="vertical-align: middle;"
              >
                <div class="th">{{props.row.name}}</div>
              </b-table-column>

              <b-table-column
                class="s14"
                field="work_date"
                label="APPOINTMENT DATE"
                centered
                style="vertical-align: middle;"
              >
                <div class="th">{{props.row.work_date.substring(0, 10)}}</div>
              </b-table-column>

              <b-table-column
                class="s14"
                field="status"
                label="STATUS"
                centered
                style="vertical-align: middle;"
              >
                <div class="th">{{props.row.status}}</div>
              </b-table-column>

              <b-table-column
                class="s14"
                field="received"
                centered
                style="vertical-align: middle;"
                v-if="userObj.customerID"
              >
                <button
                  v-if="props.row.status !== 'WaitForReview' && props.row.status !== 'Done' && props.row.status !== 'Cancel'"
                  class="button color-brown th"
                  style="border-radius: 4px; padding: 0px 25px;"
                  @click="clickReceived()"
                >ได้รับสินค้าเรียบร้อยแล้ว</button>
                <button
                  v-if="props.row.status === 'WaitForReview'"
                  class="button color-brown th"
                  style="border-radius: 4px; padding: 0px 25px;"
                  @click="clickRating()"
                >ให้คะแนน</button>
              </b-table-column>
            </template>
          </b-table>
        </section>
        <div style="text-align: right; margin: 14px;" v-if="isSendPayment">
          <button
            class="button color-brown"
            style="border-radius: 4px; padding: 0px 25px;"
            @click="clickConfirm()"
          >ส่งหลักฐานการโอนเงิน</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        orderID: "orderID",
        name: "name",
        phone: "phone",
        address: {
          address: "address",
          district: "district",
          post_code: "post_code",
          province: "province",
          sub_district: "sub_district"
        },
        src: "room/per-riverdale.png"
      },
      orderItems: [],
      isSendPayment: false,

      userObj: JSON.parse(window.sessionStorage.getItem("user")) || {}
    };
  },

  async created() {
    console.log("created", this.userObj);
    this.form.orderID = this.$route.params.id;
    await this.getOrderItem();
  },

  methods: {
    async clickReceived(data) {
      console.log("clickReceived", data);
      this.$dialog.confirm({
        message: "Have you confirmed that the product has been received?",
        cancelText: "CANCEL",
        type: "is-success",
        hasIcon: true,
        onConfirm: () => {
          this.updateStatus();
        }
      });
    },

    async updateStatus() {
      await this.$http
        .post(
          "https://dezignserves.com/changestatus/",
          {
            orderID: this.form.orderID,
            orderStatus: "Operation100",
            orderItemStatus: "Paid"
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Basic YWRtaW46cXdlcjEyMzQ="
            }
          }
        )
        .then(res => {
          if (res.status === 200) {
            this.orderItems = res.data;

            console.log("res.data", res.data);
            this.orderItems = res.data.map(item => {
              let rItem = {};
              rItem.id = item.id;
              rItem.name = item.name;
              rItem.work_date = item.work_date;
              switch (item.status) {
                case "Operation":
                  rItem.status = "ยังไม่ชำระเงิน";
                  break;
                case "Prepaid":
                  rItem.status = "ยังไม่ชำระเงิน";
                  break;
                case "Paid":
                  rItem.status = "จ่ายแล้ว";
                  break;
                default:
                  rItem.status = item.status;
                  break;
              }

              return rItem;
            });

            console.log("getOrderItem", res.data);
          } else {
            console.error("res.statusText >> ", res.statusText);
          }
        })
        .catch(error => {
          console.error("clickConfirm error >> ", error);
        });
    },

    async getOrderItem() {
      await this.$http
        .get("https://dezignserves.com/api/orderitems/", {
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
            console.log("res.data", res.data);
            this.orderItems = res.data.map(item => {
              let rItem = {};
              rItem.id = item.id;
              rItem.name = item.name;
              rItem.work_date = item.work_date;

              console.log("item.status", item.status);
              switch (item.status) {
                case "Operation":
                  rItem.status = "รอชำระเงิน";
                  break;
                case "Prepaid":
                  rItem.status = "รอชำระเงิน";
                  break;
                case "Order":
                  rItem.status = "รอชำระเงิน";
                  break;
                case "Paid":
                  rItem.status = "รอติดตั้ง";
                  break;
                default:
                  rItem.status = item.status;
                  break;
              }
              return rItem;
            });

            if (
              this.orderItems.filter(item => {
                return item.status === "รอชำระเงิน";
              }).length > 0
            ) {
              this.isSendPayment = true;
            }
          } else {
            console.error("res.statusText >> ", res.statusText);
          }
        })
        .catch(error => {
          console.error("clickConfirm error >> ", error);
        });
    },

    async getAddress() {
      console.log("getAddress");

      await this.$http
        .get(
          "https://dezignserves.com/api/customerdetails/" +
            this.userObj.customerID,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Basic YWRtaW46cXdlcjEyMzQ="
            }
          }
        )
        .then(res => {
          if (res.status === 200) {
            this.address = res.data.addAll.filter(
              item => item.working === true
            );
            console.log("address >> ", this.address);
            this.form.address = this.address[0];

            window.sessionStorage.setItem("address", this.preAdd.id);
          } else {
            console.error("res.statusText >> ", res.statusText);
          }
        })
        .catch(error => {
          console.error("clickConfirm error >> ", error);
        });
    }
  },

  computed: {},

  mounted() {},

  watch: {}
};
</script>

<style>
.v-dialog {
  box-shadow: none;
}
.vr-display {
  font-family: sans-serif;
  font-size: 0.8em;
  border-bottom: 1px solid #888;
}
.vr-display h1 {
  font-size: 1.2em;
}
.vr-display .float-array {
  font-family: monospace;
}
</style>
