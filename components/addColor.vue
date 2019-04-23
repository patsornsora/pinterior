<template>
  <!-- <div>11</div> -->
  <div class="modal-card" style="width: auto; margin: 20px;">
    <header class="modal-card-head" style="border-radius: 0px;">
      <p class="modal-card-title" style="text-align: center;">ADD COLOR TONE</p>
    </header>
    <section class="modal-card-body">
      <div class="custom-ui-class">
        <swatches v-model="color" shapes="circles" inline @click="console.log('color')"></swatches>
      </div>
      <!-- <div class="form__field">
        <div class="form__input">
          <swatches
            v-model="color"
            :colors="colors"
            row-length="7"
            shapes="circles"
            :show-border="true"
            popover-to="left"
          ></swatches>
        </div>
      </div>-->
    </section>
  </div>
</template>

<script>
import Swatches from "vue-swatches";

export default {
  components: {
    Swatches
  },
  data() {
    return {
      color: "#F64272",
      colors: [
        ["#F64272", "#F6648B", "#F493A7", "#F891A6", "#FFCCD5", ""],
        ["#8b5aff", "#a27bff", "#b99cff", "#d0bdff", "#e8deff"],
        ["#51e5db", "#74ebe3", "#96f0ea", "#b9f5f1", "#dcfaf8"],
        ["#ffa51a", "#ffb748", "#ffc976", "#ffdba3", "#ffedd1"]
      ]
    };
  },

  created() {
    console.log("created");
    console.log("value", this.value);
  },

  methods: {},

  computed: {}
};
</script>
