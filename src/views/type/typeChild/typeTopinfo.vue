<template>
  <div class="typeTop">
    <ul class="typelist">
      <li v-for="i of topList" :key="i.id" class="top-item">
        <a :href="i.link">
          <img :src="i.image" alt="" />
          <p class="title">{{ i.title }}</p>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "typetop",
  props: {
    topList: {
      type: Array
    }
  }
};
</script>

<style scoped>
.typeTop {
  width: 100%;
}
.typelist {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
.typelist .top-item {
  width: 33.3%;
}
.top-item img {
  width: 100%;
}
.title {
  text-align: center;
  line-height: 50px;
  height: 50px;
  font-size: 14px;
  color: gray;
}
</style>
