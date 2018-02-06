<template>
  <div class="width-height-100">
    <mt-swipe :auto="0">
      <mt-swipe-item>
        <img src="http://retail.belle.net.cn/mmp//shoe-scan/images/bigshoes.jpg" alt="">
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="http://retail.belle.net.cn/mmp//shoe-scan/images/bigshoes.jpg" alt="">
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="http://retail.belle.net.cn/mmp//shoe-scan/images/bigshoes.jpg" alt="">
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>
<script>

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
