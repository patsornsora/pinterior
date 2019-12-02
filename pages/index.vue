<template>
  <div>
    <div id="editor" ref="editor" v-show="!statusLike">
      <figure class="image is-full">
        <v-img :aspect-ratio="7 / 2" src="/banner/b1.png" target="_blank"></v-img>
      </figure>
    </div>

    <div style="position: fixed; left: 0%; right: 0%;">
      <div v-show="statusLike" style="height: 70px;">
        <div class="s12" style="text-align: left;">
          <div class="s18" style=" text-align: center;">
            <b-icon class="media-left" icon="heart" pack="fa"></b-icon>
            <b>My Favorite</b>
          </div>
          <v-btn icon @click="clickBackFavorite()">
            <v-icon>keyboard_arrow_left</v-icon>
          </v-btn>
          <a class="has-text-black" @click="clickBackFavorite()">BACK</a>
        </div>
      </div>
    </div>

    <div class="columns is-gapless" :style="statusLike ? 'margin-top: 70px;' : ''">
      <div class="column is-mobile">
        <v-container grid-list-md fluid style="min-width: 300px; padding: 8px;">
          <v-layout wrap>
            <v-flex v-for="item in lists" :key="item.id" xs6 md4 sm6>
              <v-item-group>
                <v-item style="border-radius: 4px;">
                  <v-card
                    slot-scope="{ hover }"
                    :class="`elevation-${hover ? 12 : 2}`"
                    class="mx-auto"
                    style="padding: 3px 3px 0px 3px;"
                  >
                    <v-img
                      :aspect-ratio="1"
                      :src="item.img"
                      target="_blank"
                      @click="clickDetail(item.id)"
                    >
                      <v-container fill-height fluid pa-0>
                        <v-layout fill-height>
                          <v-flex xs12 align-end flexbox>
                            <v-card-actions>
                              <v-spacer></v-spacer>
                              <v-btn icon @click="clickView360(item.link)" v-show="item.link">
                                <v-img
                                  src="/icon/icon_360_UnHover.png"
                                  :aspect-ratio="1"
                                  target="_blank"
                                ></v-img>
                              </v-btn>
                            </v-card-actions>
                          </v-flex>
                        </v-layout>
                      </v-container>
                    </v-img>
                    <v-divider style="margin: 0px;"></v-divider>
                    <v-flex xs12>
                      <div class="level is-mobile">
                        <div class="level-left">
                          <button
                            class="button color-brown"
                            style="border-radius: 4px; padding: 0px 25px; width: 30px;"
                            @click="clickDetail(item.id)"
                          >DETAIL</button>

                          <v-btn
                            flat
                            icon
                            @click="item.favorite = !item.favorite"
                            style="margin: 0px;"
                          >
                            <v-icon
                              v-if="!item.favorite"
                              @click="clickFavorite(item.id)"
                            >favorite_border</v-icon>
                            <v-icon
                              v-if="item.favorite"
                              color="red"
                              @click="clickUnFavorite(item.likeID)"
                            >favorite</v-icon>
                          </v-btn>
                        </div>
                        <div class="level-right">
                          <div class="columns">
                            <div class="column" style="text-align: right;">
                              <div class="s10" v-show="showFilter" style="text-align: right;">
                                <b>START AT</b>
                              </div>
                              <div class="s8" v-show="!showFilter" style="text-align: right;">
                                <b>START AT</b>
                              </div>
                              <b
                                class="s18"
                                v-show="showFilter"
                                v-if="isLogin"
                              >{{ formatNum(item.price) }}</b>
                              <b
                                class="s18"
                                v-show="showFilter"
                                v-if="!isLogin"
                              >{{ formatNum(convertPrice(item.price)) }}</b>
                              <b
                                class="s14"
                                v-show="!showFilter"
                                v-if="isLogin"
                              >{{ formatNum(item.price) }}</b>
                              <b
                                class="s14"
                                v-show="!showFilter"
                                v-if="!isLogin"
                              >{{ formatNum(convertPrice(item.price)) }}</b>
                              <div class="s8" style="text-align: right;">THB</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </v-flex>
                  </v-card>
                </v-item>
              </v-item-group>
            </v-flex>
          </v-layout>
        </v-container>
      </div>
    </div>

    <b-modal
      name="my-custom-ui"
      :adaptive="true"
      height="192"
      width="fit-content"
      :active.sync="isComponentColor"
    >
      <div class="custom-ui-class">
        <swatches v-model="color" shapes="circles" :colors="addColors" inline></swatches>
      </div>
    </b-modal>

    <b-modal :active.sync="isComponentFilter" has-modal-card>
      <modal-filter v-model="formProps"></modal-filter>
    </b-modal>

    <b-modal :active.sync="isComponentAddColor" has-modal-card>
      <modal-add-color v-model="formProps"></modal-add-color>
    </b-modal>

    <b-modal :active.sync="isComponentView" has-modal-card>
      <modal-view v-model="formProps"></modal-view>
    </b-modal>

    <b-modal :active.sync="isComponentImage" has-modal-card>
      <modal-image :valueImage="valueImage" v-on:childToParent="onChildClick"></modal-image>
    </b-modal>

    <v-dialog
      v-model="isIframe"
      :width="windowWidth - 180"
      :height="windowHeight - 180"
      class="text-xs-right"
      v-if="!isMobile"
    >
      <v-icon @click="isIframe = false">cancel</v-icon>
      <section class="modal-card-body" style="padding: 10px;">
        <iframe
          :src="iframeSrc"
          frameborder="0"
          webkitallowfullscreen
          mozallowfullscreen
          allowfullscreen
          :style="{
            width: windowWidth - 200 + 'px',
            height: windowHeight - 200 + 'px',
            margin: '0px',
            padding: '0px'
          }"
        ></iframe>
      </section>
    </v-dialog>
    <v-dialog
      v-model="isIframe"
      :width="windowWidth - 60"
      :height="windowHeight - 80"
      class="text-xs-right"
      v-if="isMobile"
    >
      <v-icon @click="isIframe = false">cancel</v-icon>
      <section class="modal-card-body" style="padding: 10px;">
        <iframe
          :style="{'width': windowWidth-80 + 'px', 'height': windowHeight-100 + 'px'}"
          :src="iframeSrc"
          frameborder="0"
          webkitallowfullscreen
          mozallowfullscreen
          allowfullscreen
          style="margin: 0px; padding: 0px;"
        ></iframe>
      </section>
    </v-dialog>
  </div>
</template>

<script>
import ModalFilter from "../components/filter";
import ModalAddColor from "../components/addColor";
import ModalView from "../components/view";
import ModalImage from "../components/image";
import Swatches from "vue-swatches";

export default {
  components: {
    ModalFilter,
    ModalAddColor,
    ModalView,
    ModalImage,
    Swatches
  },
  // layout: "template",
  data(context) {
    return {
      user: false,
      // isLogin: false,

      isBanner: true,
      isComponentEvent: false,
      isIframe: false,
      iframeSrc: "",
      isMobile: false,

      imgSearch: "",
      valueImage: 0,
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
      isComponentImage: false,
      textTab: {
        all: "font-weight: bold; color: #846857;",
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
      windowHeight: 0,
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
      AllList: [],
      color: "#4a4a4a",
      colors: [],
      cbStyle: [],
      isRandom: true,
      statusLike:
        JSON.parse(window.sessionStorage.getItem("statusLike")) || false,
      likes: [],
      userObj: JSON.parse(window.sessionStorage.getItem("user")) || {}
    };
  },

  async created() {
    if (sessionStorage.getItem("user")) {
      if (JSON.parse(window.sessionStorage.getItem("user")).supplierID) {
        this.$router.push(
          "/supplier/" +
            JSON.parse(window.sessionStorage.getItem("user")).supplierID
        );
      }
    }

    // console.log("isLogin >> ", this.isLogin);
    this.isLogin = sessionStorage.getItem("user") !== null;
    this.windowWidth = window.innerWidth;
    this.windowHeight = window.innerHeight;
    this.isMobile = this.windowWidth < 450 || this.windowHeight < 450;

    // await this.setEvent();
    await this.getTheme();
    await this.setTheme();
    if (this.isLogin) {
      await this.getLike();
      await this.setLike();
    }
  },

  watch: {
    windowWidth() {
      this.showFilter = this.windowWidth > 960;
    },

    color() {
      // console.log("color", this.color);
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
    },

    valueImage() {
      // console.log("valueImage >> ", this.valueImage);
    },

    likes() {}
    // user() {
    //   this.isLogin = sessionStorage.getItem("user") !== null;
    // }
  },

  mounted() {
    // if (sessionStorage.getItem("user")) {
    //   this.user = sessionStorage.getItem("user") !== null;
    //   console.log("user >> ", this.user);
    // }
    window.addEventListener("storage", e => {
      if (e.key === "mytoken" && e.newValue === null) {
        // console.log("e >> ", e);
      }
    });
    this.$nextTick(() => {
      window.addEventListener("resize", () => {
        this.windowWidth = window.innerWidth;
        this.windowHeight = window.innerHeight;
        this.isMobile = this.windowWidth < 450 || this.windowHeight < 450;
      });
    });
  },

  computed: {
    // isLogin() {
    //
    //   return sessionStorage.getItem("user") !== null;
    //   console.log("computed");
    // }
  },

  methods: {
    clickBackFavorite() {
      // console.log("clickBackFavorite");
      window.sessionStorage.setItem("statusLike", !this.statusLike);
      window.location.reload();
    },

    setLike() {
      // console.log("setLike");
      if (this.statusLike) {
        this.lists = JSON.parse(this.AllList).filter(
          item => item.favorite === true
        );
      }
    },

    async getLike() {
      // console.log("getLike");
      await this.$http
        .get("https://dezignserves.com/api/likes/", {
          params: {
            customer: this.userObj.customerID
          },
          headers: {
            "Content-Type": "application/json",
            Authorization: "Basic YWRtaW46cXdlcjEyMzQ="
          }
        })
        .then(res => {
          if (res.status === 200) {
            // console.log("getLike", res.data);
            res.data.forEach(item =>
              this.likes.push({ themeID: item.theme, likeID: item.id })
            );

            this.lists = JSON.parse(this.AllList).filter(itemA => {
              if (
                this.likes.filter(itemL => itemL.themeID === itemA.id).length >
                0
              ) {
                if (
                  itemA.id ===
                  this.likes.filter(itemL => itemL.themeID === itemA.id)[0]
                    .themeID
                ) {
                  itemA.favorite = true;

                  itemA.likeID = this.likes.filter(
                    itemL => itemL.themeID === itemA.id
                  )[0].likeID;
                }
                return itemA;
              }
              return itemA;
            });

            this.AllList = JSON.stringify(this.lists);
            // console.log("AllList", this.lists);
          } else {
            console.error("getLike status is not 200 >> ", res.statusText);
          }
        })
        .catch(error => {
          console.error("getLike error >> ", error);
        });
    },

    setEvent() {
      if (sessionStorage.getItem("isComponentEvent")) {
        this.isComponentEvent = false;
      } else {
        this.isComponentEvent = true;
        window.sessionStorage.setItem("isComponentEvent", false);
      }
    },

    setTheme() {
      if (
        sessionStorage.getItem("isRandom") ||
        sessionStorage.getItem("isSearchByImage")
      ) {
        this.isRandom = false;
        if (sessionStorage.getItem("isSearchByImage")) {
          this.lists = JSON.parse(
            window.sessionStorage.getItem("isSearchByImage")
          ).lists;
          this.imgSearch = JSON.parse(
            window.sessionStorage.getItem("isSearchByImage")
          ).imgSearch;
        } else {
          this.lists = JSON.parse(sessionStorage.getItem("isRandom"));
        }
      } else {
        var listLength = this.lists.length;
        for (var i = 0; i < listLength; i++) {
          var r = Math.ceil(Math.random() * this.lists.length - 1);
          this.lists.push(this.lists[r]);
          this.lists.splice(r, 1);
        }
        window.sessionStorage.setItem("isRandom", JSON.stringify(this.lists));
      }
    },

    async getTheme() {
      // console.log("getTheme");
      await this.$http
        .get("https://dezignserves.com/api/themes/", {
          headers: {
            Authorization: "Basic YWRtaW46cXdlcjEyMzQ="
          }
        })
        .then(res => {
          // console.log("success >> ", res);
          if (res.status === 200) {
            // console.log("data >> ", res.data);
            this.lists = res.data.map(item => {
              let rItem = {};
              rItem.id = item.id;
              rItem.favorite = false;
              if (item.themePicture[0]) {
                rItem.img = item.themePicture[0].picture;
              }
              if (item.link360 !== "") {
                rItem.link = item.link360;
              }
              if (item.themeFurniture) {
                rItem.price = item.themeFurniture.reduce((sum, item) => {
                  if (item.group.trim().toLowerCase() === "realwood") {
                    return sum;
                  } else {
                    return sum + item.cost * item.quantity;
                  }
                }, 0);

                rItem.priceX = this.convertPrice(rItem.price);
              }
              return rItem;
            });
            // console.log("lists >> ", this.lists);
          } else {
            console.error("getTheme status is not 200 >> ", res.statusText);
          }
        })
        .catch(error => {
          console.error("error >> ", error);
          this.isInvalid = true;
        });
      this.AllList = JSON.stringify(this.lists);
      // console.log("AllList >> ", this.AllList);
    },

    convertPrice(price) {
      let xxx = "";
      for (let i = 1; i < price.toString().length; i++) {
        xxx += "X";
      }
      return price.toString().substring(0, 1) + xxx;
    },

    formatNum(number) {
      var newNum = "";
      var oldNumStr = number + "";
      var done = 0;
      var parts = oldNumStr.split(".");
      var newPart1 = "";
      var newPart2 = parts[1];
      for (var j = parts[0].length - 1; j >= 0; j--) {
        newNum = parts[0][j] + newNum;
        done++;
        if (done % 3 == 0) newNum = "," + newNum;
      }
      if (newNum.charAt(0) === ",") {
        newNum = newNum.substr(1, newNum.length);
      }
      return newNum;
    },

    priceWithCommas(price) {
      let l = parseInt(price.toString().length / 3);
      // console.log("length >> ", l);
      let xx = ["1xxx"];
      xx = xx.splice(1, 0, ",");
      // console.log("price >> ", xx);
      // return price.toString().length;
    },

    goLink(link) {
      // window.open(link, "_blank");
    },

    async clickFavorite(themeID) {
      // console.log("clickFavorite themeID >> ", themeID);

      await this.$http
        .post(
          "https://dezignserves.com/api/likes/",
          JSON.stringify({
            customer: this.userObj.customerID,
            theme: themeID
          }),
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Basic YWRtaW46cXdlcjEyMzQ="
            }
          }
        )
        .then(res => {
          if (res.status === 201) {
            let ll = JSON.parse(this.AllList).map(item => {
              let rItem = {};
              rItem.id = item.id;
              rItem.img = item.img;
              rItem.price = item.price;
              rItem.priceX = item.priceX;
              rItem.likeID = item.likeID;
              rItem.favorite = item.favorite;
              if (item.id === themeID) {
                rItem.favorite = true;
                rItem.likeID = res.data.id;
              }
              return rItem;
            });

            this.lists = ll;
            this.AllList = JSON.stringify(this.lists);

            // console.log("AllList", JSON.parse(this.AllList));
          } else {
            console.error(
              "clickFavorite status is not 201 >> ",
              res.statusText
            );
          }
        })
        .catch(error => {
          console.error("getLike error >> ", error);
        });
    },

    async clickUnFavorite(likeID) {
      // console.log("clickUnFavorite", likeID);
      let aList = JSON.parse(this.AllList).filter(
        item => item.likeID === likeID
      );

      // console.log("aList", aList);
      // console.log("aList", aList[0]);
      // console.log("AllList", JSON.parse(this.AllList));

      await this.$http
        .post(
          "https://dezignserves.com/api/unlike/",
          {
            id_like: likeID
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Basic YWRtaW46cXdlcjEyMzQ="
            }
          }
        )
        .then(res => {
          if (res.status === 200) {
            let ll = JSON.parse(this.AllList).map(item => {
              let rItem = {};
              rItem.id = item.id;
              rItem.img = item.img;
              rItem.price = item.price;
              rItem.priceX = item.priceX;
              rItem.likeID = item.likeID;
              rItem.favorite = item.favorite;
              if (item.id === aList[0].id) {
                rItem.favorite = false;
                rItem.likeID = "";
              }
              return rItem;
            });

            this.lists = ll;
            this.AllList = JSON.stringify(this.lists);

            // console.log("AllList", JSON.parse(this.AllList));
          } else {
            console.error(
              "clickFavorite status is not 200 >> ",
              res.statusText
            );
          }
        })
        .catch(error => {
          console.error("getLike error >> ", error);
        });
    },

    clickPicture() {
      // console.log("clickPicture");
    },

    clickDetail(id) {
      // this.$router.push("/detail");
      if (!this.isIframe) {
        this.$router.push("/detail/" + id);
      }
    },

    clickTab(type) {
      switch (type) {
        case "all":
          this.imageTab.all = "/icon/all_active.png";
          this.imageTab.condo = "/icon/condo.png";
          this.imageTab.townhome = "/icon/townhome.png";
          this.imageTab.house = "/icon/house.png";
          // this.imageTab.showroom = "/icon/showroom.png";
          this.lineTab.all = "/icon/line_click.png";
          this.lineTab.condo = "/icon/line_unclick.png";
          this.lineTab.townhome = "/icon/line_unclick.png";
          this.lineTab.house = "/icon/line_unclick.png";
          // this.lineTab.showroom = "/icon/line_unclick.png";
          this.textTab.all = "font-weight: bold; color: #846857;";
          this.textTab.condo = "";
          this.textTab.townhome = "";
          this.textTab.house = "";
          // this.textTab.showroom = "";
          this.setList("all");
          break;
        case "condo":
          this.imageTab.all = "/icon/all.png";
          this.imageTab.condo = "/icon/condo_active.png";
          this.imageTab.townhome = "/icon/townhome.png";
          this.imageTab.house = "/icon/house.png";
          // this.imageTab.showroom = "/icon/showroom.png";
          this.lineTab.all = "/icon/line_unclick.png";
          this.lineTab.condo = "/icon/line_click.png";
          this.lineTab.townhome = "/icon/line_unclick.png";
          this.lineTab.house = "/icon/line_unclick.png";
          // this.lineTab.showroom = "/icon/line_unclick.png";
          this.textTab.all = "";
          this.textTab.condo = "font-weight: bold; color: #846857;";
          this.textTab.townhome = "";
          this.textTab.house = "";
          // this.textTab.showroom = "";
          this.setList("condo");
          break;
        case "townhome":
          this.imageTab.all = "/icon/all.png";
          this.imageTab.condo = "/icon/condo.png";
          this.imageTab.townhome = "/icon/townhome_active.png";
          this.imageTab.house = "/icon/house.png";
          // this.imageTab.showroom = "/icon/showroom.png";
          this.lineTab.all = "/icon/line_unclick.png";
          this.lineTab.condo = "/icon/line_unclick.png";
          this.lineTab.townhome = "/icon/line_click.png";
          this.lineTab.house = "/icon/line_unclick.png";
          // this.lineTab.showroom = "/icon/line_unclick.png";
          this.textTab.all = "";
          this.textTab.condo = "";
          this.textTab.townhome = "font-weight: bold; color: #846857;";
          this.textTab.house = "";
          // this.textTab.showroom = "";
          this.setList("townhome");
          break;
        case "house":
          this.imageTab.all = "/icon/all.png";
          this.imageTab.condo = "/icon/condo.png";
          this.imageTab.townhome = "/icon/townhome.png";
          this.imageTab.house = "/icon/house_active.png";
          // this.imageTab.showroom = "/icon/showroom.png";
          this.lineTab.all = "/icon/line_unclick.png";
          this.lineTab.condo = "/icon/line_unclick.png";
          this.lineTab.townhome = "/icon/line_unclick.png";
          this.lineTab.house = "/icon/line_click.png";
          // this.lineTab.showroom = "/icon/line_unclick.png";
          this.textTab.all = "";
          this.textTab.condo = "";
          this.textTab.townhome = "";
          this.textTab.house = "font-weight: bold; color: #846857;";
          // this.textTab.showroom = "";
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
          this.textTab.showroom = "font-weight: bold; color: #846857;";
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

    clickView360(link) {
      this.isIframe = true;
      this.iframeSrc = link;

      // console.log("clickView360");
    },

    clickAddColor() {
      this.isComponentAddColor = true;
      // console.log("clickAddColor");
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
      // this.imageTab.showroom = "/icon/showroom.png";

      this.lineTab.all = "/icon/line_click.png";
      this.lineTab.condo = "/icon/line_unclick.png";
      this.lineTab.townhome = "/icon/line_unclick.png";
      this.lineTab.house = "/icon/line_unclick.png";
      // this.lineTab.showroom = "/icon/line_unclick.png";

      this.textTab.all = "font-weight: bold; color: #846857;";
      this.textTab.condo = "";
      this.textTab.townhome = "";
      this.textTab.house = "";
      // this.textTab.showroom = "";

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
    },

    onChildClick(file) {
      this.isComponentImage = false;
      if (file) {
        this.imgSearch = file;

        let mlist = [
          {
            id: 7,
            title: "Title7",
            designer: "dexcoro",
            project: "Project7",
            type: "Type",
            img: "room/r7/1.png",
            price: "36000",
            // link: "https://vizor.io/miniemeenie/dexcoroweb_cafe1/",
            link: "https://roundme.com/embed/409177/1427291",
            favorite: false
          },
          {
            id: 254,
            title: "Title1",
            designer: "dexcoro",
            project: "Project1",
            type: "Type",
            img: "/room/r1/1.png",
            price: "36000",
            // link: "https://vizor.io/miniemeenie/dezigntool-room1",
            link: "https://roundme.com/embed/409197/1427363",
            favorite: false
          },
          {
            id: 255,
            title: "Title3",
            designer: "dexcoro",
            project: "Project3",
            type: "Type",
            img: "/room/r3/1.png",
            price: "36000",
            // link: "https://vizor.io/miniemeenie/dezigntool-room3/",
            favorite: false
          },
          {
            id: 2,
            title: "Title2",
            designer: "dexcoro",
            project: "Project2",
            type: "Type",
            img: "/room/r2/1.png",
            price: "36000",
            favorite: false
          },
          {
            id: 4,
            title: "Title4",
            designer: "dexcoro",
            project: "Project4",
            type: "Type",
            img: "/room/r4/1.png",
            price: "263086",
            // link: "https://vizor.io/miniemeenie/dezigntool-mockuproomo2",
            link: "https://roundme.com/embed/409202/1427381",
            favorite: false
          },
          {
            id: 5,
            title: "Title5",
            designer: "dexcoro",
            project: "Project5",
            type: "Type",
            img: "/room/r5/1.jpg",
            price: "52009",
            favorite: false
          },
          {
            id: 6,
            title: "Title6",
            designer: "dexcoro",
            project: "Project6",
            type: "Type",
            img: "/room/r6/1.jpg",
            price: "59807",
            favorite: false
          },
          {
            id: 8,
            title: "Title8",
            designer: "dexcoro",
            project: "Project8",
            type: "Type",
            img: "/room/r8/1.jpg",
            price: "69385",
            favorite: false
          },
          {
            id: 9,
            title: "Title9",
            designer: "dexcoro",
            project: "Project9",
            type: "Type",
            img: "/room/r9/1.png",
            price: "62657",
            favorite: false
          },
          {
            id: 10,
            title: "Title10",
            designer: "dexcoro",
            project: "Project10",
            type: "Type",
            img: "/room/r10/1.png",
            price: "44954",
            favorite: false
          },
          {
            id: 11,
            title: "Title11",
            designer: "dexcoro",
            project: "Project11",
            type: "Type",
            img: "/room/r11/1.png",
            price: "69385",
            favorite: false
          },
          {
            id: 12,
            title: "Title12",
            designer: "dexcoro",
            project: "Project12",
            type: "Type",
            img: "/room/r12/1.png",
            price: "52009",
            favorite: false
          },
          {
            id: 13,
            title: "Title13",
            designer: "dexcoro",
            project: "Project13",
            type: "Type",
            img: "/room/r13/1.jpg",
            price: "36000",
            favorite: false
          },
          {
            id: 14,
            title: "Title14",
            designer: "dexcoro",
            project: "Project14",
            type: "Type",
            img: "/room/r14/1.png",
            price: "142254",
            link: "https://roundme.com/embed/409230/1427459",
            favorite: false
          }
        ];
        this.lists = [];
        this.lists.push(mlist[0]);
        mlist.splice(0, 1);
        var listLength = mlist.length;
        for (var i = 0; i < listLength; i++) {
          var r = Math.ceil(Math.random() * mlist.length - 1);
          this.lists.push(mlist[r]);
          mlist.splice(r, 1);
        }
        window.sessionStorage.setItem(
          "isSearchByImage",
          JSON.stringify({ lists: this.lists, imgSearch: file })
        );
      }
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

.v-dialog {
  box-shadow: none;
}
</style>
