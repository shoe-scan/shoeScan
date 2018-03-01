/**
 * createQRCode 创建二维码
 * Author chen.wj
 * Create: 2018/2/28
 */
export default {
  create(data){
    console.log(data);
    let _outData = JSON.stringify(data),
    qrCode = new QRCode("qrCodeDom", {
      width: 220,
      height: 220,
      correctLevel: QRCode.CorrectLevel.H
    });
    qrCode.clear(); // 清除代码
    qrCode.makeCode(_outData); // 生成另外一个二维码
  }
}
