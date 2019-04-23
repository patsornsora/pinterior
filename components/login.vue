<template>
  <!-- <div>11</div> -->
  <div class="modal-card" style="width: auto; margin: 20px;">
    <header class="modal-card-head" style="border-radius: 0px;">
      <p class="modal-card-title" style="text-align: center;">Login</p>
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

      <div>
        <b-checkbox>Remember me</b-checkbox>
        <a>Forget password?</a>
      </div>
      <button
        class="button btn3"
        style="margin: 16px 0px 16px 0px; width: 100%; background-color: #1c4b7c;"
        @click="clickLogin"
      >LOGIN</button>
      <div style="text-align: center;">
        No account?
        <a>Sign up</a>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  // props: ["value"],
  data() {
    return {
      value: {
        username: "testuser1",
        password: "Thisisp@ssw0rd"
      }
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
          // location.reload();
        })
        .catch(error => {
          console.log("clickLoginFacebook error >> ", error.message);
        });
    },
    async clickLogin() {
      if (this.value.username && this.value.password) {
        // this.snackbar = true;
        console.log("value >> ", this.value);
        await this.$http
          .post("/api-token-auth/", JSON.stringify(this.value), {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Basic YWRtaW46cXdlcjEyMzQ="
              // "Access-Control-Allow-Origin": "*"
            },
            auth: {
              Username: "admin",
              Password: "qwer1234"
            }
          })
          .then(res => {
            window.sessionStorage.setItem(
              "user",
              JSON.stringify({
                user: this.value.username
              })
            );
            this.$forceUpdate();
            this.$router.push("/");
            console.log("success", res);
          })
          .catch(error => {
            console.error("clickLogin error >> ", error);
            // this.alert.value = true;
            setTimeout(() => {
              // this.alert.value = false;
            }, 3000);
          });

        // await this.$http
        //   .post(
        //     "https://dezignserves.com/api-token-auth/",
        //     JSON.stringify(this.value),
        //     {
        //       headers: {
        //         "Content-Type": "application/json"
        //         // "Access-Control-Allow-Origin": "*"
        //       },
        //       auth: {
        //         Username: "admin",
        //         Password: "qwer1234"
        //       }
        //     }
        //   )
        //   .then(res => {
        //     window.sessionStorage.setItem(
        //       "user",
        //       JSON.stringify({
        //         user: this.value.username
        //       })
        //     );
        //     this.$forceUpdate();
        //     this.$router.push("/");
        //     console.log("success", res);
        //   })
        //   .catch(error => {
        //     console.log("clickLogin error >> ", error);
        //     // this.alert.value = true;
        //     setTimeout(() => {
        //       // this.alert.value = false;
        //     }, 3000);
        //   });
      }
    }
  }
};
</script>
<style>
.btn3 {
  height: 2.8em;
}
</style>


