import { analyzeImage } from "./analyzeImage.js";

//const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
const captureButton = document.getElementById('capture');
const resultElement = document.getElementById('result');

let video = document.querySelector('video');
let facingMode = 'user'; // 初期モード: インカメラ
let currentStream = null;

function startCamera(mode) {
  const constraints = {
    video: {
      facingMode: mode // "user" (インカメラ) or "environment" (アウトカメラ)
    }
  };

  navigator.mediaDevices.getUserMedia(constraints)
    .then(stream => {
      // 現在のストリームを停止
      if (currentStream) {
        currentStream.getTracks().forEach(track => track.stop());
      }

      // 新しいストリームを設定
      currentStream = stream;
      video.srcObject = stream;
      video.onloadedmetadata = () => video.play();
    })
    .catch(err => {
      console.error('カメラの起動に失敗しました:', err);
      alert('カメラにアクセスできませんでした。再度お試しください。');
    });
}

// ボタンのクリックイベントでカメラを切り替え
document.getElementById('btn').onclick = () => {
  facingMode = facingMode === 'user' ? 'environment' : 'user'; // モードを切り替える
  startCamera(facingMode); // 新しいモードでカメラを起動
};

// 初期カメラの起動
startCamera(facingMode);


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