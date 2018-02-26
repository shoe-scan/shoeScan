import nearshop from '../../api/nearShop';
let AppConfig = JSON.parse(sessionStorage.getItem('appConfig'));
const state = {
  showNearShop: false,//是否显示占位图
  nearShopList: [],//附近门店列表
  basePath: AppConfig.basePATH,
};
const mutations = {
  nearShopList(state, nearShopList){
    state.nearShopList = nearShopList;
  },
  showNearShop(state){
    state.showNearShop = true;
  }
};
const getters = {
  nearShopList: state => state.nearShopList,
};
const actions = {
  getNearShop({commit, state}, params){
    state.showNearShop = false;
    nearshop.getNearShop(state.basePath, params).then(res => {
      commit("showNearShop");
      commit("nearShopList", res.data || [])
    })
  }
};
export default {
  state,
  getters,
  mutations,
  actions
};
