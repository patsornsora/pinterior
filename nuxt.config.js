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
    },
    {
      src: '~plugins/ga.js',
      ssr: false
    }
  ],

  axios: {
    proxy: true,
    baseURL: "https://dezignserves.com:5432",
    proxyHeaders: false,
    credentials: false
  },

  server: {
    port: 8000, // default: 3000
    host: 'localhost', // host: '0.0.0.0', // default: localhost
  },

  serverMiddleware: [{
    path: '~/result',
    handler: '~/serverMiddleware/postRequestHandler.js'
  }, ],

  proxy: {
    "/api": "http://dezignserves.com:5432",
    ws: true
  },

  modules: ["nuxt-buefy", "@nuxtjs/proxy", "@nuxtjs/axios"],

  // render: {
  //   csp: true
  // },

  /*
   ** Headers of the page
   */
  head: {
    title: "DEXCORO",
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
      },
      {
        "http-equiv": "origin-trial",
        "data-feature": "WebVR (For Chrome M62+)",
        "data-expires": "2018-09-10",
        content: "AhQcOrbjvS0+50wwuqtAidzraKNfZj8Bj159g2+2LsT5QRHe9IeebCl5ApORwd3oGxfKzl5H8s5K3aTMNzC+5gsAAABPeyJvcmlnaW4iOiJodHRwczovL3dlYnZyLmluZm86NDQzIiwiZmVhdHVyZSI6IldlYlZSMS4xTTYyIiwiZXhwaXJ5IjoxNTM2NjAxNDEzfQ=="
      }
    ],
    link: [{
        rel: "icon",
        type: "image/x-icon",
        href: "/iconDexcoromini.ico"
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
