import { analyzeImage } from "./analyzeImage.js";

const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
const captureButton = document.getElementById('capture');
const resultElement = document.getElementById('result');
const facingText = document.getElementById('camera-facing');
const toggleButton = document.getElementById('btn'); // カメラ切り替えボタン

let currentStream = null; // 現在のカメラストリーム
let facingMode = 'user'; // 初期設定はインカメラ（"user"）、アウトカメラは "environment"

// カメラを開始する関数
async function startCamera(mode) {
  try {
    const constraints = {
      video: {
        facingMode: mode // "user" or "environment"
      }
    };

    // 現在のストリームを停止
    if (currentStream) {
      currentStream.getTracks().forEach(track => track.stop());
    }

    // 新しいストリームを取得
    currentStream = await navigator.mediaDevices.getUserMedia(constraints);
    video.srcObject = currentStream;

    // カメラ起動状態を更新
    facingText.innerText = mode === 'user' ? "インカメラ" : "アウトカメラ";
  } catch (err) {
    console.error('Error accessing the camera: ', err);
    alert("カメラにアクセスできませんでした。カメラを有効にしてから再度お試しください。");
  }
}

// カメラの切り替えボタンイベント
toggleButton.addEventListener('click', () => {
  facingMode = facingMode === 'user' ? 'environment' : 'user'; // モードを切り替え
  startCamera(facingMode); // 新しいカメラを起動
});

// 初期カメラを起動
startCamera(facingMode);

// 画像を撮影してCanvasに描画し、分析する
captureButton.addEventListener('click', async () => {
  if (!currentStream) {
    alert("カメラが起動していません。");
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
        localStorage.setItem('cardAcquired', 'false'); // カードが獲得できるように解除
        location.href = "getcard.html"; // ゴミと判定された場合の処理
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