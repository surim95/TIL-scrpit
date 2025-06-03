/* 
switch(조건) {
    case 비교값1: 값1이 참일 때 실행결과;
    break; //위 case 실행 후 switch 끝내기 위한 종료 선언
    case 비교값2: 값2이 참일 때 실행결과;
    break;
    default: 모든 case가 거짓일 때 실행결과;
}
*/
//기본 연습
let a = 5+5;
/* switch(a) {
    case 10:console.log('a는 10이다.'); break;
    case 20:console.log('a는 20이다.'); break;
    case 30:console.log('a는 30이다.'); break;
    default:console.log('모두 일치하지 않음');
} */
if (a === 10) {
    console.log('a는 10이다.');
} else if (a === 20) {
    console.log('a는 20이다.');
} else if (a === 30) {
    console.log('a는 30이다.');
} else {console.log('모두 일치하지 않음')};
// --------------------예제2
//쇼핑몰에서 원하는 과일 검색 시 해당 판매가 표시 알고리즘
//딸기 1000원
//수박 10000원
//오렌지 5000원
//망고 7000원
//판매하지 않는 상품입니다.
//const order = prompt('원하는 과일을 검색하세요');
/* switch (order) {
    case '딸기' : alert('1,000원'); break;
    case '수박' : alert('10,000원'); break;
    case '오렌지' : alert('5,000원'); break;
    case '망고' : alert('7,000원'); break;
    default : alert('판매하지 않는 상품입니다.');
} */
//--------------------예제3. 휴대폰 전화 단축키 알고리즘
//1번 입력 시 엄마
//2번 입력 시 아빠
//3번 입력 시 동생
//해당 단축키가 없습니다
const callNumber = window.prompt('단축키 입력'); //Number(window.prompt('단축키 입력'));
switch(callNumber) {
    case '1' : alert('엄마'); break;
    case '2' : alert('아빠'); break;
    case '3' : alert('동생'); break;
    default : alert('해당 단축키가 없습니다.');
}