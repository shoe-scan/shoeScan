const TYPES = {
  SET_SHOP_CAR_DATA: 'SET_SHOP_CAR_DATA',  // 设置购物车数据
  SET_CHECKED_ALL: 'SET_CHECKED_ALL',  // 设置全选、反选
  SET_FOOTER_DATA: 'SET_FOOTER_DATA',  // 设置选择商品后底部栏数据
};

const state = {
  shopCar: {}
};

const getters = {
  shopCarList: state => state.shopCar
};

const actions = {
  // 获取购物车列表
  getShopCarByLocal({commit}){
    let _data = JSON.parse(localStorage.getItem('shopCar'));
    // 设置购物车数据
    commit(TYPES.SET_SHOP_CAR_DATA, _data);
  },

  // 删除商品 多个值传参使用数组形式
  delProduct({commit}, [shopKey, productKey]){
    let _shopCar = JSON.parse(JSON.stringify(state.shopCar)),
    _shopData = _shopCar[shopKey];
    delete _shopData['productList'][productKey];
    // 校验当前门店商品是否全部删除
    if (Object.keys(_shopData['productList']).length == 0) {
      delete _shopCar[shopKey];
    }
    // 校验店铺下所有商品数据是否删除
    if (Object.keys(_shopCar).length == 0) {
      _shopCar = null;
    }
    // 底部数据重置
    if(_shopCar && _shopData){
      // 重置数据
      _shopData['totalQty'] = 0;
      _shopData['totalPrice'] = 0;
      _shopData['checkedList'] = [];
      _shopData['btnDisabled'] = true;
      _shopData['checkedAll'] = false;
    }
    // 更新本地存储
    localStorage.setItem('shopCar', JSON.stringify(_shopCar));
    // 更新购物车数据
    commit(TYPES.SET_SHOP_CAR_DATA, _shopCar);
  },

  // 全选、反选
  checkedAll({commit}, shopKey){
    let _shopData = JSON.parse(JSON.stringify(state.shopCar[shopKey]));
    // 反选
    _shopData['checkedList'] = [];
    _shopData.btnDisabled = true;
    _shopData.totalQty = 0;
    _shopData.totalPrice = 0;
    // 全选
    if (event.currentTarget.checked) {
      for (let i in _shopData['productList']) {
        let _product = _shopData['productList'][i];
        _shopData['checkedList'].push(i);
        _shopData.totalQty += _product.qty;
        _shopData.totalPrice += _product.qty * _product.tagPrice;
      }
      _shopData.btnDisabled = false;
    }
    commit(TYPES.SET_CHECKED_ALL, [shopKey, _shopData]);
  },

  // 选择商品
  checkedItem({commit}, [shopKey, productKey, checked]){
    let _shopData = JSON.parse(JSON.stringify(state.shopCar[shopKey])),
      _product = _shopData.productList[productKey];

    // 处理总数、总价加减
    if (checked) {
      _shopData.totalQty += _product.qty;
      _shopData.totalPrice += _product.tagPrice * _product.qty;
    } else {
      _shopData.totalQty -= _product.qty;
      _shopData.totalPrice -= _product.tagPrice * _product.qty;
    }
    // 处理按钮禁用状态
    _shopData.btnDisabled = true;
    if (_shopData.totalQty != 0) {
      _shopData.btnDisabled = false;
    }
    // 处理全选状态
    _shopData.checkedAll = false;
    if (_shopData.checkedList.length == Object.keys(_shopData.productList).length) {
      _shopData.checkedAll = true;
    }

    commit(TYPES.SET_FOOTER_DATA, [shopKey, _shopData])
  }
};

const mutations = {
  // 设置购物车数据
  [TYPES.SET_SHOP_CAR_DATA](state, data){
    state.shopCar = data;
  },

  // 设置全选、反选数据
  [TYPES.SET_CHECKED_ALL](state, [shopKey, shopCar]){
    state.shopCar[shopKey].checkedList = shopCar.checkedList; // 复选框
    state.shopCar[shopKey].btnDisabled = shopCar.btnDisabled; // 立即购买按钮禁用状态
    state.shopCar[shopKey].totalQty = shopCar.totalQty; // 商品总数
    state.shopCar[shopKey].totalPrice = shopCar.totalPrice; // 商品总价
  },

  // 设置选择商品后底部栏数据
  [TYPES.SET_FOOTER_DATA](state, [shopKey, shopCar]){
    state.shopCar[shopKey].btnDisabled = shopCar.btnDisabled; // 复选框
    state.shopCar[shopKey].checkedAll = shopCar.checkedAll; // 复选框
    state.shopCar[shopKey].totalQty = shopCar.totalQty; // 商品总数
    state.shopCar[shopKey].totalPrice = shopCar.totalPrice; // 商品总价
  }
};

export default {
  state,
  actions,
  getters,
  mutations
}
