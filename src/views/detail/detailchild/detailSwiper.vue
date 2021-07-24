<template>
  <swiper class="detail-swiper">
    <slideitem v-for="item of topImg" :key="item.id">
      <img :src="item" alt="" @load="detailSlideLoad" />
    </slideitem>
  </swiper>
</template>

<script>
import { swiper, slideitem } from "components/common/swiper";
export default {
  name: "detailswiper",
  props: {
    topImg: Array
  },
  components: {
    swiper,
    slideitem,
    isSend: false
  },
  methods: {
    detailSlideLoad() {
      if (!this.isSend) {
        this.$emit("slideLoad");
        this.isSend = true;
      }
    }
  }
};
</script>
<style scoped>
.detail-swiper {
  height: 300px;
}
</style>
