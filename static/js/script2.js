import { initialCards } from "./card.js"; //カードデータをインポート

//レアリティごとの重み付け（レア度が高いほど重みが大きくなる）
const rarityWeights = {
 1: 5,  // レア度1のカードは5回
 2: 4,  // レア度2のカードは4回
 3: 3,  // レア度3のカードは3回
 4: 2,  // レア度4のカードは2回
 5: 1,  // レア度5のカードは1回だけ
};

/*出現率の計算方法
重み付けリストの総数を計算 各カードが重み付けの数だけリストに追加されるので、リスト全体の長さは各カードの重みの合計になります。
特定のカードの確率を計算 リスト全体の中で、そのカードが占める割合を計算します。
リスト全体の長さは 1 + 2 + 3 + 4 + 5 = 15 です。
各カードの出現確率は以下のようになります：
A（レア度1）：1 / 15 ≈ 6.67%
B（レア度2）：2 / 15 ≈ 13.33%
C（レア度3）：3 / 15 = 20%
D（レア度4）：4 / 15 ≈ 26.67%
E（レア度5）：5 / 15 ≈ 33.33%
*/

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
//ボタン(open-chest-button)が押された時にカードをランダムに取得
function handleCardAcquire() {

//カード獲得状態を`localStorage`から確認
const isCardAcquired = localStorage.getItem('cardAcquired') === 'true'; //kk

//初期化処理: カード獲得済みの場合はボタンを無効化
if (isCardAcquired) {//
  openChestButton.disabled = true;//
  alert('既にカードを獲得済みです。');//
  return;//
}//
else{//kk
  const newCard = getRandomCard();
  renderAcquiredCard(newCard);
  localStorage.setItem('cardAcquired', 'true');//kk  

 //ローカルストレージに獲得したカードを保存
 const savedCards = loadCards();
 savedCards.forEach(card => {
   if (card.id === newCard.id) {
     card.unlocked = true; // 獲得したカードをアンロック状態に
   }
 });
 localStorage.setItem('cards', JSON.stringify(savedCards)); 
}
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