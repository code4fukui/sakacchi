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
  const res = await analyzeImageWithGPT4o(imageData);  //GPT-4oで画像を分析
  if (res) {
    alert("gomi datta");
  } else {
    alert("not gomi datta");
  }
});

//GPT-4oにリクエストを送信
async function analyzeImageWithGPT4o(imageDataUrl) {
  return Math.random() < .5;
  
  const base64Image = imageDataUrl.replace(/^data:image\/(png|jpg);base64,/, ''); //Base64画像データの抽出
    
    const fetchJSON = async (url, req) => {
    const opt = req ? {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(req),
    } : {};
    
    const res = await fetch(url, opt);
    if (!res.ok) {
      throw new Error(`Network response was not ok: ${res.status} ${res.statusText}`);
    }
    return await res.json();
  };

  const url = "https://ai-sakai.sabae.cc/api/conversation";
  const param = {
       model: "gpt-4o", //必要に応じて指定
    messages: [{ role: "user", content: `この画像がゴミかどうか判断してください。もしゴミなら対応する関数を実行してください。` }],
       image: base64Image //メッセージとして画像データを追加
  };
  
  let res;
  try {
    res = await fetchJSON(url, param);
  } catch (error) {
    resultElement.textContent = `Error analyzing the image: ${error.message}`;
    return;
  }

  displayResult(res);  //結果をHTMLページに表示
}

//APIの結果を画面に表示
function displayResult(res) {
  const analysis = res.choices[0].message.content;
  resultElement.textContent = `Analysis: ${analysis}`;
}


  /*const response = await fetch('https://js.sabae.cc/fetchJSON.js', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'https://ai-sakai.sabae.cc/api/conversation'  //APIキーをここに設定 
    },
    body: JSON.stringify({
      model: 'gpt-4o',  //使用するモデルを指定
      messages: [
        {
          role: 'user',
          content: `この画像がゴミかどうか判断してください。もしゴミなら・・・の関数を実行してください：${base64Image}`
        }
      ]
    })
  });

  if (!response.ok) {
    resultElement.textContent = 'Error analyzing the image.';
    return;
  }

  const result = await response.json();
  displayResult(result);  //結果をhtmlページに表示
}

//APIの結果を画面に表示
function displayResult(result) {
  const analysis = result.choices[0].message.content;
  resultElement.textContent = `Analysis: ${analysis}`;
}*/

/*
//お試し　AI判断後の処理を考案
function evaluateAI() {
  //AIの評価ロジックをここに実装
  let isTrash = true; // 例として「ゴミ」と判断

  if (isTrash) {
      // ゴミと判断された場合、別のページにリダイレクト
      window.location.href = "get.html";
  } else {
      // そうでない場合、結果を表示
      document.getElementById("result").innerText = "AIはゴミではありません。";
  }
}*/
