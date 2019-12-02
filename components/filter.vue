<template>
  <!-- <div>11</div> -->
  <div class="modal-card" style="width: auto; margin: 20px;">
    <header class="modal-card-head" style="border-radius: 0px;">
      <p class="modal-card-title" style="text-align: center;">Filter</p>
    </header>
    <section class="modal-card-body">
      <!-- <div class="column is-one-quarters is-mobile" style="max-height: 28px;" v-show="showFilter"> -->
      <!-- <div>
        <div class="columns is-mobile">
          <div
            class="column"
            style="text-align: center; padding: 8px 0px 0px 0px;"
            @click="clickTab('all')"
          >
            <img :src="image.imgAll" style="max-height: 28px;">
          </div>
          <div
            class="column"
            style="text-align: center; padding: 8px 0px 0px 0px;"
            @click="clickTab('condo')"
          >
            <img :src="image.imgCondo" style="max-height: 28px;">
          </div>
          <div
            class="column"
            style="text-align: center; padding: 8px 0px 0px 0px;"
            @click="clickTab('townhome')"
          >
            <img :src="image.imgTownhome" style="max-height: 28px;">
          </div>
          <div
            class="column"
            style="text-align: center; padding: 8px 0px 0px 0px;"
            @click="clickTab('house')"
          >
            <img :src="image.imgHouse" style="max-height: 28px;">
          </div>
        </div>
        <div class="columns is-mobile">
          <div class="column" style="text-align: center; padding: 0px;" @click="clickTab('all')">
            <font size="1" :style="textTab.All">ALL</font>
          </div>
          <div class="column" style="text-align: center; padding: 0px;" @click="clickTab('condo')">
            <font size="1" :style="textTab.Condo">CONDO</font>
          </div>
          <div
            class="column"
            style="text-align: center; padding: 0px;"
            @click="clickTab('townhome')"
          >
            <font size="1" :style="textTab.Townhome">TOWNHOME</font>
          </div>
          <div class="column" style="text-align: center; padding: 0px;" @click="clickTab('house')">
            <font size="1" :style="textTab.House">HOUSE</font>
          </div>
        </div>
        <div class="columns is-mobile" style="margin-bottom: 15px;">
          <div class="column" style="text-align: center; padding: 0px;" @click="clickTab('all')">
            <img :src="line.lineAll" style="max-height: 28px;">
          </div>
          <div class="column" style="text-align: center; padding: 0px;" @click="clickTab('condo')">
            <img :src="line.lineCondo" style="max-height: 28px;">
          </div>
          <div
            class="column"
            style="text-align: center; padding: 0px;"
            @click="clickTab('townhome')"
          >
            <img :src="line.lineTownhome" style="max-height: 28px;">
          </div>
          <div class="column" style="text-align: center; padding: 0px;" @click="clickTab('house')">
            <img :src="line.lineHouse" style="max-height: 28px;">
          </div>
        </div>
      </div>-->
      <!-- </div> -->
      <div style="width: 200px; padding: 10px 10px 10px 10px;">
        <b-field label="Developer" colors="info">
          <b-select expanded v-model="developer">
            <option value="0">All</option>
            <option value="flint">Flint</option>
            <option value="silver">Silver</option>
          </b-select>
        </b-field>
        <b-field label="Brand">
          <b-select expanded v-model="brandProduct">
            <option
              v-for="item in brandProducts"
              :value="item.value"
              :key="item.value"
            >{{item.text}}</option>
          </b-select>
        </b-field>
        <b-field label="Project">
          <b-select expanded v-model="project">
            <option value="0">All</option>
            <option value="flint">Flint</option>
            <option value="silver">Silver</option>
          </b-select>
        </b-field>
        <b-field label="Type">
          <b-select expanded v-model="type">
            <option value="0">All</option>
            <option value="flint">Flint</option>
            <option value="silver">Silver</option>
          </b-select>
        </b-field>

        <h6 class="subtitle is-6" style="margin-bottom: 10px;">
          <strong>Style</strong>
        </h6>

        <section>
          <div class="field">
            <b-checkbox v-model="cbStyle" native-value="Loft">Loft</b-checkbox>
          </div>
          <div class="field">
            <b-checkbox v-model="cbStyle" native-value="Modern">Modern</b-checkbox>
          </div>
          <div class="field">
            <b-checkbox v-model="cbStyle" native-value="Nordic">Nordic</b-checkbox>
          </div>
          <div class="field">
            <b-checkbox v-model="cbStyle" native-value="Scandinavian">Scandinavian</b-checkbox>
          </div>
        </section>

        <h6 class="subtitle is-6" style="margin-bottom: 10px; margin-top: 10px;">
          <strong>Color tone</strong>
        </h6>
        <div style="display: inline;">
          <div style="padding: 0px; display: inline;" v-for="(item, index) in colors" :key="index">
            <div
              class="button is-rounded"
              :style="{'background-color': item.color, 'width': '30px', 'height': '30px'}"
              @click="clickColor(index)"
            ></div>
          </div>
          <div style="display: inline;">
            <v-img
              class="button is-rounded"
              src="/icon/addColor.png"
              style="width: 30px; height: 30px; padding: 14px;"
              :aspect-ratio="1"
              target="_blank"
              v-show="isAddColor"
              @click="isSelectColor = !isSelectColor"
            ></v-img>
          </div>
        </div>
        <div class="custom-ui-class" v-show="isSelectColor">
          <swatches v-model="color" shapes="circles" :colors="addColors" inline></swatches>
        </div>
        <div class="level-right">
          <a @click="clickClearColor">Clear color</a>
        </div>

        <!-- <a class="button" style="color: black; width: 100%;">Reset filter</a> -->
      </div>

      <button
        class="button btn3"
        style="margin: 16px 0px 16px 0px; width: 100%; background-color: #1c4b7c;"
      >SET FILTER</button>
    </section>
  </div>
</template>

<script>
import Swatches from "vue-swatches";
export default {
  components: {
    Swatches
  },
  props: ["value"],
  data() {
    return {
      color: "#4a4a4a",
      colors: [],
      addColor: "#F64272",
      addColors: [
        ["#F64272", "#F6648B", "#F493A7"],
        ["#8b5aff", "#a27bff", "#b99cff"],
        ["#51e5db", "#74ebe3", "#96f0ea"],
        ["#ffa51a", "#ffb748", "#ffc976"]
      ],
      isSelectColor: false,
      isAddColor: true,
      formProp: {
        email: "",
        password: ""
      },
      textTab: {
        All: "font-weight: bold; color: #1c4b7c;",
        Condo: "",
        Townhome: "",
        House: ""
      },
      image: {
        imgAll: "/icon/all_active.png",
        imgCondo: "/icon/condo.png",
        imgTownhome: "/icon/townhome.png",
        imgHouse: "/icon/house.png"
      },
      line: {
        lineAll: "/icon/line_click.png",
        lineCondo: "/icon/line_unclick.png",
        lineTownhome: "/icon/line_unclick.png",
        lineHouse: "/icon/line_unclick.png"
      },
      cbStyle: [],
      developer: "0",
      brandProduct: "0",
      project: "0",
      type: "0",
      brandProducts: [
        { value: "0", text: "All" },
        { value: "Woken Wood", text: "Woken Wood" },
        { value: "eggwhite", text: "eggwhite" },
        { value: "Furloft", text: "Furloft" },
        { value: "innolife", text: "innolife" }
      ]
    };
  },
  created() {
    console.log("formProps", this.formProps);
  },
  methods: {
    clickAdd() {
      console.log("clickAdd");
    },
    clickTab(type) {
      switch (type) {
        case "all":
          this.image.imgAll = "/icon/all_active.png";
          this.image.imgCondo = "/icon/condo.png";
          this.image.imgTownhome = "/icon/townhome.png";
          this.image.imgHouse = "/icon/house.png";
          this.line.lineAll = "/icon/line_click.png";
          this.line.lineCondo = "/icon/line_unclick.png";
          this.line.lineTownhome = "/icon/line_unclick.png";
          this.line.lineHouse = "/icon/line_unclick.png";
          this.textTab.All = "font-weight: bold; color: #1c4b7c;";
          this.textTab.Condo = "";
          this.textTab.Townhome = "";
          this.textTab.House = "";
          this.setList("all");
          break;
        case "condo":
          this.image.imgAll = "/icon/all.png";
          this.image.imgCondo = "/icon/condo_active.png";
          this.image.imgTownhome = "/icon/townhome.png";
          this.image.imgHouse = "/icon/house.png";
          this.line.lineAll = "/icon/line_unclick.png";
          this.line.lineCondo = "/icon/line_click.png";
          this.line.lineTownhome = "/icon/line_unclick.png";
          this.line.lineHouse = "/icon/line_unclick.png";
          this.textTab.All = "";
          this.textTab.Condo = "font-weight: bold; color: #1c4b7c;";
          this.textTab.Townhome = "";
          this.textTab.House = "";
          this.setList("condo");
          break;
        case "townhome":
          this.image.imgAll = "/icon/all.png";
          this.image.imgCondo = "/icon/condo.png";
          this.image.imgTownhome = "/icon/townhome_active.png";
          this.image.imgHouse = "/icon/house.png";
          this.line.lineAll = "/icon/line_unclick.png";
          this.line.lineCondo = "/icon/line_unclick.png";
          this.line.lineTownhome = "/icon/line_click.png";
          this.line.lineHouse = "/icon/line_unclick.png";
          this.textTab.All = "";
          this.textTab.Condo = "";
          this.textTab.Townhome = "font-weight: bold; color: #1c4b7c;";
          this.textTab.House = "";
          this.setList("townhome");
          break;
        case "house":
          this.image.imgAll = "/icon/all.png";
          this.image.imgCondo = "/icon/condo.png";
          this.image.imgTownhome = "/icon/townhome.png";
          this.image.imgHouse = "/icon/house_active.png";
          this.line.lineAll = "/icon/line_unclick.png";
          this.line.lineCondo = "/icon/line_unclick.png";
          this.line.lineTownhome = "/icon/line_unclick.png";
          this.line.lineHouse = "/icon/line_click.png";
          this.textTab.All = "";
          this.textTab.Condo = "";
          this.textTab.Townhome = "";
          this.textTab.House = "font-weight: bold; color: #1c4b7c;";
          this.setList("house");
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
    clickSetFilter() {
      this.$emit("input", value);
    },
    clickClearColor() {
      this.colors = [];
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
  },
  watch: {
    color() {
      console.log("color", this.color);
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
  }
};
</script>
<style>
.btn3 {
  height: 2.8em;
}
</style>


