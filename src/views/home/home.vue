<template>
  <div id="home">
    <navbar class="home-nav">
      <div slot="left"></div>
      <div slot="mid">购物街</div>
      <div slot="right"></div>
    </navbar>
    <backtop @click.native="goBack(500)" v-show="currentPos < innerHeight" />
    <tabcontrol
      :titles="titles"
      :scrollEvent="true"
      @tabName="currentTab"
      ref="tabcontrol2"
      v-show="isTabStick"
      class="tabPos"
    />
    <scroll
      class="home-scroll"
      ref="scroll"
      :probeType="3"
      :pullUpLoad="true"
      @scrollPos="getPos"
      @pullUpload="pullLoad"
    >
      <homeslide :banner="banners" @slideLoaded="slideReady" />
      <recommend :rec="recommends" />
      <weekly />
      <tabcontrol
        :titles="titles"
        :scrollEvent="true"
        @tabName="currentTab"
        ref="tabcontrol"
        v-show="!isTabStick"
      />
      <goodslist :goods="showGoods" :class="{ mt: isTabStick }"> </goodslist>
    </scroll>
  </div>
</template>

<script>
// 子组件
import { getHomeData, getHomeGoods } from "network/home.js";
import homeslide from "./home-child/slide.vue";
import recommend from "./home-child/recommend.vue";
// 公共组件
import navbar from "components/common/navbar/navbar.vue";
import weekly from "./home-child/weeklypop.vue";
import tabcontrol from "components/content/tabctrl/tabControl.vue";
import goodslist from "components/content/goods/goodslist.vue";
import goodsitem from "components/content/goods/goodsitem.vue";
import scroll from "components/common/scroll/scroll.vue";
import backtop from "components/content/backtop/backtop.vue";

// 工具
import { debounce } from "common/tools.js";
import { mixMounted } from "common/mixin.js";
export default {
  name: "home",

  data() {
    return {
      banners: [],
      recommends: [],
      //商品信息
      goods: {
        pop: {
          page: 0,
          list: []
        },
        new: {
          page: 0,
          list: []
        },
        sell: {
          page: 0,
          list: []
        }
      },
      titles: ["流行", "新款", "精选"],
      currentType: "pop",
      tabOffsetTop: 0,
      isTabStick: false,
      saveY: 0
    };
  },
  mixins: [mixMounted],
  computed: {
    showGoods: {
      get() {
        return this.goods[this.currentType].list;
      }
    }
  },
  components: {
    homeslide,
    recommend,
    navbar,
    weekly,
    tabcontrol,
    goodslist,
    goodsitem,
    scroll,
    backtop
  },
  created() {
    this.getHomedata();
    this.getHomgegoods("pop");
    this.getHomgegoods("new");
    this.getHomgegoods("sell");
  },
  mounted() {
    this.innerHeight = -(window.innerHeight * 2);
    //当后代组件图片加载完毕后 触发itemsload自定义事件 然后刷新scroll组件重新计算高度
    let flag = debounce(this.scrollRefresh, 100);
    this.$bus.$on("itemsload", () => {
      //每接收到一个图片加载完成的请求 就调用一次flag
      flag();
    });
  },
  activated() {
    this.$refs.scroll && this.scrollRefresh();
    this.$refs.scroll && this.$refs.scroll.sTo(0, this.saveY);
  },
  deactivated() {
    this.saveY = this.currentPos;
  },
  methods: {
    // 网络请求
    //获取主页数据
    getHomedata() {
      getHomeData().then(res => {
        this.banners = res.data.data.banner.list;
        this.recommends = res.data.data.recommend.list;
      });
    },
    //请求商品信息
    getHomgegoods(type) {
      return getHomeGoods(type, ++this.goods[type].page).then(res => {
        if (res.data.data) this.goods[type].list.push(...res.data.data.list);
      });
    },
    //事件监听

    currentTab(index) {
      let arr = ["pop", "new", "sell"];
      this.currentType = arr[index];
      //让真假tabbar的被选中项同步
      this.$refs.tabcontrol.current = index;
      this.$refs.tabcontrol2.current = index;
    },
    //通过scroll组件的BS属性回到顶部。
    // goTop(e) {
    //   this.$refs.scroll.BS.scrollTo(0, 0, 500);
    // },
    //滚动监听 获取到滚动距离
    getPos(pos) {
      //获取当前滚动距离
      this.currentPos = pos.y;
      //设置当前距离下tab是否需要吸附到顶部
      this.isTabStick = -pos.y > this.tabOffsetTop;
    },
    pullLoad() {
      let type = this.currentType;
      this.getHomgegoods(type).then(() => {
        this.$refs.scroll.BS.finishPullUp();
      });
    },
    /*如果接收到goodslist发送过来的其子组件的图片加载成功事件，
    就调用scroll子组件的刷新事件重新调整高度。*/
    scrollRefresh() {
      if (this.$refs.scroll === undefined) return;
      this.$refs.scroll.refresh();
    },
    slideReady() {
      this.tabOffsetTop = this.$refs.tabcontrol.$el.offsetTop;
    }
  }
};
</script>

<style scoped>
.home-nav {
  background-color: var(--color-tint);
  color: white;
}

#home {
  height: calc(100vh);
  overflow: hidden;
}
.home-scroll {
  /* padding: 43px 0px 49px; */
  height: calc(100vh - 92px);
  /* height: 100px; */
  width: 100vw;
  overflow-x: hidden;
  /* height: 100%; */
}
.tabPos {
  position: absolute;
  z-index: 999;
}
.mt {
  margin-top: 40px;
}
</style>
