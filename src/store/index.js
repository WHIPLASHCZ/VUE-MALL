import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    shopcars:[],
  },
  mutations: {  
      counter(state,oldstuff){
          oldstuff.count++;
      },
      addin(state,newstuff){
        state.shopcars.push(newstuff);
      },
      isChose(state,stuff){
         stuff.ischose = !stuff.ischose;
      }
  },
  actions: {
    addincar(context,stuff){
      //如果加入购物车的物品已经存在于购物车
        let isExist = context.state.shopcars.find(item=>item.iid===stuff.iid);
        //则该物品的数数量+1
        if(isExist){
          context.commit('counter',isExist);
          return '当前商品数量+1';
        } else{
          stuff.count=1;
          stuff.ischose=true;
          console.log(stuff);
          context.commit('addin',stuff);
          return '已添加到购物车';
        }
    },
    allchose(context){
      //查找是否有未选中的选项
      let flag = context.state.shopcars.find(item=>item.ischose==false);
      //如果有 则让所有未选中的选中
      if(flag!=undefined){
        for(let i of context.state.shopcars){
                i.ischose=true;
            }
      //如果没有 则让所有选中的变成未选中
      }else{
        for(let i of context.state.shopcars){
            i.ischose=!i.ischose;
        }
      }
    }
  },
  getters:{
    allmoney(state,getters){
      let num = 0;
      for (let i of state.shopcars) {
        if (i.ischose) num += i.price * i.count;
      }
      return num.toFixed(2);
    },
    allChoseCnt(state,getters){
     let obj={allchose:0,allitem:0}
      for (let i of state.shopcars) {
        if (i.ischose) {
          obj.allchose+=1;
          obj.allitem+=i.count;
        }
      }
      return obj;
    }
  },
  modules: {
  }
})
