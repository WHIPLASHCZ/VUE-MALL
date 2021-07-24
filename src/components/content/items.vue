<template>
    <div>
            <Bar>
                <item link='/home'>
                    <img src="~assets/img/tabbar/home.svg" alt="" slot="grey">
                    <img src="~assets/img/tabbar/home_active.svg" alt="" slot="active">
                    <div slot="title">首页</div>
                </item>

                <item link='/cart'>
                    <img src="~assets/img/tabbar/cart.svg" alt="" slot="grey">
                    <img src="~assets/img/tabbar/cart_active.svg" alt="" slot="active">
                    <div slot="title">购物车</div>
                </item>

                <item link='/type'>
                    <img src="~assets/img/tabbar/category.svg" alt="" slot="grey">
                    <img src="~assets/img/tabbar/category_active.svg" alt="" slot="active">
                    <div slot="title">分类</div>
                </item>

                <item link='/mine'>
                    <img src="~assets/img/tabbar/profile.svg" alt="" slot="grey">
                    <img src="~assets/img/tabbar/profile_active.svg" alt="" slot="active">
                    <div slot="title">我的</div>
                </item>
            </Bar>
    </div>
</template>

<script>
import Bar from '../common/tabbar/bar.vue';
import item from '../common/tabbar/item.vue';
export default {
  name: 'items',
  components:{
    Bar,
    item
  }
}
</script>

<style>
/* @import url('./assets/css/base.css'); */
</style>
