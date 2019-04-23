// import createPersistedState from "vuex-persistedstate";
// import * as Cookies from "js-cookie";

// export default ({ store }) => {
//   createPersistedState({
//     key: "vuex",
//     paths: ["user"],
//     storage: {
//       getItem: key => Cookies.get(key),
//       setItem: (key, value) =>
//         Cookies.set(key, value, { expires: 3, secure: true }),
//       removeItem: key => Cookies.remove(key)
//     }
//   })(store);
// };

import createPersistedState from "vuex-persistedstate";
import * as Cookies from "js-cookie";

let cookieStorage = {
  getItem: function(key) {
    return Cookies.getJSON(key);
  },
  setItem: function(key, value) {
    return Cookies.set(key, value, { expires: 3, secure: false });
  },
  removeItem: function(key) {
    return Cookies.remove(key);
  }
};

export default ({ store }) => {
  createPersistedState({
    key: "vuex",
    paths: ["user", "pass"],
    storage: cookieStorage,
    getState: cookieStorage.getItem,
    setState: cookieStorage.setItem
  })(store);
};

// import createPersistedState from "vuex-persistedstate";
// import * as Cookie from "js-cookie";
// import Vuex from "vuex";
// import Vue from "vue";

// Vue.use(Vuex);

// export const store = new Vuex.Store({
//   state: {
//     user: {
//       name: "john doe",
//       age: " 16"
//     },
//     loggedIn: false,
//     hobbies: ["eating", "partying"]
//   },
//   modules: {},
//   plugins: [
//     createPersistedState({
//       paths: ["user", "loggedIn"],
//       getState: key => Cookie.getJSON(key),
//       setState: (key, state) =>
//         Cookie.set(key, state, { expires: 1, secure: false })
//     })
//   ]
// });
