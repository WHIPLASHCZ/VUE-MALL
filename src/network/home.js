import {request1} from './request';

export function getHomeData(){
    return request1({
        url: '/home/multidata',
    })
}

export function getHomeGoods(type,page){
    return request1({
        url: '/home/data',
        params:{
            type,
            page
        }
    })
}