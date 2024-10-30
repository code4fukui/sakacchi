// カードをフォルダに追加するためのリスト
let folderCards = [];

// 必要なカードのタイプ
const requiredCards = ['4', '5', '6'];

// カード要素を取得
const cards = document.querySelectorAll('.card');

// フォルダと宝箱の要素
const folder = document.getElementById('folder');
const treasureBox = document.getElementById('treasure-box');

// カードをフォルダに入れる関数
function addCardToFolder(card) {
    const cardType = card.getAttribute('data-type');
    
    // フォルダにすでに同じカードがない場合のみ追加
    if (!folderCards.includes(cardType)) {
        folderCards.push(cardType);

        // カードをフォルダに移動させる
        const folderCard = card.cloneNode(true);
        folderCard.classList.add('folder-card');
        folder.appendChild(folderCard);

        // カードを選択済みとしてスタイルを変更
        card.style.backgroundColor = 'lightgray';
        card.style.pointerEvents = 'none';  // 選択済みカードをクリック不可にする
    }

    // 必要なカードがすべてフォルダに入ったかチェック
    if (folderCards.length === requiredCards.length && requiredCards.every(type => folderCards.includes(type))) {
        treasureBox.classList.remove('hidden');  // 宝箱を表示
    }
}

// カードがクリックされたときの処理
cards.forEach(card => {
    card.addEventListener('click', () => {
        addCardToFolder(card);
    });
});

