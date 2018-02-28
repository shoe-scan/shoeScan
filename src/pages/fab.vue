<template>
  <div>
    <div v-if="showFab" class="appy-fab-bottom">
      <div class="margin-0-30">
        <div class="margin-top-25 text-align-c appy-fab-height">
          <div class="margin-top-25 margin-bottom-10">FAB</div>
          <div class="appy-position-relative">
            <div class="appy-fab-postion"></div>
            <div class="appy-fab-line"></div>
            <div class="appy-bg-fff"></div>
          </div>
        </div>
        <div class="margin-bottom-40">
          <div v-if="showFImg" class="appy-fab-img">
            <img v-for="item in fPicUrl" :src="item" alt="">
          </div>
          <div v-if="showFText" class="appy-fab-text text-align-c">
            <b>{{fList[0]}}<br/>-<br/></b>
            <span v-for="(item,index) in fList" v-if="index>0">
                                        {{item}}<br/>
                                    </span>
          </div>
        </div>
        <div class="margin-bottom-40">
          <div v-if="showAImg" class="appy-fab-img">
            <img v-for="item in aPicUrl" :src="item" alt="">
          </div>
          <div v-if="showAText" class="appy-fab-text text-align-c">
            <b>{{aList[0]}}<br/>-<br/></b>
            <span v-for="(item,index) in aList" v-if="index>0">
                                        {{item}}<br/>
                                    </span>
          </div>
        </div>
        <div class="margin-bottom-40">
          <div v-if="bPicUrl&&bPicUrl.length>0" class="appy-fab-img">
            <img v-for="item in bPicUrl" :src="item" alt="">
          </div>
          <div v-if="showBText" class="appy-fab-text text-align-c">
            <b>{{bList[0]}}<br/>-<br/></b>
            <span v-for="(item,index) in bList" v-if="index>0">
                                        {{item}}<br/>
                                    </span>
          </div>
        </div>
      </div>
    </div>
    <div v-if="showSList" class="appy-fab-bottom">
      <div class="margin-0-30">
        <div class="margin-top-25 text-align-c appy-fab-height">
          <div class="margin-top-25 margin-bottom-10">穿衣搭配</div>
          <div class="appy-position-relative">
            <div class="appy-fab-postion"></div>
            <div class="appy-fab-line"></div>
            <div class="appy-bg-fff"></div>
          </div>
        </div>
        <div class="margin-bottom-40">
          <div v-if="showSImg" class="appy-fab-img">
            <img v-for="item in seriesPicUrl" :src="item" alt="">
          </div>
          <div v-if="showSText" class="appy-fab-text text-align-c">
                                    <span v-for="(item,index) in seriesList" v-if="index>0">
                                        {{item}}<br/>
                                    </span>
          </div>
        </div>
      </div>
    </div>
    <div v-if="showBList" class="appy-fab-bottom">
      <div class="margin-0-30">
        <div class="margin-top-25 text-align-c appy-fab-height">
          <div class="margin-top-25 margin-bottom-10">商品故事</div>
          <div class="appy-position-relative">
            <div class="appy-fab-postion"></div>
            <div class="appy-fab-line"></div>
            <div class="appy-bg-fff"></div>
          </div>
        </div>
        <div class="margin-bottom-40">
          <div v-if="showBImg" class="appy-fab-img">
            <img v-for="item in storyPicUrl" :src="item" alt="">
          </div>
          <div v-if="showBText" class="appy-fab-text text-align-c">
                                    <span v-for="(item,index) in brandStoryList" v-if="index>0">
                                        {{item}}<br/>
                                    </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    data(){
      return {
        fList: this.$route.query.fList,
        fPicUrl: this.$route.query.fPicUrl,
        aList: this.$route.query.aList,
        aPicUrl: this.$route.query.aPicUrl,
        bList: this.$route.query.bList,
        bPicUrl: this.$route.query.bPicUrl,
        seriesList: this.$route.query.seriesList,
        seriesPicUrl: this.$route.query.seriesPicUrl,
        brandStoryList: this.$route.query.brandStoryList,
        storyPicUrl: this.$route.query.storyPicUrl,
        showFab: true,
        showFText: true,
        showAText: true,
        showBText: true,
        showFImg: true,
        showAImg: true,
        showBImg: true,
        showSList: true,
        showSText: true,
        showSImg: true,
        showBList: true,
        showBText: true,
        showBImg: true,
      }
    },
    created(){
      if (this.fPicUrl && this.fPicUrl.length > 0 || this.aPicUrl && this.aPicUrl || this.bPicUrl && this.aPicUrl.length > 0 || this.aList && this.aList.length > 0 || this.bList && this.bList.length > 0 || this.fList && this.fList.length > 0) {
        this.showFab = true;
      } else {
        this.showFab = false;
      }

      if (this.fList && this.fList.length > 0) {
        this.showFText = true;
      } else {
        this.showFText = false;
      }
      if (this.fPicUrl && this.fPicUrl.length > 0) {
        this.showFImg = true;
      } else {
        this.showFImg = false;
      }

      if (this.aList && this.aList.length > 0) {
        this.showAText = true;
      } else {
        this.showAText = false;
      }
      if (this.aPicUrl && this.aPicUrl.length > 0) {
        this.showAImg = true;
      } else {
        this.showAImg = false;
      }

      if (this.bList && this.bList.length > 0) {
        this.showBText = true;
      } else {
        this.showBText = false;
      }
      if (this.bPicUrl && this.bPicUrl.length > 0) {
        this.showBImg = true;
      } else {
        this.showBImg = false;
      }

      if (this.seriesPicUrl && this.seriesPicUrl.length > 0 || this.seriesList && this.seriesList.length > 0) {
        this.showSList = true;
      } else {
        this.showSList = false;
      }
      if (this.seriesPicUrl && this.seriesPicUrl.length > 0) {
        this.showSImg = true;
      } else {
        this.showSImg = false;
      }
      if (this.seriesList&& this.seriesList.length > 0) {
        this.showSText = true;
      } else {
        this.showSText = false;
      }

      if (this.storyPicUrl && this.storyPicUrl.length > 0 || this.brandStoryList && this.brandStoryList.length > 0) {
        this.showBList = true;
      } else {
        this.showBList = false;
      }
      if (this.storyPicUrl && this.storyPicUrl.length > 0) {
        this.showBImg = true;
      } else {
        this.showBImg = false;
      }
      if (this.brandStoryList && this.brandStoryList.length > 0) {
        this.showBText = true;
      } else {
        this.showBText = false;
      }
    }
  }
</script>
<style scoped>
  .appy-fab-bottom {
    border-bottom: 10px solid #f3f3f3;
  }

  .appy-fab-height {
    height: 80px;
  }

  .appy-position-relative {
    position: relative;
  }

  .appy-fab-postion {
    position: absolute;
    left: 50%;
    top: 0;
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 20px solid transparent;
    border-top: 20px solid #ddd;
    margin: 0 auto;
    -webkit-transform: translateX(-50%);
    -moz-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    transform: translateX(-50%);
  }

  .appy-fab-line {
    position: absolute;
    left: 50%;
    top: 0;
    width: 100px;
    height: 1px;
    background: #ddd;
    -webkit-transform: translateX(-50%);
    -moz-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    transform: translate(-50%, 5px);
  }

  .appy-bg-fff {
    position: absolute;
    left: 50%;
    top: 0;
    width: 15px;
    height: 1px;
    background: #fff;
    -webkit-transform: translateX(-50%);
    -moz-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    transform: translate(-50%, 5px);
  }

  .appy-fab-text {
    line-height: 2;
    padding: 50px 0;
    background: #f3f3f3;
    width: 100%;
  }

  .appy-fab-img {
    width: 100%;
    border: 2px solid #f3f3f3;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    -ms-box-sizing: border-box;
  }

  .appy-fab-img img {
    display: block;
    width: 100%;
  }

  .appy-fab-bottom {
    border-bottom: 10px solid #f3f3f3;
  }

</style>
