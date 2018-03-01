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
      return {}
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
              res.data={"errorCode":0,"errorMessage":"","data":{"shardingFlag":"U010101_C","styleNo":"T3537","itemNo":"20170606000001","organTypeNo":"U010101","shopList":[{"id":380643,"shopNo":"CO07TT","code":"CO07TT","storeNo":"CO07TT","storeAddress":null,"storeOrganNo":null,"storeParentNo":null,"storeShortName":null,"storeFullName":null,"companyNo":"C0001","companyName":null,"searchCode":"","shortName":"沈阳太原街百盛TT","fullName":"沈阳太原街百盛TT","organNo":"B0538","bizCityNo":"B0538","sysNo":"","openDate":1099929600000,"closeDate":null,"status":1,"area":63.00,"areaLeft":9.00,"areaTotal":72.00,"areaUnit":"m²","provinceNo":"21","cityNo":"2101","countyNo":"210102","address":"中华路21号百盛二楼他她专柜","zipCode":"","contactName":null,"tel":"18102482364","fax":"","email":"","channelNo":"030101","location":"20140922000015","employeAmount":5,"payType":"U030301","digits":"0","startupTime":"","shutdownTime":"","shopLevel":"U030101","major":"20170329000011","multi":"050101","saleMode":"05","retailType":"0501","mallNo":"20141202000272","regionNo":"20180130000019","cmcdistNo":"20141202000600","categoryCode":null,"shopClassify":"1","priceAdjustLevel":"U030209","onLineFlag":0,"createUser":"admin","createTime":1417685854000,"updateUser":"曹阳","updateTime":1517911980000,"remark":"","timeSeq":397911552003670016,"shopModeNo":"U110101","organTypeNo":"U010101","corporationNo":"20141202000272","mapFlag":0,"shopLatitude":"41.798252","shopLongitude":"123.407036","distance":120.8280778085895,"businessOrganNo":null,"businessOrganName":null,"managerOrganNo":null,"managerOrganName":null,"zoneNo":null,"zoneName":null,"shardingFlag":null,"companyShardingFlag":null},],"zoneNo":"C","code":"AA3T3537DU1CM7"}};
          var data =res.data ? res.data.data:{};
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
            this.$store.commit("shopName",data.shopList[0].shortName);
            this.$store.commit("shopNo",data.shopList[0].shopNo);
            let that = this;
            this.$store.dispatch('getProductInfo').then(() => {
              that.$store.dispatch('getImgs');
              that.$store.dispatch('getFab');
              that.$store.dispatch('getComment');
            }).then(() => {
              that.$store.dispatch('getSize');
            }).then(()=>{
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
