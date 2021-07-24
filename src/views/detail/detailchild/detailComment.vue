<template>
  <div class="comment" v-if="Object.keys(comment).length !== 0">
    <div class="info-header">
      <div class="header-title">用户评价</div>
      <div class="header-more" @click="showMoreComment">
        更多
      </div>
      <i class="arrow-right"></i>
    </div>

    <div class="info-user">
      <img :src="comment.user.avatar" alt="" class="userHead" />
      <span> {{ comment.user.uname }} </span>
    </div>

    <div class="info-detail">
      <p class="content">{{ comment.content }}</p>
      <div class="info-other">
        <span class="date">
          {{ comment.created | showDate }}
        </span>
        <span>{{ comment.style }}</span>
      </div>
      <div class="info-imgs">
        <img
          :src="item"
          v-for="(item, index) in comment.images"
          :key="index"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
import { formatDate } from "common/tools.js";
export default {
  name: "detailcomment",
  props: {
    comment: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  mounted() {},
  computed: {
    setDate() {}
  },
  filters: {
    showDate(val) {
      Date.prototype.formatDate = formatDate;
      let date = new Date(val * 1000);
      return date.formatDate("yyyy-MM-dd hh:mm");
    }
  },
  methods: {
    showMoreComment() {
      console.log("more");
    }
  }
};
</script>

<style scoped>
.comment {
  margin-top: 20px;
  padding: 10px 15px 60px;
  /* height: 350px; */
  border-top: 8px solid rgb(218, 218, 218);
}

.info-header {
  width: 100%;
  height: 50px;
  border-bottom: 1px solid rgb(218, 218, 218);
  display: flex;
  line-height: 50px;
  font-size: 14px;
}
.header-title {
  width: 88%;
}
.header-more {
  flex: 1;
}

/* 用户名和头像 */
.info-user {
  height: 70px;
  line-height: 70px;
  font-size: 15px;
}
.userHead {
  width: 45px;
  border-radius: 25px;
  vertical-align: middle;
  margin-bottom: 5px;
  margin-right: 10px;
}

/* 评论 */
.info-detail {
  font-size: 14px;
}
.content {
  line-height: 21px;
  color: rgb(80, 80, 80);
}
.info-other {
  height: 45px;
  padding-top: 12px;
  line-height: 18px;
  font-size: 13px;
  color: grey;
}
.date {
  margin-right: 15px;
}
.info-imgs img {
  width: 70px;
  margin-right: 5px;
}
</style>
