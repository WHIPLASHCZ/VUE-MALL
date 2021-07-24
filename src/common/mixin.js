import backtop from "components/content/backtop/backtop.vue";
export const mixMounted={
    methods:{
        goBack(speed=500) {
            if(this.$refs.scroll){
                this.$refs.scroll.sTo(0, 0, speed);
            }else{
                this.$refs.typescroll.sTo(0, 0, speed);
            }
            
            if(this.currentPos!==undefined)
            this.currentPos = 0;
          }
    },
    components:{
        backtop
    },
    data(){
        return{
            currentPos: 0,
            innerHeight: 600,
        }
    }
}