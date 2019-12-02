<template>
  <div style="background: #f5f3f2;">
    <div style="background: #b2ada7; color: white; text-align: center; padding: 14px;">
      <span>ORDER</span>
      <span>TRACKING #{{ form.orderID }}</span>
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
          <div style="background: white; margin: 14px; padding: 18px;" class="th">
            <v-layout wrap>
              <v-flex xs12 sm3>
                <div class="th">ที่อยู่สำหรับการจัดส่ง</div>
              </v-flex>
              <v-flex xs12 sm3>
                <div class="th">{{ form.name }}</div>
                <div class="th">โทร {{ form.phone }}</div>
              </v-flex>
              <v-flex xs12 sm6>
                <div class="th">
                  {{ form.address.address }} {{ form.address.district }}
                  {{ form.address.sub_district }} {{ form.address.province }}
                  {{ form.address.post_code }}
                </div>
              </v-flex>
            </v-layout>
          </div>
        </div>

        <section>
          <div style="margin: 14px;">
            <b>Order Detail</b>
          </div>
          <b-table :data="orderItems" style="margin: 14px;">
            <template slot-scope="props">
              <b-table-column field="pic" width="150" centered style="margin: 0px; padding: 0px;">
                <img
                  :src="
                    'https://dezignserves.com/media/' + props.row.furnitureImage
                  "
                  style="height: 50px;"
                />
              </b-table-column>

              <b-table-column
                class="s14"
                field="name"
                label="NAME"
                centered
                style="vertical-align: middle;"
              >
                <div class="th">{{ props.row.name }}</div>
              </b-table-column>

              <b-table-column
                class="s14"
                field="price"
                label="PRICE"
                centered
                style="vertical-align: middle;"
              >
                <div class="th">{{ formatNum(props.row.price) }}</div>
              </b-table-column>

              <b-table-column
                class="s14"
                field="work_date"
                label="APPOINTMENT DATE"
                centered
                style="vertical-align: middle;"
              >
                <div class="th">{{ props.row.work_date.substring(0, 10) }}</div>
                <a class="th" @click="editDate(props.row)">Edit</a>
              </b-table-column>

              <b-table-column
                class="s14"
                field="status"
                label="STATUS"
                centered
                style="vertical-align: middle;"
              >
                <div class="th">{{ props.row.statusText }}</div>
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

        <v-layout wrap>
          <v-flex xs6 md9></v-flex>
          <v-flex xs2 md1>
            <b>TOTAL</b>
          </v-flex>
          <v-flex xs2 md1 style="text-align: right;">
            <b class="s18">{{ Number(total).toLocaleString() }}</b>
            <div class="s8">THB</div>
          </v-flex>
        </v-layout>

        <div style="text-align: right; margin: 14px;" v-if="isSendPayment">
          <button
            class="button color-brown"
            style="border-radius: 4px; padding: 0px 25px;"
            @click="clickSlip()"
          >ส่งหลักฐานการโอนเงิน</button>
          <div class="th s12">ธนาคารกสิกรไทย เลขที่บัญชี 034-848151-7</div>
          <div class="th s12">ชื่อบัญชี บจก.ดีไซน์ซิงค์</div>
        </div>
      </div>
    </div>

    <v-dialog v-model="isRating" width="300" style="margin: 0px; padding: 0px;">
      <v-card style="text-align: center;">
        <v-card-title
          class="headline grey lighten-2 justify-center c-brown-black"
          primary-title
        >Rating</v-card-title>

        <v-card-text>{{ orderItem.name }}</v-card-text>

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

    <v-dialog v-model="isEditDate" width="320" height="300" style="margin: 0px; padding: 0px;">
      <div style="border: 1px solid #B2ADA7;">
        <v-card style="text-align: center;">
          <v-card-title
            class="headline grey lighten-2 justify-center c-brown-black"
            primary-title
          >นัดหมายส่งสินค้า</v-card-title>
          <v-card-actions>
            <b-datepicker inline v-model="dateEdit" :min-date="minDate"></b-datepicker>
          </v-card-actions>
          <button
            class="button btn3 color-brown"
            style="margin-bottom: 10px;"
            text
            @click="clickEditDate()"
          >Submit</button>
        </v-card>
      </div>
    </v-dialog>

    <v-dialog v-model="isSendSlip" width="320" height="300" style="margin: 0px; padding: 0px;">
      <div style="border: 1px solid #B2ADA7;">
        <v-card style="text-align: right;">
          <v-card-title class="headline grey lighten-2 justify-center c-brown-black" primary-title>
            <div class="th">อัพโหลดหลักฐานการโอนเงิน</div>
          </v-card-title>
          <v-card-actions>
            <v-layout row wrap>
              <v-flex xs12>
                <div style="text-align: center; margin: 10px;">
                  <b-field class="file">
                    <input type="file" ref="file" @change="fileChange($event)" />
                  </b-field>
                </div>
              </v-flex>
              <v-flex xs12>
                <button
                  class="button btn3 color-brown"
                  style="margin: 10px 0px 10px 10px; width: 60px;"
                  text
                  @click="isSendSlip=false"
                >ยกเลิก</button>
                <button
                  class="button btn3 color-brown"
                  style="margin: 10px; width: 60px;"
                  text
                  @click="clickSendSlip()"
                >อัพโหลด</button>
              </v-flex>
            </v-layout>
          </v-card-actions>
        </v-card>
      </div>
    </v-dialog>

    <v-dialog v-model="isThank" width="320" height="300" style="margin: 0px; padding: 0px;">
      <div style="border: 1px solid #B2ADA7;">
        <v-card style="text-align: center;">
          <v-card-title class="headline grey lighten-2 justify-center c-brown-black" primary-title>
            <div class="th">อัพโหลดสำเร็จ</div>
          </v-card-title>
          <v-card-actions>
            <v-layout row wrap>
              <v-flex xs12>
                <div
                  class="th"
                >ขอบคุณที่ใช้บริการ เราจะดำเนินการตรวจสอบ เมื่อสำเร็จจะติดต่อกลับไปทางอีเมล์ที่สมัคร</div>
              </v-flex>
              <v-flex xs12>
                <button
                  class="button btn3 color-brown"
                  style="margin: 10px 0px 10px 10px; width: 60px;"
                  text
                  @click="isThank=false"
                >OK</button>
              </v-flex>
            </v-layout>
          </v-card-actions>
        </v-card>
      </div>
    </v-dialog>
  </div>
</template>

<script>
import StarRating from "vue-star-rating";
import moment from "moment";

export default {
  components: {
    StarRating
  },
  data() {
    const today = new Date();
    return {
      file: null,
      isSendSlip: false,
      isThank: false,
      minDate: new Date(today.getFullYear(), today.getMonth(), today.getDate()),
      dateEdit: new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate()
      ),
      dateEditID: "",
      isEditDate: false,
      form: {
        orderID: "",
        name: "",
        phone: "",
        address: {
          id: "",
          address: "",
          district: "",
          post_code: "",
          province: "",
          sub_district: ""
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
    if (this.userObj.supplierID || this.userObj.customerID) {
      this.form.orderID = this.$route.params.id;
      await this.getOrderItem();
      await this.getOrder();
      await this.getAddress();
    } else {
      this.$router.push("/");
    }
  },

  methods: {
    stringToDate(_date, _format, _delimiter) {
      var formatLowerCase = _format.toLowerCase();
      var formatItems = formatLowerCase.split(_delimiter);
      var dateItems = _date.split(_delimiter);
      var monthIndex = formatItems.indexOf("mm");
      var dayIndex = formatItems.indexOf("dd");
      var yearIndex = formatItems.indexOf("yyyy");
      var month = parseInt(dateItems[monthIndex]);
      month -= 1;
      var formatedDate = new Date(
        dateItems[yearIndex],
        month,
        dateItems[dayIndex]
      );
      return formatedDate;
    },
    async clickEditDate() {
      if (this.dateEdit === "") {
        return;
      }
      console.log("dateEditID", this.dateEditID);
      console.log("dateEdit", this.dateEdit);
      console.log(
        "dateEdit",
        this.dateEdit.getFullYear() +
          "-" +
          (this.dateEdit.getMonth() + 1) +
          "-" +
          this.dateEdit.getDate()
      );

      await this.$http
        .post(
          "https://dezignserves.com/changeitemdate/",
          {
            orderItemID: this.dateEditID,
            orderItemDate:
              this.dateEdit.getFullYear() +
              "-" +
              (this.dateEdit.getMonth() + 1) +
              "-" +
              this.dateEdit.getDate()
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Basic YWRtaW46cXdlcjEyMzQ="
            }
          }
        )
        .then(res => {
          console.log("clickEditDate", res);

          this.orderItems = this.orderItems.map(item => {
            let rItem = item;

            if (item.id === this.dateEditID) {
              rItem.work_date =
                this.dateEdit.getFullYear() +
                "-" +
                (this.dateEdit.getMonth() + 1) +
                "-" +
                this.dateEdit.getDate();
            }
            return rItem;
          });

          this.isEditDate = false;
        })
        .catch(error => {
          console.error("clickEditDate error >> ", error);
        });
    },

    editDate(item) {
      console.log("item", item);
      this.dateEdit = new Date(item.work_date);
      this.isEditDate = true;
      this.dateEditID = item.id;
    },

    clickRating(orderItem) {
      // console.log("clickRating orderItem", orderItem);
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
          // console.log("postSatisfactions", res);
        })
        .catch(error => {
          console.error("postSatisfactions error >> ", error);
        });
    },

    clickReceived(orderItemID) {
      this.$dialog.confirm({
        message: "ยืนยันว่าได้รับของเรียบร้อยแล้ว",
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
          // console.log("updateStatus", res);
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
            // console.log("updateStatus", res.data);
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
            this.orderItems = res.data.map(item => {
              let rItem = {};
              rItem.id = item.id;
              rItem.name = item.name;
              rItem.supplierid = item.supplierid;
              rItem.work_date = item.work_date;
              rItem.furniture = item.furniture;
              rItem.furnitureImage = item.furnitureImage;
              rItem.price = item.price;
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

            if (this.userObj.supplierID) {
              this.orderItems = this.orderItems.filter(item => {
                return item.supplierid === this.userObj.supplierID + "";
              });
            }
          } else {
            console.error("getOrderItem >> ", res.statusText);
          }
        })
        .catch(error => {
          console.error("getOrderItem error >> ", error);
        });
    },

    clickSlip() {
      this.file = null;
      this.isSendSlip = true;
    },
    fileChange(event) {
      this.file = event.target.files[0];
    },

    async clickSendSlip() {
      // window.open("https://www.messenger.com/t/dexcoro.official", "_blank");

      if (this.file === null) {
        return;
      }
      let datetime = new Date();
      let now = moment(datetime).format("YYYYMMDDTHH:MM:SS");

      let formData = new FormData();
      formData.append(
        "file",
        this.file,
        this.form.orderID + "_" + now + ".jpg"
      );
      formData.append("orderID", this.form.orderID);

      await this.$http
        .post("https://dezignserves.com/paymentupload/", formData, {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Basic YWRtaW46cXdlcjEyMzQ="
          }
        })
        .then(res => {
          if (res.status === 200) {
            this.isSendSlip = false;
            this.isThank = true;
          } else {
            console.error("clickSendSlip >> ", res.statusText);
          }
        })
        .catch(error => {
          console.error("clickSendSlip error >> ", error);
        });
    },

    async getOrder() {
      await this.$http
        .get("https://dezignserves.com/api/orders/", {
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
            // console.log("getOrder", res.data);
            this.form.phone = res.data[0].customertel;
            this.form.address.id = res.data[0].address;
          } else {
            console.error("getOrder >> ", res.statusText);
          }
        })
        .catch(error => {
          console.error("getOrder error >> ", error);
        });
    },

    async getAddress() {
      await this.$http
        .get(
          "https://dezignserves.com/api/addresses/" +
            this.form.address.id +
            "/",
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Basic YWRtaW46cXdlcjEyMzQ="
            }
          }
        )
        .then(res => {
          // console.log("getAddress res", res);
          if (res.status === 200) {
            this.form.address = res.data;
          } else {
            console.error("getAddress >> ", res.statusText);
          }
        })
        .catch(error => {
          console.error("getAddress error >> ", error);
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
    }
  },

  computed: {
    total() {
      console.log("orderItems", this.orderItems);
      return this.orderItems.reduce(
        (accumulator, currentValue) => accumulator + currentValue.price,
        0
      );
    }
  },

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
