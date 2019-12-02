<template>
  <div>
    <v-card style="text-align: center;">
      <v-card-title
        class="headline grey lighten-2 justify-center c-brown-black"
        primary-title
      >My Order</v-card-title>

      <v-card-text v-if="orderList.length === 0">No order</v-card-text>

      <div v-if="orderList.length > 1">
        <div v-for="(item, i) in orderList" :key="i" style="text-align: center;">
          <button
            class="button btn3 color-brown"
            style="margin: 6px 0px 6px 0px; width: 90%;"
            text
            @click="clickOrderDetail(item.id)"
          >Order #{{item.id}}</button>
        </div>
      </div>

      <!-- <v-card-actions>
        <v-spacer></v-spacer>
        <button
          class="button btn3 color-brown"
          style="margin: 6px 10px 6px 0px;"
          text
          @click="dOrderList = false"
        >CLOSE</button>
      </v-card-actions>-->
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      orderList: [],
      userObj: JSON.parse(window.sessionStorage.getItem("user")) || {}
    };
  },
  created() {
    if (window.sessionStorage.getItem("user")) {
      this.isRegister = false;
      this.isLogin = false;
      this.isLogout = true;
    }
    if (this.userObj.supplierID) {
      this.isCustomer = false;
    }
    this.getOrder();
    // console.log("statusLike", this.statusLike);
    // console.log('mapGetters isMobile >> ', mapGetters(['isMobile']))
  },
  methods: {
    clickOrderDetail(orderId) {
      this.$router.push("/orderDetail/" + orderId);
    },
    async getOrder() {
      await this.$http
        .get("https://dezignserves.com/api/orders/", {
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
            switch (res.data.length) {
              case 0:
                this.dOrderList = true;
                break;
              case 1:
                this.$router.push("/orderDetail/" + res.data[0].id);
                break;
              default:
                this.orderList = res.data;
                this.dOrderList = true;
                break;
            }
          } else {
            console.error("getOrder status is not 200 >> ", res.statusText);
          }
        })
        .catch(error => {
          console.error("getLike error >> ", error);
        });
    }
  }
};
</script>