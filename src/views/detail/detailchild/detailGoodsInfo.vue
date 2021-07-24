<template>
  <div class="goods-info">
    <div class="info-desc">
      <div class="start"></div>
      <div class="desc">{{ goods.desc }}</div>
      <div class="end"></div>
    </div>
    <div class="info-key">
      {{ goods.detailImage && goods.detailImage[0].key }}
    </div>
    <div class="info-list">
      <img
        v-for="(item, index) in goods.detailImage && goods.detailImage[0].list"
        :src="item"
        alt=""
        :key="index"
        @load="goodsImgLoad"
      />
    </div>
  </div>
</template>

<script>
import debounce from "common/tools.js";
export default {
  name: "goodsinfo",
  data() {
    return {
      imgLength: 0,
      counter: 0
    };
  },
  props: {
    goods: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  created() {},
  mounted() {},
  methods: {
    goodsImgLoad() {
      //当全部图片加载完毕 发送刷新页面高度请求
      if (++this.counter === this.imgLength) this.$emit("imgReady");
    }
  },
  //监听goods属性的变化 一旦goods属性接收到父组件传来的数据 立刻把imgLength属性改为图片个数
  watch: {
    goods() {
      this.imgLength =
        this.goods.detailImage && this.goods.detailImage[0].list.length;
    }
  }
};
</script>

<style scoped>
.info-desc,
.info-key {
  padding: 15px 10px 0;
}

.info-list {
  width: 100vw;
}
.info-list img {
  width: 100%;
}
.desc,
.info-key {
  font-size: 14px;
  color: rgb(112, 112, 112);
  line-height: 18px;
  text-indent: 2em;
}
.info-key {
  text-indent: 0;
  font-size: 16px;
  margin-left: 10px;
  line-height: 30px;
  color: rgb(71, 71, 71);
}
.start,
.end {
  position: relative;
  height: 1px;
  width: 40%;
  background-color: black;
  margin: 5px 0px 15px;
}
.end {
  float: right;
  margin: 15px 0px 5px;
}
.start::before {
  content: "";
  width: 6px;
  height: 6px;
  background-color: black;
  position: absolute;
  bottom: 0;
}

.end::after {
  content: "";
  width: 6px;
  height: 6px;
  background-color: black;
  position: absolute;
  bottom: 0;
  right: 0;
}
</style>
