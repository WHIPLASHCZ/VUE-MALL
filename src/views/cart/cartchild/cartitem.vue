<template>
  <div class="cart-item">
    <div class="checkbox">
      <span class="gou" @click="chose" :class="{ active: isChosed }">
        <img src="~assets/img/cart/tick.svg" alt="" v-show="isChosed" />
      </span>
    </div>
    <div class="imgbox">
      <img :src="stuff.image" alt="" />
    </div>
    <div class="info-box">
      <div class="cart-title">{{ stuff.title }}</div>
      <div class="cart-desc">{{ stuff.desc }}</div>
      <div class="cnt-box">
        <div class="car-price">￥{{ stuff.price * stuff.count }}</div>
        <div class="cart-cnt">× {{ stuff.count }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "cart-item",
  props: {
    stuff: {
      type: Object
    }
  },
  data() {
    return {};
  },
  mounted() {},
  computed: {
    isChosed() {
      return this.stuff.ischose;
    }
  },
  methods: {
    chose() {
      this.$store.commit("isChose", this.stuff);
      console.log(this.$store.state.shopcars);
    }
  }
};
</script>

<style scoped>
.cart-item {
  padding: 10px 0;
  height: 120px;
  width: 100%;
  display: flex;
  border-bottom: 1px solid rgb(212, 212, 212);
  font-size: 16px;
}
.checkbox {
  width: 6%;
  line-height: 110px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}
.gou {
  border-radius: 50%;
  flex-shrink: 0;
  box-sizing: border-box;
  position: relative;
  width: 18px;
  height: 18px;
  display: block;
  border: 2px solid rgb(184, 184, 184);
}
.active {
  background-color: hotpink;
}
.gou img {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.imgbox {
  width: 20%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-shrink: 0;
}
.imgbox img {
  width: 100%;
  height: 98%;
  border-radius: 5px;
}
.info-box {
  /* flex: 1; */
  width: 74%;
  padding: 0 15px 0 7px;
  position: relative;
}
.cart-title,
.cart-desc {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.cart-title {
  margin-bottom: 10px;
}
.cart-desc {
  font-size: 14px;
  color: grey;
}
.cnt-box {
  display: flex;
  position: relative;
  justify-content: space-between;
  margin-top: 30px;
}
.car-price {
  font-size: 18px;
  color: rgb(250, 121, 0);
}
.cart-cnt {
  margin-top: 3px;
}
</style>
