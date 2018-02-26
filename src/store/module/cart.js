const TYPES = {
  SET_SHOP_CAR_DATA:'SET_SHOP_CAR_DATA'  // 设置购物车数据
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
    console.log(_data);
    if(_data){
      commit(TYPES.SET_SHOP_CAR_DATA, _data);
    }
  }
};

const mutations = {
  [TYPES.SET_SHOP_CAR_DATA](state, data){
    state.shopCar = data;
  }
};

export default {
  state,
  actions,
  getters,
  mutations
}
