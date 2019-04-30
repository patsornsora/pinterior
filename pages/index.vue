<template>
  <div>
    0000
    <b-modal :active.sync="isComponentFilter" has-modal-card>
      <modal-filter v-model="formProps"></modal-filter>
    </b-modal>

    <b-modal :active.sync="isComponentAddColor" has-modal-card>
      <modal-add-color v-model="formProps"></modal-add-color>
    </b-modal>

    <b-modal :active.sync="isComponentView" has-modal-card>
      <modal-view v-model="formProps"></modal-view>
    </b-modal>
  </div>
</template>

<script>
import ModalFilter from "../components/filter";
import ModalAddColor from "../components/addColor";
import ModalView from "../components/view";
import Swatches from "vue-swatches";

export default {
  components: {
    ModalFilter,
    ModalAddColor,
    ModalView,
    Swatches
  },
  // layout: "template",
  data() {
    return {
      isSelectColor: false,
      isAddColor: true,
      addColor: "#F64272",
      addColors: [
        ["#F64272", "#F6648B", "#F493A7"],
        ["#8b5aff", "#a27bff", "#b99cff"],
        ["#51e5db", "#74ebe3", "#96f0ea"],
        ["#ffa51a", "#ffb748", "#ffc976"]
      ],
      formProps: {
        email: "evan@you.com",
        password: "testing"
      },
      isComponentColor: false,
      isComponentFilter: false,
      isComponentAddColor: false,
      isComponentView: false,
      textTab: {
        all: "font-weight: bold; color: #1c4b7c;",
        condo: "",
        townhome: "",
        house: "",
        showroom: ""
      },
      imageTab: {
        all: "/icon/all_active.png",
        condo: "/icon/condo.png",
        townhome: "/icon/townhome.png",
        house: "/icon/house.png",
        showroom: "/icon/showroom.png"
      },
      lineTab: {
        all: "/icon/line_click.png",
        condo: "/icon/line_unclick.png",
        townhome: "/icon/line_unclick.png",
        house: "/icon/line_unclick.png",
        showroom: "/icon/line_unclick.png"
      },
      windowWidth: 0,
      showFilter: false,
      detail: {
        title: "Title",
        designer: "Designer",
        project: "Project",
        type: "Type"
      },
      developer: "0",
      brandProduct: "0",
      project: "0",
      type: "0",
      developers: [
        { value: "0", text: "All" },
        { value: "Woken Wood", text: "Woken Wood" },
        { value: "eggwhite", text: "eggwhite" },
        { value: "Furloft", text: "Furloft" },
        { value: "innolife", text: "innolife" }
      ],
      brandProducts: [
        { value: "0", text: "All" },
        { value: "Woken Wood", text: "Woken Wood" },
        { value: "eggwhite", text: "eggwhite" },
        { value: "Furloft", text: "Furloft" },
        { value: "innolife", text: "innolife" }
      ],
      projects: [
        { value: "0", text: "All" },
        { value: "Woken Wood", text: "Woken Wood" },
        { value: "eggwhite", text: "eggwhite" },
        { value: "Furloft", text: "Furloft" },
        { value: "innolife", text: "innolife" }
      ],
      types: [
        { value: "0", text: "All" },
        { value: "Woken Wood", text: "Woken Wood" },
        { value: "eggwhite", text: "eggwhite" },
        { value: "Furloft", text: "Furloft" },
        { value: "innolife", text: "innolife" }
      ],
      lists: [],
      color: "#4a4a4a",
      colors: [],
      cbStyle: [],
      isRandom: true
    };
  },

  async created() {
    this.windowWidth = window.innerWidth;
    var list = [
      {
        id: 254,
        title: "Title1",
        designer: "Designer1",
        project: "Project1",
        type: "Type",
        img: "/room/r1/1.png",
        price: "1250000",
        link: "https://vizor.io/miniemeenie/room1",
        favorite: false
      },
      {
        id: 2,
        title: "Title2",
        designer: "Designer2",
        project: "Project2",
        type: "Type",
        img: "/room/r2/1.png",
        price: "254000",
        favorite: false
      },
      {
        id: 255,
        title: "Title3",
        designer: "Designer3",
        project: "Project3",
        type: "Type",
        img: "/room/r3/1.png",
        price: "35500",
        link: "https://vizor.io/miniemeenie/room3",
        favorite: false
      },
      {
        id: 4,
        title: "Title4",
        designer: "Designer4",
        project: "Project4",
        type: "Type",
        img: "/room/r4/1.png",
        price: "45500",
        link: "https://vizor.io/miniemeenie/dezigntool-mockuproomo2",
        favorite: false
      },
      {
        id: 5,
        title: "Title5",
        designer: "Designer5",
        project: "Project5",
        type: "Type",
        img: "/room/r5/1.jpg",
        price: "250000",
        favorite: false
      },
      {
        id: 6,
        title: "Title6",
        designer: "Designer6",
        project: "Project6",
        type: "Type",
        img: "/room/r6/1.jpg",
        price: "250000",
        favorite: false
      },
      {
        id: 7,
        title: "Title7",
        designer: "Designer7",
        project: "Project7",
        type: "Type",
        img: "/room/room7.png",
        price: "250000",
        favorite: false
      },
      {
        id: 8,
        title: "Title8",
        designer: "Designer8",
        project: "Project8",
        type: "Type",
        img: "/room/room8.png",
        price: "250000",
        favorite: false
      },
      {
        id: 9,
        title: "Title9",
        designer: "Designer9",
        project: "Project9",
        type: "Type",
        img: "/room/room1.png",
        price: "250000",
        favorite: false
      },
      {
        id: 10,
        title: "Title10",
        designer: "Designer10",
        project: "Project10",
        type: "Type",
        img: "/room/room2.png",
        price: "250000",
        favorite: false
      }
    ];

    if (sessionStorage.getItem("isRandom")) {
      // console.log('isRandom >> ', JSON.parse(window.sessionStorage.getItem("isRandom")))
      this.isRandom = false;
      this.lists = JSON.parse(window.sessionStorage.getItem("isRandom"));
    } else {
      var listLength = list.length;
      for (var i = 0; i < listLength; i++) {
        var r = Math.ceil(Math.random() * list.length - 1);
        this.lists.push(list[r]);
        list.splice(r, 1);
      }
      window.sessionStorage.setItem("isRandom", JSON.stringify(this.lists));
    }

    // let res = await this.$http.get("/api/student", {
    //   headers: {
    //     "Access-Control-Allow-Origin": "http://www.dezigntool.com",
    //     "Access-Control-Allow-Credentials": true,
    //     "Access-Control-Allow-Methods":
    //       "GET, POST, PATCH, PUT, DELETE, OPTIONS",
    //     "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token"
    //   }
    // });
    // console.log("res.data >> ", res.data);
  },

  watch: {
    windowWidth() {
      this.showFilter = this.windowWidth > 960;
    },
    color() {
      console.log("color", this.color);
      // this.isComponentColor = false;
      this.colors.push({ color: this.color });
      this.isSelectColor = !this.isSelectColor;
    },
    colors() {
      if (this.colors.length < 5) {
        this.isAddColor = true;
      } else {
        this.isAddColor = false;
      }
    }
  },

  mounted() {
    this.$nextTick(() => {
      window.addEventListener("resize", () => {
        this.windowWidth = window.innerWidth;
      });
    });
  },

  methods: {
    aaaa() {
      console.log("aaaa");
      this.isSelectColor = !this.isSelectColor;
      console.log("isSelectColor >> ", this.isSelectColor);
    },
    goLink(link) {
      window.open(link, "_blank");
    },
    clickFavorite() {
      console.log("clickFavorite");
    },
    clickUnFavorite() {
      console.log("clickUnFavorite");
    },
    clickPicture() {
      console.log("clickPicture");
    },
    clickDetail(id) {
      // this.$router.push("/detail");
      this.$router.push("/detail/" + id);
    },
    clickTab(type) {
      switch (type) {
        case "all":
          this.imageTab.all = "/icon/all_active.png";
          this.imageTab.condo = "/icon/condo.png";
          this.imageTab.townhome = "/icon/townhome.png";
          this.imageTab.house = "/icon/house.png";
          this.imageTab.showroom = "/icon/showroom.png";
          this.lineTab.all = "/icon/line_click.png";
          this.lineTab.condo = "/icon/line_unclick.png";
          this.lineTab.townhome = "/icon/line_unclick.png";
          this.lineTab.house = "/icon/line_unclick.png";
          this.lineTab.showroom = "/icon/line_unclick.png";
          this.textTab.all = "font-weight: bold; color: #1c4b7c;";
          this.textTab.condo = "";
          this.textTab.townhome = "";
          this.textTab.house = "";
          this.textTab.showroom = "";
          this.setList("all");
          break;
        case "condo":
          this.imageTab.all = "/icon/all.png";
          this.imageTab.condo = "/icon/condo_active.png";
          this.imageTab.townhome = "/icon/townhome.png";
          this.imageTab.house = "/icon/house.png";
          this.imageTab.showroom = "/icon/showroom.png";
          this.lineTab.all = "/icon/line_unclick.png";
          this.lineTab.condo = "/icon/line_click.png";
          this.lineTab.townhome = "/icon/line_unclick.png";
          this.lineTab.house = "/icon/line_unclick.png";
          this.lineTab.showroom = "/icon/line_unclick.png";
          this.textTab.all = "";
          this.textTab.condo = "font-weight: bold; color: #1c4b7c;";
          this.textTab.townhome = "";
          this.textTab.house = "";
          this.textTab.showroom = "";
          this.setList("condo");
          break;
        case "townhome":
          this.imageTab.all = "/icon/all.png";
          this.imageTab.condo = "/icon/condo.png";
          this.imageTab.townhome = "/icon/townhome_active.png";
          this.imageTab.house = "/icon/house.png";
          this.imageTab.showroom = "/icon/showroom.png";
          this.lineTab.all = "/icon/line_unclick.png";
          this.lineTab.condo = "/icon/line_unclick.png";
          this.lineTab.townhome = "/icon/line_click.png";
          this.lineTab.house = "/icon/line_unclick.png";
          this.lineTab.showroom = "/icon/line_unclick.png";
          this.textTab.all = "";
          this.textTab.condo = "";
          this.textTab.townhome = "font-weight: bold; color: #1c4b7c;";
          this.textTab.house = "";
          this.textTab.showroom = "";
          this.setList("townhome");
          break;
        case "house":
          this.imageTab.all = "/icon/all.png";
          this.imageTab.condo = "/icon/condo.png";
          this.imageTab.townhome = "/icon/townhome.png";
          this.imageTab.house = "/icon/house_active.png";
          this.imageTab.showroom = "/icon/showroom.png";
          this.lineTab.all = "/icon/line_unclick.png";
          this.lineTab.condo = "/icon/line_unclick.png";
          this.lineTab.townhome = "/icon/line_unclick.png";
          this.lineTab.house = "/icon/line_click.png";
          this.lineTab.showroom = "/icon/line_unclick.png";
          this.textTab.all = "";
          this.textTab.condo = "";
          this.textTab.townhome = "";
          this.textTab.house = "font-weight: bold; color: #1c4b7c;";
          this.textTab.showroom = "";
          this.setList("house");
          break;
        case "showroom":
          this.imageTab.all = "/icon/all.png";
          this.imageTab.condo = "/icon/condo.png";
          this.imageTab.townhome = "/icon/townhome.png";
          this.imageTab.house = "/icon/house.png";
          this.imageTab.showroom = "/icon/showroom_active.png";
          this.lineTab.all = "/icon/line_unclick.png";
          this.lineTab.condo = "/icon/line_unclick.png";
          this.lineTab.townhome = "/icon/line_unclick.png";
          this.lineTab.house = "/icon/line_unclick.png";
          this.lineTab.showroom = "/icon/line_click.png";
          this.textTab.all = "";
          this.textTab.condo = "";
          this.textTab.townhome = "";
          this.textTab.house = "";
          this.textTab.showroom = "font-weight: bold; color: #1c4b7c;";
          this.setList("showroom");
          break;
      }
    },
    setList(typeHome) {
      console.log(
        "filter",
        typeHome,
        this.developer,
        this.brandProduct,
        this.project,
        this.type,
        this.cbStyle,
        this.colors
      );
    },
    clickView() {
      this.isComponentView = true;
      console.log("clickView");
    },
    clickAddColor() {
      this.isComponentAddColor = true;
      console.log("clickAddColor");
    },
    clickClearColor() {
      this.colors = [];
    },
    clickResetFilter() {
      this.developer = "0";
      this.brandProduct = "0";
      this.project = "0";
      this.type = "0";
      this.cbStyle = [];
      this.colors = [];

      this.imageTab.all = "/icon/all_active.png";
      this.imageTab.condo = "/icon/condo.png";
      this.imageTab.townhome = "/icon/townhome.png";
      this.imageTab.house = "/icon/house.png";

      this.lineTab.all = "/icon/line_click.png";
      this.lineTab.condo = "/icon/line_unclick.png";
      this.lineTab.townhome = "/icon/line_unclick.png";
      this.lineTab.house = "/icon/line_unclick.png";

      this.setList("all");
    },
    clickColor(index) {
      this.$dialog.confirm({
        // title: "Deleting COLOR TONE",
        message: "Are you sure you want to <b>delete</b> COLOR TONE?",
        // confirmText: "Delete Account",
        cancelText: "CANCEL",
        type: "is-danger",
        hasIcon: true,
        onConfirm: () => this.colors.splice(index, 1)
      });
    }
  }
};
</script>

<style>
#container {
  position: relative;
}
#copyright {
  position: absolute;
  bottom: 0;
}
.absolute {
  position: absolute;
  bottom: 10px;
}
</style>

