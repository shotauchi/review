// 小分類の選択された時のイベントリスナー
cate2Element.addEventListener('change', function(){
    // 選択されば値を取得
    var val = cate2Element.value;
    viewItemList(val);
});
