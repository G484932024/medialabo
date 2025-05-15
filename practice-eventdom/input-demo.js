let b=document.querySelector("button#print");//要素一つを検索
b.addEventListener("click",greeting);//ボタン b のクリックイベントのハンドラとして greeting を登録


function greeting(){

    let i=document.querySelector('input[name="shimei"]');//input要素のnameの文字列を検索
    let shimei=i.value;//要素iの文字列をshimeiに代入
    let aisatsu="こんにちは,"+shimei+"さん";

    console.log(aisatsu);//イベントが発生した時にする処理

    let p=document.querySelector("p#message");
    p.textContent=aisatsu;//要素のテキストを参照


  }
