<template>
  <div class="type-box">
    <navbar class="type-nav">
      <div slot="left"></div>
      <div slot="mid">购物街</div>
      <div slot="right"></div>
    </navbar>
    <backtop @click.native="goBack(500)" v-show="currentPos < innerHeight" />
    <div class="flex-box">
      <leftlist
        :listItem="leftList"
        @sendmaitkey="gotmaitkey"
        @sendminiWall="gotminiWall"
        ref="leftlist"
        class="leftlist"
      ></leftlist>
      <tabcontrol
        :titles="typetitles"
        @tabName="changeCurrent"
        ref="tabcontrol2"
        v-show="showStiky"
        class="stiky"
      />
      <scroll
        class="type-scroll"
        ref="typescroll"
        :probeType="3"
        :pullUpLoad="true"
        @scrollPos="getTypePos"
        @pullUpload="typepullLoad"
      >
        <div class="info">
          <typetop :topList="types"></typetop>
          <tabcontrol
            :titles="typetitles"
            :scrollEvent="true"
            @tabName="changeCurrent"
            ref="tabcontrol"
          />
          <typeDetail
            :typeShopList="typeDetail"
            @typeImgLoad="detailload"
          ></typeDetail>
        </div>
      </scroll>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
import navbar from "components/common/navbar/navbar.vue";
import scroll from "components/common/scroll/scroll.vue";
import backtop from "components/content/backtop/backtop.vue";
import tabcontrol from "components/content/tabctrl/tabControl.vue";
import {
  getCategory,
  getSubcategory,
  getCategoryDetail
} from "network/type.js";
import { debounce } from "common/tools.js";
import { mixMounted } from "common/mixin.js";
// 子组件
import leftlist from "./typeChild/leftbar.vue";
import typetop from "./typeChild/typeTopinfo.vue";
import typeDetail from "./typeChild/typeDetail.vue";

export default {
  name: "type",
  data() {
    return {
      leftList: [],
      types: [],
      typeDetail: [],
      category: ["pop", "new", "sell"],
      typetitles: ["流行", "新品", "热销"],
      currentType: "pop",
      flag: "",
      wall: "",
      showStiky: false,
      tabOffsetTop: 600
    };
  },
  mixins: [mixMounted],
  components: {
    navbar,
    scroll,
    backtop,
    leftlist,
    typetop,
    typeDetail,
    tabcontrol
  },
  created() {
    this.getTypeData();
  },
  mounted() {
    this.flag = debounce(this.typefresh, 100);
  },
  methods: {
    getTypeData() {
      getCategory().then(res => {
        this.leftList = res.data.data.category.list;
      });
    },
    gotmaitkey(key) {
      getSubcategory(key).then(res => {
        this.types = res.data.data.list;
        this.changeCurrent(0);
      });
    },
    gotminiWall(wall) {
      this.wall = wall;
      getCategoryDetail(wall, this.currentType).then(res => {
        this.typeDetail = res.data;
        // this.$refs.typescroll.sTo(0, this.currentPos);
      });
    },
    typefresh() {
      this.$refs.typescroll.refresh();
      this.tabOffsetTop = this.$refs.tabcontrol.$el.offsetTop;
      this.innerHeight = -window.innerHeight * 2;
    },
    detailload() {
      this.flag();
    },
    changeCurrent(index) {
      this.currentType = this.category[index];
      this.$refs.tabcontrol2.current = index;
      this.$refs.tabcontrol.current = index;
      this.gotminiWall(this.wall);
    },
    getTypePos(pos) {
      this.currentPos = pos.y;
      this.showStiky = this.currentPos <= -this.tabOffsetTop;
    },
    typepullLoad(pos) {
      let nowpos = -this.currentPos;
      let left = this.$refs.leftlist;
      setTimeout(() => {
        if (-this.currentPos > nowpos + 100) {
          let len = left.listItem.length;
          let cur = left.currentIndex;
          left.currentIndex = ++cur % len;
          left.init(left.currentIndex).then(() => {
            this.$refs.typescroll.sTo(0, 0);
            this.showStiky = 0;
          });
        }
        this.$refs.typescroll.BS.finishPullUp();
      }, 300);
    }
  }
};
</script>

<style scoped>
.type-nav {
  background-color: var(--color-tint);
  color: white;
}
.wrapper {
  height: calc(100vh - 92px);
  /* height: 100vh; */
  width: 100%;
  /* background-color: wheat; */
  overflow: hidden;
  /* overflow: auto; */
}

.flex-box {
  display: flex;
}
.type-scroll {
  float: left;
  flex: 1;
}
.info {
  width: 100%;
}
.stiky {
  position: absolute;
  top: 44px;
  right: 0;
  z-index: 999;
  width: 73%;
}
</style>
