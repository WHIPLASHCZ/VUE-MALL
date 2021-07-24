<template>
  <div id="bar" class="bottomBar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Bar"
};
</script>

<style>
#bar {
  display: flex;
  position: fixed;
  /* position: relative; */
  bottom: 0px;
  width: 100%;
  background-color: #f6f6f6;
  height: 49px;
  align-items: center;
  /* box-shadow: 0px,-10px,5px,#888888; */
  box-shadow: 0px -5px 7px rgba(150, 150, 150, 0.2);
}
</style>
