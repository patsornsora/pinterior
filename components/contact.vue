<template>
  <!-- <div>11</div> -->
  <div class="modal-card" style="width: auto; margin: 20px;">
    <header class="modal-card-head" style="border-radius: 0px;">
      <p class="modal-card-title" style="text-align: center;">ติดต่อสอบถามเพิ่มเติม</p>
    </header>
    <section class="modal-card-body">
      <v-form>
        <v-container>
          <v-layout row wrap>
            <v-flex xs12 sm6>
              <v-text-field v-model="form.name" :rules="[rules.required]" label="ชื่อ"></v-text-field>
            </v-flex>

            <v-flex xs12 sm6>
              <v-text-field v-model="form.lastname" :rules="[rules.required]" label="นามสกุล"></v-text-field>
            </v-flex>

            <v-flex xs12>
              <v-text-field
                v-model="form.email"
                :rules="[rules.required, rules.email]"
                label="E-mail"
              ></v-text-field>
            </v-flex>

            <v-flex xs12>
              <v-textarea solo name="input-7-4" label="รายละเอียด" v-model="form.detail"></v-textarea>
            </v-flex>

            <v-flex xs12 style="text-align: right;">
              <button
                class="button btn3 color-brown"
                style="background-color: #1c4b7c; border-radius: 4px;"
                @click="clickSend"
              >SEND</button>
            </v-flex>
          </v-layout>
        </v-container>
      </v-form>
    </section>
  </div>
</template>

<script>
export default {
  props: ["valueContact"],
  data() {
    return {
      form: {
        name: "",
        lastname: "",
        email: "",
        detail: ""
      },
      name: "",
      lastname: "",
      email: "",
      detail: "",
      rules: {
        required: value => !!value || "Required.",
        email: value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || "Invalid e-mail.";
        }
      }
    };
  },
  created() {},
  methods: {
    clickSend() {
      console.log("childToParent", this.form);
      // this.$emit("childToParent", this.form);
    }
  }
};
</script>

<style>
</style>


