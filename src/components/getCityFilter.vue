<template>
  <div class="hello">
    <h1> city = {{ page }} </h1>
    <ul>
      <li
        v-for="(info, index) in infos"
        :key="index"
      >
        <strong>{{index}}:</strong> {{info}}
      </li>
    </ul>
    <hr>
    <button @click="callUrl"> Http Request </button>
  </div>

</template>

<script>
const url = "https://staging-inventoryapi.walks.org/v1/inventory/products/";
const token = "OTjK4TmsCxAXezTINOUVNvd8UYZsIUi4";

import axios from "axios";

export default {
  name: "getCityData",
  data() {
    return {
      status: false,
      infos: null
    };
  },

  methods: {
    callUrl() {
      axios
        .get(url + this.page, {
          headers: {
            Authorization: "Bearer " + token
          }
        })
        .then(res => {
          console.log("results:", res);
          this.infos = res.data.data.city.data;
        })
        .catch(err => {
          console.log("error", err);
        });
    }
  },
  props: {
    user: { type: [Object, String] },
    page: { type: String }
  }
};
</script>
<style scoped>
.hello {
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}
</style>

