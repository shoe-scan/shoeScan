<template>
  <div v-if="showLocation">
    <div class="app-location">
      <div class="location_indicator">
      </div>
    </div>
    <div class="app-location-error hide"></div>
  </div>
  <router-view v-else></router-view>
</template>

<script>
  let basePATH = window.location.protocol + "//" + window.location.host + '/mmp' + "/",
    version = '2.0.4.1',// 参考版本信息
    domainStatic = '//retailr1.bellecdn.com/mmp', // 静态资源路径
    sensorsProject = 'BOS',//神策项目（开发、测试为test1,生产为BOS）
    compressed = '', // 压缩
    GAppConfig = {
      brandNo: 'TT01',//品牌编码
      barcode: 'AA3T3537DU1CM7240', //条码
      UUID: '027c9291b123447a', //唯一标识
      basePATH: basePATH,
      domainStatic: domainStatic,
      version: version,
      isYougouItem: 'false',
      price: '999',
      colorName: '黑色',
      itemNo: '20170606000001',
      code: 'AA3T3537DU1CM7',
      name: '滴胶/纺织物/牛皮革男休闲鞋'
    };
  sessionStorage.setItem('appConfig', JSON.stringify(GAppConfig));
  export default{
    data(){
      return {
        showLocation: true
      }
    },
    created(){
      let that = this;
      setTimeout(function () {
        that.showLocation = false;
      }, 1000)
    },
    methods: {}
  }
</script>
<style scoped>

  .app-location {
    position: absolute;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    width: 50px;
    height: 50px;
  }

  .location_indicator {
    position: relative;
  }

  .location_indicator:before, .location_indicator:after {
    position: absolute;
    content: "";
  }

  .location_indicator:before {
    width: 30px;
    height: 30px;
    border-radius: 100% 100% 100% 0;
    box-shadow: 0px 0px 0px 2px rgba(24, 195, 125, 1);
    -webkit-animation: mapping 1s linear infinite;
    -moz-animation: mapping 1s linear infinite;
    animation: mapping 1s linear infinite;
    -webkit-transform: rotate(-46deg);
    -moz-transform: rotate(-46deg);
    transform: rotate(-46deg);
    left: 5px;
  }

  .location_indicator:after {
    width: 40px;
    height: 10px;
    border-radius: 100%;
    left: 0;
    background-color: rgba(24, 195, 125, 0.2);
    top: 34px;
    z-index: -1;
  }

  @-webkit-keyframes mapping {
    0% {
      top: 0;
    }
    50% {
      top: -10px;
    }
    100% {
      top: 0;
    }
  }

  @-moz-keyframes mapping {
    0% {
      top: 0;
    }
    50% {
      top: -10px;
    }
    100% {
      top: 0;
    }
  }

  @-keyframes mapping {
  0% {
    top: 0;
  }
  50% {
    top: -10px;
  }
  100% {
    top: 0;
  }
  }

  .app-location-error {
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 270px;
  }
</style>
