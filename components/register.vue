<template>
  <div class="modal-card" style="width: auto; margin: 20px;">
    <header class="modal-card-head" style="border-radius: 0px;">
      <p class="modal-card-title" style="text-align: center;">register</p>
    </header>
    <section class="modal-card-body">
      <div class="columns">
        <div class="column">
          <b-field label="Username">
            <b-input class="btn3" :value="formProps.email" placeholder="Your username" required></b-input>
          </b-field>
        </div>
        <div class="column">
          <b-field label="Email">
            <b-input
              class="btn3"
              type="email"
              :value="formProps.email"
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
              :value="formProps.password"
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
              :value="formProps.password"
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
            <b-input class="btn3" placeholder="Your first name" required></b-input>
          </b-field>
        </div>
        <div class="column">
          <b-field label="Last name">
            <b-input class="btn3" placeholder="Your last name" required></b-input>
          </b-field>
        </div>
      </div>
      <div class="columns">
        <div class="column">
          <b-field label="Phone number">
            <b-input class="btn3" placeholder="Your phone number" required></b-input>
          </b-field>
        </div>
        <div class="column"></div>
      </div>

      <div class="columns">
        <div class="column">
          <b-field label="Address">
            <b-input class="btn3" placeholder="Your address" required></b-input>
          </b-field>
        </div>
        <div class="column">
          <b-field label="District">
            <b-input class="btn3" placeholder="Your district" required></b-input>
          </b-field>
        </div>
      </div>
      <div class="columns">
        <div class="column">
          <b-field label="Sub district">
            <b-input class="btn3" placeholder="Your sub district" required></b-input>
          </b-field>
        </div>
        <div class="column">
          <b-field label="Province">
            <b-input class="btn3" placeholder="Your province" required></b-input>
          </b-field>
        </div>
      </div>
      <div class="columns">
        <div class="column">
          <b-field label="Post code">
            <b-input class="btn3" placeholder="Your post code" required></b-input>
          </b-field>
        </div>
        <div class="column"></div>
      </div>

      <button
        class="button btn3"
        style="margin: 16px 0px 16px 0px; width: 100%; background-color: #1c4b7c;"
      >Register</button>
    </section>
  </div>
  <!--

enter your address
address
district
sub district
province
  post code-->
</template>

<script>
export default {
  data() {
    return {
      formProps: {
        email: "",
        password: ""
      }
    };
  },

  created() {
    console.log("created");
    console.log("value", this.value);
  },

  methods: {},

  computed: {}
};
</script>
<style>
.btn3 {
  height: 2.8em;
}
</style>


