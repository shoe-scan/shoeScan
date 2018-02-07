<template>
  <div>
    <div class="text-align-c app-underline size-17 height-50p line-height-50 cor-333">
      请选择店铺
    </div>
    <mt-cell v-for="item in productInfoShopList" class="app-underline cor-333"
             :title="item.shortName" @click.native="selectShop(item.shopNo,item.shopName)"></mt-cell>
  </div>
</template>
<script>
  export default{
    data(){
      return {}
    },
    computed: {
      productInfoShopList(){
        return this.$store.state.productInfoShopList
      }
    },
    methods: {
      selectShop(shopNo, shopName){
        this.$store.state.openSelectShop = false;
        this.$store.state.shopName = shopName;
        this.$router.go(-1)
      }
    }
  }
</script>
<style scoped>
  .app-underline {
    position: relative;
  }

  .app-underline:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    right: auto;
    top: auto;
    height: 1px;
    width: 100%;
    background-color: #eee;
    display: block;
    z-index: 15;
    -webkit-transform-origin: 50% 100%;
    transform-origin: 50% 100%;
    -webkit-transform: scaleY(.5);
    transform: scaleY(.5);
  }
</style>
