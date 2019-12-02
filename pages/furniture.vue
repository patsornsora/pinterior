<template>
  <div>
    <div style="margin: 40px;">
      <v-layout row wrap style="margin-top: 28px;">
        <v-flex xs3>
          Supplier
          <b-select v-model="supplier">
            <option
              v-for="(item, i) in suppliers"
              :key="i"
              :value="item.contact_name"
            >{{ item.contact_name }}</option>
          </b-select>
        </v-flex>
        <v-flex xs3>
          Group
          <b-select v-model="groups">
            <option value="All">All</option>
            <option value="Bed">Bed</option>
            <option value="Chair">Chair</option>
            <option value="Table">Table</option>
            <option value="Cabinet">Cabinet</option>
            <option value="Sofa">Sofa</option>
            <option value="Shelf">Shelf</option>
            <option value="Lamp">Lamp</option>
            <option value="REBEAB">REBEAB</option>
            <option value="TWIST">TWIST</option>
            <option value="KARAT">KARAT</option>
            <option value="TWISTBench">TWISTBench</option>
            <option value="dining set">dining set</option>
            <option value="Bench">Bench</option>
            <option value="TOA">TOA</option>
            <option value="Wall">Wall</option>
            <option value="Storage">Storage</option>
            <option value="aRoundlTow">aRoundlTow</option>
            <option value="T01">T01</option>
            <option value="-">-</option>
          </b-select>
        </v-flex>
        <v-flex xs3>
          Total
          <div>{{ furnitures.length }}</div>
        </v-flex>
      </v-layout>
    </div>
    <b-table :data="furnitures" :columns="columns">
      <template slot-scope="props">
        <b-table-column field="id" label="ID" width="40" sortable numeric>
          {{
          props.row.id
          }}
        </b-table-column>
        <b-table-column field="model" label="Model" width="250" centered>
          <img :src="props.row.model" style="height: 200px;" />
        </b-table-column>
        <b-table-column
          field="supplier"
          label="Supplier"
          width="100"
          sortable
        >{{ props.row.supplier }}</b-table-column>
        <b-table-column field="title" label="Title" width="100" sortable>
          {{
          props.row.title
          }}
        </b-table-column>
        <b-table-column field="cost" label="Cost" width="100" sortable centered>{{ props.row.cost }}</b-table-column>
        <b-table-column
          field="price"
          label="Price"
          width="100"
          sortable
          centered
        >{{ props.row.price }}</b-table-column>
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      columns: [],
      furnitures: [],
      lists: [],
      suppliers: [],
      supplier: "All",
      groups: "All"
    };
  },
  created() {
    this.getFurniture();
    this.getSupplier();
  },
  watch: {
    supplier() {
      if (this.supplier !== "All" && this.groups === "All") {
        this.furnitures = this.lists.filter(item => {
          return item.supplier === this.supplier;
        });
      } else if (this.supplier !== "All" && this.groups !== "All") {
        this.furnitures = this.lists
          .filter(item => {
            return item.supplier === this.supplier;
          })
          .filter(item => {
            return item.group === this.groups;
          });
      } else if (this.supplier == "All" && this.groups !== "All") {
        this.furnitures = this.lists.filter(item => {
          return item.group === this.groups;
        });
      } else {
        this.furnitures = this.lists;
      }
    },
    groups() {
      // console.log("groups >> ", this.groups);
      if (this.groups !== "All" && this.supplier === "All") {
        this.furnitures = this.lists.filter(item => {
          return item.group === this.groups;
        });
      } else if (this.groups !== "All" && this.supplier !== "All") {
        this.furnitures = this.lists
          .filter(item => {
            return item.supplier === this.supplier;
          })
          .filter(item => {
            return item.group === this.groups;
          });
      } else if (this.groups === "All" && this.supplier !== "All") {
        this.furnitures = this.lists.filter(item => {
          return item.supplier === this.supplier;
        });
      } else {
        this.furnitures = this.lists;
      }
    }
  },
  methods: {
    async getFurniture() {
      // console.log("getFurniture");
      await this.$http
        .get("https://dezignserves.com/api/furnitures/", {
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
              rItem.model = item.model;
              rItem.supplier = item.supplier;
              rItem.title = item.title;
              rItem.group = item.group;
              rItem.cost = item.cost;
              rItem.price = item.cost + item.cost * item.margin;
              return rItem;
            });
            this.furnitures = this.lists;
          }
        })
        .catch(error => {
          console.error("error >> ", error);
          this.isInvalid = true;
        });
    },
    async getSupplier() {
      await this.$http
        .get("https://dezignserves.com/api/suppliers/", {
          headers: {
            Authorization: "Basic YWRtaW46cXdlcjEyMzQ="
          }
        })
        .then(res => {
          if (res.status === 200) {
            this.suppliers = res.data;
          }
          this.suppliers.push({ contact_name: "All" });
        })
        .catch(error => {
          console.error("error >> ", error);
          this.isInvalid = true;
        });
    }
  }
};
</script>
