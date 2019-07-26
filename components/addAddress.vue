<template>
  <div>
    <div class="modal-card" style="width: auto; margin: 20px;">
      <header class="modal-card-head" style="border-radius: 0px;">
        <p class="modal-card-title c-brown-black" style="text-align: center;">Shipping Address</p>
      </header>
      <section class="modal-card-body">
        <div class="columns">
          <div class="column">
            <b-field label="Address">
              <b-input class="btn3" v-model="form.address" placeholder="Your address" required></b-input>
            </b-field>
          </div>
        </div>

        <div class="columns">
          <div class="column">
            <b-field label="District">
              <b-input class="btn3" v-model="form.district" placeholder="Your district" required></b-input>
            </b-field>
          </div>
        </div>

        <div class="columns">
          <div class="column">
            <b-field label="Sub district">
              <b-input
                class="btn3"
                v-model="form.subDistrict"
                placeholder="Your sub district"
                required
              ></b-input>
            </b-field>
          </div>
        </div>

        <div class="columns">
          <div class="column">
            <b-field label="Province">
              <b-input class="btn3" v-model="form.province" placeholder="Your province" required></b-input>
            </b-field>
          </div>
          <div class="column">
            <b-field label="Postcode">
              <b-input
                class="btn3"
                v-model="form.postcode"
                placeholder="Your postcode"
                type="number"
                required
              ></b-input>
            </b-field>
          </div>
        </div>

        <div style="color: red; text-align: center">{{txtError}}</div>
        <button
          class="button btn3 color-brown"
          style="margin: 16px 0px 16px 0px; width: 100%;"
          @click="clickSubmit"
        >Submit</button>
      </section>
    </div>
  </div>
</template>


<script>
export default {
  props: ["customerID"],
  data() {
    return {
      form: {
        address: "",
        district: "",
        subDistrict: "",
        province: "",
        postcode: ""
      },
      txtError: ""
    };
  },

  created() {
    console.log("address created customerID >> ", this.customerID);
  },

  methods: {
    async clickSubmit() {
      console.log("clickSubmit", this.form);
      if (
        this.form.district === "" ||
        this.form.subDistrict === "" ||
        this.form.province === "" ||
        this.form.postcode === "" ||
        this.form.address === ""
      ) {
        this.txtError = "Please complete the information.";
        return;
      }

      await this.$http
        .post(
          "https://dezignserves.com/api/addresses/",
          {
            customer: 15,
            district: this.form.district,
            sub_district: this.form.subDistrict,
            province: this.form.province,
            post_code: this.form.postcode,
            address: this.form.address
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Basic YWRtaW46cXdlcjEyMzQ="
            }
          }
        )
        .then(res => {
          if (res.status === 201) {
            // this.address = res.data;
            console.log("addAddress success >> ", res.data);
            this.$emit("childToParent", res.data);
          } else {
            console.error("res.statusText >> ", res);
          }
        })
        .catch(error => {
          console.error("clickConfirm error >> ", error);
        });
    }
  }
};
</script>
