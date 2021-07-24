<template>
  <div id="app">
    <keep-alive exclude="detail">
      <router-view></router-view>
    </keep-alive>
    <items></items>
  </div>
</template>

<script>
import items from "./components/content/items.vue";
import navbar from "./components/common/navbar/navbar.vue";

export default {
  name: "App",
  components: {
    items,
    navbar
  }
};
</script>

<style>
@import url("assets/css/base.css");
</style>
