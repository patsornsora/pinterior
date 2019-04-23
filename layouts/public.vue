<template>
  <div>
    <v-app id="inspire">
      <v-navigation-drawer v-model="drawer" app class="hidden-md-and-up">
        <v-toolbar color="white" app>
          <v-toolbar-title @click="clickMenu('home')">Dexcoro</v-toolbar-title>
        </v-toolbar>
        <v-list dense v-for="item in toolbarLists" :key="item.text" @click="clickMenu(item.value)">
          <v-list-tile>
            <v-list-tile-content @click="clickMenu(item.value)">
              <v-list-tile-title @click="clickMenu(item.value)">{{ item.text }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>

      <v-toolbar color="white" fixed app>
        <v-toolbar-side-icon @click.stop="drawer = !drawer" class="hidden-md-and-up"></v-toolbar-side-icon>
        <v-toolbar-title @click="clickMenu('home')">Dexcoro</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items
          v-for="item in toolbarLists"
          :key="item.text"
          @click="clickMenu(item.value)"
          class="hidden-sm-and-down"
        >
          <v-btn flat>{{ item.text }}</v-btn>
        </v-toolbar-items>
      </v-toolbar>

      <v-content>
        <nuxt/>
      </v-content>

      <v-footer color="grey" app>
        <span
          class="white--text caption"
          center
        >&copy; Copyright 2017 All Rights Reserved by Dexcoro</span>
      </v-footer>
    </v-app>
  </div>
</template>

<script>
export default {
  data() {
    return {
      watcher: false,
      toolbarList: [
        {
          text: "หน้าหลัก",
          value: "home",
          isLogin: false
        },
        {
          text: "เพิ่มห้อง",
          value: "addProject",
          isLogin: true
        },
        {
          text: "เข้าสู่ระบบ",
          value: "login",
          isLogin: false
        },
        {
          text: "สมัครสมาชิก",
          value: "register",
          isLogin: false
        },
        {
          text: "ออกจากระบบ",
          value: "logout",
          isLogin: true
        }
      ],
      drawer: false,
      userObj: JSON.parse(window.sessionStorage.getItem("user")) || {},
      isLogin: false
      // get token() {
      //   return localStorage.getItem('token') || 0;
      // },
    };
  },

  watch: {
    // userObj() {
    //   console.log("watch");
    //   if (!this.userObj.user) {
    //     return this.$router.replace("/login");
    //     this.isLogin = false;
    //   } else {
    //     this.isLogin = true;
    //   }
    // }
  },

  async created() {
    this.userObj = JSON.parse(window.sessionStorage.getItem("user")) || "{}";
    console.log("created >> ", !this.userObj.user);
    if (!this.userObj.user) {
      // return this.$router.replace("/login");
      this.isLogin = false;
    } else {
      this.isLogin = true;
    }
  },

  computed: {
    windowHeight() {
      return this.getWindowHeight();
    },
    windowWidth() {
      return this.getWindowWidth();
    },
    // isLogin() {
    //   this.userObj = JSON.parse(window.sessionStorage.getItem("user")) || {};
    //   // isLogin = !!userObj.user
    //   console.log("computed >> ", !this.userObj.user);
    //   if (!this.userObj.user) {
    //     return false;
    //   } else {
    //     return true;
    //   }
    // }
    toolbarLists() {
      return this.toolbarList.filter(
        x => x.isLogin === this.isLogin || x.value === "home"
      );
    }
  },

  props: {
    source: String
  },

  methods: {
    handleScroll() {
      console.log("scrolling");
    },
    clickMenu(value) {
      if (value === "home") {
        this.$router.push("/");
      } else if (value === "logout") {
        window.sessionStorage.removeItem("user");
        this.$router.push("/");
      } else {
        this.$router.push("/" + value);
      }
    }
  }
};
</script>


<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

.text-header {
  margin: 20px;
}

#outer {
  width: 100%;
  text-align: center;
}

#inner {
  width: 50%;
  display: inline-block;
}
</style>

