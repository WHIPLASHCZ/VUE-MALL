<template>
  <div class="nav">
    <div class="left">
      <slot name="left"></slot>
    </div>

    <div class="mid">
      <slot name="mid"></slot>
    </div>

    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "navbar"
};
</script>

<style scoped>
.nav {
  /* position: absolute; */
  position: relative;
  /* position: fixed; */
  display: flex;
  z-index: 999;
  top: 0;
  width: 100%;
  height: 44px;
  /* background-color: antiquewhite; */
  align-items: center;
  box-shadow: 0 2px 2px rgba(100, 100, 100, 0.2);
  font-size: 16px;
}
.left,
.mid,
.right {
  text-align: center;
}
.left {
  width: 60px;
}
.mid {
  flex: 1;
}
.right {
  width: 60px;
}
</style>
