<template>
    <div class="rec">
        <div v-for="item in rec" :key='item.id' class="recItem">
            <a :href="item.link">
                 <img :src="item.image" alt="">
                 <div class="item-title">{{item.title}}</div>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name:'recommend',
    props:{
        rec:{
            type:Array,
            default(){
                return []
            }
        }
    }
}
</script>

<style scoped>  
    .rec{
        width: 100%;
        margin:  auto ;
        display: flex;
        justify-content: space-evenly;
        padding: 15px 0 25px;
        border-bottom: 10px solid rgb(218, 218, 218);
    }
    .recItem{
       flex: 1;
       text-align: center;
       
    }
    .recItem img{
        width: 80%;
    }
    .item-title{
        margin-top: 5px;
        font-size: 14px;
        color: gray;
    }
</style>