<template>
  <!-- style="background-color: pink;" -->
  <div>
    <div class="columns is-gapless">
      <div class="column" style="margin: 20px;">
        <div class="s10" style="text-align: right;">
          DESIGN BY
          <span class="c-blue">{{data.designer.toUpperCase()}}</span>
        </div>
        <div style="text-align: center;">
          <v-img :src="image.src" style="width: 100%;">
            <v-container fill-height fluid pa-1>
              <v-layout fill-height>
                <v-flex xs12 align-end flexbox style="margin: 0px; padding: 0px;">
                  <v-card-actions style="height: 100%;">
                    <v-btn icon @click="clickLeft">
                      <v-icon>fa-angle-left</v-icon>
                    </v-btn>
                    <v-spacer></v-spacer>
                    <v-btn icon @click="clickRight">
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
        <div class="s12" style="text-align: left; margin-bottom: 20px;">{{data.project}}</div>
        <div class="th" style="text-align: left;">{{data.detail}}</div>
      </div>
    </div>

    <div class="columns" style="margin: 20px;">
      <div class="column"></div>
      <div class="column is-11" style="margin: 20px;">
        <div style="margin-bottom: 20px;">
          <b>PRODUCT INFORMATION</b>
        </div>
        <section>
          <b-table :data="furnitures" :checked-rows.sync="checkedRows" checkable>
            <template slot-scope="props">
              <!-- sortable -->
              <b-table-column field="pic" width="180" centered style="margin: 0px; padding: 0px;">
                <div
                  style="background-color: #d0021b; height: 14px; width: 40%;"
                  class="s10 c-white"
                  v-if="props.row.prePrice"
                >SALE 50%</div>
                <img :src="props.row.pic" style="height: 50px;">
              </b-table-column>

              <b-table-column
                class="s12"
                field="name"
                label="NAME"
                centered
                style="vertical-align: middle;"
              >
                <div>{{props.row.name}}</div>
              </b-table-column>

              <b-table-column
                class="s12"
                field="brand"
                label="BRAND"
                centered
                style="vertical-align: middle;"
              >
                <div>{{props.row.brand}}</div>
              </b-table-column>

              <b-table-column
                class="s12"
                field="price"
                label="PRICE"
                numeric
                style="vertical-align: middle;"
              >
                <div class="columns">
                  <!-- <div class="column"></div> -->
                  <div class="column" style="text-align: right;">
                    <s
                      class="s16"
                      v-if="props.row.prePrice"
                    >{{Number(props.row.prePrice).toLocaleString()}}&nbsp;</s>
                    <b class="s18 c-blue">{{Number(props.row.price).toLocaleString()}}</b>
                    <div class="s8" style="text-align: right;">THB</div>
                  </div>
                  <!-- <div class="column"></div> -->
                </div>
              </b-table-column>
            </template>
            <template slot="footer" v-if="checkedRows.length > 0">
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
                  <button
                    class="button color-blue"
                    style="background-color: #1c4b7c; border-radius: 4px;"
                    @click="clickBuy"
                  >BUY NOW</button>
                </div>
              </div>
            </template>
          </b-table>
        </section>
      </div>
      <div class="column"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: {
        designer: "",
        title: "",
        project: "",
        detail: ""
      },
      price: 0,
      images: [],
      image: [],
      furnitures: [],
      checkedRows: [],

      list: []
    };
  },

  async created() {
    console.log("created", this.$route.params.id);

    this.getList();

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
    this.image = this.images[0];
    this.data.designer = "jinwara";
    this.data.title = "SCANDINAVIAN";
    this.data.project = "LIFE ASOKE TYPE B 30 SQ.M.";
    this.data.detail =
      "สไตล์การแต่งห้องนอนแบบญี่ปุ่นจะเน้นความเรียบง่าย และมีระเบียบ เป็นการตกเต่งห้องแบบธรรมชาติแนว Minimalist และ Zen design การแต่งห้องนอนขนาดเล็กตามสไตล์ญี่ปุ่นจะทำให้พื้นที่ห้องแคบๆ ดูโล่งกว้างมากขึ้น เนื่องจากของตกแต่งห้องนอนและรูปแบบของเฟอร์นิเจอร์จะถูกออกแบบมาให้ดูเป็นระเบียบเรียบร้อย เหมาะกับห้องที่มีขนาดเล็ก และมีพื้นที่การจัดวางที่จำกัด";
  },

  methods: {
    async getList() {
      console.log("getlist");
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
    }
  },

  computed: {
    total() {
      return this.checkedRows.reduce(
        (accumulator, currentValue) => accumulator + currentValue.price,
        0
      );
    }
  },

  watch: {}
};
</script>
