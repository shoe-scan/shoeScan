<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

</script>

<style>
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size:14px;
  }
  .size-12{
    font-size:12px;
  }
  .size-14{
    font-size:14px;
  }
  .float-left{
    float: left;
  }
  .float-right{
    float: right;
  }
  .mint-swipe, .mint-swipe-items-wrap{
    width:100% !important;
    height:0 !important;
    padding-bottom:100% !important;
  }
  .footer{
    position: fixed;
    bottom:0;
    z-index: 111111;
  }
  .dis-flex{
    display:-moz-box;
    display:-webkit-box;
    display:box;
  }
  .flex-1{
    width: 0;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    -webkit-flex: 1;
    flex: 1;
  }
  .text-align-c{
    text-align: center;
  }
  .width-100{
    width:100%;
  }
  .width-50p{
    width:50px;
  }
  .height-50p{
    height:50px;
  }
  .line-height-50{
    line-height:50px;
  }
  .line-height-60 {
    line-height: 60px!important;
  }
  .cor-fff{
    color: #fff;
  }
  .cor-666 {
    color: #666;
  }
  .cor-999{
    color: #999;
  }
  .cor-ef0717 {
    color: #ef0717;
  }
  .cor-4DC99A {
    color: #4DC99A;
  }
  .cor-2196f3 {
     color: #2196f3;
  }
  .margin-0-50 {
    margin: 0 50px;
  }
  .padding-left-15{
    padding-left:15px;
  }
  .padding-right-10{
    padding-right:10px;
  }
  .padding-10-10-15{
    padding:10px 10px 15px;
  }
  .padding-top-10{
    padding-top:10px;
  }
  .padding-0-10{
    padding:0 10px;
  }
  .padding-10-0 {
    padding: 10px 0;
  }
  .padding-2-5 {
    padding: 2px 5px;
  }
  .padding-bottom-10 {
    padding-bottom: 10px !important;
  }
  .padding-bottom-50{
    padding-bottom:50px;
  }
  /*写在scoped中无效*/
  .tabs .mint-cell-wrapper{
    padding-top:10px !important;
  }
</style>
