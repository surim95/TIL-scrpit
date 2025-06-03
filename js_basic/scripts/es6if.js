//삼항조건 연산자 기본 문법
//조건 ? 조건이 참일 때 결과 : 조건이 거짓일 때 결과;
let x = 5;
let y = x+ 10;20

//삼항조건의 참 or 거짓 결과가 콘솔 로그에 출력되는 형태
console.log(y == 15 ? 'o':'x');
let total = x>10 ? 'o':'x';18
console.log(total);
//alert(total);

//연습2. 성인/미성년자 구분하기
//18살 이상이면 '성인입니다' 아니면 '미성년자 입니다.'
/* const userAge = prompt('당신의 나이는?');
total = userAge >=18 ? '성인입니다.' : '미성년자입니다.';
console.log(total); */

//봄 500점, 여름 600점
const game_score = [{
    name: '봄', score: 500,
}, {
    name: '여름', score: 600,
}];
console.log(game_score);
//오늘의 1등은 00이고 점수는 000입니다!
//조건 예시) 봄이가 여름보다 점수가 큰가?
//크면 봄이가 1등
//작으면 여름이가 1등
total = game_score[0].score > game_score[1].score ? game_score[0] : game_score[1];
console.log(`오늘의 1등은 ${total.name}이고 점수는 ${total.score}입니다!`);
// ------------- 삼항 조건 + 리뷰JS
const re = document.querySelector('textarea[name=re]');
const reBtn = document.querySelector('#re_btn');
console.log(re, reBtn);
reBtn.addEventListener('click',()=>{
    //콘솔테스트: 리뷰 내용 출력
    console.log(re.value);
    //콘솔테스트 : 리뷰 글자 수 출력
    console.log(re.value.length);
    //result = 조건 ? 참 :거짓;
    //리뷰 내용이 100자 이상인가?
    //100자 이상이면 '등록완료'
    //아니면 '100자 이상 입력하세요.'
    const result = re.value.length >=100 ? '등록완료' : '100자 이상 입력하세요';
    alert(result);
})
//쇼핑 수량과 가격 알고리즘
//1개 가격 기준 12500원
//쇼핑몰 상품 데이터베이스
const productDB = [{
    name:'떡닭도리탕',
    price: 12500,
    stock: 10, //재고수량(최대구매개수)
},{
    name: '꼬막비빔장',//productDB[1].name
    price: 5800,//productDB[1].price
    stock: 20,//productDB[1].stock
}];
//DOM 변수
const numInput = document.querySelector('input[name=num]');
const minusBtn = document.querySelector('#minus') ;
const plusBtn = document.querySelector('#plus');
const priceP = document.querySelector('.shopping .price');
let num = 1; //주문수량
let result = ''; //결과출력담을변수
console.log(numInput, minusBtn, plusBtn, priceP, productDB);
//초기 주문 수량 표시
numInput.value = num;
priceP.textContent = `${productDB[1].price.toLocaleString('ko-kr')}원`;
//addEvent
//증가 버튼 클릭 시 재고수량만큼 증가하고 재고수량 오버 시 '최대구매수량입니다' 경고창 출력
plusBtn.addEventListener('click',()=>{
    result = num >= productDB[1].stock ? alert('최대구매수량입니다.') : numInput.value = ++num;
    numOperatorFunc(0)
});
//감소 버튼 클릭 시 현재 수량이 1보다 작거나 같으면 '최소구매수량입니다.' 아니면 수량감소
minusBtn.addEventListener('click',()=>{
    /* numInput.value = --num;
    priceP.textContent = `${(num*productDB[1].price).toLocaleString('ko-kr')}원`;
    if (num <= 0){
        numInput.value = 1;
        alert('최소 수량은 1입니다.');
        priceP.textContent = `${(productDB[1].price).toLocaleString('ko-kr')}원`;
    } */
    result = num <= 1 ? alert('최소구매수량입니다.') : numInput.value = --num;
    numOperatorFunc(0)
});
//증가, 감소 버튼 시 반복 실행되는 함수(0,1로 매번 다른 인덱스만 매개변수처리)
function numOperatorFunc(index) {
    numInput.value = num;
    priceP.textContent = `${(num*productDB[index].price).toLocaleString('ko-kr')}원`;
}