<template>
  <div class="detail-bot">
    <div class="car-left">
      <div class="serve"><i></i> 客服</div>
      <div class="shop"><i></i> 店铺</div>
      <div class="like">
        <i @click="liked" ref="like" :class="{ liked: isLiked }"></i> 收藏
      </div>
    </div>
    <div class="car-right">
      <div class="addtocar" @click="addToCar">加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "botbar",
  data() {
    return {
      isLiked: false
    };
  },
  methods: {
    addToCar(e) {
      e.preventDefault();
      this.$emit("addCar");
    },
    liked() {
      this.isLiked = !this.isLiked;
    }
  }
};
</script>

<style scoped>
.detail-bot {
  width: 100%;
  height: 49px;
  background-color: white;
  position: fixed;
  /* position: relative; */
  bottom: 0px;
  z-index: 9999;
  display: flex;
  box-shadow: 0 -2px 4px rgba(82, 82, 82, 0.15);
}
.car-left,
.car-right {
  flex: 1;
  display: flex;
}

.car-left i {
  display: block;
  margin: auto;
  width: 25px;
  height: 25px;
  background: url("../../../assets/img/detail/detail_bottom.png") no-repeat;
  background-size: cover;
}

.serve i {
  background-position: 0 -59px;
}

.car-left .liked {
  background-position: 0 -30px;
}

.shop i {
  background-position: 0 -112px;
}

.serve,
.shop,
.like {
  flex: 1;
  text-align: center;
  font-size: 14px;
  color: rgb(77, 77, 77);
  padding-top: 4px;
}

.addtocar,
.buy {
  flex: 1;
  text-align: center;
  line-height: 49px;
  font-size: 14px;
}
.addtocar {
  background-color: rgb(241, 215, 65);
}
.buy {
  background-color: rgb(255, 117, 140);
}
</style>
