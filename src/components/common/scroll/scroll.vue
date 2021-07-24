<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "scroll",
  data() {
    return {
      BS: null
    };
  },
  props: {
    probeType: {
      type: Number,
      default() {
        return 0;
      }
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
    // loadFinish: {
    //   type: Boolean,
    //   default: false
    // }
  },
  updated() {
    // if (!this.loadDone) return;
    // console.log("done");
    // this.BS.finishPullUp();
  },
  created() {},
  mounted() {
    const wrp = this.$refs.wrapper;
    this.BS = new BScroll(wrp, {
      probeType: this.probeType,
      click: true,
      pullUpLoad: this.pullUpLoad
    });
    if (this.probeType == 2 || this.probeType == 3) {
      this.BS &&
        this.BS.on("scroll", pos => {
          this.$emit("scrollPos", pos);
        });
    }

    if (this.pullUpLoad) {
      this.BS &&
        this.BS.on("pullingUp", pos => {
          this.$emit("pullUpload", pos);
        });
    }
  },
  methods: {
    refresh() {
      console.log("re");
      this.BS && this.BS.refresh();
    },
    sTo(x = 0, y = 0, speed = 0) {
      this.BS && this.BS.scrollTo(x, y, speed);
    }
  }
};
</script>

<style scoped>
.wrapper {
  /* height: 100vh; */
  width: 100vw;
  overflow-x: hidden;
}
</style>
