import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";

const request = axios.create({
  baseURL: ""
});

Vue.use(VueAxios, request);
