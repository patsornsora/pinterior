<template>
  <div>
    <div id="editor" ref="editor">
      <figure class="image is-full">
        <v-img :aspect-ratio="7/2" src="banner/b1.png" target="_blank"></v-img>
      </figure>

      <!-- <div class="columns is-gapless is-mobile" style="margin: 16px;">
        <a class="navbar-item" v-show="!showFilter" @click="isComponentFilter = true">
          <b-icon icon="filter" pack="fas"></b-icon>
        </a>

        <div class="column is-half-desktop is-three-quarters-mobile">
          <b-field class="s8">
            <b-input
              class="c-brown"
              style="font-size: 20px;"
              placeholder="TYPE KEYWORD YOU WANT TO SEARCH HERE"
              type="search"
              icon="magnify"
            ></b-input>
          </b-field>
        </div>
        <div class="column">
          <div class="columns">
            <div class="column">
              <v-btn icon>
                <v-icon style="color: #846857;" title="search by image" @click="isComponentImage = true">photo_camera</v-icon>
              </v-btn>
            </div>
            <div class="column image-preview" v-if="imgSearch.length > 0">
              <img class="preview" :src="imgSearch" style="margin: 0px;">
            </div>
            <div class="column"></div>
            <div class="column"></div>
          </div>
        </div>

        <div
          class="column is-one-quarters is-mobile cursor"
          style="max-height: 28px;"
          v-show="showFilter"
        >
          <div class="columns is-mobile">
            <div
              class="column"
              style="text-align: center; padding: 8px 0px 0px 0px;"
              @click="clickTab('all')"
            >
              <img :src="imageTab.all" style="max-height: 28px;">
            </div>
            <div
              class="column"
              style="text-align: center; padding: 8px 0px 0px 0px;"
              @click="clickTab('condo')"
            >
              <img :src="imageTab.condo" style="max-height: 28px;">
            </div>
            <div
              class="column"
              style="text-align: center; padding: 8px 0px 0px 0px;"
              @click="clickTab('townhome')"
            >
              <img :src="imageTab.townhome" style="max-height: 28px;">
            </div>
            <div
              class="column"
              style="text-align: center; padding: 8px 0px 0px 0px;"
              @click="clickTab('house')"
            >
              <img :src="imageTab.house" style="max-height: 28px;">
            </div>
          </div>
          <div class="columns is-mobile">
            <div class="column" style="text-align: center; padding: 0px;" @click="clickTab('all')">
              <font size="1" :style="textTab.all">ALL</font>
            </div>
            <div
              class="column"
              style="text-align: center; padding: 0px;"
              @click="clickTab('condo')"
            >
              <font size="1" :style="textTab.condo">CONDO</font>
            </div>
            <div
              class="column"
              style="text-align: center; padding: 0px;"
              @click="clickTab('townhome')"
            >
              <font size="1" :style="textTab.townhome">TOWNHOME</font>
            </div>
            <div
              class="column"
              style="text-align: center; padding: 0px;"
              @click="clickTab('house')"
            >
              <font size="1" :style="textTab.house">HOUSE</font>
            </div>
          </div>
          <div class="columns is-mobile" style="margin-bottom: 15px;">
            <div class="column" style="text-align: center; padding: 0px;" @click="clickTab('all')">
              <img :src="lineTab.all" style="max-height: 28px;">
            </div>
            <div
              class="column"
              style="text-align: center; padding: 0px;"
              @click="clickTab('condo')"
            >
              <img :src="lineTab.condo" style="max-height: 28px;">
            </div>
            <div
              class="column"
              style="text-align: center; padding: 0px;"
              @click="clickTab('townhome')"
            >
              <img :src="lineTab.townhome" style="max-height: 28px;">
            </div>
            <div
              class="column"
              style="text-align: center; padding: 0px;"
              @click="clickTab('house')"
            >
              <img :src="lineTab.house" style="max-height: 28px;">
            </div>
          </div>
        </div>
      </div>-->

      <!-- <div
        class="column is-one-quarters is-mobile cursor"
        style="max-height: 64px; max-width: 400px; margin: 0px 20px;"
        v-show="!showFilter"
      >
        <div class="columns is-mobile">
          <div
            class="column"
            style="text-align: center; padding: 8px 0px 0px 0px;"
            @click="clickTab('all')"
          >
            <img :src="imageTab.all" style="max-height: 28px;">
          </div>
          <div
            class="column"
            style="text-align: center; padding: 8px 0px 0px 0px;"
            @click="clickTab('condo')"
          >
            <img :src="imageTab.condo" style="max-height: 28px;">
          </div>
          <div
            class="column"
            style="text-align: center; padding: 8px 0px 0px 0px;"
            @click="clickTab('townhome')"
          >
            <img :src="imageTab.townhome" style="max-height: 28px;">
          </div>
          <div
            class="column"
            style="text-align: center; padding: 8px 0px 0px 0px;"
            @click="clickTab('house')"
          >
            <img :src="imageTab.house" style="max-height: 28px;">
          </div>
        </div>
        <div class="columns is-mobile">
          <div class="column" style="text-align: center; padding: 0px;" @click="clickTab('all')">
            <font size="1" :style="textTab.all">ALL</font>
          </div>
          <div class="column" style="text-align: center; padding: 0px;" @click="clickTab('condo')">
            <font size="1" :style="textTab.condo">CONDO</font>
          </div>
          <div
            class="column"
            style="text-align: center; padding: 0px;"
            @click="clickTab('townhome')"
          >
            <font size="1" :style="textTab.townhome">TOWNHOME</font>
          </div>
          <div class="column" style="text-align: center; padding: 0px;" @click="clickTab('house')">
            <font size="1" :style="textTab.house">HOUSE</font>
          </div>
        </div>
        <div class="columns is-mobile" style="margin-bottom: 15px;">
          <div class="column" style="text-align: center; padding: 0px;" @click="clickTab('all')">
            <img :src="lineTab.all" style="max-height: 28px;">
          </div>
          <div class="column" style="text-align: center; padding: 0px;" @click="clickTab('condo')">
            <img :src="lineTab.condo" style="max-height: 28px;">
          </div>
          <div
            class="column"
            style="text-align: center; padding: 0px;"
            @click="clickTab('townhome')"
          >
            <img :src="lineTab.townhome" style="max-height: 28px;">
          </div>
          <div class="column" style="text-align: center; padding: 0px;" @click="clickTab('house')">
            <img :src="lineTab.house" style="max-height: 28px;">
          </div>
        </div>
      </div>-->
    </div>

    <div class="columns is-gapless">
      <!-- <div class="column is-narrow" v-show="showFilter">
        <div style="width: 200px; padding: 10px 10px 10px 10px;">
          <b-field label="DEVOLOPER">
            <b-select expanded v-model="developer">
              <option v-for="item in developers" :value="item.value" :key="item.value">{{item.text}}</option>
            </b-select>
          </b-field>
          <b-field label="BRAND">
            <b-select expanded v-model="brandProduct">
              <option
                v-for="item in brandProducts"
                :value="item.value"
                :key="item.value"
              >{{item.text}}</option>
            </b-select>
          </b-field>
          <b-field label="PROJECT">
            <b-select expanded v-model="project">
              <option v-for="item in projects" :value="item.value" :key="item.value">{{item.text}}</option>
            </b-select>
          </b-field>
          <b-field label="TYPE">
            <b-select expanded v-model="type">
              <option v-for="item in types" :value="item.value" :key="item.value">{{item.text}}</option>
            </b-select>
          </b-field>

          <h6 class="subtitle is-6" style="margin-bottom: 10px;">
            <b-field label="STYLE"></b-field>
          </h6>

          <section>
            <div class="field">
              <b-checkbox v-model="cbStyle" native-value="Loft">LOFT</b-checkbox>
            </div>
            <div class="field">
              <b-checkbox v-model="cbStyle" native-value="Modern">MODERN</b-checkbox>
            </div>
            <div class="field">
              <b-checkbox v-model="cbStyle" native-value="Nordic">NORDIC</b-checkbox>
            </div>
            <div class="field">
              <b-checkbox v-model="cbStyle" native-value="Scandinavian">SCANDINAVIAN</b-checkbox>
            </div>
          </section>

          <h6 class="subtitle is-6" style="margin-bottom: 10px; margin-top: 10px;">
            <b-field label="COLOR TONE"></b-field>
          </h6>

          <div style="display: inline;">
            <div
              style="padding: 0px; display: inline;"
              v-for="(item, index) in colors"
              :key="index"
            >
              <div
                class="button is-rounded"
                :style="{'background-color': item.color, 'width': '30px', 'height': '30px'}"
                @click="clickColor(index)"
              ></div>
            </div>
            <div style="display: inline;">
              <v-img
                class="button is-rounded"
                src="icon/addColor.png"
                style="width: 30px; height: 30px; padding: 14px;"
                :aspect-ratio="1"
                target="_blank"
                v-show="isAddColor"
                @click="aaaa"
              ></v-img>
            </div>
          </div>
          <div class="custom-ui-class" v-show="isSelectColor">
            <swatches v-model="color" shapes="circles" :colors="addColors" inline></swatches>
          </div>
          <div class="level-right">
            <a @click="clickClearColor">CLEAR COLOR</a>
          </div>
          <a
            class="button"
            style="color: black; width: 100%;"
            @click="clickResetFilter"
          >RESET FILTER</a>
        </div>
      </div>-->

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
                      <!-- @click="clickDetail(item.id)" -->
                      <v-container fill-height fluid pa-0>
                        <v-layout fill-height>
                          <v-flex xs12 align-end flexbox>
                            <v-card-actions>
                              <v-spacer></v-spacer>
                              <v-btn icon @click="clickView360(item.link)" v-show="item.link">
                                <v-img
                                  src="icon/icon_360_UnHover.png"
                                  :aspect-ratio="1"
                                  target="_blank"
                                ></v-img>
                              </v-btn>
                            </v-card-actions>
                          </v-flex>
                        </v-layout>
                      </v-container>
                    </v-img>
                    <!-- <div style="padding: 8px;">
                      <v-list-tile-sub-title class="s16" style="color: #62503D;">{{item.title}}</v-list-tile-sub-title>
                      <div class="level is-mobile">
                        <div class="level-left s14" style="color: #62503D;">{{item.project}}</div>
                        <div class="level-right s12" style="color: #62503D;">By {{item.designer}}</div>
                      </div>
                    </div>-->
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
                            <v-icon v-if="!item.favorite" @click="clickFavorite()">favorite_border</v-icon>
                            <v-icon
                              v-if="item.favorite"
                              color="red"
                              @click="clickUnFavorite()"
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
                              >{{Number(item.price).toLocaleString()}}</b>
                              <b
                                class="s14"
                                v-show="!showFilter"
                              >{{Number(item.price).toLocaleString()}}</b>
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
      <!-- <div class="form__input" style="border: 2px;">
        <swatches
          v-model="color"
          :colors="addColors"
          row-length="4"
          shapes="circles"
          show-border
          popover-to="left"
        ></swatches>
      </div>-->
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
      :width="windowWidth-180"
      :height="windowHeight-180"
      class="text-xs-right"
      v-if="!isMobile"
    >
      <v-icon @click="isIframe = false">cancel</v-icon>
      <section class="modal-card-body" style="padding: 10px;">
        <iframe
          :width="windowWidth-200"
          :height="windowHeight-200"
          :src="iframeSrc"
          frameborder="0"
          webkitallowfullscreen
          mozallowfullscreen
          allowfullscreen
          style="margin: 0px; padding: 0px;"
        ></iframe>
      </section>
    </v-dialog>
    <v-dialog
      v-model="isIframe"
      :width="windowWidth-60"
      :height="windowHeight-80"
      class="text-xs-right"
      v-if="isMobile"
    >
      <v-icon @click="isIframe = false">cancel</v-icon>
      <section class="modal-card-body" style="padding: 10px;">
        <iframe
          :width="windowWidth-80"
          :height="windowHeight-100"
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
      color: "#4a4a4a",
      colors: [],
      cbStyle: [],
      isRandom: true
    };
  },

  async created() {
    this.getTheme();
    this.windowWidth = window.innerWidth;
    this.windowHeight = window.innerHeight;
    this.isMobile = this.windowWidth < 450 || this.windowHeight < 450;

    // var list = [
    //   {
    //     id: 254,
    //     title: "Title1",
    //     designer: "dexcoro",
    //     project: "Project1",
    //     type: "Type",
    //     img: "/room/r1/1.png",
    //     price: "36000",
    //     // link: "https://vizor.io/miniemeenie/dezigntool-room1",
    //     link: "https://roundme.com/embed/409197/1427363",
    //     favorite: false
    //   },
    //   {
    //     id: 255,
    //     title: "Title3",
    //     designer: "dexcoro",
    //     project: "Project3",
    //     type: "Type",
    //     img: "/room/r3/1.png",
    //     price: "36000",
    //     // link: "https://vizor.io/miniemeenie/dezigntool-room3/",
    //     favorite: false
    //   },
    //   {
    //     id: 2,
    //     title: "Title2",
    //     designer: "dexcoro",
    //     project: "Project2",
    //     type: "Type",
    //     img: "/room/r2/1.png",
    //     price: "36000",
    //     favorite: false
    //   },
    //   {
    //     id: 4,
    //     title: "Title4",
    //     designer: "dexcoro",
    //     project: "Project4",
    //     type: "Type",
    //     img: "/room/r4/1.png",
    //     price: "263086",
    //     // link: "https://vizor.io/miniemeenie/dezigntool-mockuproomo2",
    //     link: "https://roundme.com/embed/409202/1427381",
    //     favorite: false
    //   },
    //   {
    //     id: 5,
    //     title: "Title5",
    //     designer: "dexcoro",
    //     project: "Project5",
    //     type: "Type",
    //     img: "/room/r5/1.jpg",
    //     price: "52009",
    //     favorite: false
    //   },
    //   {
    //     id: 6,
    //     title: "Title6",
    //     designer: "dexcoro",
    //     project: "Project6",
    //     type: "Type",
    //     img: "/room/r6/1.jpg",
    //     price: "59807",
    //     favorite: false
    //   },
    //   {
    //     id: 7,
    //     title: "Title7",
    //     designer: "dexcoro",
    //     project: "Project7",
    //     type: "Type",
    //     img: "room/r7/1.png",
    //     price: "36000",
    //     // link: "https://vizor.io/miniemeenie/dexcoroweb_cafe1/",
    //     link: "https://roundme.com/embed/409177/1427291",
    //     favorite: false
    //   },
    //   {
    //     id: 8,
    //     title: "Title8",
    //     designer: "dexcoro",
    //     project: "Project8",
    //     type: "Type",
    //     img: "/room/r8/1.jpg",
    //     price: "69385",
    //     favorite: false
    //   },
    //   {
    //     id: 9,
    //     title: "Title9",
    //     designer: "dexcoro",
    //     project: "Project9",
    //     type: "Type",
    //     img: "/room/r9/1.png",
    //     price: "62657",
    //     favorite: false
    //   },
    //   {
    //     id: 10,
    //     title: "Title10",
    //     designer: "dexcoro",
    //     project: "Project10",
    //     type: "Type",
    //     img: "/room/r10/1.png",
    //     price: "44954",
    //     favorite: false
    //   },
    //   {
    //     id: 11,
    //     title: "Title11",
    //     designer: "dexcoro",
    //     project: "Project11",
    //     type: "Type",
    //     img: "/room/r11/1.png",
    //     price: "69385",
    //     favorite: false
    //   },
    //   {
    //     id: 12,
    //     title: "Title12",
    //     designer: "dexcoro",
    //     project: "Project12",
    //     type: "Type",
    //     img: "/room/r12/1.png",
    //     price: "52009",
    //     favorite: false
    //   },
    //   {
    //     id: 13,
    //     title: "Title13",
    //     designer: "dexcoro",
    //     project: "Project13",
    //     type: "Type",
    //     img: "/room/r13/1.jpg",
    //     price: "36000",
    //     favorite: false
    //   },
    //   {
    //     id: 14,
    //     title: "Title14",
    //     designer: "dexcoro",
    //     project: "Project14",
    //     type: "Type",
    //     img: "/room/r14/1.png",
    //     price: "142254",
    //     link: "https://roundme.com/embed/409230/1427459",
    //     favorite: false
    //   }
    // ];

    if (
      sessionStorage.getItem("isRandom") ||
      sessionStorage.getItem("isSearchByImage")
    ) {
      this.isRandom = false;
      if (sessionStorage.getItem("isSearchByImage")) {
        console.log('sessionStorage.getItem("isSearchByImage")');
        this.lists = JSON.parse(
          window.sessionStorage.getItem("isSearchByImage")
        ).lists;
        this.imgSearch = JSON.parse(
          window.sessionStorage.getItem("isSearchByImage")
        ).imgSearch;
      } else {
        this.lists = JSON.parse(window.sessionStorage.getItem("isRandom"));
      }
    } else {
      var listLength = this.lists.length;
      for (var i = 0; i < listLength; i++) {
        var r = Math.ceil(Math.random() * this.lists.length - 1);
        this.lists.push(list[r]);
        this.lists.splice(r, 1);
      }
      window.sessionStorage.setItem("isRandom", JSON.stringify(this.lists));
    }
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
    },
    valueImage() {
      console.log("valueImage >> ", this.valueImage);
    }
  },

  mounted() {
    this.$nextTick(() => {
      window.addEventListener("resize", () => {
        this.windowWidth = window.innerWidth;
        this.windowHeight = window.innerHeight;
        this.isMobile = this.windowWidth < 450 || this.windowHeight < 450;
      });
    });
  },

  methods: {
    async getTheme() {
      console.log("getTheme");
      await this.$http
        .get("https://dezignserves.com/api/themes", {
          headers: {
            // "Content-Type": "application/json",
            Authorization: "Basic YWRtaW46cXdlcjEyMzQ="
          }
        })
        .then(res => {
          console.log("success >> ", res);
          if (res.status === 200) {
            console.log("data >> ", res.data);
            this.lists = res.data.map(item => {
              let rItem = {};
              rItem.id = item.id;
              if (item.themePicture[0]) {
                rItem.img = item.themePicture[0].picture;
              }
              if (item.link360 !== "") {
                rItem.link = item.link360;
              }
              if (item.themeFurniture) {
                rItem.price = 55555;
              }
              return rItem;
            });
            console.log("lists >> ", this.lists);
          }
        })
        .catch(error => {
          console.error("error >> ", error);
          this.isInvalid = true;
        });
    },
    goLink(link) {
      // window.open(link, "_blank");
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

      console.log("clickView360");
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

