document.getElementById('open-chest-button').addEventListener('click', function() {
    const chest = document.getElementById('treasure-chest');
    const message = document.getElementById('message');
  
    // 宝箱を開くアニメーション
    chest.src = './images/open-chest.png'; // 開いた宝箱の画像
    chest.classList.remove('closed');
    chest.classList.add('open');
  
    // メッセージを表示
    message.classList.remove('hidden');
    message.classList.add('visible');
  });
  
