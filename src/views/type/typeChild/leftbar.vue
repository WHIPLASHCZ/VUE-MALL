<template>
  <div class="leftList">
    <p
      v-for="(i, index) of listItem"
      :key="i.id"
      @click="getmaitkey(index)"
      :ref="'item' + index"
      class="item"
      :class="{ active: currentIndex === index }"
    >
      {{ i.title }}
    </p>
  </div>
</template>

<script>
export default {
  name: "leftlist",
  props: {
    listItem: {
      type: Array
    }
  },
  data() {
    return {
      isInit: false,
      currentIndex: 0
    };
  },
  created() {
    console.log("created");
    this.isInit = true;
  },
  mounted() {},
  methods: {
    getmaitkey(index) {
      this.$emit("sendmaitkey", this.listItem[index].maitKey);
      this.$emit("sendminiWall", this.listItem[index].miniWallkey);
      this.currentIndex = index;
    },
    init(index) {
      return new Promise((r, e) => {
        this.getmaitkey(index);
        r();
      });
    }
  },
  watch: {
    listItem() {
      console.log("change");
      if (this.isInit) {
        this.init(0);
        this.isInit = false;
      }
    }
  }
};
</script>
<style scoped>
.leftList {
  width: 100px;
  float: left;
  background-color: rgb(231, 231, 231);
}
.item {
  display: flex;
  margin: 0;
  height: 6.2%;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
}
.active {
  background-color: white;
  border-left: 3px solid #ff8198;
  color: hotpink;
  font-weight: bold;
}
</style>
