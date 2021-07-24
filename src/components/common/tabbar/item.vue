<template>
    <div class="item" @click="itemClick">
    <slot name="grey" v-if="!isActive"></slot>
    <slot name="active" v-else></slot>
    <div :style="FontColor">
         <slot name="title"></slot>
    </div>
   
    </div>
</template>

<script>
export default {
    name:"item",
    //   data(){
    //     return{
    //         isActive:false
    //     }
    // } ,
    props:['link'],
    methods:{
        itemClick(){
            if(this.link===this.$route.path) return;
            this.isActive=!this.isActive;
            console.log(this.$route);
            this.$router.push(this.link);
        }
    },
    computed:{
        isActive:{
            get(){
                //不为-1就是true 说明当前路径中存在当前item的link属性
                return this.$route.path.indexOf(this.link)!==-1;
            },
            set(){

            }
        },
        FontColor:{
            get(){
                return this.isActive?{color:'red'}:{}
            },
            set(){

            }
        }
    }
}
</script>

<style>
    .item{
        flex: 1;
        text-align: center;
        font-size: 14px;
        margin-top: 2px;
    }
    .item img{
        width: 22px;
    }
</style>