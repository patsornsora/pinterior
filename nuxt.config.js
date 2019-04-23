import pkg from "./package";

module.exports = {
  mode: "spa",
  // mode: 'universal',
  render: {
    resourceHints: false
  },
  router: {
    mode: "hash"
    // middleware: "router-auth"
  },

  plugins: [
    "~/plugins/buefy",
    "~/plugins/vuetify",
    "~/plugins/axios",
    "~/plugins/vuex",
    "~/plugins/swatches",
    {
      src: "~/plugins/vuex-persistedstate",
      ssr: false
    }
  ],

  proxy: {
    // "/api": "http://192.168.1.115:7000",
    // "/api": "http://dezignserves.com:80",
    "/api": {
      target: "http://dezignserves.com:80",
      changeOrigin: true
    },
    // "/": {
    //   target: "https://dezignserves.com:80",
    //   changeOrigin: false
    // },
    ws: true
  },

  axios: {
    proxy: true
  },

  modules: ["nuxt-buefy", "@nuxtjs/proxy", "@nuxtjs/axios"],
  // "@nuxtjs/proxy", "@nuxtjs/axios", ,

  // render: {
  //   csp: true
  // },


  /*
   ** Headers of the page
   */
  head: {
    title: "Dezigntool",
    meta: [{
        charset: "utf-8"
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      },
      {
        hid: "description",
        name: "description",
        content: pkg.description
      }
    ],
    link: [{
        rel: "icon",
        type: "image/x-icon",
        href: "/logo.ico"
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Lato|Montserrat|Kanit|Pattaya"
      }
    ]
  },
  /*
   ** Customize the progress bar color
   */
  loading: {
    color: "#3B8070"
  },
  /*
   ** Build configuration
   */
  build: {
    vendor: [
      "buefy",
      "vuetify",
      "axios",
      "vue-axios",
      "vuex",
      "vuex-persistedstate",
      "swatches"
    ],
    /*
     ** Run ESLint on save
     */
    extend(config, {
      isDev,
      isClient
    }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
    }
  },
  css: ["~/assets/styles.css"]
};
