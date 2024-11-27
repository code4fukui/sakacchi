// 初期カードデータ
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
];

// カード状態をローカルストレージから取得または初期化
function loadCards() {
    const savedCards = localStorage.getItem('cards');
    if (savedCards) return JSON.parse(savedCards);
    localStorage.setItem('cards', JSON.stringify(initialCards));
    return initialCards;
}

// 必要なカードを表示
function renderCards(cards) {
    const container = document.getElementById('card-container');
    container.innerHTML = '';
    cards.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.className = `card ${card.unlocked ? 'unlocked' : 'locked'}`;
        cardElement.textContent = card.name;
        cardElement.dataset.id = card.id;

        // 獲得していないカードのみクリック可能
        if (!card.unlocked) {
            cardElement.addEventListener('click', () => addCardToFolder(cardElement));
        }

        container.appendChild(cardElement);
    });
}

// フォルダにカードを追加
const folder = document.getElementById('folder');
const treasureBox = document.getElementById('treasure-box');
const requiredCards = [1, 3, 4];
let folderCards = [];

function addCardToFolder(card) {
    const cardId = parseInt(card.dataset.id, 10);
    if (!folderCards.includes(cardId)) {
        folderCards.push(cardId);
        const folderCard = card.cloneNode(true);
        folderCard.classList.add('folder-card');
        folder.appendChild(folderCard);

        card.style.pointerEvents = 'none';
        checkCompletion();
    }
}

// 必要カードが揃ったかチェック
function checkCompletion() {
    if (requiredCards.every(id => folderCards.includes(id))) {
        treasureBox.classList.remove('hidden');
    }
}

// リセット
document.getElementById('reset-button').addEventListener('click', () => {
    folderCards = [];
    folder.innerHTML = '<p>ここにカードをドラッグしてください</p>';
    treasureBox.classList.add('hidden');
    renderCards(loadCards());
});

// 初期化
document.addEventListener('DOMContentLoaded', () => renderCards(loadCards()));
