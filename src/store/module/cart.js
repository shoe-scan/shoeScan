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
  getShopCarByLocal({ commit }){
    let _data = JSON.parse(localStorage.getItem('shopCar'));
    if (_data) {
      // 设置购物车数据
      commit(TYPES.SET_SHOP_CAR_DATA, _data);
    }
  },

  // 删除商品 多个值传参使用数组形式
  delProduct({ commit }, [shopKey, productKey]){
    let _shopCar = JSON.parse(JSON.stringify(state.shopCar));
    delete _shopCar[shopKey]['productList'][productKey];
    // 校验当前门店商品是否全部删除
    if (Object.keys(_shopCar[shopKey]['productList']).length == 0) {
      delete _shopCar[shopKey];
    }
    localStorage.setItem('shopCar', JSON.stringify(_shopCar));
    // 更新购物车数据
    commit(TYPES.SET_SHOP_CAR_DATA, _shopCar);
  },

  // 全选、反选
  checkedAll({ commit }, shopKey){
    let _shopCar = JSON.parse(JSON.stringify(state.shopCar[shopKey]));
    // 反选
    _shopCar['checkedList'] = [];
    _shopCar.btnDisabled = true;
    _shopCar.totalQty = 0;
    _shopCar.totalPrice = 0;
    // 全选
    if (event.currentTarget.checked) {
      for (let i in _shopCar['productList']) {
        let _product = _shopCar['productList'][i];
        _shopCar['checkedList'].push(i);
        _shopCar.totalQty += _product.qty;
        _shopCar.totalPrice += _product.qty * _product.tagPrice;
      }
      _shopCar.btnDisabled = false;
    }
    commit(TYPES.SET_CHECKED_ALL, [shopKey, _shopCar]);
  },

  // 选择商品
  checkedItem({ commit }, [shopKey, productKey, checked]){
    let _shopCar = JSON.parse(JSON.stringify(state.shopCar[shopKey])),
      _product = _shopCar.productList[productKey];

    // 选中 总数、总价累加
    if (checked) {
      _shopCar.totalQty += _product.qty;
      _shopCar.totalPrice += _product.tagPrice;
    } else {
      _shopCar.totalQty -= _product.qty;
      _shopCar.totalPrice -= _product.tagPrice;
    }
    // 处理按钮禁用状态
    _shopCar.btnDisabled = true;
    if (_shopCar.totalQty != 0) {
      _shopCar.btnDisabled = false;
    }
    // 处理全选状态
    _shopCar.checkedAll = false;
    if (_shopCar.checkedList.length == Object.keys(_shopCar.productList).length) {
      _shopCar.checkedAll = true;
    }

    commit(TYPES.SET_FOOTER_DATA, [shopKey, _shopCar])
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
