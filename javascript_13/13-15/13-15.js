// 大分類の選択された時のイベントリスナー
cate1Element.addEventListener('change', function(){
    // 選択されば番号を取得
    var idx = cate1Element.selectedIndex;
    // 大分類の選択に合わせて、小分類の生成
    setSubMenu(idx);
    //　小分類が選択されたときに、最初に表示される値
    viewItemList(cate2[idx][0]);
});
