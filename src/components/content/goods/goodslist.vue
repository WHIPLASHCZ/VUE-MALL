<template>
  <div class="goods">
    <goodsitem
      v-for="(i, index) of goods"
      :key="i.id"
      :item="i"
      :index="index"
    />
  </div>
</template>

<script>
import goodsitem from "./goodsitem.vue";
export default {
  name: "goodslist",
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: {
    goodsitem
  },
  methods: {
    //当goodslist接收到子组件的图片加载成功事件后，goodslist给父组件发送imgload事件。
    //然后让父组件调用子组件scroll的刷新事件，重新调整高度。
    // listLoad() {
    //   this.$emit("listRefresh");
    // }
  }
};
</script>

<style scoped>
.goods {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  /* margin-top: 3px; */
}
</style>
