<template>
  <div data-app>
    <!-- <v-layout> -->
    <div class="title text-header">สมัครสมาชิก</div>

    <v-form>
      <v-container>
        <v-layout row wrap>
          <v-flex xs1>
            <v-subheader>ชื่อ</v-subheader>
          </v-flex>
          <v-flex xs1></v-flex>
          <v-flex xs12 sm4 d-flex>
            <v-text-field
              v-model="form.name"
              label="ชื่อ"
              :rules="[rules.required]"
              :autofocus="focus"
              required
            ></v-text-field>
          </v-flex>

          <v-flex xs1>
            <v-subheader style="padding-top: 24px;">นามสกุล</v-subheader>
          </v-flex>
          <v-flex xs1></v-flex>
          <v-flex xs12 sm4 d-flex>
            <v-text-field
              v-model="form.lastname"
              label="นามสกุล"
              :rules="[rules.required]"
              required
            ></v-text-field>
          </v-flex>

          <v-flex xs2>
            <v-subheader>อีเมล</v-subheader>
          </v-flex>
          <v-flex xs12 sm4 d-flex>
            <v-text-field
              v-model="form.email"
              label="อีเมล"
              :rules="[rules.required, rules.email]"
              required
            ></v-text-field>
          </v-flex>

          <v-flex xs2>
            <v-subheader>เบอร์โทร</v-subheader>
          </v-flex>
          <v-flex xs12 sm4 d-flex>
            <v-text-field
              v-model="form.phone"
              label="เบอร์โทร"
              :rules="[rules.required, rules.phone]"
              type="number"
              hint="Example 0800000000"
              required
            ></v-text-field>
          </v-flex>

          <v-flex xs2>
            <v-subheader>รหัสผ่าน</v-subheader>
          </v-flex>
          <v-flex xs12 sm4 d-flex>
            <v-text-field
              v-model="form.password"
              label="รหัสผ่าน"
              :append-icon="show.pass ? 'visibility_off' : 'visibility'"
              :rules="[rules.required, rules.min6]"
              :type="show.pass ? 'text' : 'password'"
              name="input-10-2"
              hint="At least 6 characters"
              @click:append="show.pass = !show.pass"
            ></v-text-field>
          </v-flex>

          <v-flex xs2>
            <v-subheader>ยืนยันรหัสผ่าน</v-subheader>
          </v-flex>
          <v-flex xs12 sm4 d-flex>
            <v-text-field
              v-model="form.cPassword"
              label="ยืนยันรหัสผ่าน"
              ref="cPassword"
              :append-icon="show.cPass ? 'visibility_off' : 'visibility'"
              :rules="[rules.required, rules.min6]"
              :type="show.cPass ? 'text' : 'password'"
              name="input-10-2"
              hint="At least 6 characters"
              @click:append="show.cPass = !show.cPass"
              @blur="checkPass"
            ></v-text-field>
          </v-flex>
        </v-layout>
      </v-container>
    </v-form>

    <div class="title text-header">ที่อยู่</div>

    <v-form>
      <v-container>
        <v-layout row wrap>
          <v-flex xs2>
            <v-subheader>address</v-subheader>
          </v-flex>
          <v-flex xs12 sm10 d-flex>
            <v-textarea
              solo
              name="input-7-4"
              label="address"
              v-model="form.address"
              :rules="[rules.required]"
              counter="500"
              required
            ></v-textarea>
            <!-- <v-text-field v-model="form.address" label="address" :rules="addressRules" required></v-text-field> -->
          </v-flex>

          <v-flex xs2>
            <v-subheader>district</v-subheader>
          </v-flex>
          <v-flex xs12 sm4 d-flex>
            <v-text-field
              v-model="form.district"
              label="district"
              :rules="[rules.required]"
              required
            ></v-text-field>
          </v-flex>

          <v-flex xs2>
            <v-subheader>county</v-subheader>
          </v-flex>
          <v-flex xs12 sm4 d-flex>
            <v-text-field v-model="form.county" label="county" :rules="[rules.required]" required></v-text-field>
          </v-flex>

          <v-flex xs2>
            <v-subheader>province</v-subheader>
          </v-flex>
          <v-flex xs12 sm4 d-flex>
            <v-text-field
              v-model="form.province"
              label="province"
              :rules="[rules.required]"
              required
            ></v-text-field>
          </v-flex>

          <v-flex xs2>
            <v-subheader>zipcode</v-subheader>
          </v-flex>
          <v-flex xs12 sm4 d-flex>
            <v-text-field v-model="form.zipcode" label="zipcode" :rules="[rules.required]" required></v-text-field>
          </v-flex>
        </v-layout>
      </v-container>
    </v-form>

    <div style="text-align: center;">
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-btn
          style="width: 70%; max-width: 280px;"
          :disabled="!valid"
          color="success"
          @click="validate"
        >เปิดบัญชีผู้ใช้งาน</v-btn>
        <div>
          <v-btn
            style="width: 70%; max-width: 280px;"
            color="primary"
            @click="validate"
          >Facebook Login</v-btn>
        </div>
      </v-form>
      <div style="font-size: 12px; margin-bottom: 50px;">
        <div style="margin: 10px;">
          เมื่อยืนยันการลงทะเบียน คุณตกลงที่จะยอมรับ
          <a
            flat
            @click="clickLogin()"
          >เงื่อนไขและข้อตกลงในการใช้งาน</a>
        </div>
        <div style="margin: 10px;">
          คุณลงทะเบียนแล้ว?
          <a flat @click="clickLogin()">เข้าสู่ระบบ</a>
        </div>
      </div>
    </div>
    <!-- </v-layout> -->
  </div>
</template>

<script>
const blankForm = {
  name: "",
  lastname: "",
  sex: "",
  email: "",
  phone: "",
  password: "",
  cPassword: "",
  address: "",
  district: "",
  county: "",
  province: "",
  zipcode: ""
};

export default {
  // layout: "public",
  data() {
    return {
      form: JSON.parse(JSON.stringify(blankForm)),
      valid: true,
      focus: true,
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

  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true;
      }
    },
    clickLogin() {
      this.$router.push("/login");
    },
    checkPass() {
      if (this.form.cPassword && this.form.password !== this.form.cPassword) {
        // TODO show dialog
        this.form.cPassword = "";
        this.$refs.cPassword.focus();
      }
    }
  }
};
</script>

