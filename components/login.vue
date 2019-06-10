<template>
  <div class="modal-card" style="width: auto; margin: 20px;">
    <header class="modal-card-head" style="border-radius: 0px;">
      <p class="modal-card-title c-brown-black" style="text-align: center;">Login</p>
    </header>
    <section class="modal-card-body">
      <!-- <a
        class="button btn3"
        style="margin-bottom:16px; width: 100%; background-color: #24548b;"
        @click="clickLoginFacebook"
      >
        <span class="icon">
          <i class="fab fa-facebook-f"></i>
        </span>
        <span>CONNECT WITH FACEBOOK</span>
      </a>
      <a class="button btn3" style="margin-bottom:16px; width: 100%; background-color: #42abe2;">
        <span class="icon">
          <i class="fab fa-twitter"></i>
        </span>
        <span>CONNECT WITH TWITTER</span>
      </a> 
          type="email"
      -->
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

      <div style="color: red; text-align: center">{{txtError}}</div>

      <!-- <div>
        <b-checkbox>Remember me</b-checkbox>
        <a class="a-brown">Forget password?</a>
      </div>-->
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
</template>

<script>
export default {
  data() {
    return {
      value: {
        username: "",
        password: ""
      },
      isInvalid: false,
      txtError: ""
    };
  },
  created() {
    console.log("created");
  },
  methods: {
    clickLoginFacebook() {
      this.$store
        .dispatch("signInWithFacebook")
        .then(() => {
          console.log("clickLoginFacebook");
        })
        .catch(error => {
          console.log("clickLoginFacebook error >> ", error.message);
        });
    },

    async clickLogin() {
      if (this.value.username && this.value.password) {
        console.log("value >> ", this.value);

        await this.$http
          .post(
            "https://dezignserves.com/api-token-auth/",
            JSON.stringify(this.value),
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: "Basic YWRtaW46cXdlcjEyMzQ="
              }
            }
          )
          .then(res => {
            console.log("res.data >> ", res);
            if (res.data.Status === "OK") {
              window.sessionStorage.setItem(
                "user",
                JSON.stringify({
                  user: this.value.username
                })
              );
              this.$forceUpdate();
              this.$emit("childToParent", res.data);
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
</style>


