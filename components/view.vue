<template>
  <div class="modal-card" style="width: auto; margin: 20px;">
    <header class="modal-card-head" style="border-radius: 0px;">
      <p class="modal-card-title" style="text-align: center;">360 Virtual Showroom</p>
    </header>
    <section class="modal-card-body">
      <iframe
        width="840"
        height="540"
        :src="src"
        frameborder="0"
        webkitallowfullscreen
        mozallowfullscreen
        allowfullscreen
      ></iframe>
    </section>
  </div>
</template>

<script>
export default {
  props: ["valueIframe"],
  data() {
    return {
      src: 'https://vizor.io/embed/miniemeenie/dezigntool-showroom-demo1'
    };
  }
};
</script>