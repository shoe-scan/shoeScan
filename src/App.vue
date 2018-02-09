<template>
  <router-view></router-view>
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
      }
    },
    methods: {}
  }
</script>
