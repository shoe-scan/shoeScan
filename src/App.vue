<template>
  <router-view></router-view>
</template>
<script>
  import {Indicator} from 'mint-ui';
  let basePATH = window.location.protocol + "//" + window.location.host + '/mmp' + "/",
    version = '2.0.4.1',// 参考版本信息
    domainStatic = '//retailr1.bellecdn.com/mmp', // 静态资源路径
    sensorsProject = 'BOS',//神策项目（开发、测试为test1,生产为BOS）
    compressed = '', // 压缩
    GAppConfig = {
      brandNo: 'TT01',//品牌编码
      barcode: 'AA3T3537DU1CM7240', //条码
      UUID: '027c9291b123447a', //唯一标识
      basePATH: basePATH,
      domainStatic: domainStatic,
      version: version,
      isYougouItem: 'false',
      price: '999',
      colorName: '黑色',
      itemNo: '20170606000001',
      code: 'AA3T3537DU1CM7',
      name: '滴胶/纺织物/牛皮革男休闲鞋'
    };
  sessionStorage.setItem('appConfig', JSON.stringify(GAppConfig));
  export default{
    data(){
      return {
      }
    },
    created(){
      if (this.$store.state.productDetail.openSelectShop) {
        Indicator.open({
          spinnerType: 'fading-circle'
        });
        this.$http.post(GAppConfig.basePATH + "app/scan/getShopInfo", {
            brandNo: GAppConfig.brandNo,
            barcode: GAppConfig.barcode,
            longitude: 123.400506,
            latitude: 41.793524
          },
          {
            emulateJSON: true
          }).then(function (res) {
          var data = res.data.data;
          if (data.shopList.length > 1) {
            this.moreShops = true;
            this.$store.state.productDetail.productInfoShopList = data.shopList;
            this.$store.state.productDetail.productInfo = data;
            this.$router.push({
              name: 'selectShop'
            })
          } else {
            this.moreShops = false;
          }
          Indicator.close();
        })
      }
    },
    methods: {},
  }
</script>
