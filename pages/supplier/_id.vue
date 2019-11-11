<template>
  <div>
    <section>
      <b-tabs position="is-right">
        <!-- <b-tab-item label="Request" icon="calendar-edit">
          <div>
            <div>
              <div>Appointment Request</div>
              <div></div>
            </div>
          </div>
        </b-tab-item>-->

        <b-tab-item label="My Tasks" icon="calendar">
          <div v-if="orderListToday.length > 0">
            <div style="margin: 20px;">
              <b>Today</b>
            </div>
            <div
              style="margin: 20px; padding: 0px;"
              v-for="(item, index) in orderListToday"
              :key="index"
              @click="clickOderDetail(item.id)"
            >
              <a>
                <v-card>
                  <div class="columns is-mobile" style="margin: 0px; padding: 0px;">
                    <div
                      class="column"
                      style="padding: 0px; width: 10%; min-width: 50px; max-width: 120px;"
                    >
                      <div
                        style="background-color: #DBC7B4; padding: 10px; text-align: center; height: 100%;"
                      >
                        <b>{{item.time}}</b>
                      </div>
                    </div>
                    <div class="column" style="padding: 10px; ">
                      <v-layout row wrap>
                        <v-flex xs12>
                          <div>
                            <b>{{item.todo}}</b>
                            , {{item.title}}
                          </div>
                        </v-flex>
                        <v-flex xs12 sm5>
                          <div>{{item.address}}</div>
                        </v-flex>
                        <v-flex xs12 sm4>
                          <div>
                            <div>
                              <i
                                aria-hidden="true"
                                class="v-icon v-icon--link material-icons theme--light"
                                style="margin: 0px 8px;"
                                read-only
                              >phone</i>
                              {{item.phone}}
                            </div>
                          </div>
                        </v-flex>
                        <v-flex xs12 sm2>
                          <div id="block_container">
                            <div
                              :style="{'background': item.statusColor}"
                              style="margin: 7px; width: 10px; height: 10px; -moz-border-radius: 5px; -webkit-border-radius: 5px; border-radius: 5px;"
                            ></div>
                            <div>{{item.status}}</div>
                          </div>
                        </v-flex>
                      </v-layout>
                    </div>
                  </div>
                </v-card>
              </a>
            </div>
          </div>
          <div v-if="orderList.length > 0">
            <div style="margin: 20px;">
              <b>Upcoming</b>
            </div>
            <div
              style="margin: 20px; padding: 0px;"
              v-for="(item, index) in orderList"
              :key="index"
              @click="clickOderDetail(item.id)"
            >
              <v-card>
                <a>
                  <div class="columns is-mobile" style="margin: 0px; padding: 0px;">
                    <div
                      class="column"
                      style="padding: 0px; width: 10%; min-width: 50px; max-width: 120px;"
                    >
                      <div
                        style="background-color: #DBC7B4; padding: 10px; text-align: center; height: 100%;"
                      >
                        <b>{{item.date}}</b>
                      </div>
                    </div>
                    <div class="column" style="padding: 10px; ">
                      <v-layout row wrap>
                        <v-flex xs12>
                          <div>
                            <b>{{item.todo}}</b>
                            , {{item.title}}
                          </div>
                        </v-flex>
                        <v-flex xs12 sm5>
                          <div>{{item.address}}</div>
                        </v-flex>
                        <v-flex xs12 sm4>
                          <div>
                            <div>
                              <i
                                aria-hidden="true"
                                class="v-icon v-icon--link material-icons theme--light"
                                style="margin: 0px 8px;"
                                read-only
                              >phone</i>
                              {{item.phone}}
                            </div>
                          </div>
                        </v-flex>
                        <v-flex xs12 sm2>
                          <div id="block_container">
                            <div
                              :style="{'background': item.statusColor}"
                              style="margin: 7px; width: 10px; height: 10px; -moz-border-radius: 5px; -webkit-border-radius: 5px; border-radius: 5px;"
                            ></div>
                            <div>{{item.status}}</div>
                          </div>
                        </v-flex>
                      </v-layout>
                    </div>
                  </div>
                </a>
              </v-card>
            </div>
          </div>
        </b-tab-item>

        <b-tab-item label="Rating" icon="star">
          <div>
            <div class="columns">
              <div class="column" style="padding-rigth: 5px;">
                <v-card>
                  <div style="background-color: #DBC7B4; padding: 10px;">Rating Snapshots</div>
                  <div
                    style="margin: 8px; text-align: center; adding-bottom: 12px;"
                  >Select the row below to filter reviews</div>
                  <div>
                    <div id="block_container" v-for="(item, index) in ratingAll" :key="index">
                      <div style="margin: 10px 0px 10px 10px;">{{item.rate}}</div>
                      <i
                        aria-hidden="true"
                        class="v-icon v-icon--link material-icons theme--light"
                        style="margin: 8px;"
                      >star</i>
                      <div
                        class="w3-light-grey w3-round-xlarge"
                        style="width: 70%; margin: 10px 0px;"
                      >
                        <div
                          class="w3-container w3-yellow w3-round-xlarge"
                          :style="{'width': item.sumPer + '%'}"
                        >.</div>
                      </div>
                      <div style="margin: 10px 10px;">{{item.sum}}</div>
                    </div>
                  </div>
                  <div style="padding: 10px 20px;">
                    <b-field>
                      <b-select placeholder="Select a name" v-model="valueFilter">
                        <option
                          v-for="item in filter"
                          :value="item.name"
                          :key="item.name"
                        >{{ item.name }}</option>
                      </b-select>
                    </b-field>
                  </div>
                  <!-- <div class="column">
                      <a>clear filter</a>
                  </div>-->
                  <!-- <div id="block_container" style="text-align: right;">
                    <div>
                      <b-field>
                        <b-select placeholder="Select a name" v-model="valueFilter">
                          <option
                            v-for="item in filter"
                            :value="item.name"
                            :key="item.name"
                          >{{ item.name }}</option>
                        </b-select>
                      </b-field>
                    </div>
                    <div style="text-align: right; padding: 10px;">
                      <a>clear filter</a>
                    </div>
                  </div>-->
                </v-card>
              </div>
              <div class="column" style="padding-left: 5px;">
                <v-card>
                  <div style="background-color: #DBC7B4; padding: 10px;">Average Customer Rating</div>
                  <div style="padding-bottom: 12px;">
                    <div class="columns is-mobile" style="right; margin-top: 12px;">
                      <div
                        class="column is-one-quarter"
                        style="text-align: right; margin-top: 8px;"
                      >Overall</div>
                      <div class="column">
                        <star-rating
                          v-model="rate"
                          v-bind:star-size="20"
                          v-bind:increment="0.01"
                          read-only
                        ></star-rating>
                      </div>
                    </div>
                    <div v-for="(item, index) in ratingAvg" :key="index">
                      <div id="block_container" style="margin: 10px 20px;">
                        <div style="background-size: contain;">
                          <v-img
                            :src="item.src"
                            style="width: 100%; height: 30px; padding: 14px; background-size: contain;"
                            :aspect-ratio="1"
                            target="_blank"
                          ></v-img>
                        </div>
                        <div style="margin-left: 12px;">{{item.name}}</div>
                      </div>
                      <div id="block_container">
                        <div
                          class="w3-light-grey w3-round-xlarge"
                          style="width: 80%; margin: 10px 0px 10px 20px;"
                        >
                          <div
                            class="w3-container w3-yellow w3-round-xlarge"
                            :style="{'width': item.per + '%'}"
                          >.</div>
                        </div>
                        <div style="margin: 10px 10px;">{{item.rate}}</div>
                      </div>
                    </div>
                  </div>
                </v-card>
              </div>
            </div>
            <div v-show="rateList.length > 0">
              <v-card style="padding-tottom: 0px;">
                <div style="background-color: #DBC7B4; padding: 10px;">Customer Comment</div>
                <div v-for="item in rateList" :value="item.name" :key="item.name">
                  <div style="margin: 0px 8px;">
                    <div class="columns is-mobile">
                      <div
                        class="column is-one-quarter"
                        style="text-align: right; margin-top: 8px;"
                      >Delivery</div>
                      <div class="column">
                        <star-rating
                          v-model="item.delivery"
                          v-bind:star-size="20"
                          v-bind:increment="1"
                          read-only
                        ></star-rating>
                      </div>
                    </div>
                    <div class="columns is-mobile">
                      <div
                        class="column is-one-quarter"
                        style="text-align: right; margin-top: 8px;"
                      >Quality</div>
                      <div class="column">
                        <star-rating
                          v-model="item.quality"
                          v-bind:star-size="20"
                          v-bind:increment="1"
                          read-only
                        ></star-rating>
                      </div>
                    </div>
                    <div class="columns is-mobile">
                      <div
                        class="column is-one-quarter"
                        style="text-align: right; margin-top: 8px;"
                      >Service</div>
                      <div class="column">
                        <star-rating
                          v-model="item.service"
                          v-bind:star-size="20"
                          v-bind:increment="1"
                          read-only
                        ></star-rating>
                      </div>
                    </div>
                    <!-- <div class="column" style="text-align: right;">Order: #{{item.orderitem}}</div> -->
                  </div>
                  <div style="margin: 12px 20px;">
                    <b>{{item.customerName}}</b>
                  </div>
                  <div style="margin: 12px 20px;">{{item.comment}}</div>
                  <v-divider></v-divider>
                </div>
              </v-card>
            </div>
          </div>
        </b-tab-item>
      </b-tabs>
    </section>
  </div>
</template>

// Wokenwood
// Pass4sup

<script>
import SweetCalendar from "vue-sweet-calendar";
import "vue-sweet-calendar/dist/SweetCalendar.css";

import StarRating from "vue-star-rating";
import moment from "moment";

export default {
  components: {
    StarRating
  },
  data() {
    return {
      rate: 5,
      ratingAll: [],
      ratingAvg: [],
      rateList: [],
      rateListFilter: [],
      valueFilter: "delivery",
      filter: [
        {
          name: "delivery"
        },
        {
          name: "quality"
        },
        {
          name: "service"
        }
      ],

      orderListToday: [],

      orderList: [],

      today: moment(Date.now()).format("YYYY-MM-DD"),
      userObj: JSON.parse(window.sessionStorage.getItem("user")) || {}
    };
  },

  async created() {
    if (this.userObj.supplierID) {
      this.getRating();
      this.getSupplierOrder(this.userObj.supplierID);
    } else {
      this.$router.push("/");
    }
  },
  methods: {
    clickOderDetail(orderID) {
      console.log("clickOderDetail");
      this.$router.push("/order/detail/" + orderID);
    },
    getRatingSnapshots(fil) {
      console.log("getRatingSnapshots", this.rateList);
      return this.rateList.reduce(
        (accumulator, item) => {
          switch (item[fil]) {
            case 5:
              if (item[fil] in accumulator) {
                accumulator[0].sum++;
              } else {
                accumulator[0].sum = 1;
              }
              break;
            case 4:
              if (item[fil] in accumulator) {
                accumulator[1].sum++;
              } else {
                accumulator[1].sum = 1;
              }
              break;
            case 3:
              if (item[fil] in accumulator) {
                accumulator[2].sum++;
              } else {
                accumulator[2].sum = 1;
              }
              break;
            case 2:
              if (item[fil] in accumulator) {
                accumulator[3].sum++;
              } else {
                accumulator[3].sum = 1;
              }
              break;
            case 1:
              if (item[fil] in accumulator) {
                accumulator[4].sum++;
              } else {
                accumulator[4].sum = 1;
              }
              break;
          }
          return accumulator;
        },
        [
          {
            rate: 5,
            sum: 0,
            sumPer: 0
          },
          {
            rate: 4,
            sum: 0,
            sumPer: 0
          },
          {
            rate: 3,
            sum: 0,
            sumPer: 0
          },
          {
            rate: 2,
            sum: 0,
            sumPer: 0
          },
          {
            rate: 1,
            sum: 0,
            sumPer: 0
          }
        ]
      );
    },

    async getSupplierOrder(supplierID) {
      console.log("getSupplierOrder", supplierID);
      await this.$http
        .post(
          "https://dezignserves.com/supplierorder/",
          {
            supplierID: supplierID
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
            let item = res.data;
            console.log("item", item);
            for (let i = 0; item.length > i; i++) {
              for (let j = 0; item[i].items.length > j; j++) {
                let rItem = {};

                rItem.date = moment(item[i].items[j].work_date).format(
                  "YYYY-MM-DD"
                );
                rItem.time = moment(item[i].items[j].work_date).format("HH:mm");

                switch (item[i].items[j].work) {
                  case "3":
                    rItem.todo = "ส่งโคมไฟติดผนัง";
                    break;
                  case "4":
                    rItem.todo = "ส่งโคมไฟลอยตัว";
                    break;
                  case "5":
                    rItem.todo = "ทาสี TOA Duraclean";
                    break;
                  case "6":
                    rItem.todo = "ติด Wall paper";
                    break;
                  case "7":
                    rItem.todo = "ส่งเฟอร์นิเจอร์ Built-In";
                    break;
                  case "8":
                    rItem.todo = "ส่งเฟอร์นิเจอร์ลอยตัว";
                    break;
                  case "9":
                    rItem.todo = "ติดตั้งม่าน";
                    break;
                }

                if (item[i].status === "Done") {
                  rItem.status = "Complete";
                  rItem.statusColor = "#00CC99";
                } else {
                  rItem.status = "To Delivery";
                  rItem.statusColor = "#FFCC66";
                }

                rItem.id = item[i].order_id;
                rItem.address = item[i].customer_addr;
                rItem.phone = item[i].customer_phone;
                rItem.title = item[i].items[j].title;
                console.log("today", this.today + "||" + rItem.date);
                console.log(
                  "today",
                  moment(this.today) + "||" + moment(rItem.date)
                );
                console.log("today", this.today === rItem.date);
                if (moment(this.today) < moment(rItem.date)) {
                  this.orderList.push(rItem);
                } else if (this.today === rItem.date) {
                  this.orderListToday.push(rItem);
                }
              }

              this.sortDateAndTime(this.orderList);
              this.sortDateAndTime(this.orderListToday);
              console.log("orderList", this.orderList);
              console.log("orderListToday", this.orderListToday);
            }
          } else {
            console.error(
              "getSupplierOrder status is not 200 >> ",
              res.statusText
            );
          }
        })
        .catch(error => {
          console.error("getSupplierOrder catch >> ", error);
        });
    },
    sortDateAndTime(lists) {
      lists
        .sort((a, b) => {
          const dateA = a.date.toUpperCase();
          const dateB = b.date.toUpperCase();

          let comparison = 0;
          if (dateA > dateB) {
            comparison = 1;
          } else if (dateA < dateB) {
            comparison = -1;
          }
          return comparison;
        })
        .sort((a, b) => {
          const timeA = a.time.toUpperCase();
          const timeB = b.time.toUpperCase();

          let comparison = 0;
          if (timeA > timeB) {
            comparison = 1;
          } else if (timeA < timeB) {
            comparison = -1;
          }
          return comparison;
        });
    },
    async getRating() {
      await this.$http
        .get("https://dezignserves.com/api/satisfactions/", {
          params: {
            supplier: this.userObj.supplierID
          },
          headers: {
            "Content-Type": "application/json",
            Authorization: "Basic YWRtaW46cXdlcjEyMzQ="
          }
        })
        .then(res => {
          if (res.status === 200) {
            console.log("getRating", res.data);

            this.rateList = res.data.map(item => {
              let rItem = {};
              rItem.id = item.id;
              rItem.customer = item.customer;
              rItem.customerName = item.customerName;
              rItem.supplier = item.supplier;
              rItem.supplierName = item.supplierName;
              rItem.furniture = item.furniture;
              rItem.furnitureName = item.furnitureName;
              rItem.orderitem = item.orderitem;
              rItem.delivery = item.delivery;
              rItem.quality = item.quantity;
              rItem.service = item.service;
              rItem.comment = item.comment;
              return rItem;
            });

            let delivery =
              this.rateList.reduce((accumulator, item) => {
                return accumulator + item.delivery;
              }, 0) / this.rateList.length;

            let quality =
              this.rateList.reduce((accumulator, item) => {
                return accumulator + item.quality;
              }, 0) / this.rateList.length;

            let service =
              this.rateList.reduce((accumulator, item) => {
                return accumulator + item.service;
              }, 0) / this.rateList.length;

            this.rate = (delivery + quality + service) / 3;

            this.ratingAvg = [
              {
                name: "Transportation",
                src: "icon/p_delivery_truck.png",
                rate: delivery.toFixed(2),
                per: (delivery * 100) / 5
              },
              {
                name: "Product Quality",
                src: "icon/p_gift.png",
                rate: quality.toFixed(2),
                per: (quality * 100) / 5
              },
              {
                name: "Service",
                src: "icon/p_gift.png",
                rate: service.toFixed(2),
                per: (service * 100) / 5
              }
            ];

            this.ratingAll = this.getRatingSnapshots("delivery");
          } else {
            console.error("getLike status is not 200 >> ", res.statusText);
          }
        })
        .catch(error => {
          console.error("getLike error >> ", error);
        });
    }
  },

  watch: {
    valueFilter() {
      console.log("valueFilter", this.valueFilter);
      this.ratingAll = this.getRatingSnapshots(this.valueFilter);
    }
  }
};
</script>

<style>
#block_container {
  display: flex;
}

#myProgress {
  width: 100%;
  background-color: grey;
}
#myBar {
  width: 1%;
  height: 30px;
  background-color: green;
}
.w3-light-grey,
.w3-hover-light-grey:hover,
.w3-light-gray,
.w3-hover-light-gray:hover {
  color: #000 !important;
  background-color: #f1f1f1 !important;
}
.w3-yellow,
.w3-hover-yellow:hover {
  color: #ffd055 !important;
  background-color: #ffd055 !important;
}
.w3-container,
.w3-panel {
  padding: 0.01em 3px;
}
.w3-round-xlarge {
  border-radius: 3px;
}

.v-image__image,
.v-image__image--cover {
  background-size: contain;
}
</style>