import { analyzeImage } from "./analyzeImage.js";

const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
const captureButton = document.getElementById('capture');
const resultElement = document.getElementById('result');

// カメラ映像を取得して表示
let cameraActive = false;  // カメラの起動状態を管理するフラグ
navigator.mediaDevices.getUserMedia({ video: true })
  .then(stream => {
    video.srcObject = stream;
    video.onloadedmetadata = () => {
      cameraActive = true;  // 映像が表示されて初めてカメラが有効と判断
    };
  })
  .catch(err => {
    console.error('Error accessing the camera: ', err);
    alert("カメラにアクセスできませんでした。カメラを有効にしてから再度お試しください。");
  });

// 画像を撮影してCanvasに描画し、分析する
captureButton.addEventListener('click', async () => {
  // カメラが起動しているかと映像が取得できるかを確認
  if (!cameraActive || video.readyState !== video.HAVE_ENOUGH_DATA) {
    alert("カメラが起動していないか、映像がまだ表示されていません。カメラを有効にしてからもう一度お試しください。");
    return;
  }

  try {
    // ビデオのフレームをCanvasに描画
    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    // CanvasからBase64形式で画像データを取得
    const imageData = canvas.toDataURL('image/png');

    // 分析開始メッセージを表示
    resultElement.textContent = 'AIが判断中...';

    // 画像解析のリクエストを送信
    const res = await analyzeImage(canvas, "ごみかどうかの判定を属性名is_wasteでtrueかfalseで、写真の日本語での説明を属性名descriptionのJSONで返して");
    
    // 結果の処理
    if (res && typeof res.is_waste === 'boolean' && res.description) {
      resultElement.textContent = res.description;
      
      if (res.is_waste) {
        localStorage.setItem('cardAcquired', 'false');//カードが獲得できるように解除
        sleep(3000);
        location.href = "getcard.html";  //ゴミと判定された場合の処理
      } else {
        alert("これはごみではありません");
      }
    } else {
      alert("画像の解析に失敗しました。もう一度お試しください。");
    }
  } catch (error) {
    console.error("画像解析エラー:", error);
    alert("画像の解析中にエラーが発生しました。");
  }
});
