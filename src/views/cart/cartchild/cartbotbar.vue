<template>
  <div class="cart-bot">
    <div class="cart-left">
      <span class="gou" @click="choseall" :class="{ active: allBeenChosed }">
        <img src="~assets/img/cart/tick.svg" alt="" v-show="allBeenChosed" />
      </span>
      <div class="allselect">全选</div>

      <div class="allmoney">总计：￥{{ $store.getters.allmoney }}</div>
    </div>
    <div class="gotocount" @click="calcClick">
      去计算 ({{ $store.getters.allChoseCnt.allitem }})
    </div>
  </div>
</template>

<script>
export default {
  name: "cartbot",
  data() {
    return {
      allchosed: true
    };
  },
  computed: {
    allBeenChosed() {
      if (!this.$store.state.shopcars.length) return 0;
      return (
        this.$store.getters.allChoseCnt.allchose ===
        this.$store.state.shopcars.length
      );
    }
  },
  methods: {
    choseall() {
      this.$store.dispatch("allchose");
      console.log(this.$store.state.shopcars);
    },
    calcClick() {}
  }
};
</script>

<style scoped>
.cart-bot {
  position: absolute;
  /* position: relative; */
  bottom: 49px;
  height: 40px;
  line-height: 40px;
  background-color: rgb(238, 238, 238);
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-left: 10px;
  font-size: 14px;
}
.gou {
  border: 2px solid rgb(184, 184, 184);
  border-radius: 50%;
  flex-shrink: 0;
  box-sizing: border-box;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  display: block;
  margin-right: 4px;
}
.active {
  background-color: hotpink;
}
.cart-left {
  display: flex;
}
.gou img {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.allselect {
  color: rgb(88, 88, 88);
}
.allmoney {
  margin-left: 10px;
  font-size: 16px;
}

.gotocount {
  padding: 0 20px;
  background-color: rgb(255, 94, 0);
  color: white;
}
</style>
