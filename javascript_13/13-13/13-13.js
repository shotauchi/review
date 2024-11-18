// 商品リストを表示する要素を取得
var itemListElement = document.getElementById('itemList');

//　商品一覧の表示
function viewItemList(tag) {
    itemListElement.innerHTML = '';
    for (let i = 0; i < itemList.length; i++) {
        if (itemList[i].tags.some(t => t === tag)) {
            // li要素を作成
            let li = document.createElement('li');
            // テキスト情報を作成
            let text = document.createTextNode(itemList[i].id + ':' + itemList[i].name);
            // ul要素に追加
            li.appendChild(text);
            itemListElement.appendChild(li);
        }
    }
}

// 商品一覧の表示
viewItemList('子ども部屋家具');
