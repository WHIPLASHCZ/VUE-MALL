<template>
  <div class="backtop">
    <img src="~assets/img/common/top.png" alt="" />
  </div>
</template>

<script>
export default {
  name: "backtop",
  methods: {}
};
</script>

<style scoped>
.backtop {
  position: fixed;
  bottom: 55px;
  right: 10px;
  z-index: 999;
  width: 50px;
  height: 50px;
}
.backtop img {
  width: 100%;
}
</style>
