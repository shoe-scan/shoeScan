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
  import {mapGetters} from 'vuex';
  export default {
    name: 'Index',
    data(){
      return {
        moreShops: true,
      }
    },
    methods: {},
    components: {
      Swiper,
      Foot,
      ProductInfo,
      Tabs,
    }
  }
</script>
