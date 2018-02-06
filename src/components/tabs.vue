<template>
  <div class="tabs">
    <mt-navbar v-model="selected">
      <mt-tab-item id="1">
        <span>
          详情
        </span>
      </mt-tab-item>
      <mt-tab-item id="2">
        <span>
          评论
        </span>
      </mt-tab-item>
    </mt-navbar>

    <!-- tab-container -->
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1" class="border-top-d9d9d9">
        <div class="margin-0-50">
          <div class="appm-td-line-size float-left">
            <div class="appm-dt-line"></div>
          </div>
          <div class="appm-td-title">
            <span class="line-height-60">图文详情</span>
          </div>
          <div class="appm-td-line-size float-right">
            <div class="appm-dt-line"></div>
          </div>
        </div>
        <img data-v-628cb068="" src="http://retail.belle.net.cn/mmp//shoe-scan/images/bigshoes.jpg" alt="">
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <div class="padding-bottom-10 app-underline">
          <mt-cell>
            <img class="border-radius-22" slot="icon" src="http://retail.belle.net.cn/mmp//shoe-scan/images/bigshoes.jpg" width="44" height="44">
            <div>
              <img width="15px" height="15px" src="http://172.17.220.193:6200/mmp/shoe-scan/images/icon_star1.png">
              <img width="15px" height="15px" src="http://172.17.220.193:6200/mmp/shoe-scan/images/icon_star1.png">
              <img width="15px" height="15px" src="http://172.17.220.193:6200/mmp/shoe-scan/images/icon_star1.png">
              <img width="15px" height="15px" src="http://172.17.220.193:6200/mmp/shoe-scan/images/icon_star1.png">
              <img width="15px" height="15px" src="http://172.17.220.193:6200/mmp/shoe-scan/images/icon_star1.png">
            </div>
          </mt-cell>
          <div class="cor-666 size-14 padding-0-10">顾客未及时做出评价，系统默认好评！</div>
          <div class=" padding-top-10 size-12 cor-999  padding-0-10">
            <span>2016-06-30 10:30:20</span>&nbsp;&nbsp;颜色：黑色&nbsp;&nbsp;尺码：U1-240（正常）
          </div>
        </div>
        <div class="padding-bottom-10 app-underline">
          <mt-cell>
            <img class="border-radius-22" slot="icon" src="http://retail.belle.net.cn/mmp//shoe-scan/images/bigshoes.jpg" width="44" height="44">
            <div>
              <img width="15px" height="15px" src="http://172.17.220.193:6200/mmp/shoe-scan/images/icon_star1.png">
              <img width="15px" height="15px" src="http://172.17.220.193:6200/mmp/shoe-scan/images/icon_star1.png">
              <img width="15px" height="15px" src="http://172.17.220.193:6200/mmp/shoe-scan/images/icon_star1.png">
              <img width="15px" height="15px" src="http://172.17.220.193:6200/mmp/shoe-scan/images/icon_star1.png">
              <img width="15px" height="15px" src="http://172.17.220.193:6200/mmp/shoe-scan/images/icon_star1.png">
            </div>
          </mt-cell>
          <div class="cor-666 size-14 padding-0-10">顾客未及时做出评价，系统默认好评！</div>
          <div class=" padding-top-10 size-12 cor-999  padding-0-10">
            <span>2016-06-30 10:30:20</span>&nbsp;&nbsp;颜色：黑色&nbsp;&nbsp;尺码：U1-240（正常）
          </div>
        </div>
        <div class="padding-bottom-10 app-underline">
          <mt-cell>
            <img class="border-radius-22" slot="icon" src="http://retail.belle.net.cn/mmp//shoe-scan/images/bigshoes.jpg" width="44" height="44">
            <div>
              <img width="15px" height="15px" src="http://172.17.220.193:6200/mmp/shoe-scan/images/icon_star1.png">
              <img width="15px" height="15px" src="http://172.17.220.193:6200/mmp/shoe-scan/images/icon_star1.png">
              <img width="15px" height="15px" src="http://172.17.220.193:6200/mmp/shoe-scan/images/icon_star1.png">
              <img width="15px" height="15px" src="http://172.17.220.193:6200/mmp/shoe-scan/images/icon_star1.png">
              <img width="15px" height="15px" src="http://172.17.220.193:6200/mmp/shoe-scan/images/icon_star1.png">
            </div>
          </mt-cell>
          <div class="cor-666 size-14 padding-0-10">顾客未及时做出评价，系统默认好评！</div>
          <div class=" padding-top-10 size-12 cor-999  padding-0-10">
            <span>2016-06-30 10:30:20</span>&nbsp;&nbsp;颜色：黑色&nbsp;&nbsp;尺码：U1-240（正常）
          </div>
        </div>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>
<script>
  export default{
    data(){
      return {
        selected: "1"
      }
    }
  }
</script>
<style scoped>
  .mint-navbar {
    background-color: #F3F3F3 !important;
  }
  .mint-navbar .mint-tab-item {
    padding: 15px 0;
    font-size: 15px;
  }
  .mint-navbar .mint-tab-item.is-selected {
    color: #17b976!important;
    border-bottom: none;
  }
  .mint-navbar .mint-tab-item.is-selected span{
    border-bottom: 2px solid #17b976;
    padding: 10px;
  }
  .mint-tab-item-label {
    color: inherit;
    font-size: 14px;
    line-height: 1;
  }
  .appm-td-line-size {
    width: 35%;
    height: 50px;
  }
  .appm-dt-line {
    height: 30px;
    width: 100%;
    border-bottom: 1px solid #EBE9EA;
  }
  .appm-td-title {
    width: 30%;
    float: left;
    height: 50px;
    text-align: center;
  }
  .border-radius-22 {
    border-radius: 22px !important;
  }
  .border-top-d9d9d9{
    border-top:1px solid #d9d9d9;
  }
</style>

