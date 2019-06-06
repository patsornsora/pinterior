<template>
  <!-- style="background-color: pink;" -->
  <div>
    <!-- <div class="columns is-gapless">
      <div class="column" style="margin: 20px;">
        <div class="s12" style="text-align: left;">
          <v-btn icon @click="$router.go(-1)">
            <v-icon>keyboard_arrow_left</v-icon>
          </v-btn>
          <a class="has-text-black" @click="$router.go(-1)">BACK</a>
        </div>
        <div style="text-align: center; width: 100%;">
          <v-img :src="image.src" style="width: 100%;">
            <v-container fill-height fluid pa-0>
              <v-layout fill-height>
                <v-flex xs12 align-end flexbox>
                  <v-card-actions style="height: 0%; margin-top: 20px;" v-show="link.length > 0">
                    <v-spacer></v-spacer>
                    <v-btn icon style="margin-top: 4px;" @click="clickView360">
                      <v-img src="icon/icon_360_UnHover.png" :aspect-ratio="1" target="_blank"></v-img>
                    </v-btn>
                  </v-card-actions>
                  <v-card-actions style="height: 75%;" v-if="link.length > 0">
                    <v-btn icon @click="clickLeft" class="white--text">
                      <v-icon>fa-angle-left</v-icon>
                    </v-btn>
                    <v-spacer></v-spacer>
                    <v-btn icon @click="clickRight" class="white--text">
                      <v-icon>fa-angle-right</v-icon>
                    </v-btn>
                  </v-card-actions>
                  <v-card-actions style="height: 100%;" v-if="link.length === 0">
                    <v-btn icon @click="clickLeft" class="white--text">
                      <v-icon>fa-angle-left</v-icon>
                    </v-btn>
                    <v-spacer></v-spacer>
                    <v-btn icon @click="clickRight" class="white--text">
                      <v-icon>fa-angle-right</v-icon>
                    </v-btn>
                  </v-card-actions>
                </v-flex>
              </v-layout>
            </v-container>
          </v-img>
        </div>
        <div style="text-align: center;">
          <span v-for="item in images" :key="item.id">
            <img :src="item.src" style="width: 20%; margin: 3px;" @click="clickImg(item.id)">
          </span>
        </div>
      </div>
      <div class="column" style="text-align: center; margin: 36px 20px 20px 20px;">
        <div class="s18" style="text-align: left;">
          <b>{{data.title}}</b>
        </div>
        <div class="s12" style="text-align: left;">{{data.roomType}}</div>
        <div class="s12" style="text-align: left; margin-bottom: 20px;">{{data.roomSize}} SQ.M.</div>
        <div class="th" style="text-align: left;">{{data.detail}}</div>
        <div
          class="s12"
          style="text-align: left; margin-top: 20px;"
          v-if="data.design1"
        >DESIGN {{data.design1}}</div>
        <div
          class="s12"
          style="text-align: left;"
          v-if="data.design2"
        >DESIGN CONSULTANT {{data.design2}}</div>
      </div>
    </div>-->

    <v-layout row wrap>
      <v-flex xs12 md6>
        <div style="margin: 20px;">
          <div class="s12" style="text-align: left;">
            <v-btn icon @click="$router.go(-1)">
              <v-icon>keyboard_arrow_left</v-icon>
            </v-btn>
            <a class="has-text-black" @click="$router.go(-1)">BACK</a>
          </div>
          <div style="text-align: center; width: 100%;">
            <v-img :src="image.src" style="width: 100%;">
              <v-container fill-height fluid pa-0>
                <v-layout fill-height>
                  <v-flex xs12 align-end flexbox>
                    <v-card-actions style="height: 0%; margin-top: 20px;" v-show="link.length > 0">
                      <v-spacer></v-spacer>
                      <v-btn icon style="margin-top: 4px;" @click="clickView360">
                        <v-img src="icon/icon_360_UnHover.png" :aspect-ratio="1" target="_blank"></v-img>
                      </v-btn>
                    </v-card-actions>
                    <v-card-actions style="height: 75%;" v-if="link.length > 0">
                      <v-btn icon @click="clickLeft" class="white--text">
                        <v-icon>fa-angle-left</v-icon>
                      </v-btn>
                      <v-spacer></v-spacer>
                      <v-btn icon @click="clickRight" class="white--text">
                        <v-icon>fa-angle-right</v-icon>
                      </v-btn>
                    </v-card-actions>
                    <v-card-actions style="height: 100%;" v-if="link.length === 0">
                      <v-btn icon @click="clickLeft" class="white--text">
                        <v-icon>fa-angle-left</v-icon>
                      </v-btn>
                      <v-spacer></v-spacer>
                      <v-btn icon @click="clickRight" class="white--text">
                        <v-icon>fa-angle-right</v-icon>
                      </v-btn>
                    </v-card-actions>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-img>
          </div>
          <div style="text-align: center;">
            <span v-for="item in images" :key="item.id">
              <img :src="item.src" style="width: 20%; margin: 3px;" @click="clickImg(item.id)">
            </span>
          </div>
        </div>
      </v-flex>
      <v-flex xs12 md6>
        <div style="text-align: center; margin: 36px 20px 20px 20px;">
          <div class="s18" style="text-align: left;">
            <b>{{data.title}}</b>
          </div>
          <div class="s12" style="text-align: left;">{{data.roomType}}</div>
          <div class="s12" style="text-align: left; margin-bottom: 20px;">{{data.roomSize}} SQ.M.</div>
          <div class="th" style="text-align: left;">{{data.detail}}</div>
          <div
            class="s12"
            style="text-align: left; margin-top: 20px;"
            v-if="data.design1"
          >DESIGN {{data.design1}}</div>
          <div
            class="s12"
            style="text-align: left;"
            v-if="data.design2"
          >DESIGN CONSULTANT {{data.design2}}</div>
        </div>
      </v-flex>
    </v-layout>

    <div class="columns">
      <!--style="margin: 20px;"-->
      <!-- <div class="column"></div> -->
      <div class="column is-11" style="margin: 20px;">
        <!--style="margin: 20px;"-->
        <div style="margin-bottom: 20px;">
          <b>ESTIMATION</b>
        </div>
        <section>
          <b-table :data="furnitures" :checked-rows.sync="checkedRows" checkable>
            <template slot-scope="props">
              <!-- sortable -->
              <!-- <b-table-column field="pic" width="180" centered style="margin: 0px; padding: 0px;">
                <div
                  style="background-color: #d0021b; height: 14px ; width: 40%;"
                  class="s10 c-white"
                  v-if="props.row.prePrice"
                >SALE 50%</div>
                <img :src="props.row.pic" style="height: 50px;">
              </b-table-column>-->

              <b-table-column class="s14" field="head" centered style="vertical-align: middle;">
                <div v-if="props.row.id!==1" class="th">{{props.row.head}}</div>
                <div v-if="props.row.id===1">
                  <div style="text-align: center">
                    <section>
                      <div class="field s14" v-for="item in props.row.item" :key="item.id">
                        <b-radio
                          class="th"
                          v-model="wall"
                          :native-value="item"
                        >{{item.head}} ({{item.name}})</b-radio>
                        <!-- <b-radio class="th" v-model="wall" native-value="Silver">Silver</b-radio> -->
                      </div>
                    </section>
                    <!-- <v-radio-group class="s14" v-model="wall">
                      <v-radio
                        class="th"
                        v-for="item in props.row.item"
                        :key="item.id"
                        :label="item.head"
                        :value="item"
                      ></v-radio>
                    </v-radio-group>-->
                  </div>
                </div>
              </b-table-column>

              <!-- <b-table-column
                class="s14"
                field="name"
                label="NAME"
                centered
                style="vertical-align: middle;"
              >
                <div v-if="props.row.id!==1" class="th">{{props.row.name}}</div>
                <div v-if="props.row.id===1">
                  <div
                    v-for="item in props.row.item"
                    :key="item.id"
                    style="margin: 12px;"
                    class="th"
                  >{{item.name}}</div>
                </div>
              </b-table-column>-->

              <b-table-column
                class="s14"
                field="price"
                label="PRICE"
                numeric
                style="vertical-align: middle;"
              >
                <div class="columns" v-if="props.row.id!==1">
                  <div class="column" style="text-align: right;">
                    <b class="s14 c-brown">{{Number(props.row.price).toLocaleString()}}</b>
                    <div class="s8" style="text-align: right;">THB</div>
                  </div>
                </div>
                <div v-if="props.row.id===1">
                  <div style="text-align: right;" v-for="item in props.row.item" :key="item.id">
                    <b class="s14 c-brown">{{Number(item.price).toLocaleString()}}</b>
                    <div class="s8" style="text-align: right;">THB</div>
                  </div>
                </div>
              </b-table-column>
            </template>

            <!-- <template slot="footer" v-if="checkedRows.length > 0">
              <v-layout row wrap>
                <v-flex xs12>
                  <div class="columns">
                    <div class="column"></div>
                    <div class="column is-2" style="text-align: right;">
                      <b>TOTAL</b>
                    </div>
                    <div class="column is-2" style="text-align: right;">
                      <b class="s18">{{Number(total).toLocaleString()}}</b>
                      <div class="s8" style="text-align: right;">THB</div>
                    </div>
                    <div class="column is-2" style="text-align: center;">
                      <div>
                        <button
                          class="button color-brown"
                          style="background-color: #1c4b7c; border-radius: 4px;"
                          @click="clickContactUs"
                        >CONTACT US</button>
                      </div>
                      <div class="s10 th" style="text-align: center;">ติดต่อเพื่อประเมินราคา</div>
                    </div>
                  </div>
                </v-flex>
              </v-layout>
            </template>-->
          </b-table>
        </section>
      </div>
    </div>
    <v-layout row wrap>
      <v-flex xs1 md7></v-flex>
      <v-flex xs2 md1>
        <b>TOTAL</b>
      </v-flex>
      <v-flex xs4 md1 style="text-align: right;">
        <b class="s18">{{Number(total).toLocaleString()}}</b>
        <div class="s8">THB</div>
      </v-flex>
      <v-flex xs4 md2 style="text-align: right;">
        <div>
          <button
            class="button color-brown"
            style="background-color: #1c4b7c; border-radius: 4px;"
            @click="clickContactUs"
          >CONTACT US</button>
        </div>
        <div class="s10 th" style="text-align: right;">ติดต่อเพื่อประเมินราคา</div>
      </v-flex>

      <!-- <v-flex xs12>
        <div class="columns">
          <div class="column"></div>
          <div class="column is-2" style="text-align: right;">
            <b>TOTAL</b>
          </div>
          <div class="column is-2" style="text-align: right;">
            <b class="s18">{{Number(total).toLocaleString()}}</b>
            <div class="s8" style="text-align: right;">THB</div>
          </div>
          <div class="column is-2" style="text-align: center;">
            <div>
              <button
                class="button color-brown"
                style="background-color: #1c4b7c; border-radius: 4px;"
                @click="clickContactUs"
              >CONTACT US</button>
            </div>
            <div class="s10 th" style="text-align: center;">ติดต่อเพื่อประเมินราคา</div>
          </div>
        </div>
      </v-flex>-->
    </v-layout>

    <v-layout row wrap style="margin-top: 28px;">
      <v-flex xs5>
        <div class="column" style="text-align: right; margin-right: 20px;">
          <img style="max-height: 145px; max-width: 145px;" src="LogoDezigntool.png">
        </div>
      </v-flex>
      <v-flex xs7>
        <div class="th">Need more Customize</div>
        <div class="th">ต้องการตกแต่งห้องด้วยตัวเอง หรือเปลี่ยนแปลง furniture</div>

        <input
          type="image"
          src="/download/appStore.png"
          alt="Submit"
          width="148"
          style="margin-top: 20px;"
          @click="clickDownload('ios')"
        >
        <input
          type="image"
          src="/download/googlePlay.png"
          alt="Submit"
          width="132"
          @click="clickDownload('android')"
        >
      </v-flex>
    </v-layout>
    <!-- <div id="fb-root"></div>
    <script
      async
      defer
      crossorigin="anonymous"
      src="https://connect.facebook.net/th_TH/sdk.js#xfbml=1&version=v3.3&appId=1030611800461284&autoLogAppEvents=1"
    ></script>
    <div
      class="fb-share-button"
      data-href="https://buefy.org/documentation/table/"
      data-layout="button"
      data-size="small"
    >
      <a
        target="_blank"
        href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse"
        class="fb-xfbml-parse-ignore"
      >แชร์</a>
    </div>-->

    <!-- <div>
      <figure class="image is-3by1">
        <img src="b\"ANNALOG\"er/1.png" @click="clickGiftSet(1)">
      </figure>
    </div>-->

    <b-modal :active.sync="isComponentContact" has-modal-card>
      <modal-contact :valueContact="valueContact" v-on:childToParent="onChildClick"></modal-contact>
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
          :src="link"
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
      <!-- <v-dialog v-model="isIframe" width="720" height="500" class="text-xs-right" v-if="isMobile"> -->
      <v-icon @click="isIframe = false">cancel</v-icon>
      <section class="modal-card-body" style="padding: 10px;">
        <iframe
          :width="windowWidth-80"
          :height="windowHeight-100"
          :src="link"
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
import ModalContact from "~/components/contact";

export default {
  components: {
    ModalContact
  },
  data() {
    return {
      data: {
        title: "",
        roomSize: "",
        roomType: "",
        detail: "",
        design1: "",
        design2: ""
      },
      link: "",
      price: 0,
      images: [],
      image: [],
      furnitures: [],
      checkedRows: [],

      list: [],

      isComponentContact: false,
      valueContact: "",

      wall: "",

      isIframe: false,

      windowWidth: 0,
      windowHeight: 0,
      isMobile: false
    };
  },

  async created() {
    console.log("created", this.$route.params.id);

    this.windowWidth = window.innerWidth;
    this.windowHeight = window.innerHeight;
    this.isMobile = this.windowWidth < 450 || this.windowHeight < 450;

    console.log("isMobile >> ", this.isMobile);
    // this.getList();

    this.getFurniture(193);

    this.data.title = "SCANDINAVIAN";
    this.data.roomType = "Studio";
    this.data.roomSize = 30;
    this.data.detail =
      "สไตล์การแต่งห้องนอนแบบญี่ปุ่นจะเน้นความเรียบง่าย และมีระเบียบ เป็นการตกเต่งห้องแบบธรรมชาติแนว Minimalist และ Zen design การแต่งห้องนอนขนาดเล็กตามสไตล์ญี่ปุ่นจะทำให้พื้นที่ห้องแคบๆ ดูโล่งกว้างมากขึ้น เนื่องจากของตกแต่งห้องนอนและรูปแบบของเฟอร์นิเจอร์จะถูกออกแบบมาให้ดูเป็นระเบียบเรียบร้อย เหมาะกับห้องที่มีขนาดเล็ก และมีพื้นที่การจัดวางที่จำกัด";

    switch (this.$route.params.id) {
      case "254":
        this.images = [
          {
            id: 1,
            src: "room/r1/1.png"
          },
          {
            id: 2,
            src: "room/r1/2.png"
          },
          {
            id: 3,
            src: "room/r1/3.png"
          }
        ];

        this.furnitures = [
          {
            id: 1,
            item: [
              { id: 1, head: "Built-In/Fit-In", name: "ไม้จริง", price: 0 },
              {
                id: 2,
                head: "Built-In/Fit-In",
                name: "MDF E1",
                price: 0
              }
            ]
          },
          {
            id: 2,
            head: "เฟอร์นิเจอร์ลอยตัว",
            name: "",
            price: 25000
          },
          {
            id: 3,
            head: "ม่าน 2 ชั้น",
            name: "",
            price: 7000
          },
          {
            id: 4,
            head: "ทาสี TOA Duraclean",
            name: "",
            price: 4000
          }
        ];

        // this.link = "https://vizor.io/miniemeenie/dezigntool-room1";
        this.link = "https://roundme.com/embed/409197/1427363";

        this.checkedRows = this.furnitures;
        this.wall = this.furnitures[0].item[0];

        this.data.title = "Tropical Brown";
        this.data.roomType = "Studio";
        this.data.roomSize = 24;
        this.data.detail =
          "แรงบันดาลใจมาจากการจัดห้องแบบ Eclectic style ที่เลือกใช้ของหลากหลายแบรนด์มารวมกันอย่างลงตัว";
        this.data.design1 = "ASSISTANT. CHIN, MINE";
        this.data.design2 = "DEXCORO DESIGN DIRECTOR";

        break;
      case "255":
        this.images = [
          {
            id: 1,
            src: "room/r3/1.png"
          },
          {
            id: 2,
            src: "room/r3/2.png"
          }
        ];

        this.furnitures = [
          {
            id: 1,
            item: [
              { id: 1, head: "Built-In/Fit-In", name: "ไม้จริง", price: 0 },
              {
                id: 2,
                head: "Built-In/Fit-In",
                name: "MDF E1",
                price: 0
              }
            ]
          },
          {
            id: 2,
            head: "เฟอร์นิเจอร์ลอยตัว",
            name: "",
            price: 25000
          },
          {
            id: 3,
            head: "ม่าน 2 ชั้น",
            name: "",
            price: 7000
          },
          {
            id: 4,
            head: "ทาสี TOA Duraclean",
            name: "",
            price: 4000
          }
        ];

        // this.link = "https://vizor.io/miniemeenie/dezigntool-room3/";

        this.checkedRows = this.furnitures;
        this.wall = this.furnitures[0].item[0];

        this.data.title = "Bright Cozy";
        this.data.roomType = "Pantry , Living Room";
        this.data.roomSize = 24;
        this.data.detail =
          "นำแรงบันดาลใจมาจากระยะการจัด format ของคอลัมน์ในหนังสือที่มีระยะการเว้นช่องว่างเป็นระเบียบมาใช้ในการจัดวางพื้นที่บนผนังภายในห้อง โดยบรรยากาศเป็นรูปแบบ Modern style ที่เลือกใช้โทนสี ขาว  เทา ดำเป็นหลักบรรยากาศภายในจะเน้นสีขาวเป็นส่วนใหญ่เพื่อให้ห้องมีความโปร่งสว่าง และมีพื้นที่ใช้สอยมากขึ้น";
        this.data.design1 = "ASSISTANT. CHIN, MINE";
        this.data.design2 = "DEXCORO DESIGN DIRECTOR";

        break;
      case "2":
        this.getList();
        // const proxyurl = "https://cors-anywhere.herokuapp.com/";
        // const url = "https://example.com"; // site that doesn’t send Access-Control-*
        // const proxyurl = "https://dezignserves.com:80/";
        // const url =
        //   "https://dezigntool.com" +
        //   "api/orderitems/?order=" +
        //   this.$route.params.id; // site that doesn’t send Access-Control-*
        // fetch(proxyurl + url) // https://cors-anywhere.herokuapp.com/https://example.com
        //   .then(response => response.text())
        //   .then(contents => console.log("OK"))
        //   .catch(() =>
        //     console.log(
        //       "Can’t access " + url + " response. Blocked by browser?"
        //     )
        //   );
        this.images = [
          {
            id: 1,
            src: "room/r2/1.png"
          },
          {
            id: 2,
            src: "room/r2/2.png"
          },
          {
            id: 3,
            src: "room/r2/3.png"
          }
        ];

        this.furnitures = [
          {
            id: 1,
            item: [
              { id: 1, head: "Built-In/Fit-In", name: "ไม้จริง", price: 0 },
              {
                id: 2,
                head: "Built-In/Fit-In",
                name: "MDF E1",
                price: 0
              }
            ]
          },
          {
            id: 2,
            head: "เฟอร์นิเจอร์ลอยตัว",
            name: "",
            price: 25000
          },
          {
            id: 3,
            head: "ม่าน 2 ชั้น",
            name: "",
            price: 7000
          },
          {
            id: 4,
            head: "ทาสี TOA Duraclean",
            name: "",
            price: 4000
          }
        ];

        this.checkedRows = this.furnitures;
        this.wall = this.furnitures[0].item[0];

        this.data.title = "Tropical Green";
        this.data.roomType = "Pantry , Living Room";
        this.data.roomSize = 24;
        this.data.detail =
          "ห้องนอนสไตล์ทรอปิคอล (Tropical Style) เลือกใช้สีเอิร์ทโทน บวกกับผนังสีเขียว เพื่อเพิ่มความใกล้ชิดธรรมชาติให้กับการตกแต่งมากขึ้น ซึ่งจะทำให้บรรยากาศของห้องดูอบอุ่น เพิ่มกลิ่นอายของธรรมชาติด้วยต้นไม้จริงที่มุมห้องบวกกับชั้นวางของบิ้วอิน และเฟอร์นิเจอร์ที่ออกแบบมาอย่างลงตัว";
        this.data.design1 = 'ASSISTANT. CHIN, "ANNALOG"';
        this.data.design2 = "DEXCORO DESIGN DIRECTOR";

        break;
      case "4":
        this.images = [
          {
            id: 1,
            src: "room/r4/1.png"
          },
          {
            id: 2,
            src: "room/r4/2.png"
          },
          {
            id: 3,
            src: "room/r4/3.png"
          }
        ];

        this.furnitures = [
          {
            id: 1,
            item: [
              {
                id: 1,
                head: "Built-In/Fit-In",
                name: "ไม้จริง",
                price: 130000
              },
              {
                id: 2,
                head: "Built-In/Fit-In",
                name: "MDF E1",
                price: 65000
              }
            ]
          },
          {
            id: 2,
            head: "เฟอร์นิเจอร์ลอยตัว",
            name: "",
            price: 122586
          },
          {
            id: 3,
            head: "ม่าน 2 ชั้น",
            name: "",
            price: 3000
          },
          {
            id: 4,
            head: "Wallpaper",
            name: "",
            price: 7500
          }
        ];

        // this.link = "https://vizor.io/miniemeenie/dezigntool-mockuproomo2";
        this.link = "https://roundme.com/embed/409202/1427381";

        this.checkedRows = this.furnitures;
        this.wall = this.furnitures[0].item[0];

        this.data.title = "Luxury Brown";
        this.data.roomType = "1 Bedroom";
        this.data.roomSize = 24;
        this.data.detail =
          "ห้องนอนสไตล์โมเดิร์น ให้ความรู้สึกเรียบง่ายผสมผสานกลิ่นอายแบบไทย โดยถอดรูปทรงมาจากฝาปะกนของไทยผสมกับความโมเดิร์นแบบสมัยใหม่ของผนังหัวเตียงโดยการผสมผสานระหว่างไม้กับกระจกได้อย่างลงตัว ให้ความรู้สึกเรียบง่ายของเส้นสายที่สอดคล้องกับพื้นที่การใช้งาน บวกกับการใช้สีเอิร์ทโทนที่ให้ความรู้สึกผ่อนคลายเหมาะแก่การพักผ่อน";
        this.data.design1 = 'ASSISTANT. CHIN, "ANNALOG"';
        this.data.design2 = "DEXCORO DESIGN DIRECTOR";

        // id: res.data.id,
        // pic: res.data.model,
        // name: res.data.title,
        // brand: res.data.supplier,
        // price: res.data.cost * 0.23 + res.data.cost

        break;
      case "5":
        this.images = [
          {
            id: 1,
            src: "room/r5/1.jpg"
          },
          {
            id: 2,
            src: "room/r5/2.jpg"
          }
        ];

        this.furnitures = [
          {
            id: 1,
            item: [
              { id: 1, head: "Built-In/Fit-In", name: "ไม้จริง", price: 0 },
              {
                id: 2,
                head: "Built-In/Fit-In",
                name: "MDF E1",
                price: 0
              }
            ]
          },
          {
            id: 2,
            head: "เฟอร์นิเจอร์ลอยตัว",
            name: "",
            price: 44634.4
          },
          {
            id: 3,
            head: "ม่าน 2 ชั้น",
            name: "",
            price: 3000
          },
          {
            id: 4,
            head: "ทาสี TOA Duraclean",
            name: "",
            price: 4375
          }
        ];

        this.checkedRows = this.furnitures;
        this.wall = this.furnitures[0].item[0];

        this.data.title = "Cream & Brown Triangle";
        this.data.roomType = "Bedroom";
        this.data.roomSize = 14.34;
        this.data.detail =
          "ห้องนอนที่เรียบง่าย เน้นการใช้งาน มีจุดเด่นที่หัวเตียงสำหรับคนที่ต้องการฉีกเส้นสายของความจำเจ โดยใช้ลายเส้นเลขาคณิตเป็นรูปสามเหลี่ยมเรียงเป็นแพทเทิร์นเดียวกันโดยออกแบบตู้ให้ถูกซ้อนอย่างกลมกลืนกับผนังหัวเตียงด้วยลวดลายและการซ่อนไฟ บวกกับหน้าบานตู้ที่บุด้วยผ้าสีครีมสลับกับน้ำตาลอ่อนทั้งยังช่วยในการเก็บเสียง โดยรวมทั้งหมดของห้องเป็นสีเอิร์ทโทน ให้ความรู้สึกอบอุ่น ผ่อนคลายเหมาะแก่การพักผ่อน";
        this.data.design1 = 'ASSISTANT. "ANNALOG"';
        this.data.design2 = "DEXCORO DESIGN DIRECTOR";

        break;
      case "6":
        this.images = [
          {
            id: 1,
            src: "room/r6/1.jpg"
          },
          {
            id: 2,
            src: "room/r6/2.jpg"
          },
          {
            id: 3,
            src: "room/r6/3.jpg"
          }
        ];

        this.furnitures = [
          {
            id: 1,
            item: [
              { id: 1, head: "Built-In/Fit-In", name: "ไม้จริง", price: 0 },
              {
                id: 2,
                head: "Built-In/Fit-In",
                name: "MDF E1",
                price: 0
              }
            ]
          },
          {
            id: 2,
            head: "เฟอร์นิเจอร์ลอยตัว",
            name: "",
            price: 48565
          },
          {
            id: 3,
            head: "ม่าน 2 ชั้น",
            name: "",
            price: 3000
          },
          {
            id: 4,
            head: "ทาสี TOA Duraclean",
            name: "",
            price: 8242.5
          }
        ];

        this.checkedRows = this.furnitures;
        this.wall = this.furnitures[0].item[0];

        this.data.title = "Mondrian Square";
        this.data.roomType = "Living Room";
        this.data.roomSize = 24;
        this.data.detail =
          "แรงบันดาลใจมาจากงานเส้นสายของ Mondrian ที่ได้ลดทอนเส้นสายและนำมาปรับรูปแบบกับการจัดวาง ใช้ในงานออกแบบในเรื่องของเฟอร์นิเจอร์ built in ภายในห้องนั่งเล่นใช้โทนสีน้ำตาลแบบ Earth tone เพื่อให้อารมณ์อบอุ่นในการอยู่อาศัย";
        this.data.design1 = "ASSISTANT. MINE";
        this.data.design2 = "DEXCORO DESIGN DIRECTOR";

        break;
      case "7":
        this.images = [
          {
            id: 1,
            src: "room/r7/1.png"
          },
          {
            id: 2,
            src: "room/r7/2.png"
          }
        ];

        this.link = "https://roundme.com/embed/409177/1427291";

        this.furnitures = [
          {
            id: 1,
            item: [
              { id: 1, head: "Built-In/Fit-In", name: "ไม้จริง", price: 0 },
              {
                id: 2,
                head: "Built-In/Fit-In",
                name: "MDF E1",
                price: 0
              }
            ]
          },
          {
            id: 2,
            head: "เฟอร์นิเจอร์ลอยตัว",
            name: "",
            price: 25000
          },
          {
            id: 3,
            head: "ม่าน 2 ชั้น",
            name: "",
            price: 7000
          },
          {
            id: 4,
            head: "ทาสี TOA Duraclean",
            name: "",
            price: 4000
          }
        ];

        this.checkedRows = this.furnitures;
        this.wall = this.furnitures[0].item[0];

        this.data.title = "MODERN LOFT";
        this.data.roomType = "Cafe";
        this.data.roomSize = 48;
        this.data.detail =
          "ร้านกาแฟอินดี้สำหรับชาว Hipster และพร้อมต้อนรับทุกคน เป็นสถานที่นัดพบแห่งใหม่ที่ตอบทุกโจทย์ความต้องการ ด้วยบรรยากาศอบอุ่นสไตล์ Loft ของปูนเปลือยที่ดูดิบ ผสมผสานกับเฟอร์นิเจอร์สีธรรมชาติโดยใช้สีน้ำตาล เทา ดำ เพื่อให้เกิดความรู้สึกอบอุ่นเหมือนนั่งอยู่ในห้องนั่งเล่น";
        this.data.design1 = 'ASSISTANT. "CHIN", "ANNALOG"';
        this.data.design2 = "DEXCORO DESIGN DIRECTOR";

        break;
      case "8":
        this.images = [
          {
            id: 1,
            src: "room/r8/1.jpg"
          }
        ];

        this.furnitures = [
          {
            id: 1,
            item: [
              { id: 1, head: "Built-In/Fit-In", name: "ไม้จริง", price: 0 },
              {
                id: 2,
                head: "Built-In/Fit-In",
                name: "MDF E1",
                price: 0
              }
            ]
          },
          {
            id: 2,
            head: "เฟอร์นิเจอร์ลอยตัว",
            name: "",
            price: 61992
          },
          {
            id: 3,
            head: "ม่าน 2 ชั้น",
            name: "",
            price: 3000
          },
          {
            id: 4,
            head: "ทาสี TOA Duraclean",
            name: "",
            price: 4393.75
          }
        ];

        this.checkedRows = this.furnitures;
        this.wall = this.furnitures[0].item[0];

        this.data.title = "Brown Floral";
        this.data.roomType = "Bedroom";
        this.data.roomSize = 24;
        this.data.detail =
          "ห้องนอนสไตล์คอนเทมโพรารี่ (Contemporary) เป็นการตกแต่งแบบร่วมสมัยด้วยผนังหัวเตียงสีน้ำตาลหม่น บวกกับการประดับภาพถ่ายที่ทำให้ห้องดูผ่อนคลายมากขึ้น รวมไปถึงการจัดแสงที่ดูอบอุ่นลงตัว ด้วยโคมไฟที่มีความร่วมสมัย ผสมผสานกับเตียงไม้สีเข้ม เพื่อดึงเอาความรู้สึกถึงอารมณ์ของรูปแบบในอดีตมาผสมผสานกันได้อย่างลงตัว";
        this.data.design1 = 'ASSISTANT. CHIN, "ANNALOG"';
        this.data.design2 = "DEXCORO DESIGN DIRECTOR";

        break;
      case "9":
        this.images = [
          {
            id: 1,
            src: "room/r9/1.png"
          }
        ];

        this.furnitures = [
          {
            id: 1,
            item: [
              { id: 1, head: "Built-In/Fit-In", name: "ไม้จริง", price: 0 },
              {
                id: 2,
                head: "Built-In/Fit-In",
                name: "MDF E1",
                price: 0
              }
            ]
          },
          {
            id: 2,
            head: "เฟอร์นิเจอร์ลอยตัว",
            name: "",
            price: 55264
          },
          {
            id: 3,
            head: "ม่าน 2 ชั้น",
            name: "",
            price: 3000
          },
          {
            id: 4,
            head: "ทาสี TOA Duraclean",
            name: "",
            price: 4393.75
          }
        ];

        this.checkedRows = this.furnitures;
        this.wall = this.furnitures[0].item[0];

        this.data.title = "Discreetly Dark Grey";
        this.data.roomType = "Bedroom";
        this.data.roomSize = 14.34;
        this.data.detail =
          "ห้องนอนสไตล์โมเดิร์น มีการตกแต่งผนังหัวเตียงสีดำกึ่งเงากึ่งด้าน ให้ความสุขุมนุ่มลึก ด้วยลักษณะกึ่งเงากึ่งด้านของผนัง ทำให้ห้องเกิดความรู้สึกความเรียบหรูที่เรียบง่าย ซึ่งสีดำสามารถเข้ากับเฟอร์นิเจอร์ได้ทุกสีโดยเฉพาะสีอ่อน ทั้งยังขับให้เฟอร์นิเจอร์ดูโดดเด่นมากขึ้นอีกด้วย โดยรวมของห้องใช้สีขาว เทา ดำ และน้ำตาล บวกกับเตียงที่ออกแบบมาอย่างลงตัวสมบูรณ์แบบ";
        this.data.design1 = 'ASSISTANT. "ANNALOG" SUJITTRA DEXCORO ACADEMY#1';
        this.data.design2 = "DEXCORO DESIGN DIRECTOR";

        break;
      case "10":
        this.images = [
          {
            id: 1,
            src: "room/r10/1.png"
          }
        ];

        this.furnitures = [
          {
            id: 1,
            item: [
              { id: 1, head: "Built-In/Fit-In", name: "ไม้จริง", price: 0 },
              {
                id: 2,
                head: "Built-In/Fit-In",
                name: "MDF E1",
                price: 0
              }
            ]
          },
          {
            id: 2,
            head: "เฟอร์นิเจอร์ลอยตัว",
            name: "",
            price: 37561
          },
          {
            id: 3,
            head: "ม่าน 2 ชั้น",
            name: "",
            price: 3000
          },
          {
            id: 4,
            head: "ทาสี TOA Duraclean",
            name: "",
            price: 4393.75
          }
        ];

        this.checkedRows = this.furnitures;
        this.wall = this.furnitures[0].item[0];

        this.data.title = "Zensation";
        this.data.roomType = "Bedroom";
        this.data.roomSize = 24;
        this.data.detail =
          "ห้องนอนที่มีกลิ่นอายแบบเซน (Zen Style) สำหรับคนที่รักความสงบเรียบง่าย ใช้วัสดุธรรมชาติในการตกแต่งเป็นหลักมีจุดเด่นที่ผนังหัวเตียงออกแบบด้วยไม้เส้นแนวตั้งที่มีขนาดเล็กทำให้กดความรู้สึกละเอียดประณีต นำมาเรียงกันอย่างเป็นระเบียบแต่มีการจัดวางที่ให้ความรู้สึกสมดุลแต่ไม่สมมาตร ทำให้ห้องดูมีความน่าสนใจมากขึ้น บวกกับสีแนวเอิร์ทโทนบวกกับลวดลายเรียบง่าย ทำให้ห้องดูผ่อนคลายสบายตาเหมาะแก่การพักผ่อน รวมถึงการดรอปฝ้าซ่อนไฟ ซึ่งเป็นอีกหนึ่งวิธีที่ช่วยป้องกันแสงรบกวนเวลานอน";
        this.data.design1 = 'ASSISTANT. "ANNALOG"';
        this.data.design2 = "DEXCORO DESIGN DIRECTOR";

        break;
      case "11":
        this.images = [
          {
            id: 1,
            src: "room/r11/1.png"
          }
        ];

        this.furnitures = [
          {
            id: 1,
            item: [
              { id: 1, head: "Built-In/Fit-In", name: "ไม้จริง", price: 0 },
              {
                id: 2,
                head: "Built-In/Fit-In",
                name: "MDF E1",
                price: 0
              }
            ]
          },
          {
            id: 2,
            head: "เฟอร์นิเจอร์ลอยตัว",
            name: "",
            price: 61992
          },
          {
            id: 3,
            head: "ม่าน 2 ชั้น",
            name: "",
            price: 3000
          },
          {
            id: 4,
            head: "ทาสี TOA Duraclean",
            name: "",
            price: 4393.75
          }
        ];

        this.checkedRows = this.furnitures;
        this.wall = this.furnitures[0].item[0];

        this.data.title = "Walnut Brown";
        this.data.roomType = "Bedroom";
        this.data.roomSize = 24;
        this.data.detail =
          "ห้องนอนที่มีกลิ่นอายแบบเซน (Zen Style) สำหรับคนที่รักความสงบเรียบง่าย ใช้วัสดุธรรมชาติในการตกแต่งเป็นหลักมีจุดเด่นที่ผนังหัวเตียงออกแบบด้วยไม้เส้นแนวตั้งที่มีขนาดเล็กทำให้กดความรู้สึกละเอียดประณีต นำมาเรียงกันอย่างเป็นระเบียบแต่มีการจัดวางที่ให้ความรู้สึกสมดุลแต่ไม่สมมาตร ทำให้ห้องดูมีความน่าสนใจมากขึ้น บวกกับสีแนวเอิร์ทโทนบวกกับลวดลายเรียบง่าย ทำให้ห้องดูผ่อนคลายสบายตาเหมาะแก่การพักผ่อน รวมถึงการดรอปฝ้าซ่อนไฟ ซึ่งเป็นอีกหนึ่งวิธีที่ช่วยป้องกันแสงรบกวนเวลานอน";
        this.data.design1 = 'ASSISTANT. "ANNALOG"';
        this.data.design2 = "DEXCORO DESIGN DIRECTOR";

        break;
      case "12":
        this.images = [
          {
            id: 1,
            src: "room/r12/1.png"
          },
          {
            id: 2,
            src: "room/r12/2.png"
          }
        ];

        this.furnitures = [
          {
            id: 1,
            item: [
              { id: 1, head: "Built-In/Fit-In", name: "ไม้จริง", price: 0 },
              {
                id: 2,
                head: "Built-In/Fit-In",
                name: "MDF E1",
                price: 0
              }
            ]
          },
          {
            id: 2,
            head: "เฟอร์นิเจอร์ลอยตัว",
            name: "",
            price: 44634.4
          },
          {
            id: 3,
            head: "ม่าน 2 ชั้น",
            name: "",
            price: 3000
          },
          {
            id: 4,
            head: "ทาสี TOA Duraclean",
            name: "",
            price: 4375
          }
        ];

        this.checkedRows = this.furnitures;
        this.wall = this.furnitures[0].item[0];

        this.data.title = "Warm & Soft Brown";
        this.data.roomType = "Bedroom";
        this.data.roomSize = 14.34;
        this.data.detail =
          "ห้องนอนที่มีกลิ่นอายแบบเซน (Zen Style) สำหรับคนที่รักความสงบเรียบง่าย ใช้วัสดุธรรมชาติในการตกแต่งเป็นหลักมีจุดเด่นที่ผนังหัวเตียงออกแบบด้วยไม้เส้นแนวตั้งที่มีขนาดเล็กทำให้กดความรู้สึกละเอียดประณีต นำมาเรียงกันอย่างเป็นระเบียบแต่มีการจัดวางที่ให้ความรู้สึกสมดุลแต่ไม่สมมาตร ทำให้ห้องดูมีความน่าสนใจมากขึ้น บวกกับสีแนวเอิร์ทโทนบวกกับลวดลายเรียบง่าย ทำให้ห้องดูผ่อนคลายสบายตาเหมาะแก่การพักผ่อน รวมถึงการดรอปฝ้าซ่อนไฟ ซึ่งเป็นอีกหนึ่งวิธีที่ช่วยป้องกันแสงรบกวนเวลานอน";
        this.data.design1 = 'ASSISTANT. "ANNALOG"';
        this.data.design2 = "DEXCORO DESIGN DIRECTOR";

        break;
      case "13":
        this.images = [
          {
            id: 1,
            src: "room/r13/1.jpg"
          },
          {
            id: 2,
            src: "room/r13/2.jpg"
          },
          {
            id: 3,
            src: "room/r13/3.jpg"
          }
        ];

        this.furnitures = [
          {
            id: 1,
            item: [
              { id: 1, head: "Built-In/Fit-In", name: "ไม้จริง", price: 0 },
              {
                id: 2,
                head: "Built-In/Fit-In",
                name: "MDF E1",
                price: 0
              }
            ]
          },
          {
            id: 2,
            head: "เฟอร์นิเจอร์ลอยตัว",
            name: "",
            price: 25000
          },
          {
            id: 3,
            head: "ม่าน 2 ชั้น",
            name: "",
            price: 7000
          },
          {
            id: 4,
            head: "ทาสี TOA Duraclean",
            name: "",
            price: 4000
          }
        ];

        this.checkedRows = this.furnitures;
        this.wall = this.furnitures[0].item[0];

        this.data.title = "KIOSK MA PANG";
        this.data.roomType = "Studio";
        this.data.roomSize = 24;
        this.data.detail =
          "แรงบันดาลใจมาจากกลิ่นอายของขนมอบที่มีกลิ่นหอมเป็นเอกลักษณ์ เมื่อนำมารวมกับร้าน ที่มีวัสดุ อิฐ ไม้ เหล็ก หินอ่อน จะให้อารมณ์อบอุ่นในงานรูปแบบ Modern Loft Style ที่ใช้เหล็กเส้นบางและเป็นพื้นที่เปิดโล่งจะส่งเสริมกลิ่นอายขนมปังให้เป็นที่น่าสนใจ";
        this.data.design1 = "ASSISTANT. CHIN, MINE";
        this.data.design2 = "DEXCORO DESIGN DIRECTOR";

        break;
      case "14":
        this.images = [
          {
            id: 1,
            src: "room/r14/1.png"
          },
          {
            id: 2,
            src: "room/r14/2.png"
          },
          {
            id: 3,
            src: "room/r14/3.png"
          }
        ];

        this.furnitures = [
          {
            id: 1,
            item: [
              { id: 1, head: "Built-In/Fit-In", name: "ไม้จริง", price: 70000 },
              {
                id: 2,
                head: "Built-In/Fit-In",
                name: "MDF E1",
                price: 35000
              }
            ]
          },
          {
            id: 2,
            head: "เฟอร์นิเจอร์ลอยตัว",
            name: "",
            price: 65254
          },
          {
            id: 3,
            head: "ม่าน 2 ชั้น",
            name: "",
            price: 7000
          }
        ];

        this.link = "https://roundme.com/embed/409230/1427459";

        this.checkedRows = this.furnitures;
        this.wall = this.furnitures[0].item[0];

        this.data.title = "Minimal White Wood";
        this.data.roomType = "1 Bedroom";
        this.data.roomSize = 24;
        this.data.detail =
          "ห้องนี้ตกแต่งห้องสไตล์มินิมอล เน้นความเรียบง่ายโดยใช้สีขาว และลายไม้ ให้บรรยากาศที่อบอุ่น ปลอดโปร่งและสบายตา พร้อมทั้งเลือกใช้เฟอร์นิเจอร์ที่จำเป็น เน้นเป็นไม้สีอ่อน มีกลิ่นอายความญี่ปุ่น ให้ความรู้สึกใกล้ชิดธรรมชาติ";
        this.data.design1 = "ASSISTANT. CHIN";
        this.data.design2 = "DEXCORO DESIGN DIRECTOR";

        break;
      default:
        this.images = [
          {
            id: 1,
            src: "room/r1/1.png"
          },
          {
            id: 2,
            src: "room/r1/2.png"
          },
          {
            id: 3,
            src: "room/r1/3.png"
          }
        ];
    }

    this.image = this.images[0];
  },

  methods: {
    async getList() {
      console.log("getList");

      this.getFurniture(193);

      try {
        // var session_url = "/api/orderitems";
        var session_url = "/orderitems/?order=" + this.$route.params.id;
        let proxyurl = "https://dezignserves.com:5432/";
        let url =
          "https://dezigntool.com" +
          "api/orderitems/?order=" +
          this.$route.params.id; // site that doesn’t send Access-Control-*
        let response = await this.$http.get(proxyurl + url, {
          // headers: {
          //   "Content-Type": "application/json",
          //   Authorization: "Basic YWRtaW46cXdlcjEyMzQ=",
          //   "Access-Control-Allow-Origin": "*",
          //   "Access-Control-Allow-Credentials": true,
          //   "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE",
          //   "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token"
          // },
          // credentials: false,
          credentials: true,
          auth: {
            Username: "admin",
            Password: "qwer1234"
          }
        });
        console.log("response >> ", response);
      } catch (error) {
        console.error("getList error >> ", error);
      }

      // var session_url =
      //   "https://dezignserves.com/api/orderitems/?order=" +
      //   this.$route.params.id;
      // this.$http
      //   .get(
      //     session_url,
      //     // {},
      //     {
      //       auth: {
      //         username: "admin",
      //         password: "qwer1234"
      //       }
      //     }
      //   )
      //   .then(function(response) {
      //     console.log("response >> ", response);
      //   })
      //   .catch(function(error) {
      //     console.log("Error >> ", error);
      //   });

      // let res = await this.$http.get(
      //   "https://dezignserves.com/api/orderitems/?order=" +
      //     this.$route.params.id,
      //   {
      //     headers: {
      //       "Access-Control-Allow-Origin": "*"
      //       // "Access-Control-Allow-Credentials": true
      //       // Authorization: "Basic YWRtaW46cXdlcjEyMzQ="
      //     },
      //     auth: {
      //       Username: "admin",
      //       Password: "qwer1234"
      //     }
      //   }
      //   // { useCredentails: true }
      // );

      // console.log("getList res >> ", res);

      // if (res.status === 200) {
      //   this.list = res.data;
      //   this.list.forEach(item => {
      //     this.getFurniture(item.furniture);
      //   });
      // } else {
      //   console.log("error >> ", res);
      // }
    },

    async getFurniture(id) {
      console.log("getFurniture");
      let res = await this.$http.get("/api/furnitures/" + id, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*"
        },
        auth: {
          Username: "admin",
          Password: "qwer1234"
        }
      });

      console.log("getFurniture res >> ", res);

      let data = {
        id: res.data.id,
        pic: res.data.model,
        name: res.data.title,
        brand: res.data.supplier,
        price: res.data.cost * 0.23 + res.data.cost
        // prePrice: res.data.cost
      };

      if (res.status === 200) {
        this.furnitures.push(data);
        this.checkedRows.push(data);
        this.sortFurnitures();
      }
    },

    sortFurnitures() {
      console.log("sortFurnitures");
      this.furnitures = this.furnitures.sort((a, b) => a.name - b.name);
    },

    clickImg(id) {
      this.image = this.images.find(img => img.id === id);
    },

    clickLeft() {
      this.image = this.images.find(
        img =>
          img.id ===
          (this.image.id === 1 ? this.images.length : this.image.id - 1)
      );
    },

    clickRight() {
      this.image = this.images.find(
        img =>
          img.id ===
          (this.image.id === this.images.length ? 1 : this.image.id + 1)
      );
    },

    clickBuy() {
      console.log("clickBuy >> ", this.checkedRows);

      if (sessionStorage.getItem("user")) {
        console.log("user >> ", sessionStorage.getItem("user"));
      } else {
        console.log("user >> not data");
      }
    },

    clickDownload(system) {
      let src =
        system === "android"
          ? "https://play.google.com/store/apps/details?id=com.DezignSYNC.dezignforcondo"
          : "https://itunes.apple.com/th/app/dezigntool-for-condo/id1450506618?mt=8";
      window.open(src, "_blank");
    },

    clickGiftSet(id) {
      this.$router.push("/giftSet/" + id);
    },

    clickContactUs() {
      window.open("https://www.messenger.com/t/dexcoro.official", "_blank");
    },

    clickView360() {
      this.isIframe = true;
      console.log("windowWidth >> ", this.windowWidth);
      console.log("isMobile >> ", this.isMobile);
      console.log("clickView360 >> ", "|" + this.link + "|");
      console.log("clickView360 >> ", this.link.length);
    },

    onChildClick(data) {
      console.log("onChildClick", data);
      // this.isComponentContact = false;
    }
  },

  computed: {
    total() {
      return this.checkedRows.reduce(
        (accumulator, currentValue) =>
          accumulator +
          (currentValue.id === 1 ? this.wall.price : currentValue.price),
        0
      );
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

  watch: {}
};
</script>

<style>
.v-dialog {
  box-shadow: none;
}
      .vr-display {
        font-family: sans-serif;
        font-size: 0.8em;
        border-bottom: 1px solid #888;
      }
      .vr-display h1 {
        font-size: 1.2em;
      }
      .vr-display .float-array {
        font-family: monospace;
      }
</style>
