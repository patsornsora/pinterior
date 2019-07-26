

<template>
  <div class="modal-card" style="width: 240px; margin: 20px;">
    <header class="modal-card-head" style="border-radius: 0px;">
      <p class="modal-card-title c-brown-black" style="text-align: center;">ยืนยันคำสั่งซื้อ</p>
    </header>
    <section class="modal-card-body">
      <form id="myform" method="post" action="https://t.2c2p.com/RedirectV3/payment">
        <input type="hidden" name="version" v-model="valuePayment.version" />
        <input type="hidden" name="merchant_id" v-model="valuePayment.merchant_id" />
        <input type="hidden" name="currency" v-model="valuePayment.currency" />
        <input type="hidden" name="result_url_1" v-model="valuePayment.result_url" />
        <input type="hidden" name="hash_value" v-model="valuePayment.hash_val" />
        <input type="hidden" name="payment_description" v-model="valuePayment.payment_description" />
        <input type="hidden" name="order_id" v-model="valuePayment.orderID" />
        <input type="hidden" name="amount" v-model="valuePayment.amountString" />
        <!-- <input class="button btn3 color-brown" type="submit" name="submit" value="Confirm" /> -->

        <button
          class="button btn3 color-brown"
          style="margin: 16px 0px 16px 0px; width: 100%;"
          type="submit"
          name="submit"
          value="Confirm"
        >ชำระเงิน</button>
      </form>
    </section>
  </div>
</template>

<script>
export default {
  props: ["valuePayment"],

  created() {
    console.log("created valuePayment >> ", this.valuePayment);
  }
};
</script>

