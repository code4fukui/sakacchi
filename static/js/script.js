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

//レアリティの重み
/*const rarityWeights = {
    1: 10,  // コモン
    2: 5,   // アンコモン
    3: 3,   // レア
    4: 2,   // スーパーレア
    5: 0.1    // ウルトラレア
};*/

//カードをロードし、ローカルストレージに保存されているゲットしたカードも表示
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

//「card-list」内に動的にカードを生成して表示する処理
function renderCards() {
    const cardList = document.getElementById('card-list');
    const currentCards = loadCards();

    cardList.innerHTML = '';

    currentCards.forEach(card => {
        const cardElement = createCardElement(card);
        cardList.appendChild(cardElement);
    });
}

//表示したカードを生成するプロパティ
function createCardElement(card) {
    const cardElement = document.createElement('div');
    cardElement.className = `card ${card.unlocked ? 'unlocked' : 'locked'}`;//カードがアンロックかロックされているかでCSSを変えられる
    if (card.rarity === 3) {
        cardElement.classList.add('special-rarity'); //レア度3のカードに特別なクラスを追加
    }    
    //カードがアンロックされている場合は、card.imageUrl に基づいた画像を表示し、そうでない場合はプレースホルダー画像（images/placeholder.jpg）を表示します。altは効いていない
    cardElement.innerHTML = `
        ${card.unlocked ? `<img src="${card.imageUrl}" alt="${card.name}">` : '<img src="images/placeholder.jpg" alt="カード画像非表示">'}
        <h2>${card.name}</h2>
        <p>${card.description}</p>
        <p>レア度: ${card.rarity}</p>
        ${!card.unlocked ? `<p class="unlock-condition">ここいる？</p>` : ''}
        ${card.rarity === 3 && card.unlocked ? `<p class="special-message">レア度3のカードを３枚揃えると宝箱GET</p>` : ''}
    `;
    return cardElement;
}

//カードの「レア度」に基づいてランダムにカードを選択するための処理
/*function getRandomCard() {
    const currentCards = loadCards();
    const weightedCards = [];

    currentCards.forEach(card => {
        for (let i = 0; i < rarityWeights[card.rarity]; i++) {
            weightedCards.push(card);
        }
    });

    const randomIndex = Math.floor(Math.random() * weightedCards.length);
    return weightedCards[randomIndex];
}*/

//ユーザーが新しいカードを取得した際に、そのカードをアンロックして表示を更新する処理（ゴミと認識した場合、この関数を呼び出すとよい）
/*function handleCardAcquire() {
    const newCard = getRandomCard();//getRandomCard() 関数を呼び出して、ランダムにカードを1枚取得します。このカードが新しく獲得されたものとして扱われます。

    let currentCards = loadCards();
    currentCards = currentCards.map(card => 
        card.id === newCard.id ? { ...card, unlocked: true } : card
    );

    localStorage.setItem('cards', JSON.stringify(currentCards));
    renderCards();
    showNotification(`新しいカード「${newCard.name}」を獲得しました！`);
}*/

//ローカルストレージに保存されている「カード」データを初期化し、画面にその初期状態のデータを再表示させる処理
function resetData() {
    //localStorage.removeItem('cards');//cardというキーで保存されているデータを削除
    localStorage.setItem('cards', JSON.stringify(initialCards));
    renderCards();
}

//指定されたメッセージを通知として表示し、３秒後に自動的に非表示にする処理（カードをゲットしましたのメッセージを消す処理）
/*function showNotification(message) {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    notification.style.display = 'block';
    setTimeout(() => {
        notification.style.display = 'none';
    }, 3000);
}*/

//ボタンをクリックしたときの処理レア度に合わせたカードゲットやリセットボタン
//function setupEventListeners() {
    //document.getElementById('open-chest-button').addEventListener('click', handleCardAcquire);
    //document.getElementById('gacha').addEventListener('click', handleCardAcquire);
    //document.getElementById('reset-data').addEventListener('click', () => {
        //if (confirm('本当にデータをリセットしますか？')) {
            //resetData();
        //}
    //});
//}

//ページが完全に読み込まれた後に特定の初期設定を行う処理
document.addEventListener('DOMContentLoaded', () => {
    resetData();
    //setupEventListeners();
    renderCards();
});