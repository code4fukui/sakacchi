// カードデータ
const initialCards = [    
  { id: 1, name: 'カード 1', description: 'これはカード1の説明です。', unlocked: false, rarity: 1, imageUrl: 'images/card1.jpg' },
  { id: 2, name: 'カード 2', description: 'これはカード2の説明です。', unlocked: false, rarity: 2, imageUrl: 'images/card2.jpg' },
  { id: 3, name: 'カード 3', description: 'これはカード3の説明です。', unlocked: false, rarity: 3, imageUrl: 'images/card3.jpg' },
  // ... more cards
];

// 必要なカードのタイプ（ここではカード4、5、6を必要カードとして設定）
const requiredCards = ['4', '5', '6'];
let folderCards = new Set();  // 重複を避けるためSetを使用

// カードデータをローカルストレージからロード
function loadCards() {
  const savedCards = localStorage.getItem('cards');
  if (savedCards) {
      try {
          return JSON.parse(savedCards);
      } catch (e) {
          console.error('カードデータの読み込みに失敗しました:', e);
      }
  }
  localStorage.setItem('cards', JSON.stringify(initialCards));
  return initialCards;
}

// カードを動的に表示する
function renderCards(cards) {
  const cardContainer = document.getElementById('card-container');
  cardContainer.innerHTML = '';  // 初期化
  cards.forEach(card => {
      const cardElement = document.createElement('div');
      cardElement.classList.add('card');
      cardElement.dataset.type = card.id;
      cardElement.innerHTML = `
          <img src="${card.imageUrl}" alt="${card.name}">
          <h2>${card.name}</h2>
          <p>${card.description}</p>
      `;
      cardElement.addEventListener('click', () => addCardToFolder(cardElement));
      cardContainer.appendChild(cardElement);
  });
}

// フォルダにカードを追加
function addCardToFolder(cardElement) {
  const cardType = cardElement.dataset.type;

  if (!folderCards.has(cardType)) {
      folderCards.add(cardType);

      const folderCard = cardElement.cloneNode(true);
      folderCard.classList.add('folder-card');
      document.getElementById('folder-cards').appendChild(folderCard);

      cardElement.style.backgroundColor = 'lightgray';
      cardElement.style.pointerEvents = 'none';

      checkForTreasure();
  }
}

// 必要カードが揃ったかチェック
function checkForTreasure() {
  const treasureBox = document.getElementById('treasure-box');
  if (requiredCards.every(type => folderCards.has(type))) {
      treasureBox.classList.remove('hidden');
      treasureBox.setAttribute('aria-hidden', 'false');
  }
}

// リセットボタンを押したときの処理
function resetFolder() {
  folderCards.clear();
  document.getElementById('folder-cards').innerHTML = '';
  document.getElementById('treasure-box').classList.add('hidden');
  document.getElementById('treasure-box').setAttribute('aria-hidden', 'true');

  document.querySelectorAll('.card').forEach(card => {
      card.style.backgroundColor = '';
      card.style.pointerEvents = '';
  });
}

// 初期設定
document.addEventListener('DOMContentLoaded', () => {
  const cards = loadCards();
  renderCards(cards);

  // リセットボタンのイベントリスナー
  document.getElementById('reset-button').addEventListener('click', resetFolder);
});
