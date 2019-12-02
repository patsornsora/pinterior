<template>
  <div style="padding-top: 55px; text-align: center;">
    <iframe
      :style="{'width': windowWidth + 'px', 'height': windowHeight-120 + 'px'}"
      :src="link"
      frameborder="0"
      webkitallowfullscreen
      mozallowfullscreen
      allowfullscreen
    ></iframe>
  </div>
</template>


<script>
export default {
  data() {
    return {
      windowWidth: 0,
      windowHeight: 0,

      link: ""
    };
  },
  created() {
    console.log("created", this.$route.params.id);

    this.windowWidth = window.innerWidth;
    this.windowHeight = window.innerHeight;

    this.get360(this.$route.params.id);
  },
  methods: {
    get360(id) {
      this.$http
        .get("https://dezignserves.com/api/themes/" + id + "/", {
          headers: {
            Authorization: "Basic YWRtaW46cXdlcjEyMzQ="
          }
        })
        .then(res => {
          console.log("success >> ", res);
          if (res.status === 200) {
            console.log("data >> ", res.data);

            if (res.data.link360) {
              this.link = res.data.link360;
            } else {
              this.$router.push("/");
            }
          }
        })
        .catch(error => {
          console.error("error >> ", error);
          this.$router.push("/");
        });
    }
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener("resize", () => {
        this.windowWidth = window.innerWidth;
        this.windowHeight = window.innerHeight;

        console.log("windowWidth", this.windowWidth);
        console.log("windowHeight", this.windowHeight);
      });
    });
  }
};
</script>
