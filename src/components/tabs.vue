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
          评论({{comment.total}})
        </span>
      </mt-tab-item>
    </mt-navbar>

    <!-- tab-container -->
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
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
        <img class="imgs" v-for="item in imgs.supList" :src="item.wehcatPictureUrl" alt="">
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <div v-for="item in comment.result" class="padding-bottom-10 border-bottom-d9d9d9">
          <mt-cell :title="item.nickName">
            <img class="border-radius-22" slot="icon"
                 :src="item.headImgUrl"  width="44" height="44">
            <div>
              <img v-for="(index) in (5-item.productStarLevel)" width="15px" height="15px"
                   src="./../assets/images/icon_star2.png">
              <img v-for="(index) in item.productStarLevel" width="15px" height="15px"
                   src="./../assets/images/icon_star1.png">
            </div>
          </mt-cell>
          <div class="cor-666 size-14 padding-0-10" v-if="item.evaluation">{{item.evaluation}}</div>
          <div class="cor-666 size-14 padding-0-10" v-else>顾客未及时做出评价，系统默认好评！</div>
          <div class=" padding-top-10 size-12 cor-999  padding-0-10">
            <span
              class="size-12">{{item.evaluationTime}}</span>&nbsp;&nbsp;颜色：{{item.productColor}}&nbsp;&nbsp;尺码：{{item.sizeName}}（{{item.sizeEvaluation == 0 ? "偏大" : (item.sizeEvaluation == 1 ? "正常" : "偏小")}}）
          </div>
        </div>
        <div v-if="!comment.result  || comment.result.length==0" class="text-align-c margin-top-25 margin-bottom-10">没有数据了</div>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex';
  export default{
    data(){
      return {
        selected: "1",
      }
    },
    computed: {
      ...mapGetters(['imgs', 'comment']),
    },
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
    color: #17b976 !important;
    border-bottom: none;
  }

  .mint-navbar .mint-tab-item.is-selected span {
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

  .border-top-d9d9d9 {
    border-top: 1px solid #d9d9d9;
  }

  .imgs {
    display: block;
    width: 100%;
  }
</style>

