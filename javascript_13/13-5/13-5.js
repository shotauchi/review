// 大分類
let cate1 = [
    '---',                  // 未選択
    '家具',
    'ベッド・マットレス',
    '収納家具・収納グッズ',
    '子ども家具'
];

// 小分類
let cate2 = [
    // 未選択
    ['---'],
    // 家具のカテゴリ
    ['ベッド','ソファ','棚・ラック','テーブル・椅子'],
    // ベッド・マットレスのカテゴリ
    ['ベッド','寝具','マットレス'],
    // 収納家具・収納グッズ'のカテゴリ
    ['家具・ラック','収納システム'],
    // 子ども家具
    ['子ども部屋家具','ベビー家具・ベビーグッズ']
];

// 大分類のselectをid属性により取得
let cate1Element = document.getElementById('mainMenu');

// 大分類のoptionを追加する関数
function setMainMenu() {
    // 取得したselectの子要素（option）を空白にすることによってすべて削除
    cate1Element.innerHTML = '';

    // 大分類の配列に保存されている数だけoptionとして追加する
    for (let i = 0; i < cate1.length; i++) {
        // option要素を新規に作成
        let option = document.createElement('option');
        option.value = cate1[i];    // optionの値に配列の値を代入
        option.text = cate1[i];     // optionの表示文字列に配列の値を代入
        cate1Element.appendChild(option); // select要素の子要素としてoption要素を追加        
    }
}

// 小分類のselectをid属性により取得
let cate2Element = document.getElementById('subMenu');

// 小分類のoptionを追加する関数
function setSubMenu(idx) {
    // 取得したselectの子要素（option）を空白にすることによってすべて削除
    cate2Element.innerHTML = '';

    // 大分類の配列に保存されている数だけoptionとして追加する
    for (let i = 0; i < cate2[idx].length; i++) {
        // option要素を新規に作成
        let option = document.createElement('option');
        option.value = cate2[idx][i];    // optionの値に配列の値を代入
        option.text = cate2[idx][i];     // optionの表示文字列に配列の値を代入
        cate2Element.appendChild(option); // select要素の子要素としてoption要素を追加        
    }
}




//--- プログラムの実行 ---
// 大分類の生成
setMainMenu();
// 小分類の生成
setSubMenu(1);
