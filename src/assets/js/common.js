/**
 * Created by user on 2018/2/27.
 * author chang.yan
 * 公共方法
 */
import {Toast} from 'mint-ui';
export default {
  /**
   * 设置本地存储
   * @param k
   * @param v
   */
  setLocalStorage(k, v) {
    if (window.localStorage) {
      localStorage.setItem(k, JSON.stringify(v));
    }
  },
  /**
   * 获取本地存储数据
   * @param k
   */
  getLocalStorage(k) {
    var _v = "";
    if (window.localStorage) {
      _v = localStorage.getItem(k);
    }
    return JSON.parse(_v);
  },
  /*判断对象是否为空*/
  isEmptyObject(e) {
    var t;
    for (t in e)
      return !1;
    return !0
  },
  //保存加入购物车数据
  SetCarLocalStorage(skey, v, _sShopKey, shopName){
    var carKey = "shopCar";
    var _aMrr = {}, _shopObj = {}, _shopGroup = {};
    if (this.getLocalStorage(carKey)) {
      _aMrr = this.getLocalStorage(carKey);
      if (_aMrr[_sShopKey]) {
        //如果店铺相同
        if (_aMrr[_sShopKey].productList[skey]) {
          //若有相同键值数据  购买数量累加即可
          _aMrr[_sShopKey].productList[skey].qty = _aMrr[_sShopKey].productList[skey].qty + v.qty;
        } else {
          _aMrr[_sShopKey].productList[skey] = v;
        }

      } else {
        _shopGroup[skey] = v;
        _shopObj.shopName = shopName;
        _shopObj.productList = _shopGroup;
        _shopObj.totalQty = 0;
        _shopObj.totalPrice = 0;
        _shopObj.checkedList = [];
        _shopObj.btnDisabled = true;
        _shopObj.checkedAll = false;
        _aMrr[_sShopKey] = _shopObj;
      }
      //判断店铺时本店还是邻店
      if (_aMrr[_sShopKey].productList[skey].availableQty > 0 && _aMrr[_sShopKey].productList[skey].qty <= _aMrr[_sShopKey].productList[skey].availableQty) {
        _aMrr[_sShopKey].productList[skey].isNeib = 0;
      } else if (_aMrr[_sShopKey].productList[skey].neighbourQty > 0 && _aMrr[_sShopKey].productList[skey].qty <= _aMrr[_sShopKey].productList[skey].neighbourQty) {
        _aMrr[_sShopKey].productList[skey].isNeib = 1;
      }
      Toast("添加成功，到购物车查看");
      this.setLocalStorage(carKey, _aMrr);
    } else {
      _shopGroup[skey] = v;
      _shopObj.shopName = shopName;
      _shopObj.productList = _shopGroup;
      _shopObj.totalQty = 0;
      _shopObj.totalPrice = 0;
      _shopObj.checkedList = [];
      _shopObj.btnDisabled = true;
      _shopObj.checkedAll = false;
      _aMrr[_sShopKey] = _shopObj;
      _aMrr[_sShopKey] = _shopObj;
      //判断店铺时本店还是邻店
      if (_aMrr[_sShopKey].productList[skey].availableQty > 0 && _aMrr[_sShopKey].productList[skey].qty <= _aMrr[_sShopKey].productList[skey].availableQty) {
        _aMrr[_sShopKey].productList[skey].isNeib = 0;
      } else if (_aMrr[_sShopKey].productList[skey].neighbourQty > 0 && _aMrr[_sShopKey].productList[skey].qty <= _aMrr[_sShopKey].productList[skey].neighbourQty) {
        _aMrr[_sShopKey].productList[skey].isNeib = 1;
      }
      Toast("添加成功，到购物车查看");
      this.setLocalStorage(carKey, _aMrr);
    }
    return true;
  }
}
