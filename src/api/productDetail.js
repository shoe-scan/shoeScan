/**
 * Created by user on 2018/2/22.
 * author chang.yan
 * 请求接口
 */
import Vue from 'vue'
import VueResource from 'vue-resource';
import {Indicator} from 'mint-ui';
Vue.use(VueResource);
export default {
  getProductInfo(basePath, params){//商品资料和价格
    return this.reqUrl(`${basePath}app/shopping/queryItemForShopCar`, params);
  },
  getImgs(basePath, params){//获取轮播图和商品详情图片
    return this.reqUrl(`${basePath}app/shopping/queryItemPictureByItemNo`, params);
  },
  getSize(basePath, params){//获取尺码、库存等信息
    return this.reqUrl(`${basePath}app/scan/queryInventoryByItemNo`, params);
  },
  getRecommend(basePath, params){//获取你可能喜欢数据
    return this.reqUrl(`${basePath}app/scan/queryItemForRecommend`, params);
  },
  getFab(basePath, params){//特征与故事
    return this.reqUrl(`${basePath}app/fab/queryFAB`, params);
  },
  getComment(basePath, params){//评论
    return this.reqUrl(`${basePath}app/itemComment/queryItemComment`, params);
  },
  setNotice(basePath, params){//到货通知
    return this.reqUrl(`${basePath}app/arrivalNotice//reserveNotice`, params);
  },
  reqUrl(url, params){
    Indicator.open({
      spinnerType: 'fading-circle'
    });
    return new Promise((resolve, reject) => {
      Vue.http.post(url, params, {
        emulateJSON: true
      }).then(function (res) {
        resolve(res.data);
        Indicator.close();
      })
    })
  }
}
