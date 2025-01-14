import { analyzeImage } from "./analyzeImage.js";

const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
const captureButton = document.getElementById('capture');
const resultElement = document.getElementById('result');
const facingText = document.getElementById('camera-facing');
const toggleButton = document.getElementById('btn'); // カメラ切り替えボタン

let currentStream = null; // 現在のカメラストリーム
let devices = []; // 利用可能なデバイス
let currentDeviceIndex = 0; // 現在使用中のデバイスのインデックス

// 利用可能なカメラデバイスを取得
async function getCameraDevices() {
  try {
    const allDevices = await navigator.mediaDevices.enumerateDevices();
    devices = allDevices.filter(device => device.kind === 'videoinput');
    if (devices.length === 0) {
      throw new Error("カメラデバイスが見つかりません");
    }
    console.log('利用可能なデバイス:', devices);
  } catch (err) {
    console.error('Error getting camera devices:', err);
    //alert("カメラデバイスを取得できませんでした。");
  }
}

// カメラを開始する関数
async function startCamera(deviceId = null) {
  try {
    const constraints = {
      video: deviceId ? { deviceId: { exact: deviceId } } : true
    };

    // 現在のストリームを停止
    if (currentStream) {
      currentStream.getTracks().forEach(track => track.stop());
    }

    // 新しいストリームを取得
    currentStream = await navigator.mediaDevices.getUserMedia(constraints);
    video.srcObject = currentStream;

    // 現在のデバイス名を表示
    facingText.innerText = devices[currentDeviceIndex]?.label || "カメラ";
  } catch (err) {
    console.error('Error accessing the camera: ', err);
    alert("カメラにアクセスできませんでした。カメラを有効にしてから再度お試しください。");
  }
}

// カメラの切り替えボタンイベント
toggleButton.addEventListener('click', async () => {
  if (devices.length > 1) {
    currentDeviceIndex = (currentDeviceIndex + 1) % devices.length; // 次のカメラデバイスを選択
    await startCamera(devices[currentDeviceIndex].deviceId); // 新しいカメラを起動
  } else {
    alert("利用可能なカメラが1つしかありません。");
  }
});

// 初期化処理
async function init() {
  await getCameraDevices(); // デバイスを取得
  await startCamera(devices[currentDeviceIndex]?.deviceId); // 初期カメラを起動
}

init(); // 初期化関数を実行

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
