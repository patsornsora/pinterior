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
                <div class="th">{{props.row.statusText}}</div>
              </b-table-column>

              <b-table-column
                class="s14"
                field="received"
                centered
                width="60"
                style="vertical-align: middle;"
                v-show="userObj.customerID"
              >
                <button
                  v-show="props.row.status === 'Paid'"
                  class="button color-brown th"
                  style="border-radius: 4px; padding: 0px 25px;"
                  @click="clickReceived(props.row.id)"
                >ได้รับสินค้าเรียบร้อยแล้ว</button>
                <button
                  v-show="props.row.status === 'WaitForReview'"
                  class="button color-brown th"
                  style="border-radius: 4px; padding: 0px 25px;"
                  @click="clickRating(props.row)"
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

    <v-dialog v-model="isRating" width="300" style="margin: 0px; padding: 0px;">
      <v-card style="text-align: center;">
        <v-card-title
          class="headline grey lighten-2 justify-center c-brown-black"
          primary-title
        >Rating</v-card-title>

        <v-card-text>{{orderItem.name}}</v-card-text>

        <div style="padding: 0px;">
          <div class="columns is-mobile">
            <div class="column is-one-quarter" style="text-align: right; margin-top: 8px;">Delivery</div>
            <div class="column">
              <star-rating v-model="rating.delivery" v-bind:star-size="20" v-bind:increment="1"></star-rating>
            </div>
          </div>
          <div class="columns is-mobile">
            <div class="column is-one-quarter" style="text-align: right; margin-top: 8px;">Quality</div>
            <div class="column">
              <star-rating v-model="rating.quality" v-bind:star-size="20" v-bind:increment="1"></star-rating>
            </div>
          </div>
          <div class="columns is-mobile">
            <div class="column is-one-quarter" style="text-align: right; margin-top: 8px;">Service</div>
            <div class="column">
              <star-rating v-model="rating.service" v-bind:star-size="20" v-bind:increment="1"></star-rating>
            </div>
          </div>
        </div>

        <div style="margin: 12px; backgound: #b0b0b3;">
          <v-textarea outlined rows="2" label="Comment" v-model="rating.comment"></v-textarea>
        </div>

        <v-card-actions>
          <v-spacer></v-spacer>
          <button
            class="button btn3 color-brown"
            style="margin: 6px 10px 6px 0px;"
            text
            @click="isRating = false"
          >Cancel</button>
          <button
            class="button btn3 color-brown"
            style="margin: 6px 10px 6px 0px;"
            text
            @click="postRateAndStatus()"
          >Submit</button>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import StarRating from "vue-star-rating";

export default {
  components: {
    StarRating
  },
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
      orderItem: {},
      isSendPayment: false,
      isRating: false,
      rating: { delivery: 5, quality: 5, service: 5, comment: "" },

      // userObj: "",
      userObj: JSON.parse(window.sessionStorage.getItem("user")) || {}
    };
  },

  async created() {
    console.log("created", this.userObj);
    if (this.userObj.supplierID || this.userObj.customerID) {
      this.form.orderID = this.$route.params.id;
      await this.getOrderItem();
    } else {
      this.$router.push("/");
    }
  },

  methods: {
    clickRating(orderItem) {
      console.log("clickRating orderItem", orderItem);
      this.orderItem = orderItem;
      this.isRating = true;
    },

    async postRateAndStatus() {
      await this.postSatisfactions();
      await this.updateStatus(this.orderItem.id, "Done");
      this.isRating = false;
    },

    async postSatisfactions() {
      await this.$http
        .post(
          "https://dezignserves.com/api/satisfactions/",
          {
            supplier: this.orderItem.supplierid,
            furniture: this.orderItem.furniture,
            orderitem: this.orderItem.id,
            customer: this.userObj.customerID,
            quantity: this.rating.quality,
            delivery: this.rating.delivery,
            service: this.rating.service,
            comment: this.rating.comment
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Basic YWRtaW46cXdlcjEyMzQ="
            }
          }
        )
        .then(res => {
          console.log("postSatisfactions", res);
        })
        .catch(error => {
          console.error("postSatisfactions error >> ", error);
        });
    },

    clickReceived(orderItemID) {
      this.$dialog.confirm({
        message: "Have you confirmed that the product has been received?",
        cancelText: "CANCEL",
        type: "is-success",
        hasIcon: true,
        onConfirm: () => {
          this.updateStatus(orderItemID, "WaitForReview");
        }
      });
    },

    async updateStatus(orderItemID, status) {
      await this.$http
        .post(
          "https://dezignserves.com/changeitemstatus/",
          {
            orderItemID: orderItemID,
            orderItemStatus: status
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Basic YWRtaW46cXdlcjEyMzQ="
            }
          }
        )
        .then(res => {
          console.log("updateStatus", res);
          if (res.status === 200) {
            this.orderItems = this.orderItems.map(item => {
              let rItem = item;

              if (item.id === orderItemID) {
                rItem.status = status;
                rItem.statusText = status === "Done" ? "สำเร็จ" : "ติดตั้งแล้ว";
              }
              return rItem;
            });

            if (
              this.orderItems.filter(item => {
                return item.statusText === "รอชำระเงิน";
              }).length > 0
            ) {
              this.isSendPayment = true;
            } else {
              this.isSendPayment = false;
            }
            console.log("updateStatus", res.data);
          } else {
            console.error("updateStatus not 200 >> ", res.statusText);
          }
        })
        .catch(error => {
          console.error("updateStatus error >> ", error);
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
              rItem.supplierid = item.supplierid;
              rItem.work_date = item.work_date;
              rItem.furniture = item.furniture;
              rItem.status = item.status;

              switch (item.status) {
                case "Operation":
                  rItem.statusText = "รอชำระเงิน";
                  break;
                case "Prepaid":
                  rItem.statusText = "รอชำระเงิน";
                  break;
                case "Order":
                  rItem.statusText = "รอชำระเงิน";
                  break;
                case "Paid":
                  rItem.statusText = "รอติดตั้ง";
                  break;
                case "WaitForReview":
                  rItem.statusText = "ติดตั้งแล้ว";
                  break;
                case "Done":
                  rItem.statusText = "ติดตั้งแล้ว";
                  break;
                default:
                  rItem.statusText = item.status;
                  break;
              }
              return rItem;
            });

            if (
              this.orderItems.filter(item => {
                return item.statusText === "รอชำระเงิน";
              }).length > 0
            ) {
              this.isSendPayment = true;
            }

            console.log("this.orderItems", this.orderItems);
          } else {
            console.error("res.statusText >> ", res.statusText);
          }
        })
        .catch(error => {
          console.error("clickConfirm error >> ", error);
        });
    },

    async getOrder() {
      await this.$http
        .get("https://dezignserves.com/api/order/", {
          params: {
            id: this.form.orderID
          },
          headers: {
            "Content-Type": "application/json",
            Authorization: "Basic YWRtaW46cXdlcjEyMzQ="
          }
        })
        .then(res => {
          if (res.status === 200) {
            console.log("res.data", res.data);
            res.data.customer;
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
/* .v-dialog {
  box-shadow: none;
} */
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
