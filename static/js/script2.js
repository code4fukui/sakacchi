// 初期カードデータ（カード情報）
const initialCards = [
   { id: 1, name: '青薔薇', description: '100年に1度だけ咲く青薔薇 出会うと夢が叶う', unlocked: false, rarity: 1, imageUrl: 'images/card1.jpg' },
  { id: 2, name: '赤薔薇', description: '情熱の赤いバラ 好きな人に渡そう♡', unlocked: false, rarity: 2, imageUrl: 'images/card2.jpg' },
  { id: 3, name: 'ドクロ', description: 'はずれ！まだまだ頑張ろう！', unlocked: false, rarity: 3, imageUrl: 'images/card3.jpg' },
  { id: 4, name: '雷獣フェンリル', description: '雷をまといし狼 体から100万Vが放出される', unlocked: false, rarity: 4, imageUrl: 'images/card4.jpg' },
  { id: 5, name: 'ストーンゴーレム', description: '悪口に弱い 繊細な心は誰にも理解されない', unlocked: false, rarity: 5, imageUrl: 'images/card5.jpg' },
  { id: 6, name: '伝説の将軍王騎の矛', description: '将軍王騎が使っていた矛 その重さに誰もがひれ伏す', unlocked: false, rarity: 1, imageUrl: 'images/card6.jpg' },
  { id: 7, name: '封印されし禁書', description: '書庫に封印されてた禁書 禍々しいオーラが漂う', unlocked: false, rarity: 2, imageUrl: 'images/card7.jpg' },
  { id: 8, name: '七風古典', description: '歴代の呪文が全て収録されている', unlocked: false, rarity: 3, imageUrl: 'images/card8.jpg' },
  { id: 9, name: 'フォースの力フォトンソード', description: '光の粒子でできたソード 刀身は1000度にもなる', unlocked: false, rarity: 4, imageUrl: 'images/card9.jpg' },
  { id: 10, name: '近未来式ハンドガン', description: '近未来的なハンドガン 威力はその都度変えられる', unlocked: false, rarity: 1, imageUrl: 'images/card10.jpg' },
  { id: 11, name: '日本刀', description: 'かつて魔族を殺すために使われた剣', unlocked: false, rarity: 2, imageUrl: 'images/card11.jpg' },
  { id: 12, name: 'カワウソ', description: '見た目に対して凶暴な性格をもつ', unlocked: false, rarity: 3, imageUrl: 'images/card12.jpg' },
  { id: 13, name: '木剣', description: '修行用に作られたただの木剣', unlocked: false, rarity: 4, imageUrl: 'images/card13.jpg' },
  { id: 14, name: '村長キングゴブリン', description: 'ゴブリン村の長 見た目からいつも可愛がられる', unlocked: false, rarity: 5, imageUrl: 'images/card14.jpg' },
  { id: 15, name: 'ツインタガー', description: '鎖で繋がれた剣 扱うには時間がかかる', unlocked: false, rarity: 1, imageUrl: 'images/card15.jpg' },
  { id: 16, name: 'スライム〜戦闘態勢〜', description: 'やる気あふれるスライム 強さは･･･', unlocked: false, rarity: 2, imageUrl: 'images/card16.jpg' },
  { id: 17, name: '狼牙剣', description: '鍔が狼でできた剣 使う度に使用者の命を喰らう', unlocked: false, rarity: 3, imageUrl: 'images/card17.jpg' },
  { id: 18, name: '神の使いペガサス', description: '神に使える神獣 常に機嫌が悪い', unlocked: false, rarity: 4, imageUrl: 'images/card18.jpg' },
  { id: 19, name: '森の精霊エルフ', description: '森を守るエルフ 侵入者に対して厳しい', unlocked: false, rarity: 5, imageUrl: 'images/card19.jpg' },
  { id: 20, name: '飛べなかった鳥キングペンギン', description: '飛べなかったペンギン 空に憧れを持つ', unlocked: false, rarity: 1, imageUrl: 'images/card20.jpg' },
  { id: 21, name: '誇り高きペルシャ猫', description: '英国育ちのペルシャ猫 常に誰かを見下している', unlocked: false, rarity: 2, imageUrl: 'images/card21.jpg' },
  { id: 22, name: '太古の翼竜プテラノドン', description: 'かつて空を支配した竜 速度は100k/m・hになる', unlocked: false, rarity: 3, imageUrl: 'images/card22.jpg' },
  { id: 23, name: '水勢剣', description: '刀身が水でできた剣 水の流れで刀身が変わる', unlocked: false, rarity: 4, imageUrl: 'images/card23.jpg' },
  { id: 24, name: '鳳凰（青）', description: '人間界に突如現れた神の化身', unlocked: false, rarity: 5, imageUrl: 'images/card24.jpg' },
  { id: 25, name: '熟練魔法使いの杖', description: '魔王を殺した魔法使いが使用した杖', unlocked: false, rarity: 1, imageUrl: 'images/card25.jpg' },
  { id: 26, name: '見習い魔法使いの杖', description: '初めて魔法を使う初心者が使う杖', unlocked: false, rarity: 2, imageUrl: 'images/card26.jpg' },
  { id: 27, name: 'レジェンドバタフライ', description: '1000年に1度生まれる幻の蝶', unlocked: false, rarity: 3, imageUrl: 'images/card27.jpg' },
  { id: 28, name: 'ウリボー', description: 'キレた時にはそのハンマーで敵を叩き潰す', unlocked: false, rarity: 4, imageUrl: 'images/card28.jpg' },
  { id: 29, name: 'はーとの弓矢', description: 'これはカード29の説明です。', unlocked: false, rarity: 5, imageUrl: 'images/card29.jpg' },
  { id: 30, name: '思いの力starlight wings', description: 'これはカード30の説明です。', unlocked: false, rarity: 1, imageUrl: 'images/card30.jpg' },
  { id: 31, name: '猫神様', description: 'これはカード31の説明です。', unlocked: false, rarity: 5, imageUrl: 'images/card31.jpg' },
  { id: 32, name: 'よつばちゃん〜清掃ver〜', description: 'これはカード32の説明です。', unlocked: false, rarity: 5, imageUrl: 'images/card32.jpg' },
  { id: 33, name: '西洋の鎧', description: 'これはカード33の説明です。', unlocked: false, rarity: 5, imageUrl: 'images/card33.jpg' },
  { id: 34, name: '鳳凰（赤）', description: 'これはカード34の説明です。', unlocked: false, rarity: 5, imageUrl: 'images/card34.jpg' },
];

// レアリティに基づく重み付け（変更部分）
const rarityWeights = {
  1: 10,  // コモン
  2: 5,   // アンコモン
  3: 3,   // レア
  4: 2,   // スーパーレア
  5: 1    // ウルトラレア（重みが最も小さい）
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

// ランダムにカードを1枚選ぶ処理（レアリティごとの重み付けを適用）
function getRandomCard() {
  const currentCards = loadCards();
  const weightedCards = [];

  // 除外するカードID
  const excludedCardIds = [31, 32, 33, 34];

  // レアリティごとの重み付けに基づいてカードを追加
  currentCards.forEach(card => {
    if (!excludedCardIds.includes(card.id)) {  // 31, 32, 33, 34を除外
      const weight = rarityWeights[card.rarity] || 1; // rarityWeightsに設定されていない場合は1として扱う
      for (let i = 0; i < weight; i++) {
        weightedCards.push(card);
      }
    }
  });

  // 重み付けされたカードリストからランダムに1枚選ぶ
  const randomIndex = Math.floor(Math.random() * weightedCards.length);
  return weightedCards[randomIndex];
}

// 獲得したカードを表示する
function renderAcquiredCard(card) {
  const cardDetails = document.getElementById('card-details');
  cardDetails.innerHTML = `
    <img src="${card.imageUrl}" alt="${card.name}">
    <h2>${card.name}</h2>
    <p>${card.description}</p>
    <p>レア度: ${card.rarity}</p>
  `;
  
  // カードを表示エリアに追加
  const cardDisplay = document.getElementById('card-display');
  cardDisplay.style.display = 'block';  // 表示
}

// ボタンが押された時にカードをランダムに取得
function handleCardAcquire() {
  const newCard = getRandomCard();
  renderAcquiredCard(newCard);
  
  // カードを引くボタンを無効化
  const openButton = document.getElementById('open-chest-button');
  openButton.disabled = true;

  // ローカルストレージに獲得したカードを保存
  const savedCards = loadCards();
  savedCards.forEach(card => {
    if (card.id === newCard.id) {
      card.unlocked = true; // 獲得したカードをアンロック状態に
    }
  });
  localStorage.setItem('cards', JSON.stringify(savedCards));
}

// メニュー遷移ボタンをクリック
function setupEventListeners() {
  // カードを引くボタンのクリックイベント
  document.getElementById('open-chest-button').addEventListener('click', handleCardAcquire);

  // メニュー遷移ボタンのクリックイベント
  document.getElementById('go-to-page-button').addEventListener('click', () => {
    window.location.href = 'Mainmenu.html'; // メニューページに遷移
  });
}

// ページ読み込み後の初期設定
document.addEventListener('DOMContentLoaded', () => {
  setupEventListeners();
});
