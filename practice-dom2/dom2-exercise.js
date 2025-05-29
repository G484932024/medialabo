//////////////// ここは書き換えてはいけない！ 

let campus = {
	address: "八王子市館町",
	buildingD: ["D101", "D102", "D103", "D201", "D202", "D203", "D204", "D205"],
	lon: 35.624869704425,
	lat: 139.28201056633
};

let gakka = [
	{name: "機械システム工学科", ename: "Department of Mechanical Systems Engineering"},
	{name: "電子システム工学科", ename: "Department of Electronics and Computer Systems"},
	{name: "情報工学科", ename: "Department of Computer Science"},
	{name: "デザイン学科", ename: "Department of Design"}
];

//////////////// ここから下にプログラムを書きたそう!

function showDom() {
	let p=document.createElement('p');//新しい関数pに新しいp要素をいれる
	let i=document.querySelector('h2#addr'); //h２要素のid(addr)を検索してiにいれる
	i.insertAdjacentElement('afterend', p); //iの後にp要素を追加
	p.textContent=campus.address; //p要素にはjsの指定したオブジェクトを表示

	i=document.querySelector('h2#dept');//h２要素のid(dept)を検索してiにいれる
	let u=document.createElement('ul');//新しいul要素を追加
	i.insertAdjacentElement('afterend',u);//iのあとにu要素を追加
	let l=document.createElement('li'); //新しくli要素を追加
	for(let object of gakka){
		l=document.createElement('li');//li要素を更新
		u.insertAdjacentElement('beforeend',l);//ul要素の前にl要素を追加
		l.textContent=object.name;//オブジェクト（name）を表示
	}

}
let b = document.querySelector('button#show');
b.addEventListener('click', showDom);