// 初期カードデータ（31, 32, 33, 34 は獲得条件付きのカード）
const initialCards = [
    { id: 1, name: 'カード 1', description: '書庫に封印されていた禁書 禍々しいオーラが漂う', unlocked: false, rarity: 1, imageUrl: 'images/card1.jpg' },
    { id: 2, name: 'カード 2', description: '歴代の呪文が全て収録されている', unlocked: false, rarity: 2, imageUrl: 'images/card2.jpg' },
    { id: 3, name: 'カード 3', description: '魔王を殺した魔法使いが使用した杖', unlocked: false, rarity: 3, imageUrl: 'images/card3.jpg' },
    { id: 4, name: 'カード 4', description: '初めて魔法を使う初心者が使う杖', unlocked: false, rarity: 4, imageUrl: 'images/card4.jpg' },
    { id: 5, name: 'カード 5', description: '近未来的なハンドガン 威力は変更可能', unlocked: false, rarity: 5, imageUrl: 'images/card5.jpg' },
    { id: 6, name: 'カード 6', description: '光の粒子でできたソード 刀身は1000度にもなる', unlocked: false, rarity: 1, imageUrl: 'images/card6.jpg' },
    { id: 7, name: 'カード 7', description: 'かつて魔族を殺すために使われた剣', unlocked: false, rarity: 2, imageUrl: 'images/card7.jpg' },
    { id: 8, name: 'カード 8', description: '狼を宿した剣 使うたび使用者の命を喰らう', unlocked: false, rarity: 3, imageUrl: 'images/card8.jpg' },
    { id: 9, name: 'カード 9', description: '水の流れでできた剣 流れの速さで形が変わる', unlocked: false, rarity: 4, imageUrl: 'images/card9.jpg' },
    { id: 10, name: 'カード 10', description: '鎖で繋がれた剣 扱うには時間がかかる', unlocked: false, rarity: 1, imageUrl: 'images/card10.jpg' },
    { id: 11, name: 'カード 11', description: '修行用に作られたただの木剣', unlocked: false, rarity: 2, imageUrl: 'images/card11.jpg' },
    { id: 12, name: 'カード 12', description: '将軍王騎が使っていた矛 その重さに誰もがひれ伏す', unlocked: false, rarity: 3, imageUrl: 'images/card12.jpg' },
    { id: 13, name: 'カード 13', description: '本物の神の化身 見た人は幸せになるとか‥', unlocked: false, rarity: 4, imageUrl: 'images/card13.jpg' },
    { id: 14, name: 'カード 14', description: '人間界に突如現れた神の化身', unlocked: false, rarity: 5, imageUrl: 'images/card14.jpg' },
    { id: 15, name: 'カード 15', description: '英国育ちのペルシャ猫 見た人は必ず虜になる', unlocked: false, rarity: 1, imageUrl: 'images/card15.jpg' },
    { id: 16, name: 'カード 16', description: '雷をまといし狼 体から100万Vが放出される', unlocked: false, rarity: 2, imageUrl: 'images/card16.jpg' },
    { id: 17, name: 'カード 17', description: '見た目に対して凶暴な性格持つ', unlocked: false, rarity: 3, imageUrl: 'images/card17.jpg' },
    { id: 18, name: 'カード 18', description: 'かつて空を支配した竜', unlocked: false, rarity: 4, imageUrl: 'images/card18.jpg' },
    { id: 19, name: 'カード 19', description: '飛べなかったペンギン 空に憧れを持つ', unlocked: false, rarity: 5, imageUrl: 'images/card19.jpg' },
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
    { id: 31, name: 'カード 31', description: '獲得できるカード 31', unlocked: false, rarity: 5, imageUrl: 'images/card31.jpg' },
    { id: 32, name: 'カード 32', description: '獲得できるカード 32', unlocked: false, rarity: 5, imageUrl: 'images/card32.jpg' },
    { id: 33, name: 'カード 33', description: '獲得できるカード 33', unlocked: false, rarity: 5, imageUrl: 'images/card33.jpg' },
    { id: 34, name: 'カード 34', description: '獲得できるカード 34', unlocked: false, rarity: 5, imageUrl: 'images/card34.jpg' },
];

// フォルダ内のカードを3枚に変更し、条件を追加
const unlockConditions = {
    31: [1, 2, 3],  // カード31はカード1、カード2、カード3が必要
    32: [4, 5, 6],  // カード32はカード4、カード5、カード6が必要
    33: [7, 8, 9],  // カード33はカード7、カード8、カード9が必要
    34: [10, 11, 12], // カード34はカード10、カード11、カード12が必要
};

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

    // 解放されたカードのみクリック可能
    if (card.unlocked) {
        cardElement.addEventListener('click', () => addCardToFolder(cardElement, card.id));
        cardElement.style.cursor = 'pointer';  // クリック可能に見せる
    } else {
        cardElement.style.cursor = 'not-allowed';  // 解放されていない場合クリック不可
    }

    return cardElement;
}

// ページにカードを表示
function displayCards() {
    const cardContainer = document.getElementById('card-container');
    const cards = loadCards();

    // 解放されているカードのみ表示
    const unlockedCards = cards.filter(card => card.unlocked && ![31, 32, 33, 34].includes(card.id));

    // 表示するカードが解放されている場合のみ追加
    unlockedCards.forEach(card => {
        const cardElement = createCardElement(card);
        cardContainer.appendChild(cardElement);
    });
}

// フォルダにカードを追加する処理
function addCardToFolder(cardElement, cardId) {
    const cards = loadCards();
    const card = cards.find(c => c.id === cardId);

    // カードをフォルダに追加
    const folder = document.getElementById('folder');
    const folderCard = cardElement.cloneNode(true);
    folderCard.classList.add('folder-card');
    folder.appendChild(folderCard);

    // カードの状態を変更（unlockedをtrueに）
    card.unlocked = true;
    saveCards(cards); // ローカルストレージに保存

    // カードがフォルダに追加されたら選択済みにする
    cardElement.style.pointerEvents = 'none';
    cardElement.style.backgroundColor = 'lightgray';

    // フォルダ内のカードをチェック
    checkFolderForUnlock();
}

// フォルダ内のカードをチェックし、指定されたカードがすべて入ったか確認
function checkFolderForUnlock() {
    const folder = document.getElementById('folder');
    const folderCards = folder.querySelectorAll('.folder-card');
    const folderCardIds = Array.from(folderCards).map(card => parseInt(card.dataset.id));

    // 各カードの獲得条件を確認
    for (let cardId in unlockConditions) {
        const requiredCards = unlockConditions[cardId];

        // 必要なカードがすべてフォルダに入っている場合
        if (requiredCards.every(id => folderCardIds.includes(id))) {
            unlockCard(parseInt(cardId)); // 該当するカードを解放
        }
    }
}

// 特定のカードを解放
function unlockCard(cardId) {
    const cards = loadCards();
    const card = cards.find(c => c.id === cardId);
    if (card && !card.unlocked) {
        card.unlocked = true;  // 解放
        saveCards(cards); // ローカルストレージに保存
        alert(`${card.name}を獲得しました！`);
    }
}

// フォルダ内のカードをリセットし、カードを再表示
function resetFolder() {
    const folder = document.getElementById('folder');
    folder.innerHTML = '';  // フォルダをリセット

    // ローカルストレージのカードデータはそのままにして、画面上でのみリセット
    displayCards(); // 画面を再描画してカードを表示
}

// 最初にカードを表示
displayCards();
