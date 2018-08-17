<template>
  <router-view></router-view>
</template>
<script>
  import axios from 'axios'
  import qs from 'qs';
  import {Indicator} from 'mint-ui';
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
  sessionStorage.setItem('appConfig', JSON.stringify(GAppConfig));
  export default{
    data(){
      return {}
    },
    created(){
      if (this.$store.state.productDetail.openSelectShop) {
        Indicator.open({
          spinnerType: 'fading-circle'
        });
        let that = this;
        axios.post(GAppConfig.basePATH + "app/scan/getShopInfo", qs.stringify({
          brandNo: GAppConfig.brandNo,
          barcode: GAppConfig.barcode,
          longitude: 123.400506,
          latitude: 41.793524
        })).then(function (res) {
          var data = res.data ? res.data.data : {};
          if (data.shopList && data.shopList.length > 1) {
            that.moreShops = true;
            that.$store.state.productDetail.productInfoShopList = data.shopList;
            that.$store.state.productDetail.productInfo = data;
            that.$router.push({
              name: 'selectShop'
            })
          } else {
            that.moreShops = false;
            that.$store.state.productDetail.productInfoShopList = data.shopList;
            that.$store.state.productDetail.productInfo = data;
            that.$store.commit("shopName", data.shopList[0].shortName);
            that.$store.commit("shopNo", data.shopList[0].shopNo);
            that.$store.dispatch('getProductInfo').then(() => {
              that.$store.dispatch('getImgs');
              that.$store.dispatch('getFab');
              that.$store.dispatch('getComment');
            }).then(() => {
              that.$store.dispatch('getSize');
            }).then(() => {
              that.$store.dispatch('getRecommend');
            })
          }
          Indicator.close();
        })
      }
    },
    methods: {},
  }
</script>
