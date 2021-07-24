<template>
  <div>
    <navbar class="mine-nav">
      <div slot="mid">爱情商城</div>
    </navbar>
    <userinfo></userinfo>
    <div class="grade bb ">
      <div class="grade-item">
        <div class="grade-num">
          <span class="num"> {{ leftMoney.toFixed(2) }}</span>
          元
        </div>
        <div class="grade-txt">我的余额</div>
      </div>
      <div class="grade-item">
        <div class="grade-num">
          <span class="num"> {{ youhui }}</span>
          个
        </div>
        <div class="grade-txt">我的优惠</div>
      </div>
      <div class="grade-item">
        <div class="grade-num">
          <span class="num"> {{ points }}</span>
          分
        </div>
        <div class="grade-txt">我的积分</div>
      </div>
    </div>
    <minelist :list="mineInfo" class="bb"></minelist>
    <minelist :list="app"></minelist>
  </div>
</template>

<script>
import navbar from "components/common/navbar/navbar.vue";
import userinfo from "./mine-child/user.vue";
import minelist from "./mine-child/mine-list.vue";
export default {
  name: "mine",
  data() {
    return {
      leftMoney: 0.0,
      youhui: 0,
      points: 0,
      mineInfo: [
        { iconfont: "\ue695", txt: "我的消息" },
        { iconfont: "\ue663", txt: "积分商城" },
        { iconfont: "\ue619", txt: "会员卡" }
      ],
      app: [
        { iconfont: "\ue6d7", txt: "我的购物车" },
        { iconfont: "\ue6d7", txt: "下载购物APP" }
      ]
    };
  },
  components: {
    navbar,
    userinfo,
    minelist
  }
};
</script>
<style scoped>
.mine-nav {
  background-color: var(--color-tint);
  color: white;
  box-shadow: none;
}
.grade {
  display: flex;
  width: 100%;
  /* justify-items: center; */
  align-content: center;
}
.grade-item {
  flex: 1;
  text-align: center;
  padding: 15px 0px;
  height: 80px;
  font-size: 14px;
  border-right: 1px solid rgb(230, 230, 230);
}
.grade-item:last-child {
  border: none;
}
.grade-num {
  margin-bottom: 3px;
}
.num {
  font-size: 22px;
  color: rgb(255, 102, 0);
  font-weight: bold;
}
.bb {
  border-bottom: 10px solid rgb(240, 240, 240);
}
</style>
