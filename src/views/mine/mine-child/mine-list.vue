<template>
  <div class="pl17 ">
    <ul class="mine-list">
      <li v-for="i of list" :key="i.id" class="mine-item">
        <span class="mineicon iconfont"> {{ i.iconfont }} </span>
        <span class="mineword">{{ i.txt }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "minelist",
  props: {
    list: {
      type: Array
    }
  }
};
</script>

<style scoped>
.mine-item {
  height: 45px;
  display: flex;
  align-items: center;
}
.mineicon {
  font-size: 18px;
  padding-right: 17px;
}
.mineword {
  display: inline-block;
  flex: 1;
  height: 100%;
  line-height: 45px;
  border-bottom: 1px solid rgb(235, 235, 235);
}
</style>
