// 初期カードデータ（カード情報）
const initialCards = [
   { id: 1, name: '青薔薇', description: '100年に1度だけ咲く青薔薇 出会うと夢が叶う', unlocked: false, rarity: 4, imageUrl: 'images/bara1.png' },
  { id: 2, name: '赤薔薇', description: '情熱の赤いバラ 好きな人に渡そう♡', unlocked: false, rarity: 2, imageUrl: 'images/bara2.png' },
  { id: 3, name: 'ドクロ', description: 'はずれ！まだまだ頑張ろう！', unlocked: false, rarity: 2, imageUrl: 'images/dokuro.png' },
  { id: 4, name: '雷獣フェンリル', description: '雷をまといし狼 体から100万Vが放出される', unlocked: false, rarity: 4, imageUrl: 'images/fenriru.png' },
  { id: 5, name: 'ストーンゴーレム', description: '悪口に弱い 繊細な心は誰にも理解されない', unlocked: false, rarity: 3, imageUrl: 'images/go-remu.png' },
  { id: 6, name: '伝説の将軍王騎の矛', description: '将軍王騎が使っていた矛 その重さに誰もがひれ伏す', unlocked: false, rarity: 3, imageUrl: 'images/hoko.png' },
  { id: 7, name: '封印されし禁書', description: '書庫に封印されてた禁書 禍々しいオーラが漂う', unlocked: false, rarity: 3, imageUrl: 'images/hon1.png' },
  { id: 8, name: '七風古典', description: '歴代の呪文が全て収録されている', unlocked: false, rarity: 2, imageUrl: 'images/hon2.png' },
  { id: 9, name: 'フォースの力フォトンソード', description: '光の粒子でできたソード 刀身は1000度にもなる', unlocked: false, rarity: 3, imageUrl: 'images/hoso.png' },
  { id: 10, name: '近未来式ハンドガン', description: '近未来的なハンドガン 威力はその都度変えられる', unlocked: false, rarity: 3, imageUrl: 'images/ju.png' },
  { id: 11, name: '日本刀', description: 'かつて魔族を殺すために使われた剣', unlocked: false, rarity: 2, imageUrl: 'images/katana.png' },
  { id: 12, name: 'カワウソ', description: '見た目に対して凶暴な性格をもつ', unlocked: false, rarity: 3, imageUrl: 'images/kawauso.png' },
  { id: 13, name: '木剣', description: '修行用に作られたただの木剣', unlocked: false, rarity: 1, imageUrl: 'images/ki.png' },
  { id: 14, name: '村長キングゴブリン', description: 'ゴブリン村の長 見た目からいつも可愛がられる', unlocked: false, rarity: 3, imageUrl: 'images/kingu.png' },
  { id: 15, name: 'ツインタガー', description: '鎖で繋がれた剣 扱うには時間がかかる', unlocked: false, rarity: 3, imageUrl: 'images/nihonn.png' },
  { id: 16, name: 'スライム〜戦闘態勢〜', description: 'やる気あふれるスライム 強さは･･･', unlocked: false, rarity: 1, imageUrl: 'images/obake.png' },
  { id: 17, name: '狼牙剣', description: '鍔が狼でできた剣 使う度に使用者の命を喰らう', unlocked: false, rarity: 4, imageUrl: 'images/ookami.png' },
  { id: 18, name: '神の使いペガサス', description: '神に使える神獣 常に機嫌が悪い', unlocked: false, rarity: 3, imageUrl: 'images/pegasasu.png' },
  { id: 19, name: '森の精霊エルフ', description: '森を守るエルフ 侵入者に対して厳しい', unlocked: false, rarity: 4, imageUrl: 'images/erufu.png' },
  { id: 20, name: '飛べなかった鳥キングペンギン', description: '飛べなかったペンギン 空に憧れを持つ', unlocked: false, rarity: 2, imageUrl: 'images/pengin.png' },
  { id: 21, name: '誇り高きペルシャ猫', description: '英国育ちのペルシャ猫 常に誰かを見下している', unlocked: false, rarity: 4, imageUrl: 'images/perusya.png' },
  { id: 22, name: '太古の翼竜プテラノドン', description: 'かつて空を支配した竜 速度は100k/m・hになる', unlocked: false, rarity: 2, imageUrl: 'images/puteranodon.png' },
  { id: 23, name: '水勢剣', description: '刀身が水でできた剣 水の流れで刀身が変わる', unlocked: false, rarity: 4, imageUrl: 'images/suisei.png' },
  { id: 24, name: '鳳凰（青）', description: '人間界に突如現れた神の化身', unlocked: false, rarity: 4, imageUrl: 'images/tori2.png' },
  { id: 25, name: '熟練魔法使いの杖', description: '魔王を殺した魔法使いが使用した杖', unlocked: false, rarity: 3, imageUrl: 'images/tue1.png' },
  { id: 26, name: '見習い魔法使いの杖', description: '初めて魔法を使う初心者が使う杖', unlocked: false, rarity: 3, imageUrl: 'images/tue2.png' },
  { id: 27, name: 'レジェンドバタフライ', description: '1000年に1度生まれる幻の蝶', unlocked: false, rarity: 4, imageUrl: 'images/tyou.png' },
  { id: 28, name: 'ウリボー', description: 'キレた時にはそのハンマーで敵を叩き潰す', unlocked: false, rarity: 2, imageUrl: 'images/uribou.png' },
  { id: 29, name: 'ハートの弓矢', description: '撃ち抜かれた人は恋に落ちてしまう', unlocked: false, rarity: 2, imageUrl: 'images/yumiya.png' },
  { id: 30, name: '思いの力starlight wings', description: '想いの力でリボンの大きさが変わる', unlocked: false, rarity: 4, imageUrl: 'images/ribonn.png' },
  { id: 31, name: '猫神様', description: '人々に幸福を与えるために突如現れるねこ', unlocked: false, rarity: 5, imageUrl: 'images/kawaii.png' },
  { id: 32, name: 'よつばちゃん〜清掃ver〜', description: 'みんなゴミ拾いしてありがとう！これからも続けてね！', unlocked: false, rarity: 5, imageUrl: 'images/yotuba.png' },
  { id: 33, name: '西洋の鎧', description: '中世の時代に英雄が着ていた鎧', unlocked: false, rarity: 5, imageUrl: 'images/yoroi.png' },
  { id: 34, name: '鳳凰（赤）', description: '本物の神の化身 見た人は幸せになるとか･･･', unlocked: false, rarity: 5, imageUrl: 'images/tori1.png' }
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
