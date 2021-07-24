<template>
  <div class="typeDetail">
    <div
      class="type-stuffBox"
      v-for="(i, index) of typeShopList"
      :key="i.id"
      @click="goToDetail(index)"
    >
      <!-- <a :href="i.link"> -->
      <div class="imgbox">
        <img :src="i.img" alt="" @load="typeItemLoad" />
      </div>
      <div class="infobox">
        <div class="info-title">
          {{ i.title }}
          <div class="type-numbox">
            <span class="type-money"> ￥ {{ i.sale }} </span>
            <span class="type-like"> ☆ {{ i.cfav }} </span>
          </div>
        </div>
      </div>
      <!-- </a> -->
    </div>
  </div>
</template>

<script>
import debounce from "common/tools.js";
export default {
  name: "typeDetail",
  props: {
    typeShopList: {
      type: Array
    }
  },
  created() {},
  mounted() {
    console.log(this.typeShopList);
  },
  methods: {
    typeItemLoad() {
      let flag = this.$emit("typeImgLoad");
    },
    goToDetail(index) {
      console.log(this.typeShopList[index].iid);
      this.$router.push("detail/" + this.typeShopList[index].iid);
    }
  }
};
</script>

<style scoped>
.typeDetail {
  display: flex;
  flex-wrap: wrap;
  padding: 0 5px;
  justify-content: space-between;
}
.imgbox {
  width: 100%;
}
.imgbox img {
  width: 100%;
}
.type-stuffBox {
  width: 49%;
}
.infobox {
  padding-top: 5px;
}
.type-numbox {
  padding: 3px 0 15px 0;
  text-align: center;
}
.type-like {
  margin-right: 5px;
}
.type-money {
  color: hotpink;
}
.info-title {
  font-size: 14px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  color: grey;
  font-size: 13px;
}
</style>
