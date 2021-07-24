<template>
  <div class="detail">
    <detailnav ref="detailNav" @navClick="goTo"></detailnav>
    <backtop
      v-show="currentPos < -innerHeight"
      @click.native="goBack(500)"
    ></backtop>

    <scroll
      class="detail-scroll"
      ref="scroll"
      :probeType="3"
      :pullUpLoad="true"
      @scrollPos="detailGetPos"
    >
      <detailswiper :topImg="topImages" @slideLoad="reFresh"></detailswiper>
      <div class="textinfo">
        <detailinfo :info="topInfo"></detailinfo>
        <shopinfo :shopinfo="shopInfo"></shopinfo>
      </div>
      <goodsinfo :goods="detailInfo" @imgReady="reFresh"></goodsinfo>
      <paraminfo :params="paramsInfo" ref="params"></paraminfo>
      <detailcomment :comment="rate" ref="comment"> </detailcomment>
      <div class="rec" ref="recBox">
        <div class="rec-title">推荐</div>
        <goodslist :goods="recInfo"> </goodslist>
      </div>
    </scroll>
    <botbar @addCar="addToShopCar"></botbar>
  </div>
</template>

<script>
import detailnav from "./detailchild/detailNav.vue";
import detailswiper from "./detailchild/detailSwiper.vue";
import detailinfo from "./detailchild/detailBaseInfo.vue";
import shopinfo from "./detailchild/detailShopInfo.vue";
import goodsinfo from "./detailchild/detailGoodsInfo.vue";
import paraminfo from "./detailchild/detailParamInfo.vue";
import botbar from "./detailchild/detailBotBar.vue";
import detailcomment from "./detailchild/detailComment.vue";

import {
  getdetailData,
  GoodsInfo,
  Shop,
  GoodsParam,
  getRec
} from "network/detail.js";
import scroll from "components/common/scroll/scroll.vue";
import { debounce } from "common/tools.js";
import goodslist from "components/content/goods/goodslist.vue";
import goodsitem from "components/content/goods/goodsitem.vue";
import { mixMounted } from "common/mixin.js";
import { mapGetters } from "vuex";
import { mapActions } from "vuex";

export default {
  name: "detail",
  data() {
    return {
      iid: null,
      topImages: [],
      topInfo: {},
      shopInfo: {},
      detailInfo: {},
      paramsInfo: {},
      paramTop: 0,
      commentTop: 0,
      recTop: 0,
      rate: {},
      recInfo: [],
      toastWord: "",
      toastShow: false
    };
  },
  mixins: [mixMounted],
  created() {
    this.iid = this.$route.params.iid;
    this.innerHeight = window.innerHeight * 2;
    getdetailData(this.iid).then(res => {
      let data = JSON.parse(res.request.response).result;
      //获取轮播图图片
      this.topImages = data.itemInfo.topImages;
      //获取商品信息
      this.topInfo = new GoodsInfo(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      //获取店铺信息
      this.shopInfo = new Shop(data.shopInfo);
      //获取详情信息
      this.detailInfo = data.detailInfo;
      // 获取参数信息
      this.paramsInfo = new GoodsParam(
        data.itemParams.info,
        data.itemParams.rule
      );
      //  获取评论信息
      if (data.rate.cRate) this.rate = data.rate.list[0];
    });
    // 获取推荐信息
    getRec().then(res => {
      this.recInfo = res.data.data.list;
    });
    this.$nextTick(() => {
      // console.log(this.$refs.params);
    });
  },
  mounted() {
    let flag = debounce(this.reFresh, 100);
    this.$bus.$on("detailGoodsLoad", () => {
      flag();
    });
  },
  components: {
    detailnav,
    detailswiper,
    detailinfo,
    shopinfo,
    scroll,
    goodsinfo,
    paraminfo,
    botbar,
    detailcomment,
    goodslist,
    goodsitem
  },
  methods: {
    ...mapActions(["addincar"]),
    reFresh() {
      this.$refs.scroll && this.$refs.scroll.refresh();
      this.paramTop = this.$refs.params && this.$refs.params.$el.offsetTop;
      this.commentTop = this.$refs.comment && this.$refs.comment.$el.offsetTop;
      this.recTop = this.$refs.recBox && this.$refs.recBox.offsetTop;
    },
    detailGetPos(pos) {
      //实时保存滚动位置
      this.currentPos = pos.y;
      if (-this.currentPos >= this.recTop - 100) {
        this.$refs.detailNav.currentIndex = 3;
      } else if (-this.currentPos >= this.commentTop - 100) {
        this.$refs.detailNav.currentIndex = 2;
      } else if (-this.currentPos >= this.paramTop - 100) {
        this.$refs.detailNav.currentIndex = 1;
      } else {
        this.$refs.detailNav.currentIndex = 0;
      }
    },
    goTo(index) {
      switch (index) {
        case 0:
          this.$refs.scroll.sTo(0, 0);
          this.currentPos = 0;
          break;
        case 1:
          this.$refs.scroll.sTo(0, -this.paramTop);
          this.currentPos = -this.paramTop;
          break;
        case 2:
          this.$refs.scroll.sTo(0, -this.commentTop);
          this.currentPos = -this.commentTop;
          break;
        case 3:
          this.$refs.scroll.sTo(0, -this.recTop);
          this.currentPos = -this.recTop;
          break;
      }
    },
    addToShopCar() {
      let stuff = {};
      stuff.image = this.topImages[0];
      stuff.title = this.topInfo.title;
      stuff.desc = this.topInfo.desc;
      stuff.price = this.topInfo.realPrice;
      stuff.iid = this.iid;
      this.addincar(stuff).then(res => {
        console.log(this.$toast);
        this.$toast.showToast(res, 1000);
      });
    }
  }
};
</script>
<style scoped>
.detail {
  position: relative;
}
.content {
  /* padding-top: 43px; */
}
.detail-scroll {
  height: calc(100vh - 92px);
  position: relative;
  top: 0;
  bottom: 49px;
  z-index: 9;
  background-color: white;
}
.textinfo {
  padding: 15px 10px 0;
}
#bar {
  display: none;
}
/* 推荐 */
.rec {
  border-top: 8px solid rgb(218, 218, 218);
}
.rec-title {
  padding: 10px 15px;
}
</style>
