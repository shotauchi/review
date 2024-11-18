// 小分類の選択された時のイベントリスナー
cate2Element.addEventListener('change', function(){
    // 選択されば番号を取得
    let idx = cate2Element.selectedIndex;
    // 選択されば値を取得
    let val = cate2Element.value;
    // 選択されば値を取得
    console.log(idx);
    console.log(val);
});
