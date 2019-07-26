<template>
  <div app>
    <nav class="navbar is-transparent navbar is-fixed-top">
      <div class="navbar-brand">
        <a class="navbar-item">
          <img
            style="max-height: 145px; max-width: 145px;"
            src="logo-dexcoro-COFFEE.png"
            @click="$router.push('/')"
          />
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
            <a class="navbar-item" @click="isComponentRegister = true" v-show="isRegister">REGISTER</a>
            <a class="navbar-item" @click="isComponentLogin = true" v-show="isLogin">LOGIN</a>
            <div class="navbar-item">
              <b-dropdown class="is-right" aria-role="list">
                <p slot="trigger" v-show="!isLogin">
                  {{userObj.user}}
                  <i
                    class="far fa-user"
                    style="margin-left: 12px; margin-right: 12px;"
                  ></i>
                </p>
                <!-- <b-dropdown-item aria-role="listitem">
                  <div class="media">
                    <b-icon class="media-left" icon="heart" pack="fa"></b-icon>
                    <div class="media-content">
                      <span class="s14">My Favorite</span>
                    </div>
                  </div>
                </b-dropdown-item>
                <b-dropdown-item aria-role="listitem" @click="onOrderClick">
                  <div class="media">
                    <b-icon class="media-left" icon="shopping-cart" pack="fa"></b-icon>
                    <div class="media-content">
                      <span class="s14">My Order</span>
                    </div>
                  </div>
                </b-dropdown-item> -->
                <b-dropdown-item aria-role="listitem" @click="onLogoutClick" v-show="isLogout">
                  <div class="media">
                    <b-icon class="media-left" icon="sign-out-alt" pack="fa"></b-icon>
                    <div class="media-content">
                      <span class="s14">Logout</span>
                    </div>
                  </div>
                </b-dropdown-item>
              </b-dropdown>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <nuxt style="padding: 60px 0px 48px 0px;" />

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
    </b-modal>

    <b-modal :active.sync="isComponentRegister" has-modal-card>
      <modal-register v-on:childToParent="onRegisterClick" style="min-width: 300px;"></modal-register>
    </b-modal>
  </div>
</template>

<script>
// import { mapGetters } from 'vuex'

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
      isRegister: true,
      isLogin: true,
      isLogout: false,
      isComponentLogin: false,
      isComponentRegister: false,
      formProps: {
        email: "admin",
        password: "qwer1234"
      },
      value: {
        username: "testuser1",
        password: "Thisisp@ssw0rd"
      },
      userObj: JSON.parse(window.sessionStorage.getItem("user")) || {}
    };
  },
  created() {
    if (window.sessionStorage.getItem("user")) {
      this.isRegister = false;
      this.isLogin = false;
      this.isLogout = true;
    }
    // console.log('mapGetters isMobile >> ', mapGetters(['isMobile']))
  },

  methods: {
    onRegisterClick(data) {
      console.log("onRegisterClick", data);
      if (data) {
        this.isComponentRegister = false;
        this.isRegister = false;
        this.isLogin = false;
        this.isLogout = true;
        this.userObj = JSON.parse(window.sessionStorage.getItem("user")) || {};
      }
    },
    onLoginClick(data) {
      console.log("onLoginClick", data);
      if (data === "register") {
        this.isComponentLogin = false;
        this.isComponentRegister = true;
        return;
      }
      if (data) {
        this.isComponentLogin = false;
        this.isRegister = false;
        this.isLogin = false;
        this.isLogout = true;
        this.userObj = JSON.parse(window.sessionStorage.getItem("user")) || {};
        window.location.reload();
      }
    },
    onLogoutClick(data) {
      console.log("onLogoutClick", data);
      this.$dialog.confirm({
        message: "Are you sure you want to logout?",
        cancelText: "CANCEL",
        type: "is-danger",
        hasIcon: true,
        onConfirm: () => {
          console.log("Logout");
          window.sessionStorage.removeItem("user");
          this.isRegister = true;
          this.isLogin = true;
          this.isLogout = false;
          this.userObj =
            JSON.parse(window.sessionStorage.getItem("user")) || {};
          window.location.reload();
          this.$router.push("/");
        }
      });
    },
    onOrderClick() {
      console.log("onOrderClick");
      this.$router.push("/order");
    },
    clickToolbar() {
      this.active = this.active === "" ? "is-active" : "";
    },
    clickEN() {
      this.language = "EN";
    },
    clickTH() {
      this.language = "TH";
    },
    clickProfile() {
      this.$router.push("/profile");
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


