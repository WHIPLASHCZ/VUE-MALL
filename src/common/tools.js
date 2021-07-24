export function debounce(func, delay) {
  //节流阀 / 防抖函数
  let timer = null;
  return function() {
    /*每被调用一次 就清除上次的定时器开启一个新定时器 延时调用func函数。
      如果像goodslist那样不断的图片加载成功 不断的调用debounce 就不断的销毁和重新开启定时器
       直到delay时间之内没有被再次调用 就执行定时器里的函数。 这样可以有效的减少函数的调用次数 达到节流效果。
    */
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this);
    }, delay);
  };
}


export function formatDate(format)
{
 var o = {
 "M+" : this.getMonth()+1, //month
 "d+" : this.getDate(),    //day
 "h+" : this.getHours(),   //hour
 "m+" : this.getMinutes(), //minute
 "s+" : this.getSeconds(), //second
 "q+" : Math.floor((this.getMonth()+3)/3),  //quarter
 "S" : this.getMilliseconds() //millisecond
 }
 if(/(y+)/.test(format)) format=format.replace(RegExp.$1,
 (this.getFullYear()+"").substr(4 - RegExp.$1.length));
 for(var k in o)if(new RegExp("("+ k +")").test(format))
 format = format.replace(RegExp.$1,
 RegExp.$1.length==1 ? o[k] :
 ("00"+ o[k]).substr((""+ o[k]).length));
 return format;
}