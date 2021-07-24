<template>
  <navbar class="cart-bar">
    <div class="cart-mid" slot="mid">
      购物车 ({{ $store.state.shopcars.length }})
    </div>
  </navbar>
</template>

<script>
import navbar from "components/common/navbar/navbar.vue";
export default {
  name: "cartbar",
  components: {
    navbar
  }
};
</script>

<style scoped>
.cart-bar {
  position: relative;
  top: 0;
  background-color: var(--color-tint);
  color: white;
}
</style>
