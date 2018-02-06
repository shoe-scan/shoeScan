<template>
  <div id="app">
    <div class="padding-bottom-50">
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
  import { Toast } from 'mint-ui'
  export default {
    name: 'App',
    methods:{
      clickMe(){
        Toast({
          message: '提示',
          position: 'bottom',
          duration: 5000
        });
      },
      add(){
        this.$store.commit("increment",10)
      }
    },
    components:{
      Swiper,
      Foot,
      ProductInfo,
      Tabs
    },
    computed:{
      count(){
        return this.$store.state.count
      }
    }
  }
</script>
<style scoped>

</style>
