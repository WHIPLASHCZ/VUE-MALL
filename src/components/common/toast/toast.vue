<template>
  <div class="toast" v-show="isshow" ref="toastBox">
    <div>{{ message }}</div>
  </div>
</template>
<script>
export default {
  name: "toast",
  data() {
    return {
      message: "",
      isshow: false,
      opacity: 1.5
    };
  },
  methods: {
    showToast(message, duration = 1500) {
      this.message = message;
      this.isshow = true;
      this.opacity = 1.5;
      let timer = setInterval(() => {
        this.opacity -= 0.01;
        this.$refs.toastBox.style.opacity = this.opacity;
        if (this.opacity <= 0) {
          clearInterval(timer);
        }
      }, 10);
      setTimeout(() => {
        this.isshow = false;
        clearInterval(timer);
      }, 1500);
    }
  }
};
</script>

<style scoped>
.toast {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999999;
  padding: 20px 30px;
  background-color: rgba(50, 50, 50, 0.5);
  color: white;
  font-size: 14px;
  border-radius: 30px;
  opacity: 1;
}
</style>
