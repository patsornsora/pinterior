<template>
  <div>
    <div>
      <figure class="image is-full">
        <v-img :aspect-ratio="9/3" src="banner/1.png" target="_blank"></v-img>
      </figure>
    </div>
    <div>
      <v-container grid-list-md fluid>
        <v-layout wrap>
          <v-flex v-for="item in lists" :key="item.id" xs12 md12 sm12>
            <v-item-group>
              <v-item style="border-radius: 4px;">
                <v-card
                  slot-scope="{ hover }"
                  :class="`elevation-${hover ? 12 : 2}`"
                  class="mx-auto"
                >
                  <v-img :aspect-ratio="9/4" :src="item.img" target="_blank">
                    <v-container fill-height fluid pa-2>
                      <v-layout fill-height>
                        <v-flex align-end flexbox style="margin: 0px; padding: 0px;">
                          <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn icon @click="goLink(item.link)" v-show="item.link">
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
                  <div style="padding: 8px;">
                    <div class="level">
                      <div class="level-left">
                        <v-list-tile-sub-title>
                          <b>{{item.title}}</b>
                        </v-list-tile-sub-title>
                      </div>
                      <div class="level-right">
                        <button
                          class="button color-blue"
                          style="border-radius: 4px; padding: 0px 30px; width: 30px;"
                          @click="clickDetail(item.id)"
                        >DETAIL</button>
                      </div>
                    </div>
                  </div>
                </v-card>
              </v-item>
            </v-item-group>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lists: [
        {
          id: 1,
          title: "Title1",
          designer: "Designer1",
          project: "Project1",
          type: "Type",
          img: "/room/r1/1.png",
          price: "250,000",
          link: "https://vizor.io/miniemeenie/room1"
        },
        {
          id: 2,
          title: "Title2",
          designer: "Designer2",
          project: "Project2",
          type: "Type",
          img: "/room/r2/1.png",
          price: "250,000"
        },
        {
          id: 3,
          title: "Title3",
          designer: "Designer3",
          project: "Project3",
          type: "Type",
          img: "/room/r3/1.png",
          price: "250,000"
        },
        {
          id: 4,
          title: "Title4",
          designer: "Designer4",
          project: "Project4",
          type: "Type",
          img: "/room/r1/1.png",
          price: "250,000"
        },
        {
          id: 5,
          title: "Title5",
          designer: "Designer5",
          project: "Project5",
          type: "Type",
          img: "/room/r2/1.png",
          price: "250,000"
        },
        {
          id: 6,
          title: "Title6",
          designer: "Designer6",
          project: "Project6",
          type: "Type",
          img: "/room/r3/1.png",
          price: "250,000"
        },
        {
          id: 7,
          title: "Title7",
          designer: "Designer7",
          project: "Project7",
          type: "Type",
          img: "/room/r1/1.png",
          price: "250,000"
        },
        {
          id: 8,
          title: "Title8",
          designer: "Designer8",
          project: "Project8",
          type: "Type",
          img: "/room/r2/1.png",
          price: "250,000"
        },
        {
          id: 9,
          title: "Title9",
          designer: "Designer9",
          project: "Project9",
          type: "Type",
          img: "/room/r3/1.png",
          price: "250,000"
        },
        {
          id: 10,
          title: "Title10",
          designer: "Designer10",
          project: "Project10",
          type: "Type",
          img: "/room/r1/1.png",
          price: "250,000"
        }
      ]
    };
  },

  methods: {
    goLink() {
      window.open("https://vizor.io/miniemeenie/room1", "_blank");
    },
    clickDetail(id) {
      console.log("clickDetail >> ", id);
      this.$router.push("/showroom/" + id);
    }
  }
};
</script>
