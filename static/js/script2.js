// 初期カードデータ（10枚のカード）
const initialCards = [
  { id: 1, name: 'カード 1', description: 'これはカード1の説明です。', unlocked: false, rarity: 1, imageUrl: 'images/card1.jpg' },
  { id: 2, name: 'カード 2', description: 'これはカード2の説明です。', unlocked: false, rarity: 2, imageUrl: 'images/card2.jpg' },
  { id: 3, name: 'カード 3', description: 'これはカード3の説明です。', unlocked: false, rarity: 3, imageUrl: 'images/card3.jpg' },
  { id: 4, name: 'カード 4', description: 'これはカード4の説明です。', unlocked: false, rarity: 4, imageUrl: 'images/card4.jpg' },
  { id: 5, name: 'カード 5', description: 'これはカード5の説明です。', unlocked: false, rarity: 5, imageUrl: 'images/card5.jpg' },
  { id: 6, name: 'カード 6', description: 'これはカード6の説明です。', unlocked: false, rarity: 1, imageUrl: 'images/card6.jpg' },
  { id: 7, name: 'カード 7', description: 'これはカード7の説明です。', unlocked: false, rarity: 2, imageUrl: 'images/card7.jpg' },
  { id: 8, name: 'カード 8', description: 'これはカード8の説明です。', unlocked: false, rarity: 3, imageUrl: 'images/card8.jpg' },
  { id: 9, name: 'カード 9', description: 'これはカード9の説明です。', unlocked: false, rarity: 4, imageUrl: 'images/card9.jpg' },
  { id: 10, name: 'カード 10', description: 'これはカード10の説明です。', unlocked: false, rarity: 1, imageUrl: 'images/card10.jpg' },
  { id: 11, name: 'カード 11', description: 'これはカード11の説明です。', unlocked: false, rarity: 2, imageUrl: 'images/card11.jpg' },
    { id: 12, name: 'カード 12', description: 'これはカード12の説明です。', unlocked: false, rarity: 3, imageUrl: 'images/card12.jpg' },
    { id: 13, name: 'カード 13', description: 'これはカード13の説明です。', unlocked: false, rarity: 4, imageUrl: 'images/card13.jpg' },
    { id: 14, name: 'カード 14', description: 'これはカード14の説明です。', unlocked: false, rarity: 5, imageUrl: 'images/card14.jpg' },
    { id: 15, name: 'カード 15', description: 'これはカード15の説明です。', unlocked: false, rarity: 1, imageUrl: 'images/card15.jpg' },
    { id: 16, name: 'カード 16', description: 'これはカード16の説明です。', unlocked: false, rarity: 2, imageUrl: 'images/card16.jpg' },
    { id: 17, name: 'カード 17', description: 'これはカード17の説明です。', unlocked: false, rarity: 3, imageUrl: 'images/card17.jpg' },
    { id: 18, name: 'カード 18', description: 'これはカード18の説明です。', unlocked: false, rarity: 4, imageUrl: 'images/card18.jpg' },
    { id: 19, name: 'カード 19', description: 'これはカード19の説明です。', unlocked: false, rarity: 5, imageUrl: 'images/card19.jpg' },
    { id: 20, name: 'カード 20', description: 'これはカード20の説明です。', unlocked: false, rarity: 1, imageUrl: 'images/card20.jpg' },
    { id: 21, name: 'カード 21', description: 'これはカード21の説明です。', unlocked: false, rarity: 2, imageUrl: 'images/card21.jpg' },
    { id: 22, name: 'カード 22', description: 'これはカード22の説明です。', unlocked: false, rarity: 3, imageUrl: 'images/card22.jpg' },
    { id: 23, name: 'カード 23', description: 'これはカード23の説明です。', unlocked: false, rarity: 4, imageUrl: 'images/card23.jpg' },
    { id: 24, name: 'カード 24', description: 'これはカード24の説明です。', unlocked: false, rarity: 5, imageUrl: 'images/card24.jpg' },
    { id: 25, name: 'カード 25', description: 'これはカード25の説明です。', unlocked: false, rarity: 1, imageUrl: 'images/card25.jpg' },
    { id: 26, name: 'カード 26', description: 'これはカード26の説明です。', unlocked: false, rarity: 2, imageUrl: 'images/card26.jpg' },
    { id: 27, name: 'カード 27', description: 'これはカード27の説明です。', unlocked: false, rarity: 3, imageUrl: 'images/card27.jpg' },
    { id: 28, name: 'カード 28', description: 'これはカード28の説明です。', unlocked: false, rarity: 4, imageUrl: 'images/card28.jpg' },
    { id: 29, name: 'カード 29', description: 'これはカード29の説明です。', unlocked: false, rarity: 5, imageUrl: 'images/card29.jpg' },
    { id: 30, name: 'カード 30', description: 'これはカード30の説明です。', unlocked: false, rarity: 1, imageUrl: 'images/card30.jpg' },
];

// レアリティの重み
const rarityWeights = {
  1: 10,
  2: 5,
  3: 3,
  4: 2,
  5: 0.1
};

// ローカルストレージからカードデータをロード
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

// カードを表示する処理
function renderCards() {
  const cardList = document.getElementById('card-list');
  const currentCards = loadCards();
  cardList.innerHTML = '';

  currentCards.forEach(card => {
    if (card.unlocked) {
      const cardElement = createCardElement(card);
      cardList.appendChild(cardElement);
    }
  });
}

// カードのHTML要素を生成する
function createCardElement(card) {
  const cardElement = document.createElement('div');
  cardElement.className = `card ${card.unlocked ? 'unlocked' : 'locked'}`;
  if (card.rarity === 3) {
    cardElement.classList.add('special-rarity');
  }
  cardElement.innerHTML = `
    ${card.unlocked ? `<img src="${card.imageUrl}" alt="${card.name}">` : '<img src="images/placeholder.jpg" alt="カード画像非表示">'}
    <h2>${card.name}</h2>
    <p>${card.description}</p>
    <p>レア度: ${card.rarity}</p>
  `;
  return cardElement;
}

// ランダムにカードを1枚選ぶ処理
function getRandomCard() {
  const currentCards = loadCards();
  const weightedCards = [];

  currentCards.forEach(card => {
    for (let i = 0; i < rarityWeights[card.rarity]; i++) {
      weightedCards.push(card);
    }
  });

  const randomIndex = Math.floor(Math.random() * weightedCards.length);
  return weightedCards[randomIndex];
}

// ユーザーが新しいカードを獲得した際にそのカードをアンロックして表示を更新
function handleCardAcquire() {
  const newCard = getRandomCard();
  let currentCards = loadCards();
  currentCards = currentCards.map(card => 
    card.id === newCard.id ? { ...card, unlocked: true } : card
  );
  localStorage.setItem('cards', JSON.stringify(currentCards));
  
  // 宝箱アニメーション
  const chest = document.getElementById('treasure-chest');
  chest.classList.remove('closed');
  chest.classList.add('open');
  setTimeout(() => {
    chest.classList.remove('open');
    chest.classList.add('closed');
  }, 300);

  renderCards(); // カードリストを更新
  displayAcquiredCard(newCard); // 獲得したカードを表示
}

// 獲得したカードを画面に表示する
function displayAcquiredCard(card) {
  const cardDisplay = document.getElementById('card-display');
  const cardDetails = document.getElementById('card-details');
  
  // 獲得したカードを表示
  cardDisplay.classList.remove('hidden');
  cardDetails.innerHTML = `
    <h3>${card.name}</h3>
    <p>${card.description}</p>
    <p>レア度: ${card.rarity}</p>
    <img src="${card.imageUrl}" alt="${card.name}">
  `;
}

// ボタンのイベントリスナーを設定
function setupEventListeners() {
  document.getElementById('open-chest-button').addEventListener('click', handleCardAcquire);
}

// ページ読み込み後の初期設定
document.addEventListener('DOMContentLoaded', () => {
  setupEventListeners();
  renderCards(); // 初期カードの表示
});
