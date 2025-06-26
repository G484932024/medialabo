let b=document.querySelector("button#calc");
b.addEventListener("click",greeting);//ボタン b のクリックイベントのハンドラとして greeting を登録
function greeting(){
  let l=document.querySelector('input[name="left"]'); //要素を検索
  let r=document.querySelector('input[name="right"]');

  left=l.value;//要素に文字列をいれる
  right=r.value;

  let x=Number(left);// Integer.parseInt() 整数を代入
  let y=Number(right);

  answer=x+y; 
    console.log(answer);//イベントが発生した時にする処理

    let p=document.querySelector("span#answer");
    p.textContent=answer;//要素のテキストを参照
  }
 


