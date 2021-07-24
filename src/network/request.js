import axios from 'axios';

//单独创建一个网络请求的js文件 易于维护 这样就不需要在每个组件内都引入axios了。

export function request1 (url){
    const aObj=axios.create({
        baseURL:'http://152.136.185.210:7878/api/m5',
        timeout:5000
    });
    //axios对象本身就是一个promise 把发送请求的axios返回回去 让调用request者调用then和catch接收响应数据。
    return aObj(url)
}

