<template>
  <div class="cart-list">
    <cartitem v-for="i of $store.state.shopcars" :key="i.id" :stuff="i" />
  </div>
</template>

<script>
import cartitem from "./cartitem.vue";
export default {
  name: "cart-list",
  data() {
    return {
      listlen: this.$store.state.shopcars.length
    };
  },
  components: {
    cartitem
  },
  updated() {
    this.listlen = this.$store.state.shopcars.length;
  },
  watch: {
    listlen() {
      console.log(this.listlen);
    }
  }
};
</script>

<style scoped></style>
