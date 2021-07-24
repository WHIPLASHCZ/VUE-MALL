<template>
  <div class="tab" ref="tab">
    <div class="tab-box" ref="tabbox">
      <div
        v-for="(i, index) of titles"
        :key="i.id"
        class="tabItem"
        :class="{ active: index === current }"
        @click="itemClick(index)"
      >
        <span>{{ i }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "tabcontrol",
  data() {
    return {
      current: 0,
      tabTop: 0
    };
  },
  mounted() {},
  props: {
    titles: {
      type: Array,
      default() {
        return [1, 2, 3];
      }
    },
    scrollEvent: {
      type: Boolean,
      default() {
        return false;
      }
    }
  },
  methods: {
    itemClick(index) {
      let e = window.event;
      // console.log(e.target.innerText);
      this.current = index;
      this.$emit("tabName", index);
    },
    jsScroll() {
      if (this.scrollEvent) {
        let tab = document.querySelector(".tab");
        let tabbox = document.querySelector(".tab-box");
        this.tabTop = 600;
        setTimeout(() => {
          this.tabTop = tab.offsetTop;
          console.log(this.tabTop);
        }, 55);
        window.addEventListener("resize", () => {
          this.tabTop = tab.offsetTop;
        });
        window.onscroll = () => {
          console.log("1");
          if (window.pageYOffset >= this.tabTop - 43) {
            tabbox.style.position = "fixed";
            tabbox.style.top = "43px";
          } else {
            tabbox.style.position = "";
            tabbox.style.top = "";
          }
        };
      }
    },
    stiky() {
      console.log("s");
      this.$refs.tabbox.style.position = "fixed";
      this.$refs.tabbox.style.top = "43px";
    },
    unstiky() {
      console.log("u");
      this.$refs.tabbox.style.position = "";
      this.$refs.tabbox.style.top = "";
    }
  }
};
</script>

<style scoped>
.tab {
  /* position: relative;
  top: 0; */
  height: 40px;
  line-height: 40px;
  width: 100%;
  /* margin-bottom: 8px; */
}
.tab-box {
  width: 100%;
  display: flex;
  font-size: 14px;

  z-index: 999;
  background-color: #fff;
}
.tabItem {
  flex: 1;
  text-align: center;
  /* color: hotpink; */
}

.active span {
  color: var(--color-high-text);
  border-bottom: 2px solid hotpink;
  display: inline-block;
  padding: 0 5px;
  height: 35px;
}
</style>
