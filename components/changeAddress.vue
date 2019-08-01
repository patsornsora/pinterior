<template>
  <div>
    <div class="modal-card" style="width: auto; margin: 20px;">
      <header class="modal-card-head" style="border-radius: 0px;">
        <p
          class="modal-card-title c-brown-black"
          style="text-align: center;"
        >Change Shipping Address</p>
      </header>
      <section class="modal-card-body">
        <div class="s14" v-for="(item, index) in addressAll" :key="index">
          <v-layout>
            <v-flex xs10>
              <b-radio
                class="th"
                v-model="address"
                :native-value="item"
              >{{item.address}} {{item.district}} {{item.sub_district}} {{item.province}} {{item.post_code}}</b-radio>
            </v-flex>
            <v-flex xs2 style="text-align: right;">
              <a @click="clickDelete(item.id)">ลบที่อยู่</a>
            </v-flex>
          </v-layout>
          <v-divider></v-divider>
        </div>

        <a class="th" @click="isComponentAddAddress = true">เพิ่มที่อยู่</a>

        <div row wrap style="margin-top: 20px; text-align: right;">
          <button class="button btn3 color-brown" style="width: 120px;" @click="clickOk">OK</button>
        </div>
      </section>
    </div>

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
import ModalAddAddress from "~/components/addAddress";

export default {
  components: {
    ModalAddAddress
  },
  canCancel: {
    type: Boolean,
    default: false
  },

  props: ["valueAddress"],
  canCancel: false,

  data() {
    return {
      address: {},
      addressAll: [],

      isComponentAddAddress: false,

      userObj: JSON.parse(window.sessionStorage.getItem("user")) || {}
    };
  },

  async created() {
    console.log("created valueAddress >> ", this.valueAddress);
    this.address = this.valueAddress;
    this.getAddress();
  },

  watch: {
    address() {
      window.sessionStorage.setItem("address", this.address.id);
    }
  },
  methods: {
    async clickDelete(id) {
      console.log("clickDelete >> ", this.address);
      await this.$http
        .post(
          "https://dezignserves.com/changeaddress/",
          {
            addressID: id,
            // status: "True"
            status: "False"
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Basic YWRtaW46cXdlcjEyMzQ="
            }
          }
        )
        .then(res => {
          console.log("res.statusText >> ", res);
          this.getAddress();
        })
        .catch(error => {
          console.error("clickConfirm error >> ", error);
        });
    },

    clickOk() {
      this.$emit("childToParent", this.address);
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
            this.addressAll = res.data.addAll.filter(
              item => item.working === true
            );
            if (
              this.addressAll.filter(
                item => item.id === this.valueAddress.id && item.working
              ).length === 0
            ) {
              this.address = this.addressAll[0];
            }
          } else {
            console.error("res.statusText >> ", res.statusText);
          }
        })
        .catch(error => {
          console.error("clickConfirm error >> ", error);
        });
    },

    onAddressClick(res) {
      console.log("onAddressClick");
      this.isComponentAddAddress = false;
      this.addressAll.push(res);
      this.address = res;
    }
  }
};
</script>
