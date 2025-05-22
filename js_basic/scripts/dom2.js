//0522 DOM 이벤트와 함수
//함수의 매개변수, 익명함수, 화살표함수
//function 함수명(매개변수, 매개변수){실행}
//const 변수명 = function(){실행}
//const 변수명 = (매개변수) => {실행}
const bg = document.querySelector('#bg');
const bg1Btn = document.querySelector('#bg1_btn');
const bg2Btn = document.querySelector('#bg2_btn');
console.log(bg, bg1Btn, bg2Btn);
bg.style.height = '100vh';
bg.style.backgroundColor = 'yellow';
//버튼에 마우스 올렸을 때 변경색 변경 제어(aqua) 알고리즘
//이벤트와 함수 생성 후 생성한 함수를 이벤트 내 콜백함수로 불러오기
bg1Btn.addEventListener ('mouseover',bg1BtnColor);
bg1Btn.addEventListener ('mouseout', bgBack);
function bg1BtnColor () {
    return bg.style.backgroundColor = 'aqua';
}
function bgBack () {
    return bg.style.backgroundColor = 'yellow';
}
/* bg2Btn.addEventListener ('mouseover', bgChange('coral')); */
//(위 에러 해결법) 객체 이벤트에서 매개변수가 있는 함수를 호출하려면 익명함수 또는 화살표 함수로 변경해야 호출이 가능하다.
bg2Btn.addEventListener ('mouseover',function(){
    bgChange('coral');//익명함수 내에서 매개변수가 있는 함수를 호출
});
bg2Btn.addEventListener ('mouseout', () => {
    bgChange('brown');//화살표함수 내에서 매개변수가 있는 함수를 호출
});
//매개변수 ver함수
function bgChange(color) {
    return bg.style.backgroundColor = color;    
}