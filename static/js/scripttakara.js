// 初期カードデータ（画像URLを追加）
const initialCards = [
    { id: 1, name: 'カード 1', description: '書庫に封印されていた禁書 禍々しいオーラが漂う', unlocked: false, rarity: 1, imageUrl: 'images/card1.jpg' },
    { id: 2, name: 'カード 2', description: '歴代の呪文が全て収録されている', unlocked: false, rarity: 2, imageUrl: 'images/card2.jpg' },
    { id: 3, name: 'カード 3', description: '魔王を殺した魔法使いが使用した杖', unlocked: false, rarity: 3, imageUrl: 'images/card3.jpg' },
    // 他のカードデータも同様に続く...
];

// ローカルストレージからカードデータを取得、なければ初期データを保存
function loadCards() {
    const savedCards = localStorage.getItem('cards');
    if (savedCards) {
        return JSON.parse(savedCards);
    }
    localStorage.setItem('cards', JSON.stringify(initialCards));
    return initialCards;
}

// ローカルストレージにカードデータを保存
function saveCards(cards) {
    localStorage.setItem('cards', JSON.stringify(cards));
}

// カードの要素を作成
function createCardElement(card) {
    const cardElement = document.createElement('div');
    cardElement.classList.add('card');
    cardElement.dataset.id = card.id;

    // 画像を表示
    const cardImage = document.createElement('img');
    cardImage.src = card.imageUrl;
    cardImage.alt = card.name;
    cardElement.appendChild(cardImage);

    // カード名を表示
    const cardName = document.createElement('p');
    cardName.textContent = card.name;
    cardElement.appendChild(cardName);

    // カードをクリックしてフォルダに追加
    cardElement.addEventListener('click', () => addCardToFolder(cardElement, card.id));

    return cardElement;
}

// ページ読み込み時にカードを表示
document.addEventListener('DOMContentLoaded', () => {
    const cards = loadCards();
    const cardContainer = document.getElementById('card-container');

    // 獲得済みのカードのみを表示
    cards.forEach(card => {
        const cardElement = createCardElement(card);
        if (card.unlocked) {
            cardElement.classList.add('unlocked');
        }
        cardContainer.appendChild(cardElement);
    });

    // フォルダの準備（獲得したカードがここに入る）
    const folder = document.getElementById('folder');
    const treasureBox = document.getElementById('treasure-box');

    // 必要なカードが揃ったかチェック
    const requiredCards = [4, 5, 6]; // 必要カード（例：カード4、カード5、カード6）
    const unlockedCards = cards.filter(c => c.unlocked);
    const unlockedIds = unlockedCards.map(c => c.id);

    if (requiredCards.every(id => unlockedIds.includes(id))) {
        treasureBox.classList.remove('hidden');
    }
});

// フォルダにカードを追加する関数
function addCardToFolder(cardElement, cardId) {
    const cards = loadCards();
    const card = cards.find(c => c.id === cardId);

    // フォルダ内にカードを追加
    const folder = document.getElementById('folder');
    const folderCard = cardElement.cloneNode(true);
    folderCard.classList.add('folder-card');
    folder.appendChild(folderCard);

    // クリックされたカードを選択済みにする
    cardElement.style.pointerEvents = 'none';
    cardElement.style.backgroundColor = 'lightgray';

    // カードデータを保存（カードが選ばれた時点でローカルストレージを更新）
    card.unlocked = true;
    saveCards(cards);
}

// リセットボタンの処理
document.getElementById('reset-button').addEventListener('click', () => {
    // フォルダ内のカードをすべて削除
    const folder = document.getElementById('folder');
    folder.innerHTML = '';

    // 宝箱を非表示にする
    const treasureBox = document.getElementById('treasure-box');
    treasureBox.classList.add('hidden');

    // カードデータをリセット（unlocked状態をfalseに戻し、カードを再びクリック可能にする）
    const cards = loadCards();
    cards.forEach(card => {
        card.unlocked = false; // カードのunlockedフラグをfalseに戻す
    });
    saveCards(cards);

    // 画面上のカードの状態を更新
    const cardContainer = document.getElementById('card-container');
    const cardElements = cardContainer.querySelectorAll('.card');
    cardElements.forEach(cardElement => {
        cardElement.classList.remove('unlocked');
        cardElement.style.pointerEvents = 'auto'; // クリックできるようにする
        cardElement.style.backgroundColor = ''; // 背景色を元に戻す
    });
});
