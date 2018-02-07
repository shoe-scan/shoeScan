<template>
  <div id="index">
    <div class="padding-bottom-50 bg-fff">
      <swiper>

      </swiper>
      <productInfo></productInfo>
      <tabs></tabs>
    </div>
    <foot></foot>
  </div>
</template>

<script>
  import Swiper from "./../components/swiper";//轮播
  import Foot from './../components/footer';//底部加入购物车和立即购买
  import ProductInfo from './../components/productInfo';//商品信息
  import Tabs from './../components/tabs';//切换图文详情和评论
  import {Indicator} from 'mint-ui';
  let AppConfig = JSON.parse(sessionStorage.getItem('appConfig'));
  export default {
    name: 'Index',
    data(){
      return {
        moreShops: true,
      }
    },
    created(){
      if (this.$store.state.openSelectShop) {
        Indicator.open({
          spinnerType: 'fading-circle'
        });
        this.$http.post(AppConfig.basePATH + "app/scan/getShopInfo", {
            brandNo: AppConfig.brandNo,
            barcode: AppConfig.barcode,
            longitude: 123.400506,
            latitude: 41.793524
          },
          {
            emulateJSON: true
          }).then(function (res) {
          console.log(res.data)
          var data = res.data.data;
          if (data.shopList.length > 1) {
            this.moreShops = true;
            this.$store.state.productInfoShopList = data.shopList;
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
    methods: {
      clickMe(){
        Toast({
          message: '提示',
          position: 'bottom',
          duration: 5000
        });
      },
      add(){
        this.$store.commit("increment", 10)
      }
    },
    components: {
      Swiper,
      Foot,
      ProductInfo,
      Tabs,
    },
    computed: {
      count(){
        return this.$store.state.count
      }
    }
  }
</script>
