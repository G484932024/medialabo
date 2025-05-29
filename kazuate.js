// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;

// 予想を4回実行する
// 将来以下の hantei(); の4回の呼び出しを全て削除する
// 代わりにここでは，ボタンを押したら hantei() を呼び出すイベント処理をする
let kazuate=document.querySelector('button#check');
kazuate.addEventListener('click',hantei);

// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
  // 将来ここでは 4 ではなくテキストボックスに指定された数値を yoso に代入する
  let x = document.querySelector('input[name=yoso]');
  yoso=Number(x.value);

  kaisu=kaisu+1;

  console.log(kaisu +"回目の予想："+yoso);
  let y=document.querySelector('span#kaisu');
  y.textContent=kaisu+"回目の予想：";

  let z=document.querySelector('span#answer');
  z.textContent=yoso;

  let a=document.querySelector('p#result');
  
  // 課題3-1: 正解判定する
  // kotae と yoso が一致するかどうか調べて結果を出力

 
  
  if (yoso===kotae && kaisu<3){
    console.log("正解です．おめでとう");
    a.textContent='正解です．おめでとう';
  }
  else if(kaisu<3 && yoso<kotae){
    console.log("まちがい．答えはもっと大きいですよ");
    a.textContent='まちがい．答えはもっと大きいですよ';
  }
  else if(kaisu<3 && yoso>kotae){
    console.log("まちがい．答えはもっと小さいですよ");
    a.textContent='まちがい．答えはもっと小さいですよ';
  }
  
  else if(kaisu === 3 && yoso !== kotae){
    console.log("まちがい．残念でした答えは "+kotae+"です．");
    a.textContent='まちがい．残念でした答えは '+kotae+'です．';
  }
  else if(kaisu > 3){
    console.log("答えは " +kotae+ " でした．すでにゲームは終わっています");
    a.textContent='答えは ' +kotae+ " でした．すでにゲームは終わっています";
  }
  
  // 課題3-1における出力先はコンソール
}