<template>
  <div class="bg-fff">
    <div class="padding-10-10-10-15 border-bottom-d9d9d9" @click="goIndex">
      <div class="overflow-hidden">
        <div class="float-left">沈阳赛特综合奥莱</div>
        <mt-badge class="float-right " size="small" type="primary" color="#2196f3">
          库存30
        </mt-badge>
      </div>
      <div class="dis-flex padding-top-5">
        <img class="padding-top-3" src="../assets/images/icon_postion20.png" width="16" height="16">
        <div class="flex-1 cor-9a9a9a padding-left-10 text-overflow-2">
          18.91KM&nbsp;&nbsp;双园路36号赛特奥莱思加图专柜二层
        </div>
      </div>
      <div class="dis-flex">
        <img class="padding-top-3" src="../assets/images/icon_tel.png" width="16" height="16">
        <div class="flex-1 cor-9a9a9a padding-left-10">
          18798785875
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        params: this.$route.params
      }
    },
    methods: {
      goIndex(){
        this.$router.push({
          name: "index",
          query: {
            shopNo: "CO44TT",
            shopName: "沈阳商业城TT男鞋"
          }
        })
      }
    }
  }
</script>
