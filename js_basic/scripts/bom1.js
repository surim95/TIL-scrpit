/* bom1.js */
//BOM(browser object model) 내장함수
/* const msg1 = window.alert('잠시 기다려주세요');
const msg2 = window.alert('잘못 접근하셨습니다');
console.log(msg1); */
/* const userAge = window.prompt('나이를 입력해주세요');
console.log(userAge); */
/* const userPrint = window.confirm('인쇄하시겠습니까?');
console.log(userPrint); */
/* const userInfo = window.open('https://google.com','_blank') */
//const userWrite = window.document.write('hello JS');
//window.document.write('안녕하세요 자바스크립트'); //대입하는 것이 없을 때(그냥 화면에 나타내는 것이기 때문에)는 굳이 변수를 쓸 필요가 없다. 
//실행함수가 변수에 대입하는 값이 없거나 일회성으로 한번 동작하고 끝나는 경우는 변수를 선언할 필요 없이 바로 내장함수를 작성해도 된다.
//변수선언이 필요한 BOM내장 함수 : prompt(), confirm()
// window.print();
//사용자에 따른 인쇄제한이 있는 사이트라면 인쇄내장함수를 변수에 담아야 한다.
//========================DOM - HTML Node
const pTag = window.document.getElementsByTagName('p');
const h1Tag = window.document.getElementsByTagName('h1');
const h2Tag = document.getElementsByTagName('h2');
const spanTag = document.getElementsByTagName('span');
const ulCls = document.getElementsByClassName('group');
const liCls = document.getElementsByClassName('list');
const liCls2 = document.getElementsByClassName('active');
const wrapId = document.getElementById('wrap');
const dlCls = document.getElementsByClassName('define');
const dtId = document.getElementById('title');
const ddCls = document.getElementsByClassName('contents');
const dtTag = document.getElementsByTagName('dt')[1];
console.log(pTag);
console.log(h1Tag);
console.log(h2Tag);
console.log(spanTag);
console.log(ulCls);
console.log(liCls);
console.log(liCls2);
console.log(wrapId);
console.log(dlCls);
console.log(dtId);
console.log(ddCls);
console.log(dtTag);
//===============DOM 객체 속성
//객체.style = 'CSS속성:값';
pTag[0].style = 'background-color: red';
pTag[1].style = 'background-color: yellow';
ulCls[0].style = 'border: 2px solid aqua';
liCls[0].style = 'border-bottom: 2px solid red';
liCls[1].style = 'border-bottom: 2px solid orange';
liCls[2].style = 'border-bottom: 2px solid yellow';
liCls[3].style = 'border-bottom: 2px solid green';
liCls2[0].style = 'color : brown';
liCls2[1].style = 'color : coral';
wrapId.style = 'padding: 30px';
func.style = 'color: red';
dlCls[0].style = 'background-color: lime';
dtId.style = 'background-color: orange';
ddCls[0].style = 'background-color: brown';
ddCls[1].style = 'background-color: red';
dtTag.style = 'background-color: yellow';
// 위와 같이 style 속성을 이용한 CSS는 일반 CSS 선택자와 다르게 가장 우선순위가 높은 개념으로 적용된다. 적용 후 모습은 웹브라우저 F12 개발자도구에서만 확인 가능하다.
//CSS 우선순위: 자바스크립트 style 속성 > ID > Class > Tag
console.log('===============================================');
//ES6 querySelector 선택
const order01 = document.querySelector('.order');
const orderLi = document.querySelectorAll('.order li');
const orderToday = document.querySelector('#today');
const orderItem = document.querySelector('.order .item');
console.log(order01);
console.log(orderLi);
console.log(orderToday);
console.log(orderItem);
orderLi[0].style = 'font-size: 2.5rem';
orderToday.style = 'color : red';
orderItem.style = 'background-color: yellow'
console.log('-----------------------------------------');
/* 모든 a의 글자색 검정
nav 배경색
gnb의 자식li는 테두리 두께1, lnb의 자식 li테두리 두께 2
gnb, lnb 각각 다른 배경색 */
const aStyle = document.querySelectorAll('nav a');
const navStyle = document.querySelector('nav');
const gnbLiStyle = document.querySelectorAll('.gnb > li');
const lnbLiStyle = document.querySelectorAll('.lnb > li');
const gnbStyle = document.querySelector('.gnb');
const lnbStyle = document.querySelector('.lnb');
console.log(aStyle);
console.log(navStyle);
console.log(gnbLiStyle);
console.log(lnbLiStyle);
console.log(gnbStyle);
console.log(lnbStyle);
aStyle[0].style = 'color: #000';
aStyle[1].style = 'color: #000';
aStyle[2].style = 'color: #000';
aStyle[3].style = 'color: #000';
navStyle.style = 'background-color: yellow';
gnbLiStyle[0].style = 'border: 1px solid aqua';
gnbLiStyle[1].style = 'border: 1px solid aqua';
lnbLiStyle[0].style = 'border: 2px solid red';
lnbLiStyle[1].style = 'border: 2px solid red';
gnbStyle.style = 'background-color: orange';
//lnbStyle.style = 'background-color: lime';
//객체.속성 = '값';
//객체.속성.속성 = '값';
lnbStyle.style.backgroundColor = 'lime';
lnbStyle.style.padding = '30px';
console.log('--------------------------------');
let a = 10;
let b = "10";
console.log(a, typeof a); //10 Number
console.log(b, typeof b); //10 String
/* let age = prompt('당신의 나이는?');
alert(typeof age); */
//prompt로 사용자가 입력하는 값은 무조건 문자(String)으로 처리된다.(암시적 형변환)
//자동으로 형변환 된 데이터타입이 문자인 경우 숫자로 바꾸고 싶다면 명시적형변환 중 숫자로 변환해주는 Number() 내장함수를 사용한다.
//Number(숫자로 변환하고 싶은 데이터 또는 함수)
//const age = prompt('당신의 나이는?');
/* const age = Number(prompt('당신의 나이는?')); */
//(위) 프로그래밍 동작 순서
//1. prompt('당신의 나이는?') 사용자가 입력한 값을 문자로 자동변환
//2. Number() prompt가 문자로 변환한 값을 숫자로 명시적변환
//3. age = 변수 age에 숫자로 변환한 값을 대입
//console.log(`올해 당신의 나이는 ${Number(age)}살 입니다.`);
//console.log(`내년 당신의 나이는 ${Number(age)+1}살 입니다.`);
console.log('쇼핑몰 구입 알고리즘=================================================');
//상품 1개 가격 기준 15700원
//현재 이벤트 중 1+1
//1. 사용자가 구입할 물건 개수 정하기
//2. 개수에 따라 최정 가격 구하기
//결과 예) 구입할 물건은 ?개이고 이벤트 상품 ?개가 추가됩니다. 총 결제 금액은 ?원입니다.
let price = 15700;
const productQa = Number(prompt('구입할 개수를 입력하세요'));
const eventNum = productQa; //이벤트 증정 개수
const total = productQa*price;
alert(`구입할 물건은 ${productQa}개이고 이벤트 상품 ${eventNum}개가 추가됩니다. 총 결제 금액은 ${total}원입니다.`);