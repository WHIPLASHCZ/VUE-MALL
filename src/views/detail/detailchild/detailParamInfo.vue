<template>
  <div class="param-info">
    <table
      v-for="(table, index) in params.sizes"
      :key="index"
      class="info-size"
    >
      <tr v-for="(tr, indez) in table" :key="indez">
        <td v-for="(td, indey) in tr" :key="indey">{{ td }}</td>
      </tr>
    </table>

    <table class="info-param">
      <tr v-for="(info, index) in params.infos" :key="index">
        <td class="param-key">{{ info.key }}</td>
        <td class="param-val">{{ info.value }}</td>
      </tr>
    </table>

    <div class="info-img" v-if="params.image && params.image.length != 0">
      <img :src="params.image" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "paraminfo",
  props: {
    params: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>

<style scoped>
.param-info {
  padding: 10px 10px;
  width: 100%;
}
table {
  width: 100%;
  font-size: 14px;
  color: rgb(80, 80, 80);
}
.param-info tr {
  display: block;
  /* height: 36px; */
  /* line-height: 36px; */
  padding: 10px 4px;
  border-top: 1px solid rgb(224, 224, 224);
  width: 100%;
}

/* 尺寸 */
.info-size tr {
  display: flex;
  align-items: center;
}
.info-size td {
  flex: 1;
  padding-right: 1px;
}

/* 信息 */
.info-param tr {
  display: flex;
  align-items: center;
}

.info-param td {
  flex: 1;
  /* text-align: center; */
}
.param-val {
  color: rgb(240, 78, 159);
}
</style>
