<template>
  <div class="userinfo">
    <div class="pl17">
      <div class="login">
        <div class="headbox">
          <img src="~assets/img/profile/head.png" alt="" class="head" />
        </div>
        <div class="login-words">
          <div class="logOrReg">
            登陆/注册
          </div>
          <div class="phone">暂无绑带手机号</div>
        </div>
        <div class="right">
          <img src="~assets/img/common/back.svg" alt="" class="arrow" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "userinfo"
};
</script>

<style scoped>
.headbox {
  width: 60px;
  height: 60px;
  background-color: #fff;
  border-radius: 30px;
}
.headbox img {
  width: 100%;
}
.arrow {
  width: 18px;
  transform: rotate(180deg);
}
.userinfo {
  height: 90px;
  background-color: var(--color-tint);
}
.headbox {
  margin-right: 10px;
}
.login {
  display: flex;
  height: 68px;
  position: relative;
}
.logOrReg,
.phone {
  width: 100%;
  height: 18px;
}
.phone {
  font-size: 14px;
  margin-top: 5px;
}
.login-words {
  color: white;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  /* line-height: 68px; */
}
.right {
  /* float: right; */
  position: absolute;
  right: 0;
  align-self: center;
  /* height: 100%; */
  color: white;
  font-size: 22px;
  font-weight: bold;
}
.userinfo .pl17 {
  /* display: flex; */
}
</style>
