import { initialCards } from "./card.js"; //カードデータをインポート

//レアリティごとの重み付け（レア度が高いほど重みが大きくなる）
const rarityWeights = {
 1: 1,  // レア度1のカードは1回だけ
 2: 2,  // レア度2のカードは2回
 3: 3,  // レア度3のカードは3回
 4: 4,  // レア度4のカードは4回
 5: 5,  // レア度5のカードは5回
};

//ローカルストレージから保存されているカードデータを取得
function loadCards() {
  try {
    const savedCards = localStorage.getItem('cards');
    if (savedCards) {
      return JSON.parse(savedCards);
    }
  } catch (e) {
    console.error('カードデータの読み込みに失敗しました:', e);
  }
  localStorage.setItem('cards', JSON.stringify(initialCards));
  return initialCards;
}
//アンロックされたカードのみを表示する関数
function displayUnlockedCards() {
  const currentCards = loadCards();
  const unlockedCards = currentCards.filter(card => card.unlocked); // unlockedがtrueのカードのみを抽出

  const cardListContainer = document.getElementById('card-list');
  cardListContainer.innerHTML = ''; // 既存のカードリストをリセット

  unlockedCards.forEach(card => {
    const cardElement = document.createElement('div');
    cardElement.classList.add('card');
    cardElement.innerHTML = `
       <img src="${card.imageUrl}" alt="${card.name}" class="card-img">
       <h2>${card.name}</h2>
       <p>${card.description} (レア度: ${card.rarity})</p>
    `;
    cardListContainer.appendChild(cardElement);
  });
}
//ページ読み込み後にアンロックされたカードを表示
document.addEventListener('DOMContentLoaded', () => {
  displayUnlockedCards();
});

/*getcardで使用------------------------------------------------------------------*/
//ボタンが押された時にカードをランダムに取得
function handleCardAcquire() {
 const newCard = getRandomCard();
 renderAcquiredCard(newCard);
 
 //カードを引くボタンを無効化
 const openButton = document.getElementById('open-chest-button');
 openButton.disabled = true;

 //ローカルストレージに獲得したカードを保存
 const savedCards = loadCards();
 savedCards.forEach(card => {
   if (card.id === newCard.id) {
     card.unlocked = true; // 獲得したカードをアンロック状態に
   }
 });
 localStorage.setItem('cards', JSON.stringify(savedCards)); 
}
//ランダムにカードを1枚選ぶ処理（レアリティごとの重み付けを適用）
function getRandomCard() {
  const currentCards = loadCards();
  const weightedCards = [];
 
  //除外するカードID
  const excludedCardIds = [31, 32, 33, 34];
 
  //レアリティごとの重み付けに基づいてカードを追加
  currentCards.forEach(card => {
    if (!excludedCardIds.includes(card.id)) {  //31, 32, 33, 34を除外
      const weight = rarityWeights[card.rarity] || 1; // rarityWeightsに設定されていない場合は1として扱う
      for (let i = 0; i < weight; i++) {
        weightedCards.push(card);
      }
    }
  }); 
  //重み付けされたカードリストからランダムに1枚選ぶ
  const randomIndex = Math.floor(Math.random() * weightedCards.length);
  return weightedCards[randomIndex];
 }
//獲得したカードを表示する
function renderAcquiredCard(card) {
  const cardDetails = document.getElementById('card-details');
  cardDetails.innerHTML = `
    <img src="${card.imageUrl}" alt="${card.name}" class="card-img">
    <h2>${card.name}</h2>
    <p>${card.description} (レア度: ${card.rarity})</p>
  `; 
  //カードを表示エリアに追加
  const cardDisplay = document.getElementById('card-display');
  cardDisplay.style.display = 'block';  //表示
 
 //すべてのカードが開放されたかをチェック
 checkAllCardsUnlocked(); 
 }

 //すべてのカードが開放されたかを確認する
function checkAllCardsUnlocked() {
  const currentCards = loadCards();
  const allUnlocked = currentCards.every(card => card.unlocked);

  if (allUnlocked) {
    //ローカルストレージに保存
    localStorage.setItem('kansyzyou', '1'); // kansyzyou に単純な文字列 '1' を保存
    window.location.href = 'kansyzyou.html';  
  }
  else{
    setTimeout(function() {
      window.location.href = 'folder.html';
    }, 3000); // 3000ミリ秒 = 3秒
  }
}
//メニュー遷移ボタンをクリック
function setupEventListeners() {
  //カードを引くボタンのクリックイベント
  document.getElementById('open-chest-button').addEventListener('click', handleCardAcquire);
 
  //メニュー遷移ボタンのクリックイベント
  document.getElementById('go-to-page-button').addEventListener('click', () => {
    window.location.href = 'Mainmenu.html'; //メニューページに遷移
  });
 }
/*------------------------------------------------------------------*/

//ページ読み込み後の初期設定
document.addEventListener('DOMContentLoaded', () => {
 setupEventListeners();
});