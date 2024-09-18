// 初期データ（すべてのカードをロックされた状態で設定）
const initialCards = [
    { id: 1, name: 'カード 1', description: 'これはカード1の説明です。', unlocked: false, unlockCondition: null, imageUrl: 'images/card1.jpg' },
    { id: 2, name: 'カード 2', description: 'これはカード2の説明です。', unlocked: false, unlockCondition: null, imageUrl: 'images/card2.jpg' },
    { id: 3, name: 'カード 3', description: 'これはカード3の説明です。', unlocked: false, unlockCondition: null, imageUrl: 'images/card3.jpg' },
    { id: 4, name: 'カード 4', description: 'これはカード4の説明です。', unlocked: false, unlockCondition: null, imageUrl: 'images/card4.jpg' },
    { id: 5, name: 'カード 5', description: 'これはカード5の説明です。', unlocked: false, unlockCondition: null, imageUrl: 'images/card5.jpg' }
];

// ローカルストレージから状態を取得
function loadCards() {
    try {
        const savedCards = localStorage.getItem('cards');
        if (savedCards) {
            return JSON.parse(savedCards);
        }
    } catch (e) {
        console.error('カードデータの読み込みに失敗しました:', e);
    }
    // ローカルストレージが空の場合、初期データを保存
    localStorage.setItem('cards', JSON.stringify(initialCards));
    return initialCards;
}

// カードを表示する関数
function renderCards() {
    const cardList = document.getElementById('card-list');
    const currentCards = loadCards();

    cardList.innerHTML = '';

    currentCards.forEach(card => {
        const cardElement = createCardElement(card);
        cardList.appendChild(cardElement);
    });
}

// カード要素を作成する関数
function createCardElement(card) {
    const cardElement = document.createElement('div');
    cardElement.className = `card ${card.unlocked ? 'unlocked' : 'locked'}`;
    cardElement.innerHTML = `
        ${card.unlocked ? `<img src="${card.imageUrl}" alt="${card.name}">` : '<img src="images/placeholder.jpg" alt="カード画像非表示">'}
        <h2>${card.name}</h2>
        <p>${card.description}</p>
        ${!card.unlocked ? `<p class="unlock-condition">ガチャで獲得可能</p>` : ''}
    `;
    return cardElement;
}

// データリセット関数
function resetData() {
    localStorage.removeItem('cards');
    localStorage.setItem('cards', JSON.stringify(initialCards));
    renderCards();
}

// ランダムにカードを獲得する関数
function getRandomCard() {
    const currentCards = loadCards();
    const lockedCards = currentCards.filter(card => !card.unlocked);

    if (lockedCards.length === 0) {
        showNotification('すべてのカードが開放されています。');
        return;
    }

    const randomIndex = Math.floor(Math.random() * lockedCards.length);
    return lockedCards[randomIndex];
}

// ボタンをクリックしたときの処理
function handleCardAcquire() {
    const newCard = getRandomCard();

    if (!newCard) return; // すべてのカードが開放されている場合

    let currentCards = loadCards();
    currentCards = currentCards.map(card => 
        card.id === newCard.id ? { ...card, unlocked: true } : card
    );

    localStorage.setItem('cards', JSON.stringify(currentCards));
    renderCards();
    showNotification(`新しいカード「${newCard.name}」を獲得しました！`);
}

// 通知を表示する関数
function showNotification(message) {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    notification.style.display = 'block';
    setTimeout(() => {
        notification.style.display = 'none';
    }, 3000);
}

// イベントリスナーを設定する関数
function setupEventListeners() {
    document.getElementById('gacha').addEventListener('click', handleCardAcquire);
    document.getElementById('reset-data').addEventListener('click', () => {
        if (confirm('本当にデータをリセットしますか？')) {
            resetData();
        }
    });
}

// DOMContentLoaded イベントでスクリプトを初期化
document.addEventListener('DOMContentLoaded', () => {
    setupEventListeners();
    renderCards();
});
