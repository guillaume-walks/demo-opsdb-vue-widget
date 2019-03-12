<template>
  <adminBookingWidget
    :user="defaultUser"
    page="rome-tours"
  />
</template>

<script>
import getCityFilter from "./components/getCityFilter.vue";

export default {
  name: "app",
  components: {
    adminBookingWidget: getCityFilter
  },
  data() {
    return {
      defaultUser: {
        name: "default user",
        id: "#xxxxxxx1"
      }
    };
  }
};
</script>

<style>
#vue-app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  text-align: center;
  border: 1px solid grey;
}
</style>
