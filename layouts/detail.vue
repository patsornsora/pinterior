<template>
  <div app>
    <!-- style="background-color: pink;" -->
    <nav class="navbar is-transparent navbar is-fixed-top">
      <div class="navbar-brand">
        <a class="navbar-item">
          <img style="max-height: 45px; max-width: 45px;" src="logo.png">
        </a>
        <a
          role="button"
          class="navbar-burger burger"
          :class="active"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarExampleTransparentExample"
          @click="clickToolbar"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div id="navbarExampleTransparentExample" class="navbar-menu" :class="active">
        <div class="navbar-end">
          <div class="field is-grouped">
            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link">{{language}}</a>
              <div class="navbar-dropdown">
                <a class="navbar-item" @click="clickEN">EN</a>
                <a class="navbar-item" @click="clickTH">TH</a>
              </div>
            </div>
            <a class="navbar-item" @click="isComponentRegister = true">Register</a>
            <a class="navbar-item" @click="isComponentLogin = true">Login</a>
            <!-- <a class="navbar-item" @click="clickMenu('login')">Login</a> -->
          </div>
        </div>
      </div>
    </nav>

    <nuxt style="padding: 60px 0px 48px 0px;"/>

    <div class="level navbar is-fixed-bottom">
      <div class="level-left"></div>
      <div class="level-right">
        <div class="level-item">
          <b-icon icon="facebook-square" pack="fab"></b-icon>
          <b-icon icon="instagram" pack="fab"></b-icon>
          <b-icon icon="line" pack="fab"></b-icon>
          <b-icon icon="pinterest-square" pack="fab"></b-icon>
        </div>
      </div>
    </div>

    <b-modal :active.sync="isComponentLogin" has-modal-card>
      <modal-login v-bind="formProps"></modal-login>
    </b-modal>

    <b-modal :active.sync="isComponentRegister" has-modal-card>
      <modal-register v-bind="formProps"></modal-register>
    </b-modal>
  </div>
</template>

<script>
import ModalRegister from "../components/register";
import ModalLogin from "../components/login";
export default {
  components: {
    ModalLogin,
    ModalRegister
  },
  data() {
    return {
      active: "",
      menu: "",
      language: "EN",
      isComponentLogin: false,
      isComponentRegister: false,
      formProps: {
        email: "evan@you.com",
        password: "testing"
      }
    };
  },
  created() {},

  methods: {
    clickToolbar() {
      this.active = this.active === "" ? "is-active" : "";
    },
    clickMenu(value) {
      if (value === "home") {
        this.$router.push("/");
      } else if (value === "logout") {
        window.sessionStorage.removeItem("user");
        this.isLogin = false;
        this.$router.push("/");
      } else {
        this.$router.push("/" + value);
      }
    },
    clickEN() {
      this.language = "EN";
    },
    clickTH() {
      this.language = "TH";
    }
  },
  watch: {
    formProps() {
      console.log("formProps");
    }
  }
};
</script>


<style>
</style>


