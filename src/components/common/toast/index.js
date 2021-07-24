const obj = {};
import toast from './toast.vue';
obj.install = function(Vue){
    //创建组件构造器
   const toastConstructor = Vue.extend(toast);
   //创建组件实例对象
   const toastObj = new toastConstructor();
   //将组件对象挂载到某个元素上
   let div = document.createElement('div');
   div.className = 'toastBox'
   toastObj.$mount(div);
   //toast.$el对应的就是上面挂载的元素。
   document.body.appendChild( toastObj.$el);
   //让VUE原型的$toast属性等于toast组件
   Vue.prototype.$toast =toastObj;
}

export default obj;