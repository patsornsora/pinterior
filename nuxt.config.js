import pkg from "./package";
import axios from "axios";

module.exports = {
  build: {},
  // serverMiddleware: ["redirect-ssl"],
  mode: "spa",
  // mode: 'universal',
  render: {
    resourceHints: false
  },
  router: {
    mode: "history"
    // mode: "hash",
    // middleware: "router-auth",
  },
  generate: {
    routes: function (callback) {
      axios
        .all([
          axios.get("https://dezignserves.com/api/themes/", {
            headers: {
              Authorization: "Basic YWRtaW46cXdlcjEyMzQ="
            }
          }),
          axios.get("https://dezignserves.com/api/orders/", {
            headers: {
              Authorization: "Basic YWRtaW46cXdlcjEyMzQ="
            }
          }),
          axios.get("https://dezignserves.com/api/suppliers/", {
            headers: {
              Authorization: "Basic YWRtaW46cXdlcjEyMzQ="
            }
          })
        ])
        .then(
          axios.spread(function (themes, orders, suppliers) {
            let routes1 = themes.data.map(theme => {
              return "/detail/" + theme.id;
            });

            let routes2 = orders.data.map(order => {
              return "/order/" + order.id;
            });

            let routes3 = orders.data.map(order => {
              return "/orderDetail/" + order.id;
            });

            let routes4 = suppliers.data.map(supplier => {
              return "/supplier/" + supplier.id;
            });

            let routes5 = themes.data.map(theme => {
              return "/360/" + theme.id;
            });

            callback(
              null,
              routes1
              .concat(routes2)
              .concat(routes3)
              .concat(routes4)
              .concat(routes5)
            );
          }),
          function (err) {
            return next(err);
          }
        );
    }
  },

  plugins: [
    "~/plugins/moment.js",
    "~/plugins/buefy",
    "~/plugins/vuetify",
    "~/plugins/axios",
    "~/plugins/vuex",
    "~/plugins/swatches",
    // "~/plugins/redirect-ssl",
    {
      src: "~/plugins/vuex-persistedstate",
      ssr: false
    },
    {
      src: "~plugins/ga.js",
      ssr: false
    }
  ],

  axios: {
    proxy: true,
    baseURL: "https://dezignserves.com:5432",
    proxyHeaders: false,
    credentials: false
  },

  // server: {
  //   port: 8001, // default: 3000
  //   host: 'localhost', // host: '0.0.0.0', // default: localhost
  // },
  serverMiddleware: [{
    path: "~/result",
    handler: "~/serverMiddleware/postRequestHandler.js"
  }],

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
      },
      {
        rel: "stylesheet",
        href: "https://unpkg.com/buefy/dist/buefy.min.css"
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
