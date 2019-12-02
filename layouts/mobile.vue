<template>
  <div app>
    <nuxt style="padding: 0px 0px 48px 0px;" />
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  created() {
    if (location.protocol != "https:") {
      location.protocol =
        "https:" +
        window.location.href.substring(window.location.protocol.length);
    }
  },

  methods: {},
  watch: {}
};
</script>

<style></style>
