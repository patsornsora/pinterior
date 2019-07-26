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
        <div class="s14" v-for="(item, index) in valueAddress.address" :key="index">
          <b-radio
            class="th"
            v-model="address"
            :native-value="item"
          >{{item.address}} {{item.district}} {{item.sub_district}} {{item.province}} {{item.post_code}}</b-radio>
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

  props: ["valueAddress"],

  data() {
    return {
      address: {},

      isComponentAddAddress: false,

      userObj: JSON.parse(window.sessionStorage.getItem("user")) || {}
    };
  },

  async created() {
    console.log("created valueAddress >> ", this.valueAddress);

    this.address = this.valueAddress.ad;
  },

  methods: {
    clickOk() {
      this.$emit("childToParent", this.address);
    },

    onAddressClick(res) {
      console.log("onAddressClick");
      this.isComponentAddAddress = false;
      this.valueAddress.address.push(res);
      this.address = res;
    }
  }
};
</script>
