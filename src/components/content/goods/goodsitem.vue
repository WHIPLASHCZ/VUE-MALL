<template>
  <div class="goodsitem" @click="goodsItemClick">
    <!-- <a :href="item.link"> -->
    <img v-lazy="showImg" alt="" @load="imgLoad" :key="item.iid" />
    <div class="item-info">
      <div class="item-title">{{ item.title }}</div>
      <span class="price">{{ item.price }}</span>
      <span class="cfav"> {{ item.cfav }}</span>
    </div>
    <!-- </a> -->
  </div>
</template>

<script>
export default {
  name: "goodsitem",
  props: {
    item: {
      type: Object,
      default() {
        return {};
      }
    },
    index: {
      type: Number
    }
  },
  computed: {
    showImg() {
      return (this.item.show && this.item.show.img) || this.item.image;
    }
  },
  methods: {
    //监听图片的加载成功事件 由于网速问题 有时候可能图片加载慢 图片没加载出来时BScroll就计算了滚动区高度
    //这样就导致滚动区高度不正确，导致有时候不能往下滚动。
    //所以要实时监听图片的加载事件，每加载成功一张图片，就给父级goodslist发送事件
    //然后父级goodlist再给父组件home发送事件，home再调用子组件scroll的刷新事件，重新调整高度。
    imgLoad() {
      //首页和详情页都使用了goods列表加载图片后刷新页面。但是首页加载了图片不需要刷新详情页，反之亦然。
      //所以要判断当前路由是在哪个页面，如果是首页，则通知首页刷新页面；如果是详情页，则通知详情页刷新页面。
      if (this.$route.path.indexOf("home") != -1) {
        this.$bus.$emit("itemsload");
      } else {
        this.$bus.$emit("detailGoodsLoad");
      }
    },
    goodsItemClick() {
      let id = this.item.iid === undefined ? this.item.item_id : this.item.iid;
      if (this.$route.path.indexOf("detail") != -1) {
        console.log(this.item.item_id);
        // this.$router.replace(id);
      } else {
        this.$router.push("/detail/" + id);
      }
    }
  }
};
</script>

<style scoped>
.goodsitem {
  width: 47%;
  padding-bottom: 9px;
}
.goodsitem img {
  width: 100%;
  border-radius: 10px;
}
.item-title {
  font-size: 14px;
  color: rgb(99, 99, 99);
  /* margin-bottom: 3px; */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.item-info {
  text-align: center;
}
.item-info span {
  padding: 0 10px;
  font-size: 14px;
}
.price {
  color: hotpink;
}
.cfav {
  position: relative;
  color: rgb(141, 141, 141);
}
.cfav::before {
  content: "";
  position: absolute;
  width: 14px;
  height: 14px;
  top: 1px;
  left: 0px;
  background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>
