<template>
  <div class="shopinfo">
    <div class="name">
      <img :src="shopinfo.logo" alt="" class="head" />
      <span> {{ shopinfo.name }} </span>
    </div>

    <div class="botInfo">
      <div class="numbers">
        <div class="sells">
          <div class="num">{{ (shopinfo.sells / 10000).toFixed(1) }}万</div>
          <div class="all">总销量</div>
        </div>

        <div class="babes">
          <div class="num">{{ shopinfo.goodsCount }}</div>
          <div class="all">全部宝贝</div>
        </div>
      </div>
      <div class="line"></div>

      <div class="score">
        <p v-for="i of shopinfo.score" :key="i.id" class="score-item">
          <span class="score-name">{{ i.name }}</span>
          <span class="score-num" :class="{ better: i.isBetter }">{{
            i.score
          }}</span>
          <span class="di" v-if="i.isBetter"> 高 </span>
          <span class="gao" v-else> 低 </span>
        </p>
      </div>
    </div>

    <div class="goIn">
      <a href="javascript:;" class="goInBtn"> 进店逛逛 </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "shopinfo",
  props: {
    shopinfo: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>

<style scoped>
.shopinfo {
  border-bottom: 1px solid rgb(194, 194, 194);
}
.head {
  width: 50px;
}

.name {
  height: 70px;
  line-height: 70px;
}
.head {
  vertical-align: middle;
  border-radius: 30px;
  border: 1px solid grey;
  margin-bottom: 4px;
}
.botInfo {
  display: flex;
  /* width: 100vw; */
  /* height: 140px; */
  margin: auto;
  justify-content: center;
  padding: 0 25px;
}
.numbers,
.score {
  flex: 1;
}
.line {
  align-self: center;
  height: 50px;
  width: 1px;
  background-color: rgb(175, 175, 175);
  margin: 0 25px;
  box-sizing: border-box;
}

/* 左侧销量 */
.numbers {
  display: flex;
  align-self: center;
  text-align: center;
  justify-content: space-between;
  /* margin-left: 10px; */
}
.all {
  font-size: 13px;
  margin-top: 5px;
}
.num {
  font-size: 18px;
}

/* 右侧评分 */
.score-item {
  display: flex;
  height: 28px;
  font-size: 14px;
  padding-top: 8px;
}
.score-name,
.score-num {
  display: block;
}
.score-name {
  width: 70px;
}
.score-num {
  width: 40px;
  color: green;
}
.di,
.gao {
  display: inline-block;
  height: 17px;
  color: white;
  padding: 0 0 3px 0;
}
.di {
  background-color: rgba(190, 0, 0, 0.911);
}
.gao {
  background-color: rgb(0, 136, 18);
}

.better {
  color: red;
}
/* 进入店铺 */
.goIn {
  width: 100%;
  text-align: center;
  padding: 15px 0 20px;
}
.goInBtn {
  display: block;
  width: 140px;
  height: 30px;
  margin: auto;
  font-size: 14px;
  background-color: rgb(236, 236, 236);
  line-height: 30px;
  color: rgb(95, 95, 95);
  border-radius: 10px;
}
</style>
