<template>
  <div class="cart">
    <carbar></carbar>
    <scroll
      class="cart-scroll"
      ref="scroll"
      :probeType="3"
      @scrollPos="cartGetPos"
    >
      <cartlist class="cartlist" />
    </scroll>

    <carbot class="bot"></carbot>
  </div>
</template>

<script>
import carbar from "./cartchild/cartbar.vue";
import cartlist from "./cartchild/cartlist.vue";
import carbot from "./cartchild/cartbotbar.vue";

import scroll from "components/common/scroll/scroll.vue";
export default {
  name: "cart",
  components: {
    carbar,
    cartlist,
    carbot,
    scroll
  },
  mounted() {
    console.log(this.$refs.scroll.BS);
  },
  destroyed() {
    console.log("die");
  },
  activated() {
    this.$refs.scroll.refresh();
  },
  methods: {
    cartGetPos(pos) {
      //   console.log(this.$refs.scroll.BS);
    }
  }
};
</script>

<style scoped>
.cart {
  width: 100vw;
  height: 100vh;
  position: relative;
}
.cart-scroll {
  height: calc(100vh - 132px);
  /* overflow: auto; */
  /* height: 100vh; */
  /* height: calc(100vh - 93px); */
}
</style>
