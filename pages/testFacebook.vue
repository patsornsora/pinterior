<template>
  <div>
    <div id="fb-root"></div>
    <script
      async
      defer
      crossorigin="anonymous"
      src="https://connect.facebook.net/th_TH/sdk.js#xfbml=1&version=v3.3&appId=1030611800461284&autoLogAppEvents=1"
    ></script>
    <div
      class="fb-share-button"
      data-href="http://www.dexcoro.com/#/detail/14"
      data-layout="button"
      data-size="small"
    >
      <a
        target="_blank"
        href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse"
        class="fb-xfbml-parse-ignore"
      >แชร์</a>
    </div>
  </div>
</template>
<script>
export default {
  asyncData(context) {
    // called every time before loading the component
    // as the name said, it can be async
    // Also, the returned object will be merged with your data object
    return { name: "World" };
  },
  fetch() {
    // The `fetch` method is used to fill the store before rendering the page
  },
  head() {
    // Set Meta Tags for this Page
    meta: [
      // { charset: "utf-8" },
      // { property: "fb:app_id", content: "2098774570366947" },
      // { property: "og:url", content: "http://www.dexcoro.com/#/detail/14" },
      // { property: "og:type", content: "website" },
      // { property: "og:title", content: "Your Website Title" },
      // { property: "og:description", content: "Your description" },
      // { property: "og:image", content: "http://www.dexcoro.com/room/r3/1.png" }

      { property: "fb:app_id", content: "2098774570366947" },
      {
        name: "og:url",
        property: "og:url",
        content: "http://www.dexcoro.com/#/detail/14"
      },
      { name: "og:type", property: "og:type", content: "article" },
      { name: "og:title", property: "og:title", content: "Your Website Title" },
      {
        name: "og:description",
        property: "og:description",
        content: "How much does culture influence creative thinking?"
      },
      {
        name: "og:image",
        property: "og:image",
        content: "http://www.dexcoro.com/room/r3/1.png"
      }
    ];
  }
};
</script>

<style>
.red {
  color: red;
}
</style>
