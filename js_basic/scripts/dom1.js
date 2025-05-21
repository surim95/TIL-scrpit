/* dom1.js */
//DOM EVENT
//HTML 태그에서 JS로 동적 제어하고 싶은 대상만 변수로 만든다.
//회원만 주문되는 주문하기 버튼 알고리즘
//(비회원인 경우) 주문하기 버튼을 클릭했을 때 '회원만 주문할 수 있습니다.'
//주문하기 버튼 == DOM 객체 변수
//클릭했을 때 == 버튼 (작성방법: HTML or Javascript)
//회원만 메세지 출력 == 함수
//이벤트리스너 -> 리스너(Listener)란? 특정 이벤트가 발생했을 때 실행할 함수를 의미한다.
const buyBtn = document.querySelector('#buyBtn'); //변수생성
console.log(buyBtn); //변수정상확인
//버튼 onclick 이벤트리스너로 호출할 함수 생성
function unuserOrderMsg (){
    return console.log('회원만 주문가능합니다. 로그인해주세요');
};
//결제하기 클릭 시 '결제 완료되었습니다' 출력 알고리즘
const payBtn = document.querySelector('#payBtn');
console.log(payBtn)
function upOrder () {
    return console.log('결제 완료되었습니다');
};
//아이디 중복확인 클릭 시 '아이디가 중복되지 않습니다. 사용하셔도 좋습니다.' 출력 알고리즘
const idBtn = document.querySelector('#idBtn');
console.log(idBtn)
function checkId() {
    return console.log('아이디가 중복되지 않습니다. 사용하셔도 좋습니다');
};
//키보드 이벤트
//리뷰입력창에 키보드를 눌렀을 때 '50자 이상 입력하세요' 출력 알고리즘
const userReview = document.querySelector('input[name=user_review]');
console.log(userReview);
function review50Msg() {
    return console.log('50자 이상 입력하세요');
};
//id 입력창 객체 준비 후 키보드를 아무키나 입력했을 때 '아이디는 영어로 시작해야합니다.' 출력 알고리즘
const userId = document.querySelector('input[name=user_id]');
console.log(userId);
function userIdMsg() {
    return console.log('아이디는 영어로 시작해야 합니다');
};
//pw 입력창 객체 준비 후 키보드를 아무키나 입력했을 때 '비밀번호는 특수문자 포함 12글자 이상 입력하세요' 출력 알고르즘
const userPw = document.querySelector('input[name=user_pw');
console.log(userPw);
function userPwMsg(){
    return console.log('비밀번호는 특수문자 포함 12글자 이상 입력하세요');
};
//기타 이벤트
//focus
//userId.style.border = '3px solid green'; //즉시 실행 테스트
userId.style.outline = 'none';
function userIdFocus() {
    return userId.style.border = '3px solid green';
};
function userIdFocusOut() {
    return userId.style.border = '1px solid #000';
};
//쇼핑몰 상품 수량 입력 알고리즘
//기본 수량 1
//사용자가 숫자 입력을 위해서 커서를 두면 배경색 노랑변경
//커서를 빼면 배경색이 다시 흰색
const productNum = document.querySelector('input[name=product_num');
console.log(productNum);
function pdNumFocus() {
    return productNum.style.backgroundColor = 'yellow';
};
function pdNumFocusOut() {
    return productNum.style.backgroundColor = '#fff';
};
//문서가 로딩되었을 때 실행함수
function loadMsg () {
    return alert('문서 로딩 완료');
};
console.log('------------------------------------------------');
//객->이->함
const signUpGoogle = document.querySelector('.google_join');
console.log(signUpGoogle);
//자바스크립트에 작성하는 객체 이벤트 문법
//객체.addEventListener('이벤트',콜백함수);
//addEventListener이벤트 작성 시 'on' 없이 이벤트만 작성한다.
signUpGoogle.addEventListener('click',googleGo);
function googleGo() {
    return window.open('https://accounts.google.com','_blank');
}
//네이버, 카카오 로그인
const naverJoin = document.querySelector('.naver_join');
console.log(naverJoin);
const kakaoJoin = document.querySelector('.kakao_join');
console.log(kakaoJoin);
naverJoin.addEventListener('click',naverGo);
function naverGo() {
    return window.open('https://nid.naver.com','_blank');
}
kakaoJoin.addEventListener('click',kakaoGo);
function kakaoGo() {
    return window.open('https://accounts.kakao.com','_blank');
}
//현재 페이지 변경방법
//1. 객체
const fileLink = document.querySelector('.file_link');
console.log(fileLink);
//2. 이벤트
fileLink.addEventListener('click',link0520);
//3. 함수
//JS에서 상대경로로 연결 시 JS파일 기준이 아닌 js가 열결된 html파일이 저장된 위치를 기준으로 상대경로를 작성한다.
function link0520() {
    return window.location.href = 'bom1.html';
}
/* index.html README.md 파일 보기 */
/* 객체 */
const indexLink = document.querySelector('.index_link');
console.log(indexLink);
const readmeLink = document.querySelector('.readme_link');
console.log(readmeLink);
/* 이벤트 */
indexLink.addEventListener('click',linkIndex);
readmeLink.addEventListener('click',linkReadme);
/* 함수 */
function linkIndex() {
    return window.location.href = 'index.html';
}
function linkReadme() {
    return window.location.href = '../README.md'; //README는 html보다 상위폴더에 존재함.
}
/* 상품 수량 증가 알고리즘 */
const numInput = document.querySelector('input[name=num]');
const numBtn = document.querySelector('#num_btn');
const numMinusBtn = document.querySelector('#num_minus_btn');
console.log(numInput, numBtn, numMinusBtn);
numInput.value = 1;
numBtn.addEventListener('click',numUp);
function numUp() {
    let max = 20;
    if (Number(numInput.value) < max) {
        numInput.value = Number(numInput.value) + 1; //++numInput.value; 증감연산자 활용
    } else {
        alert('최대 수량은 20입니다.');
    }
}
numMinusBtn.addEventListener('click',numDown);
function numDown() {
    let min = 1;
    if (Number(numInput.value) > min) {
        numInput.value = --numInput.value;
    } else {
        alert('최소 수량은 1입니다.');
    }
}
//최소 수량이 1이기 때문에 min을 1로 설정하고 사용자가 1씩 감소시킬때 if문에서 설정한 조건에 맞으면 ture 반복문 계속.
//1보다 수량이 감소할 경우 else 반복문 실행. //구조 기억하기.