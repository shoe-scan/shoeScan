/**
 * Created by user on 2018/2/26.
 * author chang.yan
 * 你可能喜欢
 */
import axios from 'axios'
import qs from 'qs';
import {Indicator} from 'mint-ui';
export default {
  getProductList(basePath, params){//获取附近门店
    return this.reqUrl(`${basePath}app/scan/queryItemForRecommend`, params);
  },
  reqUrl(url, params){
    Indicator.open({
      spinnerType: 'fading-circle'
    });
    return new Promise((resolve, reject) => {
      axios.post(url, qs.stringify(params)).then(function (res) {
        resolve(res.data);
        Indicator.close();
      })
    })
  }
}

