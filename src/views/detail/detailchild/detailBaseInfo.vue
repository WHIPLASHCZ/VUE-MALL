<template>
  <div class="detail-info" v-if="Object.keys(info).length !== 0">
    <div class="info-title">{{ info.title }}</div>

    <!-- 价格 -->
    <div class="info-price">
      <span class="n-price">{{ info.newPrice }}</span>
      <span class="o-price">{{ info.oldPrice }}</span>
      <span v-if="info.discount" class="discount">{{ info.discount }}</span>
    </div>

    <!-- 快递等信息 -->
    <div class="info-other">
      <span>{{ info.columns && info.columns[0] }} </span>
      <span> {{ info.columns && info.columns[1] }} </span>
      <span>
        {{ info.columns && info.services[info.services.length - 1].name }}
      </span>
    </div>

    <!-- 服务 -->
    <div class="info-service">
      <span
        class="serve-item"
        v-for="index in info.services && info.services.length - 1"
        :key="index"
      >
        <!-- v-for遍历数字的话是从1开始的，所以要index-1获取到正确下标 -->
        <img :src="info.services[index - 1].icon" alt="" />
        <span>{{ info.services[index - 1].name }}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "detailinfo",
  props: {
    info: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  created() {},
  mounted() {}
};
</script>

<style scoped>
.detail-info {
  /* margin: 15px 10px; */
  /* text-align: center; */
}
.info-title {
  font-size: 17px;
  font-weight: 500;
}
.info-price {
  /* margin-top: 15px; */
  height: 55px;
  line-height: 55px;
}
.n-price {
  font-size: 26px;
  color: hotpink;
  margin-right: 5px;
}
.o-price {
  font-size: 13px;
  color: gray;
  text-decoration: line-through;
}
.discount {
  position: relative;
  bottom: 8px;
  left: 5px;
  /* display: inline-block; */
  background-color: hotpink;
  color: white;
  font-size: 14px;
  padding: 4px;
  border-radius: 10px;
}

/* 其他信息 */
.info-other {
  display: flex;
  color: grey;
  font-size: 14px;
  justify-content: space-between;
  height: 30px;
  line-height: 20px;
  border-bottom: 1px solid #adadad;
}

/* 服务信息 */
.info-service {
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  height: 35px;
  line-height: 35px;
  color: #838383;
}
.info-service img {
  height: 12px;
  vertical-align: middle;
}
</style>
