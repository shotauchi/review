// 小分類のselectをid属性により取得
let cate2Element = document.getElementById('subMenu');

// 小分類のoptionを追加する関数
function setSubMenu() {
    // 取得したselectの子要素（option）を空白にすることによってすべて削除
    cate2Element.innerHTML = '';

    // 大分類の配列に保存されている数だけoptionとして追加する
    for (let i = 0; i < cate2[1].length; i++) {
        // option要素を新規に作成
        let option = document.createElement('option');
        option.value = cate2[1][i];    // optionの値に配列の値を代入
        option.text = cate2[1][i];     // optionの表示文字列に配列の値を代入
        cate2Element.appendChild(option); // select要素の子要素としてoption要素を追加        
    }
}

// 小分類の生成
setSubMenu();
