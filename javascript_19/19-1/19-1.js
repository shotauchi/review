// Reactコンポーネントを継承して新たなコンポーネントを作成
class MessageH1 extends React.Component {
  // コンストラクター
  constructor() {
    super();
  }

  //　出力処理
  render() {
    // Reactオブジェクトで「<h1>おはよう</h1>」という新たな要素を作成
    let newElement = React.createElement(
      "h1",       // タグ名
      null,       // props（パラメーターの集合）
      "おはよう"   // 子の値
    );
    return newElement;
  }
  
}

// 表示される場所の要素とコンポーネントを結び付けて表示させる
  const domContainer = document.querySelector("#app");
  ReactDOM.render(
    React.createElement(MessageH1),
    domContainer
  );