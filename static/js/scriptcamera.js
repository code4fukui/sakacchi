import { analyzeImage } from "./analyzeImage.js";

const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
const captureButton = document.getElementById('capture');
const resultElement = document.getElementById('result');

//カメラ映像を取得して表示
navigator.mediaDevices.getUserMedia({ video: true }) //カメラへのアクセスを要求します。
  .then(stream => {
    video.srcObject = stream;
  })
  .catch(err => {
    console.error('Error accessing the camera: ', err);
  });

//画像を撮影してCanvasに描画
captureButton.addEventListener('click', async () => {
  // ビデオのフレームをCanvasに描画
  context.drawImage(video, 0, 0, canvas.width, canvas.height);

  //CanvasからBase64形式で画像データを取得
  const imageData = canvas.toDataURL('image/png');
 
  //GPT-4oに画像情報を分析させる
  resultElement.textContent = 'AIが判断中...';  //分析中メッセージを表示
  /*
  const res = await analyzeImageWithGPT4o(imageData);  //GPT-4oで画像を分析
  if (res) {
    alert("gomi datta");
  } else {
    alert("not gomi datta");
  }
  */
  const res = await analyzeImage(canvas, "ごみかどうかの判定を属性名is_wasteでtrueかfalseで、写真の日本語での説明を属性名descriptionのJSONで返して");
  console.log(res);
  resultElement.textContent = res?.description;
  if (res?.is_waste) {
    //alert("これはごみです！")
    location.href = "getcard.html"
  } else {
    alert("これはごみではありません")
  }
});