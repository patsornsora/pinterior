<template>
  <div>result</div>
</template>

<script>
// export default {
//   async asyncData({ params }) {
//     console.log("result params >> ", params);
//     const slug = params.slug; // When calling /abc the slug will be "abc"
//     return { slug };
//   }
// };

export default {
  async asyncData(context) {
    console.log("result context >> ", context);
    // const slug = params.slug; // When calling /abc the slug will be "abc"
    // return { slug };
  }
  // async asyncData({ req, res }) {
  //   console.log("result req >> ", req);
  //   console.log("result res >> ", res);
  //   console.log("result process.server >> ", process);

  //   // Please check if you are on the server side before
  //   // using req and res
  //   if (process.server) {
  //     return { host: req.headers.host };
  //   }

  //   return {};
  // }
};
</script>
