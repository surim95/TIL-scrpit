// 11. 상품 옵션 선택 시 색상 선택 후(클릭(X) 변경(O)) 사이즈 선택 가능, 색상 미 선택시 사이즈 선택 불가
// 색상, 사이즈 select 태그 변수 선언
const colorSelect = document.querySelector ('select[name=color]');
const sizeSelect = document.querySelector ('select[name=size]');
const orderColor = document.querySelector ('.order_select .list .color');
const orderSize = document.querySelector ('.order_select .list .size');
console.log(colorSelect, sizeSelect, orderColor, orderSize)
sizeSelect.disabled = true; //사이즈 비활성화 초기값 설정
//색상 select를 변경했을 때 이벤트 생성
/* colorSelect.addEventListener('change', changeFunc);
function changeFunc () { //색상이 변경되었을 때 호출하는 함수
    return sizeSelect.disabled = false; //변경 시 사이즈 재활성화
} */
console.log('==============================================')
//12-1. 위(12)번 진행 전 새로운 요소(.order_select)숨기기
const orderSelect = document.querySelector('.order_select');
console.log(orderSelect);
orderSelect.style.display = 'none';
//12-2. 위(12)번 색상 -> 사이즈 선택 시 새로운 요소(.order_select)보이기
//색상 -> 사이즈 선택 시 이벤트와 함수 생성
colorSelect.addEventListener('change',orderFunc)
sizeSelect.addEventListener('change',orderFunc2)
function orderFunc() {
    //console.log(0) //정상확인
    sizeSelect.disabled = false; // 사이즈 활성화
    //console.log(colorSelect.value); // 선택한 색상값 확인
    //console.log(sizeSelect.value);
    //특정 상황에서 아래 orderSelect 출력되고 싶다면? 상황을 조건문으로 작성해야한다!
    //orderSelect 출력 조건 -> color의 value값이 존재하는 option 선택 후 size의 value값이 존재하는 option을 추가로 선택했을 경우
    //조건문 연습
    //if(조건문) {조건식이 참일 경우 실행되는 명령}
    //사용자가 선택한 color, size의 값(value)이 모두 참일때 조건 실행(value="" 빈문자열이면 거짓)
}
function orderFunc2() {
    if (colorSelect.value && sizeSelect.value) {
        orderSelect.style.display = 'block';
        orderColor.textContent = colorSelect.value;
        orderSize.textContent = sizeSelect.value;
        colorSelect.value = "";
        sizeSelect.value = "";
        sizeSelect.disabled = true;
    };
}
//13. 수량 조정 시 1~9999개까지 선택 가능 기능
const minusBtn = document.querySelector('#minus');
const orderNum = document.querySelector('.order_num input[name=user_num]');
const plusBtn = document.querySelector('#plus');
const totalPrice = document.querySelector ('.order_select .price em');
const closeBtn = document.querySelector('.order_select .close');
const cartBtn = document.querySelector('#cart_btn');
const buyBtn = document.querySelector('#buy_btn');
let num = 1; //초기수량
let price = 39900
let total = 0; //수량에 따라 가격 계산하는 최종 변수
//13-1,2,3.
console.log(minusBtn, plusBtn, orderNum, totalPrice, closeBtn)
//초기 설정
orderNum.value = num;
//증가 + 버튼 클릭시 수량이 1씩 증가되어 orderNum 출력
plusBtn.addEventListener('click',()=>{
    num++;
    if (num < 1 || num > 9999) {
        alert(`1~9999개까지 선택가능합니다.`)
    }
    if (num <= 9999) {
        total = num * price;
        totalPrice.textContent = total.toLocaleString('ko-kr');
        console.log(total);
        orderNum.value = num;
    }
})
minusBtn.addEventListener('click',()=>{
    num--;
    if (num >= 1 && num <= 9999) {
        alert(`1~9999개까지 선택가능합니다.`)
    }
    if (num >= 1) {
        total = num * price;
        totalPrice.textContent = total.toLocaleString('ko-kr');
        console.log(total);
        orderNum.value = num;
    }
})
//15. 위(12)번에서 나온 박스의 X클릭 시 주문 정보 모두 삭제
closeBtn.addEventListener('click',()=> {
    orderSelect.style.display = 'none';
})
//장바구니 클릭 시 '장바구니 담겼습니다' 메시지 출력
cartBtn.addEventListener('click', ()=> {
    return alert(`장바구니 담겼습니다.`);
})
//cartBtn.addEventListener('click',function(){return alert(`장바구니 담겼습니다.`);})
//cartBtn.addEventListener('click',cartBtnEvent)
//function cartBtnEvent() {return alert(`장바구니 담겼습니다.`);}

//바로구매 클릭 시 '로그인이 필요합니다' 메시지 출력
buyBtn.addEventListener('click',function() {
    return alert('로그인이 필요합니다.');
})