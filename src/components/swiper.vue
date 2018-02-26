<template>
  <div class="width-height-100">
    <mt-swipe :auto="0">
      <mt-swipe-item v-for="item in imgs.mainList"  :key="item.id">
        <img :src="item.wehcatPictureUrl" alt="">
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex';
  export default{
    computed: {
      ...mapGetters(['imgs']),
    },
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
