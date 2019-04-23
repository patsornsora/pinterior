<template>
  <div>
    <header class="modal-card-head" style="border-radius: 0px;">
      <p class="modal-card-title" style="text-align: center;">
        <b>Edit Profile</b>
      </p>
    </header>
    <section class="modal-card-body" style="padding: 20px 100px 20px 100px;">
      <div class="columns">
        <div class="column">
          <b-field label="FIRSTNAME">
            <b-input class="btn3" v-model="form.firstname" placeholder="Your firstname" required></b-input>
          </b-field>
        </div>
        <div class="column">
          <b-field label="LASTNAME">
            <b-input class="btn3" v-model="form.lastname" placeholder="Your lastname" required></b-input>
          </b-field>
        </div>
      </div>

      <div class="columns">
        <div class="column">
          <b-field label="EMAIL">
            <b-input
              class="btn3"
              type="email"
              v-model="form.email"
              placeholder="Your email"
              required
            ></b-input>
          </b-field>
        </div>
        <div class="column">
          <b-field label="PHONE NUMBER">
            <b-input class="btn3" v-model="form.phone" placeholder="Your phone number" required></b-input>
          </b-field>
        </div>
      </div>

      <div class="columns">
        <div class="column">
          <b-field label="STREET ADDRESS">
            <b-input class="btn3" v-model="form.address" placeholder="Your street address" required></b-input>
          </b-field>
        </div>
        <div class="column">
          <b-field label="COUNTRY">
            <b-input class="btn3" v-model="form.country" placeholder="Your country" required></b-input>
          </b-field>
        </div>
      </div>

      <div class="columns">
        <div class="column">
          <b-field label="CITY">
            <b-input class="btn3" v-model="form.city" placeholder="Your city" required></b-input>
          </b-field>
        </div>
        <div class="column">
          <div class="columns">
            <div class="column">
              <b-field label="STATE">
                <b-input class="btn3" v-model="form.state" placeholder="Your state" required></b-input>
              </b-field>
            </div>
            <div class="column">
              <b-field label="ZIP CODE">
                <b-input class="btn3" v-model="form.zipcode" placeholder="Your zip code" required></b-input>
              </b-field>
            </div>
          </div>
        </div>
      </div>

      <div class="columns">
        <div class="column">
          <b-field label="NEW PASSWORD">
            <b-input
              class="btn3"
              type="password"
              v-model="form.password"
              password-reveal
              placeholder="Your new password"
              required
            ></b-input>
          </b-field>
        </div>
        <div class="column">
          <b-field label="CONFIRM NEW PASSWORD">
            <b-input
              class="btn3"
              type="password"
              v-model="form.cPassword"
              password-reveal
              placeholder="Your confirm new password"
              required
            ></b-input>
          </b-field>
        </div>
      </div>

      <button
        class="button btn3"
        style="margin: 16px 0px 16px 0px; width: 100%; background-color: #1c4b7c;"
        @click="clickSave"
      >SAVE CHANGES</button>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formProp: {
        email: "",
        password: ""
      },
      form: {
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        address: "",
        country: "",
        city: "",
        state: "",
        zipcode: "",
        password: "",
        cPassword: ""
      },
      address: [],
      show: {
        pass: false,
        cPass: false
      },
      rules: {
        required: v => !!v || "Required.",
        min6: v => v.length >= 6 || "Min 6 characters",
        phone: v => v.length <= 10 || "Max 10 characters",
        email: value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || "Invalid e-mail.";
        }
      }
    };
  },

  created() {
    // TODO getData set form
    this.form.firstname = "firstname";
    this.form.lastname = "lastname";
    this.form.email = "email@hotmail.com";
    this.form.phone = "phone";
    this.form.address = "address";
    this.form.country = "country";
    this.form.city = "city";
    this.form.state = "state";
    this.form.zipcode = "zipcode";
    this.form.password = "password";
    this.form.cPassword = "cPassword";
  },

  methods: {
    clickSave() {
      console.log("clickSave", this.form);
      // TODO save profile
      this.success();
      this.$router.go(-1);
    },
    success() {
      this.$toast.open({
        message: "success",
        type: "is-success"
      });
    }
  },

  computed: {}
};
</script>

<style>
</style>

