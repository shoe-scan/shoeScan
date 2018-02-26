/**
 * Created by user on 2018/2/26.
 * author chang.yan
 * 你可能喜欢
 */
import Vue from 'vue';
import VueResource from 'vue-resource';
import {Indicator} from 'mint-ui';
Vue.use(VueResource);
export default {
  getProductList(basePath, params){//获取附近门店
    return this.reqUrl(`${basePath}app/scan/queryItemForRecommend`, params);
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

