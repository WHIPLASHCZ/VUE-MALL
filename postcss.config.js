<<<<<<< HEAD
module.exports = {
    plugins:{
    //    'autorefixer':{browsers: 'last 5 version'},
        "postcss-px-to-viewport":{
            viewportWidth:375,      //视窗宽高
            viewportHeight:667,
            unitPrecision:5,        //指定px转换为视窗单位制的小数位数
            viewportUnit:'vw',      //指定转换成的视窗单位
            // selectorBlackList:['ignore','item','nav','scroll','bar','cart-bot','allmoney'],   //不需要转换的类名
            // selectorBlackList:['scroll','detail-list','detail-mid'],
            minPixelValue:1,        //小于等于1px的不转换为视窗单位
            mediaQuery:false,        //允许在媒体查询中转换px
            // exclude:[/bar/,/nav/,/BotBar/],    //要忽略的文件 元素为正则
        }
    }
=======
module.exports = {
    plugins:{
    //    'autorefixer':{browsers: 'last 5 version'},
        "postcss-px-to-viewport":{
            viewportWidth:375,      //视窗宽高
            viewportHeight:667,
            unitPrecision:5,        //指定px转换为视窗单位制的小数位数
            viewportUnit:'vw',      //指定转换成的视窗单位
            // selectorBlackList:['ignore','item','nav','scroll','bar','cart-bot','allmoney'],   //不需要转换的类名
            // selectorBlackList:['scroll','detail-list','detail-mid'],
            minPixelValue:1,        //小于等于1px的不转换为视窗单位
            mediaQuery:false,        //允许在媒体查询中转换px
            // exclude:[/bar/,/nav/,/BotBar/],    //要忽略的文件 元素为正则
        }
    }
>>>>>>> 776b30e292440405959105feffe7b3a4ddc50034
}