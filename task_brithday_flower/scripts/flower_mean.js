const birthday_flower = [
    {
        month:1,
        flower:'수선화',
        content:'자기애, 자존심, 외로움',
    },{
        month:2,
        flower:'제비꽃',
        content:'겸손, 양보',
    },{
        month:3,
        flower:'수선화',
        content:'자기애, 자존심, 외로움',
    },{
        month:4,
        flower:'스위트피',
        content:'추억, 즐거움'
    },{
        month:5,
        flower:'은방울꽃',
        content:'희망, 섬세함'
    },{
        month:6,
        flower:'백합',
        content:'순결'
    },{
        month:7,
        flower:'미나리아재비',
        content:'아름다움, 인격'
    },{
        month:8,
        flower:'글라디올러스',
        content:'비밀, 상상, 견고함'
    },{
        month:9,
        flower:'물망초',
        content:'진실한 사랑'
    },{
        month:10,
        flower:'금잔화',
        content:'실망, 비애'
    },{
        month:11,
        flower:'국화',
        content:'성실, 진실'
    },{
        month:12,
        flower:'포인세티아',
        content:'축하, 감사'
    }
]
const userYear = document.querySelector ('input[name*=year');
const userMonth = document.querySelector ('input[name*=month');
const userDay = document.querySelector ('input[name*=day');
const flowerBtn = document.querySelector ('.wrap .question_btn');
const flowerOutput = document.querySelector ('.flower_output');
const flowerOutputChange = document.querySelectorAll ('.flower_output em');
const closeBtn = document.querySelector ('.close_btn');
let todayYear = new Date().getFullYear();
console.log(userYear, userMonth, userDay, flowerBtn, flowerOutput, flowerOutputChange, closeBtn, todayYear);
// 기본값
flowerOutput.style.display = 'none';
closeBtn.style.display = 'none';
// 년,일 입력 제한
flowerBtn.addEventListener ('click',function(){
    yearCheck(); //년도 제한 함수 호출
    monthCheck(); //월 제한 함수 호출
    dayCheck(); //일 제한 함수 호출
    birthday_flower.forEach(function(flowerMonth){
        if (flowerMonth.month == userMonth.value) {
            flowerOutputChange[0].textContent = flowerMonth.month;
            flowerOutputChange[1].textContent = flowerMonth.flower;
            flowerOutputChange[2].textContent = flowerMonth.content;
            flowerOutput.style.display = 'block'
            return closeBtn.style.display = 'block';
        }
    })
})
// 나타난 닫기 버튼을 누르면 메세지랑 닫기 버튼이 사라지는 기능
closeBtn.addEventListener ('click', function(){
    flowerOutput.style.display = 'none'
    closeBtn.style.display = 'none';
})
// focus일 때 value 값 없어지는 기능
userYear.addEventListener('focus', function(){
    this.value = '';
    this.placeholder ='';
})
userMonth.addEventListener('focus', function(){
    this.value ='';
    this.placeholder ='';
})
userDay.addEventListener('focus', function(){
    this.value = '';
    this.placeholder ='';
})
// focus 벗어났을 때 value 값 생기는 기능
userYear.addEventListener('blur', function(){
    this.placeholder ='0000';
})
userMonth.addEventListener('blur', function(){
    this.placeholder ='00';
})
userDay.addEventListener('blur', function(){
    this.placeholder ='00';
})
// 함수
function yearCheck() {
    if (userYear.value < 1800 || userYear.value > todayYear) {
        alert(`1800년부터 현재년도까지 입력해주세요.`);
    }
}
function monthCheck() {
    if (userMonth.value < 1 || userMonth.value > 12) {
        alert(`1월부터 12월까지 입력해주세요.`);
        flowerOutput.style.display = 'none'
        return closeBtn.style.display = 'none';
    }
}
function dayCheck() {
    if (userDay.value < 1 || userDay.value > 31) {
        alert(`1일부터 31일까지 입력해주세요.`);
    }
}
//input number 자릿수 제한
userYear.addEventListener('input',yearLimitNum);
function yearLimitNum() {
    if (!/^.{0,4}$/.test(userYear.value)) {
        userYear.value = userYear.value.slice(0,4);
        userMonth.focus();
    }
} //이 방법이 더 깔끔.
//유연하고 표현력. 다양한 패턴 가능. 단점: 가독성 낮음

/* function yearLimitNum() {
    if (userYear.value.length > 5) {
        userYear.value = userYear.value.slice(0,4);
    }
} */
//직관적, 초보자에게 이해 쉬움. 단점: 조건 변경 시 유연성 낮음.
userMonth.addEventListener('input',monthLimitNum);
function monthLimitNum() {
    if (!/^.{0,2}$/.test(userMonth.value)) {
        userMonth.value = userMonth.value.slice(0,2);
        userDay.focus();
    }
}
userDay.addEventListener('input',dayLimitNum);
function dayLimitNum() {
    if (!/^.{0,2}$/.test(userDay.value)) {
        userDay.value = userDay.value.slice(0,2);
        flowerBtn.focus();
    }
}
//flowerBtn.focus() 이벤트
flowerBtn.addEventListener('focus',function(){
    flowerBtn.style.backgroundColor = '#d1d1d1';
})