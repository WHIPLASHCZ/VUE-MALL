import {request1} from './request.js';

export function getCategory(){
    return request1({
        url: '/category',
    })
}

export function getSubcategory(maitKey){
    // console.log(maitkey);
    return request1({
        url: '/subcategory',
        params: {
            maitKey
          }
    })
}

export function getCategoryDetail(miniWallkey, type) {
    return request1({
      url: '/subcategory/detail',
      params: {
        miniWallkey,
        type
      }
    })
  }