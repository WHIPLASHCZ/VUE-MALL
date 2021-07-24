<template>
  <div
    class="sliderbox"
    @mouseover="stopTimer"
    @touchstart="touchStart"
    @touchmove="touchMove"
    @touchend="touchEnd"
  >
    <div class="warpbox">
      <div class="img-box" ref="imgBox">
        <slot></slot>
      </div>
    </div>
    <!-- <div class="dot"></div> -->
    <div class="dots" v-show="itemNumber > 1">
      <slot name="dot">
        <!-- <div v-for="(i,index) in (itemNumber-1)<0?0:(itemNumber-1)" class="dot" :class='{active:currentIndex===(index%4)}' :key="i">{{index}}</div> -->
        <div
          v-for="(i, index) in itemNumber"
          class="dot"
          :class="{ active: isAcitve(index) }"
          :key="i"
        ></div>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "swiper",
  data() {
    return {
      itemNumber: 0, //轮播图个数
      realNumber: 0,
      currentIndex: 0, // 当前的index
      imgWidth: 0,
      Scrolling: false,
      startPos: 0,
      distance: 0,
      imgbox: null,
      styles: {},
      speed: 3000
    };
  },
  mounted() {
    setTimeout(() => {
      this.domHandler();
      this.startTimer();
    }, 100);
  },
  created() {
    window.onresize = () => {
      this.imgWidth = window.innerWidth;
      this.rightPosition();
    };
  },
  methods: {
    domHandler() {
      this.imgbox = this.$refs.imgBox;
      let slides = this.imgbox.childNodes;
      let firstNode = slides[0] && slides[0].cloneNode(true);
      this.imgWidth = slides[0] && slides[0].offsetWidth;
      this.itemNumber = this.imgbox.childNodes.length;
      this.imgbox.appendChild(firstNode);
      this.realNumber = this.imgbox.childNodes.length;
      this.styles = this.imgbox.style;
      //  this.styles.marginTop='111px'
    },
    startTimer() {
      clearInterval(this.playTimer);
      // let imgbox = document.querySelector('.img-box');
      this.playTimer = window.setInterval(() => {
        this.scrollAnimate();
      }, this.speed);
    },
    stopTimer() {
      window.clearInterval(this.playTimer);
    },
    scrollAnimate() {
      this.next();
    },
    next() {
      if (this.itemNumber <= 1) return;
      this.currentIndex = (this.currentIndex + 1) % this.realNumber;
      this.Scrolling = true;
      this.styles.transition = "all 0.3s ease";
      if (this.currentIndex == this.itemNumber) {
        new Promise((r, e) => {
          this.styles.transform = `translate3d(${-this.currentIndex *
            this.imgWidth}px,0,0)`;
          this.imgbox.addEventListener("transitionend", r);
        }).then(() => {
          this.styles.transition = "none";
          this.styles.transform = `translate3d(${0}px,0,0)`;
          this.currentIndex = 0;
        });
      } else {
        this.styles.transform = `translate3d(${-this.currentIndex *
          this.imgWidth}px,0,0)`;
      }
      this.styles.ontransitionend = () => {
        this.Scrolling = false;
      };
    },
    prev() {
      this.Scrolling = false;
      this.currentIndex = this.currentIndex - 1 < 0 ? 0 : this.currentIndex - 1;
      this.styles.transition = "all 0.3s ease";
      this.styles.transform = `translate3d(${-this.currentIndex *
        this.imgWidth}px,0,0)`;
      this.styles.ontransitionend = () => {
        this.Scrolling = true;
      };
    },
    rightPosition() {
      this.styles.transition = "all 0.3s ease";
      this.styles.transform = `translate3d(${-this.currentIndex *
        this.imgWidth}px,0,0)`;
    },
    isAcitve(index) {
      if (index == this.currentIndex % this.itemNumber) {
        return true;
      }
    },
    touchStart(e) {
      //   e.preventDefault();
      this.styles.transition = "none";
      if (this.isScrolling) return;
      this.stopTimer();
      this.startPos = e.touches[0].pageX;
    },
    touchMove(e) {
      // e.preventDefault();
      if (this.isScrolling) return;
      this.currentPos = e.touches[0].pageX;
      this.distance = this.currentPos - this.startPos;
      let moveDistance = -this.currentIndex * this.imgWidth + this.distance;
      this.styles.transform = `translate3d(${moveDistance}px,0,0)`;
    },
    touchEnd(e) {
      // e.preventDefault();
      if (Math.abs(this.distance) >= this.imgWidth / 4) {
        if (this.distance < 0) {
          if (this.currentIndex >= this.itemNumber - 1) {
            this.rightPosition();
          } else {
            this.next();
          }
        } else {
          if (this.currentIndex == 0) {
            this.rightPosition();
          } else {
            this.prev();
          }
        }
      } else {
        this.rightPosition();
      }
      this.startTimer();
    }
  }
};
</script>
<style scoped>
.sliderbox {
  width: 100%;
  overflow: hidden;
  position: relative;
}
.img-box {
  width: 100%;
  display: flex;
  position: relative;
  left: 0px;
  /* transition: all 0.5s ease; */
  /* transform: translate(); */
}

.dots {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
}
.wrapBox {
  transform: translateZ(0);
  padding-top: 10px;
}
.dot {
  width: 10px;
  height: 10px;
  background-color: rgb(187, 158, 158);
  border-radius: 5px;
  margin: 0 6px;
}

.dots .active {
  background-color: rgb(255, 59, 59);
}
</style>
