<template>
  <router-view></router-view>
</template>
<script>
  import axios from 'axios'
  import qs from 'qs';
  import {Indicator, MessageBox} from 'mint-ui';
  let basePATH = window.location.protocol + "//" + window.location.host + '/mmp' + "/",
    version = '2.0.4.1',// 参考版本信息
    domainStatic = '//retailr1.bellecdn.com/mmp', // 静态资源路径
    sensorsProject = 'BOS',//神策项目（开发、测试为test1,生产为BOS）
    compressed = '', // 压缩
    // 生产环境数据
    GAppConfig = {
      brandNo: 'BL01',//品牌编码
      barcode: 'BBLBLAC2DD1BL8235', //条码
      UUID: 'tyNRIWEKfmdYbcq2', //唯一标识
      basePATH: basePATH,
      domainStatic: domainStatic,
      version: version,
      isYougouItem: 'false',
      price: '859',
      colorName: '米色',
      itemNo: '6170012',
      code: 'BBLBLAC2DD1BL8',
      name: '珠光绵羊皮革女皮凉鞋'
    }
  // 开发环境数据
  /* GAppConfig = {
   brandNo: 'BS01',//品牌编码
   barcode: 'CS00361230-009235', //条码
   UUID: '82hhsdf82', //唯一标识
   basePATH: basePATH,
   domainStatic: domainStatic,
   version: version,
   isYougouItem: 'false',
   price: '968',
   colorName: '透明',
   itemNo: '20141206193197',
   code: 'CS00361230-009',
   name: '黄色羊皮'
   };*/
  //优购商品
  /*GAppConfig = {
   brandNo: 'TT01',//品牌编码
   barcode: 'AMW20163DH1CM7245', //条码
   UUID: 'HDHUUA1324', //唯一标识
   basePATH: basePATH,
   domainStatic: domainStatic,
   version: version,
   isYougouItem: '',
   price: '',
   colorName: '',
   itemNo: '',
   code: '',
   name: ''
   };*/
  sessionStorage.setItem('appConfig', JSON.stringify(GAppConfig));
  export default{
    data(){
      return {}
    },
    created(){
      if (GAppConfig.code != '' && GAppConfig.itemNo != '') {
        if (this.$store.state.productDetail.openSelectShop) {
          Indicator.open({
            spinnerType: 'fading-circle'
          });
          axios.post(GAppConfig.basePATH + "app/scan/getShopInfo", qs.stringify({
            brandNo: GAppConfig.brandNo,
            barcode: GAppConfig.barcode,
            longitude: 123.400506,
            latitude: 41.793524
          })).then((res)=>{
            /*let res = {
              data: {
                "errorCode": 0,
                "errorMessage": "",
                "data": {
                  "shardingFlag": "U010101_C",
                  "styleNo": "BLAC2",
                  "itemNo": "6170012",
                  "organTypeNo": "U010101",
                  "shopList": [{
                    "id": 379540,
                    "shopNo": "CA60BL",
                    "code": "CA60BL",
                    "storeNo": "CA60BL",
                    "storeAddress": null,
                    "storeOrganNo": null,
                    "storeParentNo": null,
                    "storeShortName": null,
                    "storeFullName": null,
                    "companyNo": "C0001",
                    "companyName": null,
                    "searchCode": "",
                    "shortName": "沈阳兴隆一百BL",
                    "fullName": "沈阳兴隆一百BL",
                    "organNo": "B0538",
                    "bizCityNo": "B0538",
                    "sysNo": "",
                    "openDate": 1417795200000,
                    "closeDate": null,
                    "status": 1,
                    "area": 96.52,
                    "areaLeft": 52.20,
                    "areaTotal": 125.54,
                    "areaUnit": "m²",
                    "provinceNo": "21",
                    "cityNo": "2101",
                    "countyNo": "210102",
                    "address": "太原北街80号兴隆一百二楼百丽专柜",
                    "zipCode": "",
                    "contactName": "",
                    "tel": "18102482177",
                    "fax": "",
                    "email": "",
                    "channelNo": "030403",
                    "location": "20140922000015",
                    "employeAmount": 4,
                    "payType": "U030301",
                    "digits": "0",
                    "startupTime": "",
                    "shutdownTime": "",
                    "shopLevel": "U030102",
                    "major": "~",
                    "multi": "050101",
                    "saleMode": "05",
                    "retailType": "0501",
                    "mallNo": "20150107000001",
                    "regionNo": "20180130000005",
                    "cmcdistNo": "20141202000600",
                    "categoryCode": null,
                    "shopClassify": "1",
                    "priceAdjustLevel": "U030209",
                    "onLineFlag": 0,
                    "createUser": "张健",
                    "createTime": 1442823003000,
                    "updateUser": "曾兰",
                    "updateTime": 1530850035000,
                    "remark": "",
                    "timeSeq": 401303237456035840,
                    "shopModeNo": "U110101",
                    "organTypeNo": "U010101",
                    "corporationNo": "20150107000001",
                    "mapFlag": 0,
                    "shopLatitude": "41.798252",
                    "shopLongitude": "123.407036",
                    "distance": 120.8280778085895,
                    "businessOrganNo": null,
                    "businessOrganName": null,
                    "managerOrganNo": null,
                    "managerOrganName": null,
                    "zoneNo": null,
                    "zoneName": null,
                    "shardingFlag": null,
                    "companyShardingFlag": null
                  }],
                  "zoneNo": "C",
                  "code": "BBLBLAC2DD1BL8"
                }
              }
            }*/
            if (res.data.errorCode != 0) {
              Indicator.close();
              MessageBox('提示', res.data.errorMessage);
              return;
            }
            var data = res.data ? res.data.data : {};
            if (data.shopList && data.shopList.length > 1) {
              this.moreShops = true;
              this.$store.state.productDetail.productInfoShopList = data.shopList;
              this.$store.state.productDetail.productInfo = data;
              this.$router.push({
                name: 'selectShop'
              })
            } else {
              this.moreShops = false;
              this.$store.state.productDetail.productInfoShopList = data.shopList;
              this.$store.state.productDetail.productInfo = data;
              this.$store.commit("shopName", data.shopList[0].shortName);
              this.$store.commit("shopNo", data.shopList[0].shopNo);
              this.$store.dispatch('getProductInfo').then(() => {
                this.$store.dispatch('getImgs');
                this.$store.dispatch('getFab');
                this.$store.commit('commentPageNoAdd', 1)
                this.$store.commit('showLoaded', false);
                this.$store.dispatch('getComment')
              }).then(() => {
                this.$store.dispatch('getSize');
              }).then(() => {
                this.$store.dispatch('getRecommend');
              })
            }
            Indicator.close();
          })
        }
      } else {
        //优购商品
        this.$store.commit("isYG", true)
      }
    },
    methods: {},
  }
</script>
