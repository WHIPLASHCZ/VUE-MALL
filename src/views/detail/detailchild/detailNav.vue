<template>
  <navbar>
    <div slot="left" @click="goBack">
      <img src="~assets/img/common/back.svg" alt="" class="arrow" />
    </div>
    <div slot="mid" class="detail-mid">
      <ul class="detail-list">
        <li
          v-for="(i, index) of titles"
          :key="i.id"
          :class="{ active: currentIndex === index }"
          @click="detailItemClick(index)"
        >
          <a href="javascript:;">{{ i }}</a>
        </li>
      </ul>
    </div>
    <div slot="right">右</div>
  </navbar>
</template>

<script>
import navbar from "components/common/navbar/navbar.vue";
export default {
  name: "detailnav",
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0
    };
  },
  components: {
    navbar
  },
  methods: {
    detailItemClick(index) {
      this.currentIndex = index;
      this.$emit("navClick", index);
    },
    goBack() {
      this.$router.back();
    }
  }
};
</script>

<style scoped>
.detail-mid {
  height: 44px;
}
.detail-list {
  display: flex;
  height: 100%;
}
.detail-list li {
  flex: 1;
  font-size: 14px;
  line-height: 44px;
  text-align: center;
  height: 100%;
}
.detail-list li a {
  color: gray;
}
.detail-list .active a {
  color: hotpink;
}
.arrow {
  vertical-align: bottom;
}
</style>
