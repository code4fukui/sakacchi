import initialCards from '.js/cards.js'; //カードデータをインポート

//カードの獲得条件
const unlockConditions = {
   31: [1, 2, 3],  // カード31はカード1、カード2、カード3が必要
   32: [4, 5, 6],  // カード32はカード4、カード5、カード6が必要
   33: [7, 8, 9],  // カード33はカード7、カード8、カード9が必要
   34: [10, 11, 12], // カード34はカード10、カード11、カード12が必要
};

//ローカルストレージからカードデータを取得、なければ初期データを保存
function loadCards() {
   const savedCards = localStorage.getItem('cards');
   if (savedCards) {
       return JSON.parse(savedCards);
   }
   localStorage.setItem('cards', JSON.stringify(initialCards));
   return initialCards;
}

//ローカルストレージにカードデータを保存
function saveCards(cards) {
   localStorage.setItem('cards', JSON.stringify(cards));
}

//カードの要素を作成
function createCardElement(card) {
   const cardElement = document.createElement('div');
   cardElement.classList.add('card');
   cardElement.dataset.id = card.id;

   //画像を表示
   const cardImage = document.createElement('img');
   cardImage.src = card.imageUrl;
   cardImage.alt = card.name;
   cardElement.appendChild(cardImage);

   //カード名を表示
   const cardName = document.createElement('p');
   cardName.textContent = card.name;
   cardElement.appendChild(cardName);

   //解放されたカードのみクリック可能
   if (card.unlocked) {
       cardElement.addEventListener('click', () => addCardToFolder(cardElement, card.id));
       cardElement.style.cursor = 'pointer';  // クリック可能に見せる
   } else {
       cardElement.style.cursor = 'not-allowed';  // 解放されていない場合クリック不可
   }

   return cardElement;
}

//ページにカードを表示
function displayCards() {
   const cardContainer = document.getElementById('card-container');
   const cards = loadCards();

   // 解放されているカードのみ表示
   const unlockedCards = cards.filter(card => card.unlocked && ![31, 32, 33, 34].includes(card.id));

   // 表示するカードが解放されている場合のみ追加
   cardContainer.innerHTML = ''; // 以前のカードを消す
   unlockedCards.forEach(card => {
       const cardElement = createCardElement(card);
       cardContainer.appendChild(cardElement);
   });
}

//フォルダにカードを追加する処理
function addCardToFolder(cardElement, cardId) {
   const cards = loadCards();
   const card = cards.find(c => c.id === cardId);

   //カードをフォルダに追加
   const folder = document.getElementById('folder');
   const folderCard = cardElement.cloneNode(true);
   folderCard.classList.add('folder-card');
   folder.appendChild(folderCard);

   //カードの状態を変更（unlockedをtrueに）
   card.unlocked = true;
   saveCards(cards); // ローカルストレージに保存

   //カードがフォルダに追加されたら選択済みにする
   cardElement.style.pointerEvents = 'none';
   cardElement.style.backgroundColor = 'lightgray';

   //フォルダ内のカードをチェック
   checkFolderForUnlock();
}

//フォルダ内のカードをチェックし、指定されたカードがすべて入ったか確認
function checkFolderForUnlock() {
   const folder = document.getElementById('folder');
   const folderCards = folder.querySelectorAll('.folder-card');
   const folderCardIds = Array.from(folderCards).map(card => parseInt(card.dataset.id));

   //各カードの獲得条件を確認
   for (let cardId in unlockConditions) {
       const requiredCards = unlockConditions[cardId];

       //必要なカードがすべてフォルダに入っている場合
       if (requiredCards.every(id => folderCardIds.includes(id))) {
           unlockCard(parseInt(cardId)); // 該当するカードを解放
       }
   }
}

//特定のカードを解放
function unlockCard(cardId) {
   const cards = loadCards();
   const card = cards.find(c => c.id === cardId);
   if (card && !card.unlocked) {
       card.unlocked = true;  // 解放
       saveCards(cards); // ローカルストレージに保存
       alert(`${card.name}を獲得しました！`);
   }
}

//フォルダ内のカードをリセットし、カードを再表示
function resetFolder() {
   const folder = document.getElementById('folder');
   folder.innerHTML = '';  // フォルダをリセット

   //ローカルストレージのカードデータはそのままにして、画面上でのみリセット
   displayCards(); // 画面を再描画してカードを表示
}

//リセットボタンにイベントを追加
document.getElementById('reset-button').addEventListener('click', resetFolder);

//最初にカードを表示
displayCards();
