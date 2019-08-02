<template>
  <div class="modal-card" style="width: auto;">
    <section class="modal-card-body" style="padding: 0px;">
      <div>หมายเหตุ: งานทาสีอาจใช้ระยะเวลาประมาณ 1-5 วัน ขึ้นอยู่กับขนาดพื้นที่ของที่อยู่อาศัย</div>
      <v-divider style="margin: 0px;"></v-divider>
      <div style="text-align: right; margin: 12px 18px;">
        <button class="button btn3 color-brown">ถัดไป</button>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  props: ["valueSelectDate"],

  data() {
    return {};
  },

  created() {
    console.log("valueSelectDate >> ", this.valueSelectDate);
  },
  destroyed() {
    console.log("destroyed");
  }
};
</script>
