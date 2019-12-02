<template>
  <div style="padding-top: 55px; text-align: center;">
    <div>
      <iframe
        :style="{'width': windowWidth + 'px', 'height': windowHeight-120 + 'px'}"
        src="https://roundme.com/embed/441860/1516743"
        frameborder="0"
        webkitallowfullscreen
        mozallowfullscreen
        allowfullscreen
      ></iframe>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      windowWidth: 0,
      windowHeight: 0
    };
  },
  async created() {
    this.windowWidth = window.innerWidth;
    this.windowHeight = window.innerHeight;
  },
  methods: {},
  mounted() {
    this.$nextTick(() => {
      window.addEventListener("resize", () => {
        this.windowWidth = window.innerWidth;
        this.windowHeight = window.innerHeight;
      });
    });
  }
};
</script>
