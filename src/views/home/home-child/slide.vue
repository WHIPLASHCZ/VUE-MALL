<template>
  <swiper>
    <slideitem v-for="item of banner" :key="item.id">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="slideLoad" />
      </a>
    </slideitem>
  </swiper>
</template>

<script>
import { swiper, slideitem } from "components/common/swiper";
export default {
  name: "homeslide",
  loadDone: false,
  props: {
    banner: {
      type: Array
    }
  },
  components: {
    swiper,
    slideitem
  },
  methods: {
    slideLoad() {
      if (!this.loadDone) {
        this.$emit("slideLoaded");
        this.loadDone = true;
      }
    }
  }
};
</script>
