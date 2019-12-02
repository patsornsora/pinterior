
<template>
  <div>
    <v-card>
      <v-card-title class="headline grey lighten-2 justify-center c-brown-black" primary-title>Login</v-card-title>
      <section class="modal-card-body">
        <b-field label="EMAIL">
          <b-input class="btn3" v-model="value.username" placeholder="Your email" ref="username"></b-input>
        </b-field>
        <b-field label="PASSWORD">
          <b-input
            class="btn3"
            type="password"
            v-model="value.password"
            password-reveal
            placeholder="Your password"
            @keyup.enter="clickLogin"
          ></b-input>
        </b-field>
        <div style="color: red; text-align: center">{{txtError}}</div>
        <button
          class="button btn3 color-brown"
          style="margin: 16px 0px 16px 0px; width: 100%;"
          @click="clickLogin"
        >LOGIN</button>
        <div style="text-align: center;">
          No account?
          <a class="a-brown" @click="isComponentRegister=true">Sign up</a>
        </div>
      </section>
    </v-card>
    <b-modal :active.sync="isComponentRegister" has-modal-card>
      <modal-register v-on:childToParent="onRegisterClick" style="min-width: 300px;"></modal-register>
    </b-modal>
  </div>
</template>

<script>
import ModalRegister from "../components/register";
export default {
  layout: "mobile",
  components: {
    ModalRegister
  },
  data() {
    return {
      isComponentRegister: false,
      value: {
        username: "",
        password: ""
      },
      isInvalid: false,
      txtError: ""
    };
  },
  created() {
    if (sessionStorage.getItem("user")) {
      if (JSON.parse(window.sessionStorage.getItem("user")).supplierID) {
        this.$router.push(
          "/supplier/" +
            JSON.parse(window.sessionStorage.getItem("user")).supplierID
        );
      } else {
        this.$router.push("/orderList");
      }
    }
    this.$nextTick(() => this.$refs.username.focus());
  },
  methods: {
    onRegisterClick(data) {
      // console.log("onRegisterClick", data);
      if (data) {
        this.isComponentRegister = false;
        this.isRegister = false;
        this.isLogin = false;
        this.isLogout = true;
        this.userObj = JSON.parse(window.sessionStorage.getItem("user")) || {};
      }
    },

    clickLoginFacebook() {
      this.$store
        .dispatch("signInWithFacebook")
        .then(() => {
          // console.log("clickLoginFacebook");
        })
        .catch(error => {
          // console.log("clickLoginFacebook error >> ", error.message);
        });
    },

    async clickLogin() {
      if (!this.value.username || !this.value.password) {
        this.txtError = "PLEASE ENTER EMAIL OR PASSWORD";
        return;
      } else {
        // console.log("value >> ", this.value);

        await this.$http
          .post(
            "https://dezignserves.com/api-token-auth/",
            JSON.stringify(this.value),
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: "Basic YWRtaW46cXdlcjEyMzQ="
                // "Cache-Control": "no-cache"
              }
            }
          )
          .then(res => {
            console.log("res.data >> ", res);
            if (res.data.Status === "OK") {
              if (res.data.Data.supplierID) {
                console.log("supplierID");
                window.sessionStorage.setItem(
                  "user",
                  JSON.stringify({
                    user: this.value.username,
                    supplierID: res.data.Data.supplierID
                  })
                );

                // window.location.reload();
                this.$router.push(
                  "/supplier/" +
                    JSON.parse(window.sessionStorage.getItem("user")).supplierID
                );
              } else {
                // console.log("customerID");
                window.sessionStorage.setItem(
                  "user",
                  JSON.stringify({
                    user: this.value.username,
                    customerID: res.data.Data.customerID
                  })
                );
                // window.location.reload();
                this.$router.push("/orderList/");
              }
              // this.$emit("childToParent", res.data);
            } else {
              this.txtError = res.data.Error;
            }
          })
          .catch(error => {
            console.error("clickLogin error >> ", error);
            this.isInvalid = true;
            this.txtError = "INVALID EMAIL OR PASSWORD";
          });
      }
    }
  }
};
</script>
<style>
.btn3 {
  height: 2.8em;
}
a.a-brown {
  color: black;
}
a.a-brown:hover {
  color: black;
}
label {
  font-size: 12px;
}
</style>


