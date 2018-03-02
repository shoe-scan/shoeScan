<template>
  <div class="width-height-100">
    <mt-swipe :auto="0">
      <mt-swipe-item v-for="item in imgs.mainList"  :key="item.id">
        <img :src="item.wehcatPictureUrl | noBigImg" :onerror="noFindBigImg" alt="">
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex';
  export default{
    computed: {
      ...mapGetters(['imgs']),
      noFindBigImg(){
          return this.$store.state.productDetail.noFindBigImg;
      }
    },
    filters:{
      noBigImg(value){
        return value ? value : require("./../assets/images/bigshoes.jpg");
      }
    }
  }
</script>
<style scoped>
  .width-height-100 {
    width: 100% !important;
    height: 0 !important;
    padding-bottom: 100% !important;
  }

  img {
    display: block;
    width: 100%;
  }
</style>
