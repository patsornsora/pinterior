<template>
  <div app class="th">
    <div style="position:relative;"></div>
    <div fluid style="position:relative;">
      <v-img src="/banner/2.png" :style="{'height': windowHeight + 'px'}"></v-img>
    </div>

    <v-layout row style="position:absolute;  top: 16px; left: 16px; background-attachment: scroll;">
      <v-flex xs3>
        <v-img
          style="height: 50px; width: 50px; margin: 0px; padding: 0px;"
          src="/logoonly100px.png"
          aspect-ratio="1"
          contain
        ></v-img>
      </v-flex>
      <v-flex xs6>
        <div class="white--text headline" style="margin: 0px; padding: 8px;">dezigntool</div>
      </v-flex>
    </v-layout>

    <v-layout
      row
      style="position:absolute;  top: 32px; right: 40px; background-attachment: scroll;"
    >
      <v-flex xs12>
        <a
          class="white--text title bback"
          style="margin: 0px; padding: 0px;"
          @click="$router.go(-1)"
        >BACK ></a>
      </v-flex>
    </v-layout>

    <!-- desktop -->
    <v-layout
      row
      wrap
      style="position:absolute; top: 80px; left: 0px; right: 0px; background: rgba(190, 190, 190, 0.4); margin: 0px 40px; padding: 20px 0px;"
      class="hidden-sm-and-down white--text"
      ref="detail"
    >
      <v-flex xs6>
        <v-card-text class="title text-xs-center white--text headline">Dezigntool Pro</v-card-text>

        <v-layout row wrap>
          <v-flex xs6>
            <v-img src="/download/mac.png" aspect-ratio="1" contain style="max-height: 200px;"></v-img>
          </v-flex>
          <v-flex xs6>
            <v-img src="/download/notebook.png" aspect-ratio="1" contain style="max-height: 200px;"></v-img>
          </v-flex>
        </v-layout>

        <v-layout row wrap>
          <v-flex xs6>
            <div
              style="background: rgba(190, 190, 190, 0.4); margin: 0px 10px 0px 20px; padding-bottom: 20px; border-style: ridge;"
              :style="{'height': layoutHeight + 'px'}"
            >
              <v-card-text class="text-xs-center subheading">OSX</v-card-text>
              <div style="margin: 0px 30px;">
                <div class="text-xs-left">- ระบบปฎิบัติการ macOS Sierra 10.12 ขึ้นไป</div>
                <div class="text-xs-left">- Cpu intel core i5 ขึ้นไป</div>
                <div class="text-xs-left">- Ram 8 GB ขึ้นไป</div>
                <div class="text-xs-left">- Rom 2 GB ขึ้นไป</div>
                <div class="text-xs-left">- Graphic card ที่แนะนำ ได้แก่</div>
                <div class="text-xs-left">&nbsp;&nbsp;&nbsp;&nbsp;- Radeon Pro 500 series ขึ้นไป</div>
                <div
                  class="text-xs-left"
                >&nbsp;&nbsp;&nbsp;&nbsp;- Intel HD Graphics 5000 series ขึ้นไป</div>
                <div
                  class="text-xs-left"
                >&nbsp;&nbsp;&nbsp;&nbsp;- Intel Iris Graphics 500 series ขึ้นไป</div>
              </div>
            </div>
          </v-flex>
          <v-flex xs6>
            <div
              style="background: rgba(190, 190, 190, 0.4); margin: 0px 10px; padding-bottom: 20px; border-style: ridge;"
              :style="{'height': layoutHeight + 'px'}"
            >
              <v-card-text class="text-xs-center subheading">WINDOW</v-card-text>
              <div style="margin: 0px 30px;">
                <div class="text-xs-left">- ระบบปฎิบัติการ window 7 , 8 , 8.1 และ 10</div>
                <div class="text-xs-left">- Cpu intel core i5 ขึ้นไป</div>
                <div class="text-xs-left">- Ram 8 GB ขึ้นไป</div>
                <div class="text-xs-left">- Rom 2 GB ขึ้นไป</div>
                <div class="text-xs-left">- Graphic card ที่แนะนำ ได้แก่</div>
                <div class="text-xs-left">&nbsp;&nbsp;&nbsp;&nbsp;- Nvidia GTX 700 series ขึ้นไป</div>
                <div class="text-xs-left">&nbsp;&nbsp;&nbsp;&nbsp;- Nvidia GT 700 series ขึ้นไป</div>
                <div class="text-xs-left">&nbsp;&nbsp;&nbsp;&nbsp;- AMD Radeon R7 ขึ้นไป</div>
              </div>
            </div>
          </v-flex>
        </v-layout>
      </v-flex>

      <v-flex xs6>
        <v-card-text class="title text-xs-center white--text headline">Dezigntool</v-card-text>

        <v-layout row wrap>
          <v-flex xs6>
            <v-img src="/download/iphone.png" aspect-ratio="1" contain style="max-height: 200px;"></v-img>
          </v-flex>
          <v-flex xs6>
            <v-img src="/download/android.png" aspect-ratio="1" contain style="max-height: 200px;"></v-img>
          </v-flex>
        </v-layout>

        <v-layout row wrap ref="layoutIOS">
          <v-flex xs6>
            <div
              style="background: rgba(190, 190, 190, 0.4); margin: 0px 10px; padding-bottom: 8px; border-style: ridge; height: 100%;"
              ref="layoutIOS"
            >
              <v-card-text class="text-xs-center subheading">IOS</v-card-text>
              <div style="margin: 0px 30px 20px 30px;">
                <div class="text-xs-left">- ระบบปฎิบัติการ ios 11 , 12</div>
                <div class="text-xs-left">- อุปกรณ์โทรศัพท์มือถือที่แนะนำ ได้แก่</div>
                <div class="text-xs-left">&nbsp;&nbsp;&nbsp;&nbsp;- iphone 5s</div>
                <div class="text-xs-left">&nbsp;&nbsp;&nbsp;&nbsp;- iphone SE</div>
                <div class="text-xs-left">&nbsp;&nbsp;&nbsp;&nbsp;- iphone 6</div>
                <div class="text-xs-left">&nbsp;&nbsp;&nbsp;&nbsp;- iphone 6 plus</div>
                <div class="text-xs-left">&nbsp;&nbsp;&nbsp;&nbsp;- iphone 7</div>
                <div class="text-xs-left">&nbsp;&nbsp;&nbsp;&nbsp;- iphone 7 plus</div>
                <div class="text-xs-left">&nbsp;&nbsp;&nbsp;&nbsp;- iphone 8</div>
                <div class="text-xs-left">&nbsp;&nbsp;&nbsp;&nbsp;- iphone 8 plus</div>
                <div class="text-xs-left">&nbsp;&nbsp;&nbsp;&nbsp;- iphone X</div>
                <div class="text-xs-left">- อุปกรณ์แท็บเล็ตที่แนะนำ ได้แก่</div>
                <div class="text-xs-left">&nbsp;&nbsp;&nbsp;&nbsp;- ipad mini 2</div>
                <div class="text-xs-left">&nbsp;&nbsp;&nbsp;&nbsp;- ipad mini 3</div>
                <div class="text-xs-left">&nbsp;&nbsp;&nbsp;&nbsp;- ipad mini 4</div>
                <div class="text-xs-left">&nbsp;&nbsp;&nbsp;&nbsp;- ipad generation 5</div>
                <div class="text-xs-left">&nbsp;&nbsp;&nbsp;&nbsp;- ipad generation 6</div>
                <div class="text-xs-left">&nbsp;&nbsp;&nbsp;&nbsp;- ipad air</div>
                <div class="text-xs-left">&nbsp;&nbsp;&nbsp;&nbsp;- ipad air 2</div>
                <div class="text-xs-left">&nbsp;&nbsp;&nbsp;&nbsp;- ipad pro 9.7 นิ้ว</div>
                <div class="text-xs-left">&nbsp;&nbsp;&nbsp;&nbsp;- ipad pro 10.5 นิ้ว</div>
                <div class="text-xs-left">&nbsp;&nbsp;&nbsp;&nbsp;- ipad pro 12.9 นิ้ว generation 2</div>
                <div class="text-xs-left">&nbsp;&nbsp;&nbsp;&nbsp;- ipad pro 12.9 นิ้ว generation 2</div>
              </div>
              <div>
                <v-layout>
                  <v-flex xs1></v-flex>
                  <v-flex xs10 >
                    <!-- <v-btn class="button2" style="background: url(/download/dlIphone.png); background-color: pink; background-size: contain, cover; background-repeat: no-repeat;"></v-btn> -->
                  </v-flex>
                  <v-flex xs1></v-flex>
                </v-layout>
              </div>
            </div>
          </v-flex>
          <v-flex xs6>
            <div
              style="background: rgba(190, 190, 190, 0.4); margin: 0px 20px 0px 10px; padding-bottom: 20px; border-style: ridge; height: 100%;"
            >
              <v-card-text class="text-xs-center subheading">ANDROID</v-card-text>
              <div style="margin: 0px 30px;">
                <div
                  class="text-xs-left"
                >- ระบบปฎิบัติการ android version 6 , 7, 7.1 , 8 , 8.1 และ 9</div>
                <div class="text-xs-left">- อุปกรณ์โทรศัพท์มือถือที่แนะนำ ได้แก่</div>
                <div class="text-xs-left">&nbsp;&nbsp;&nbsp;&nbsp;- Samsung Galaxy Note 5 ขึ้นไป</div>
                <div class="text-xs-left">&nbsp;&nbsp;&nbsp;&nbsp;- Samsung Galaxy S6 ขึ้นไป</div>
                <div class="text-xs-left">&nbsp;&nbsp;&nbsp;&nbsp;- Asus ZenFone 3 ขึ้นไป</div>
                <div class="text-xs-left">&nbsp;&nbsp;&nbsp;&nbsp;- Oppo R11 ขึ้นไป</div>
                <div class="text-xs-left">&nbsp;&nbsp;&nbsp;&nbsp;- Huawei Mate 10 ขึ้นไป</div>
                <div class="text-xs-left">&nbsp;&nbsp;&nbsp;&nbsp;- Xiaomi Mi 5 ขึ้นไป</div>
                <div class="text-xs-left">- อุปกรณ์แท็บเล็ตที่แนะนำ ได้แก่</div>
                <div
                  class="text-xs-left"
                >&nbsp;&nbsp;&nbsp;&nbsp;- Samsung Galaxy Tab A (2016) ขึ้นไป</div>
                <div class="text-xs-left">&nbsp;&nbsp;&nbsp;&nbsp;- Samsung Galaxy Tab s3 ขึ้นไป</div>
                <div class="text-xs-left">&nbsp;&nbsp;&nbsp;&nbsp;- Lenovo Tab4 ขึ้นไป</div>
                <div class="text-xs-left">&nbsp;&nbsp;&nbsp;&nbsp;- Asus ZenPad 8 ขึ้นไป</div>
              </div>
            </div>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>

    <!-- mobile -->
    <v-layout
      row
      wrap
      style="position:absolute; top: 70px; left: 0px; right: 0px; background: rgba(190, 190, 190, 0.4); margin: 0px 20px; padding: 10px 0px;"
      class="hidden-md-and-up white--text caption"
      ref="detailMobile"
    >
      <v-flex xs12>
        <v-layout row wrap>
          <v-flex xs6>
            <v-img src="/download/iphone.png" aspect-ratio="1" contain style="max-height: 200px;"></v-img>
          </v-flex>
          <v-flex xs6>
            <v-img src="/download/android.png" aspect-ratio="1" contain style="max-height: 200px;"></v-img>
          </v-flex>
        </v-layout>

        <v-layout row wrap>
          <v-flex xs6>
            <div
              style="background: rgba(190, 190, 190, 0.4); margin: 0px 8px; padding-bottom: 20px; border-style: ridge; height: 100%;"
            >
              <v-card-text class="text-xs-center subheading">IOS</v-card-text>
              <div style="margin: 0px 8px;">
                <div class="text-xs-left">- ระบบปฎิบัติการ ios 11 , 12</div>
                <div class="text-xs-left">- อุปกรณ์โทรศัพท์มือถือที่แนะนำ ได้แก่</div>
                <div class="text-xs-left">&nbsp;&nbsp;&nbsp;&nbsp;- iphone 5s</div>
                <div class="text-xs-left">&nbsp;&nbsp;&nbsp;&nbsp;- iphone SE</div>
                <div class="text-xs-left">&nbsp;&nbsp;&nbsp;&nbsp;- iphone 6</div>
                <div class="text-xs-left">&nbsp;&nbsp;&nbsp;&nbsp;- iphone 6 plus</div>
                <div class="text-xs-left">&nbsp;&nbsp;&nbsp;&nbsp;- iphone 7</div>
                <div class="text-xs-left">&nbsp;&nbsp;&nbsp;&nbsp;- iphone 7 plus</div>
                <div class="text-xs-left">&nbsp;&nbsp;&nbsp;&nbsp;- iphone 8</div>
                <div class="text-xs-left">&nbsp;&nbsp;&nbsp;&nbsp;- iphone 8 plus</div>
                <div class="text-xs-left">&nbsp;&nbsp;&nbsp;&nbsp;- iphone X</div>
                <div class="text-xs-left">- อุปกรณ์แท็บเล็ตที่แนะนำ ได้แก่</div>
                <div class="text-xs-left">&nbsp;&nbsp;&nbsp;&nbsp;- ipad mini 2</div>
                <div class="text-xs-left">&nbsp;&nbsp;&nbsp;&nbsp;- ipad mini 3</div>
                <div class="text-xs-left">&nbsp;&nbsp;&nbsp;&nbsp;- ipad mini 4</div>
                <div class="text-xs-left">&nbsp;&nbsp;&nbsp;&nbsp;- ipad generation 5</div>
                <div class="text-xs-left">&nbsp;&nbsp;&nbsp;&nbsp;- ipad generation 6</div>
                <div class="text-xs-left">&nbsp;&nbsp;&nbsp;&nbsp;- ipad air</div>
                <div class="text-xs-left">&nbsp;&nbsp;&nbsp;&nbsp;- ipad air 2</div>
                <div class="text-xs-left">&nbsp;&nbsp;&nbsp;&nbsp;- ipad pro 9.7 นิ้ว</div>
                <div class="text-xs-left">&nbsp;&nbsp;&nbsp;&nbsp;- ipad pro 10.5 นิ้ว</div>
                <div class="text-xs-left">&nbsp;&nbsp;&nbsp;&nbsp;- ipad pro 12.9 นิ้ว generation 2</div>
                <div class="text-xs-left">&nbsp;&nbsp;&nbsp;&nbsp;- ipad pro 12.9 นิ้ว generation 2</div>
              </div>
            </div>
          </v-flex>
          <v-flex xs6>
            <div
              style="background: rgba(190, 190, 190, 0.4); margin: 0px 8px; padding-bottom: 20px; border-style: ridge; height: 100%;"
            >
              <v-card-text class="text-xs-center subheading">ANDROID</v-card-text>
              <div style="margin: 0px 8px;">
                <div
                  class="text-xs-left"
                >- ระบบปฎิบัติการ android version 6 , 7, 7.1 , 8 , 8.1 และ 9</div>
                <div class="text-xs-left">- อุปกรณ์โทรศัพท์มือถือที่แนะนำ ได้แก่</div>
                <div class="text-xs-left">&nbsp;&nbsp;&nbsp;&nbsp;- Samsung Galaxy Note 5 ขึ้นไป</div>
                <div class="text-xs-left">&nbsp;&nbsp;&nbsp;&nbsp;- Samsung Galaxy S6 ขึ้นไป</div>
                <div class="text-xs-left">&nbsp;&nbsp;&nbsp;&nbsp;- Asus ZenFone 3 ขึ้นไป</div>
                <div class="text-xs-left">&nbsp;&nbsp;&nbsp;&nbsp;- Oppo R11 ขึ้นไป</div>
                <div class="text-xs-left">&nbsp;&nbsp;&nbsp;&nbsp;- Huawei Mate 10 ขึ้นไป</div>
                <div class="text-xs-left">&nbsp;&nbsp;&nbsp;&nbsp;- Xiaomi Mi 5 ขึ้นไป</div>
                <div class="text-xs-left">- อุปกรณ์แท็บเล็ตที่แนะนำ ได้แก่</div>
                <div
                  class="text-xs-left"
                >&nbsp;&nbsp;&nbsp;&nbsp;- Samsung Galaxy Tab A (2016) ขึ้นไป</div>
                <div class="text-xs-left">&nbsp;&nbsp;&nbsp;&nbsp;- Samsung Galaxy Tab s3 ขึ้นไป</div>
                <div class="text-xs-left">&nbsp;&nbsp;&nbsp;&nbsp;- Lenovo Tab4 ขึ้นไป</div>
                <div class="text-xs-left">&nbsp;&nbsp;&nbsp;&nbsp;- Asus ZenPad 8 ขึ้นไป</div>
              </div>
            </div>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  layout: "first",
  data() {
    return {
      links: ["สมัครสมาชิก", "เข้าสู่ระบบ"],
      items: [
        {
          src: "/banner/2.png"
        },
        {
          src: "/banner/3.png"
        }
      ],
      images: [
        {
          id: 1,
          src: "/banner/2.png"
        },
        {
          id: 2,
          src: "/banner/3.png"
        }
      ],
      image: [],
      windowHeight: window.innerHeight,
      windowWidth: window.innerWidth,
      layoutHeight: 0
    };
  },
  created() {
    this.$nextTick(() => {
      this.windowHeight = window.innerHeight;
      this.windowWidth = window.innerWidth;
      if (this.$refs.detail.clientHeight + 80 > window.innerHeight) {
        this.windowHeight = this.$refs.detail.clientHeight + 140;
      }
      if (this.$refs.detailMobile.clientHeight + 80 > window.innerHeight) {
        this.windowHeight = this.$refs.detailMobile.clientHeight + 140;
      }
      this.layoutHeight = this.$refs.layoutIOS.clientHeight;
    });
  },
  methods: {
    clickLink(link) {
      switch (link) {
        case "สมัครสมาชิก":
          console.log("link >> ", link);
          // TODO
          break;
        case "เข้าสู่ระบบ":
          console.log("link >> ", link);
          this.$router.push("/store");
          break;
      }
    }
  },
  watch: {
    windowHeight() {
      this.windowHeight = window.innerHeight;
      if (this.$refs.detail.clientHeight + 80 > window.innerHeight) {
        this.windowHeight = this.$refs.detail.clientHeight + 140;
      }
      if (this.$refs.detailMobile.clientHeight + 80 > window.innerHeight) {
        this.windowHeight = this.$refs.detailMobile.clientHeight + 140;
      }
    },
    windowWidth() {
      if (this.$refs.detail.clientHeight + 80 > window.innerHeight) {
        this.windowHeight = this.$refs.detail.clientHeight + 140;
      }
      if (this.$refs.detailMobile.clientHeight + 80 > window.innerHeight) {
        this.windowHeight = this.$refs.detailMobile.clientHeight + 140;
      }
      this.layoutHeight = this.$refs.layoutIOS.clientHeight;
    }
  },

  mounted() {
    this.$nextTick(() => {
      window.addEventListener("resize", () => {
        this.windowHeight = window.innerHeight;
        this.windowWidth = window.innerWidth;
      });
    });
  }
};
</script>

<style>
.modal-container {
  height: 400px;
  background: #fff;
}
.button2:hover {
  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);
}
a.bback:focus {
  color: rgba(10, 10, 10, 1);
}
</style>
