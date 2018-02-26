/**
 * Created by user on 2018/2/24.
 * author chang.yan
 * 附近门店
 */
import Vue from 'vue'
import VueResource from 'vue-resource';
Vue.use(VueResource);
export default {
  getNearShop(basePath, params){//获取附近门店
    return this.reqUrl(`${basePath}app/scan/queryNearShop`, params);
  },
  reqUrl(url, params){
    return new Promise((resolve, reject) => {
      Vue.http.post(url, params, {
        emulateJSON: true
      }).then(function (res) {
        resolve(res.data);
      })
    })
  }
}
