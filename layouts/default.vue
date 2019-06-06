<template>
  <div app>
    <!-- style="background-color: pink;" -->
    <nav class="navbar is-transparent navbar is-fixed-top">
      <div class="navbar-brand">
        <a class="navbar-item">
          <img
            style="max-height: 145px; max-width: 145px;"
            src="logo-dexcoro-COFFEE.png"
            @click="$router.push('/')"
          >
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
            <!-- <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link">{{language}}</a>
              <div class="navbar-dropdown">
                <a class="navbar-item" @click="clickEN">EN</a>
                <a class="navbar-item" @click="clickTH">TH</a>
              </div>
            </div>-->
            <a class="navbar-item" @click="isComponentRegister = true">REGISTER</a>
            <a class="navbar-item" @click="isComponentLogin = true">LOGIN</a>
            <!-- <a class="navbar-item" @click="clickShowroom">SHOW ROOM</a> -->
            <a class="navbar-item" @click="clickProfile">
              <i class="far fa-user"></i>
            </a>
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
      <modal-login v-on:childToParent="onLoginClick"></modal-login>

      <!-- <v-dialog
      v-model="isComponentLogin"
      :width="windowWidth-180"
      :height="windowHeight-180"
    >
      <div class="modal-card" style="width: auto; margin: 20px;">
        <header class="modal-card-head" style="border-radius: 0px;">
          <p class="modal-card-title c-brown-black" style="text-align: center;">Login</p>
        </header>
        <section class="modal-card-body">
          <b-field label="EMAIL">
            <b-input class="btn3" v-model="value.username" placeholder="Your email" required></b-input>
          </b-field>

          <b-field label="PASSWORD">
            <b-input
              class="btn3"
              type="password"
              v-model="value.password"
              password-reveal
              placeholder="Your password"
              required
            ></b-input>
          </b-field>

          <div>
            <b-checkbox>Remember me</b-checkbox>
            <a class="a-brown">Forget password?</a>
          </div>
          <button
            class="button btn3 color-brown"
            style="margin: 16px 0px 16px 0px; width: 100%;"
            @click="clickLogin"
          >LOGIN</button>
          <div style="text-align: center;">
            No account?
            <a class="a-brown">Sign up</a>
          </div>
        </section>
      </div>
      </v-dialog>-->
    </b-modal>

    <b-modal :active.sync="isComponentRegister" has-modal-card>
      <modal-register v-on:childToParent="onRegisterClick" style="min-width: 300px;"></modal-register>
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
        email: "admin",
        password: "qwer1234"
      },
      value: {
        username: "testuser1",
        password: "Thisisp@ssw0rd"
      }
    };
  },
  created() {},

  methods: {
    onRegisterClick(data){
      console.log("onRegisterClick", data);
      this.isComponentLogin = false;
    },
    onLoginClick(data) {
      console.log("onLoginClick", data);
      this.isComponentLogin = false;
    },
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
    },
    clickShowroom() {
      this.$router.push("/showroom");
    },
    clickProfile() {
      this.$router.push("/profile");
    },
    clickLogin() {
      console.log("clickLogin");
    },
    clickRegister() {
      console.log("clickRegister");
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
/* .modal-close {
  right: 560px;
  top: 110px;
  width: 10px;
  height: 10px;
} */
</style>


