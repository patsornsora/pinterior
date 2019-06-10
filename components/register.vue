<template>
  <div class="modal-card" style="width: auto; margin: 20px;">
    <header class="modal-card-head" style="border-radius: 0px;">
      <p class="modal-card-title c-brown-black" style="text-align: center;">Register</p>
    </header>
    <section class="modal-card-body">
      <div class="columns">
        <!-- <div class="column">
          <b-field label="Username">
            <b-input
              class="btn3"
              v-model="formRegister.username"
              placeholder="Your username"
              required
            ></b-input>
          </b-field>
        </div>-->
        <div class="column">
          <b-field label="Email">
            <b-input
              class="btn3"
              type="email"
              v-model="formRegister.email"
              placeholder="Your email"
              required
            ></b-input>
          </b-field>
        </div>
      </div>
      <div class="columns">
        <div class="column">
          <b-field label="Password">
            <b-input
              class="btn3"
              type="password"
              v-model="formRegister.password"
              password-reveal
              placeholder="Your password"
              required
            ></b-input>
          </b-field>
        </div>
        <div class="column">
          <b-field label="Password(confirm)">
            <b-input
              class="btn3"
              type="password"
              v-model="formRegister.password2"
              password-reveal
              placeholder="Your password"
              required
            ></b-input>
          </b-field>
        </div>
      </div>
      <div class="columns">
        <div class="column">
          <b-field label="First name">
            <b-input
              class="btn3"
              v-model="formRegister.first_name"
              placeholder="Your first name"
              required
            ></b-input>
          </b-field>
        </div>
        <div class="column">
          <b-field label="Last name">
            <b-input
              class="btn3"
              v-model="formRegister.last_name"
              placeholder="Your last name"
              required
            ></b-input>
          </b-field>
        </div>
      </div>
      <div class="columns">
        <div class="column">
          <b-field label="Phone number">
            <b-input
              class="btn3"
              v-model="formRegister.mobile_phone"
              placeholder="Your phone number"
              type="number"
              required
            ></b-input>
          </b-field>
        </div>
        <div class="column"></div>
      </div>

      <div class="columns">
        <div class="column">
          <b-field label="Address">
            <b-input
              class="btn3"
              v-model="formRegister.address"
              placeholder="Your address"
              required
            ></b-input>
          </b-field>
        </div>
        <div class="column">
          <b-field label="District">
            <b-input
              class="btn3"
              v-model="formRegister.district"
              placeholder="Your district"
              required
            ></b-input>
          </b-field>
        </div>
      </div>
      <div class="columns">
        <div class="column">
          <b-field label="Sub district">
            <b-input
              class="btn3"
              v-model="formRegister.subdistrict"
              placeholder="Your sub district"
              required
            ></b-input>
          </b-field>
        </div>
        <div class="column">
          <b-field label="Province">
            <b-input
              class="btn3"
              v-model="formRegister.province"
              placeholder="Your province"
              required
            ></b-input>
          </b-field>
        </div>
      </div>
      <div class="columns">
        <div class="column">
          <b-field label="Postcode">
            <b-input
              class="btn3"
              v-model="formRegister.postcode"
              placeholder="Your postcode"
              type="number"
              required
            ></b-input>
          </b-field>
        </div>
        <div class="column"></div>
      </div>

      <div style="color: red; text-align: center">{{txtError}}</div>
      <button
        class="button btn3 color-brown"
        style="margin: 16px 0px 16px 0px; width: 100%;"
        @click="clickRegister"
      >Register</button>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      txtError: "",
      formRegister: {
        username: "",
        password: "",
        first_name: "",
        last_name: "",
        email: "",
        mobile_phone: "",
        address: "",
        district: "",
        subdistrict: "",
        postcode: "",
        province: ""
      }
    };
  },

  created() {
    console.log("created");
  },

  methods: {
    async clickRegister() {
      if (
        this.formRegister.password &&
        this.formRegister.password2 &&
        this.formRegister.first_name &&
        this.formRegister.last_name &&
        this.formRegister.email &&
        this.formRegister.mobile_phone &&
        this.formRegister.address &&
        this.formRegister.district &&
        this.formRegister.subdistrict &&
        this.formRegister.postcode &&
        this.formRegister.province
      ) {
        console.log("formRegister >> ", this.formRegister);

        this.formRegister.username = this.formRegister.email;

        if(this.formRegister.password.length < 6){

          this.txtError = "Password at least 6 characters. Please re-enter your password.";
        } else if (this.formRegister.password !== this.formRegister.password2) {
          this.txtError = "Passwords don't match. Please re-enter your password.";
        } else if (this.formRegister.mobile_phone.length !== 10) {
          this.txtError = "Phone number must be 10 digits. Please , try again.";
        } else if (this.formRegister.postcode.length !== 5) {
          this.txtError = "Postcode must be 5 digits. Please , try again.";
        } else {
          await this.$http
            .post(
              "https://dezignserves.com/registers/",
              JSON.stringify(this.formRegister),
              {
                headers: {
                  "Content-Type": "application/json",
                  Authorization: "Basic YWRtaW46cXdlcjEyMzQ="
                }
              }
            )
            .then(res => {
          window.sessionStorage.setItem(
            "user",
            JSON.stringify({
              user: this.formRegister.username
            })
          );
          this.$forceUpdate();
          this.$emit("childToParent", this.formRegister.username);
          console.log("success >> ", this.formRegister.username);
          this.$emit("childToParent", res.data);
          console.log("success >> ", res);
          })
          .catch(error => {
            console.error("clickLogin error >> ", error);
            this.isInvalid = true;
          });
        }
      } else {
      }
    }
  },

  computed: {}
};
</script>
<style>
.btn3 {
  height: 2.8em;
}
</style>


