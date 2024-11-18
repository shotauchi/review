//--- イベントリスナーの定義 ---
// 大分類の選択された時のイベントリスナー
cate1Element.addEventListener('change', function(){
    // 選択されば番号を取得
    let idx = cate1Element.selectedIndex;
    // 大分類の選択にあわせて、小分類の生成
    setSubMenu(idx);
});
