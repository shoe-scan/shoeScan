/**
 * Created by user on 2018/2/24.
 * author chang.yan
 * 附近门店
 */
import axios from 'axios'
import qs from 'qs';
export default {
  getNearShop(basePath, params){//获取附近门店
    return this.reqUrl(`${basePath}app/scan/queryNearShop`, params);
  },
  reqUrl(url, params){
    return new Promise((resolve, reject) => {
      axios.post(url, qs.stringify(params)).then(function (res) {
        resolve(res.data);
      })
    })
  }
}
