/* func2.js */
let b = 20;
let c = 30;
/* 중괄호 X "블록{} 밖" => 전역변수 */
function test(/* 전달인자 */) { //블록선언(여기부터 지역시작)
    let a = 10; //지역변수
    console.log(a+b);
}//블록종료(지역종료)
test(); //함수호출(함수밖에서)
// console.log(a); // 지역변수는 전역에서 호출하면 에러
// console.log(a+b); // 위와 동일 에러
console.log(b+c); // 전역변수기 때문에 전역스코프 위치 실행 가능
console.log('--------------------------------------');
let d = 5; // 전역변수
let e = 15; // 전역변수
let f; //전역변수 생성(값 선언 안된 상태 undefined)
let g; //전역변수 생성(값 선언 안된 상태 undefined)
scopeTest(); // 함수 호출
console.log(f); //호출 후 f의 결과를 실행하는 함수기 때문에 25가 실행된다.
//함수 대기상태는 절대 실행되지 않는다. 호출을 해야만 실행된다!
function scopeTest() { //함수 호출 전 대기상태의 함수 생성구조
    f = 25; // 지역변수
    g = 35; // 지역변수
    console.log(d+f); //가능
    console.log(e+g); //가능
}
console.log(f); // 불가능
console.log(g+d); // 불가능
console.log(d+e); // 가능
console.log('-------------------------------------');
let x = 1;
let y;
func1 ();
func2 ();
function func1(){
    y = 5;
    console.log(x+y); //6
}
function func2(){
    let z = 10;
    console.log(x+y+z); //16
}
console.log('헨젤과 그레텔 알고리즘--------------------------------------------------');
function storyFunc1(){
    let person = ['헨젤', '그레텔'];
    let src = '조약돌'
    //헨젤과 그레텔이 조약돌을 이용해서 집을 찾아갔습니다.
    console.log(`${person[0]}과 ${person[1]}이 ${src}을 이용해서 집을 찾아갔습니다.`);
}
function storyFunc2(){
    let person = ['헨젤', '그레텔'];
    let src = '빵부스러기'
    //헨젤과 그레텔이 빵부스러기을 이용해서 집을 찾아갔습니다.
    console.log(`${person[0]}과 ${person[1]}이 ${src}을 이용해서 집을 찾아갔습니다.`);
}
storyFunc1();
storyFunc2();
console.log(`헨젤과 그레텔 알고리즘 - 매개변수-------------------------------`);
function storyFunc(src/* 매개변수 생성 */){
    let person = ['헨젤', '그레텔'];
    //let src = '빵부스러기'
    //헨젤과 그레텔이 조약돌를(을) 이용해서 집을 찾아갔습니다.
    //헨젤과 그레텔이 빵부스러기를(을) 이용해서 집을 찾아갔습니다.
    console.log(`${person[0]}과 ${person[1]}이 ${src/* 실행 */}를(을) 이용해서 집을 찾아갔습니다.`);
}
storyFunc('조약돌'); //매개변수 대입
storyFunc('빵부스러기');
console.log(`커피 레시피 (기본값 포함)------------------------------`);
//function coffeeFunc1(){} 함수를 생성한다. 실행결과가 항상 같으므로 매개변수는 선언하지 않는다.
//function coffeFunc1(data1){} 함수를 생성한다. 결과 실행 시 매번 달라지는 데이터가 1개 있기 때문에 매개변수를 1개 생성한다.
//function coffeFunc1(data1, data2){} 함수를 생성한다. 결과 실행 시 매번 달라지는 데이터가 2개 있기 때문에 매개변수를 2개 생성한다.
//function coffeeFunc1(data1) {}
//function coffeeFunc1(10);
//(위)프로그래밍 해석: 함수를 생성 후 달라지는 데이터 1개에 맞춘 매개변수 1개 생성완료. 이후 함수를 호출하고 매개변수에 대입할 10값 입력.
//매개변수를 생성하고 매개변수에 값을 대입했다면 반드시 함수 내부에 매개변수를 활용한 결과식을 만들어야 한다.
//매개변수 사용 시 호출할 때 매개변수에 전달할 대입값을 작성안해도 함수가 실행되게 하고 싶다면 매개변수 생성 시 기본값을 함께 작성해야 한다. function 함수명(매개변수=기본값){}
function coffeeFunc1(data1=1, data2=0.5) {
    let water = `${data1}컵 물을 채운다`;
    let espresso = `${data2}샷 에스프레소를 넣는다.`;
    console.log(water, espresso);
}
coffeeFunc1(2, 1);
coffeeFunc1(3, 0.5);
coffeeFunc1();
//커피주문 알고리즘(고객입장)
console.log('----------------------------------');
function coffeeOrder(temp, name, count=1) {
    const msg = '잔 주문완료되었습니다.';
    const type = ['따뜻한','차가운'];
    console.log(type[temp], name, count, msg);
}
coffeeOrder(0,'카페라떼', 2);
coffeeOrder(1,'아메리카노', 1);
coffeeOrder(0,'녹차라떼', 2);
coffeeOrder(1,'아메리카노', 1);
console.log('-----------------------------------------함수의 리턴(return)');
//더하기 알고리즘
//함수 내부 {}는 대기 장소로 호출하지 않는 한 절대 실행되지 않는다.
//함수 외부 {}는 밑단 위치로 함수를 호출해서 실행할 수 있다.
//함수 내에서 reture을 작성하면 내부의 데이터를 함수 외부로 반환해 사용한다.
function plusFunc(num=0) {
    let total = num+1;
    return total;
}
plusFunc(0);
plusFunc(1);
//호출할 때 리턴이 보낸 반환값을 묶어주는 실행함수를 별도로 작성한다.
console.log(plusFunc(2));
console.log('---------------------------구구단 알고리즘(리턴과 매개변수)');
let dan99 = '';//빈 문자 초기값
function dan99Func(num){//dan99 = dan99 + `${num}X1 = ${num*1}`;
    dan99 += `${num}X1 = ${num*1}`;
    dan99 += `${num}X2 = ${num*2}`;
    dan99 += `${num}X3 = ${num*3}`;
    dan99 += `${num}X4 = ${num*4}`;
    dan99 += `${num}X5 = ${num*5}`;
    dan99 += `${num}X6 = ${num*6}`;
    dan99 += `${num}X7 = ${num*7}`;
    dan99 += `${num}X8 = ${num*8}`;
    dan99 += `${num}X9 = ${num*9}`;
    return dan99;
}
dan99Func(2);
console.log(dan99Func(2));
console.log('----------------------------------------------할인율 계산기');
//27900원을 입력했을 때(가격은 달라질 수 있음)
//입력한 가격에 대한 5%, 10%, 20%, 30%, 40%, 50% 할인율 동시 출력
//10% 할인율 계산법: 가격* 0.9
let discountResult = '';
function discount(price){
    const dis = [5,10,20,30,40,50];
    discountResult += `${dis[0]}% 할인 = ${price*0.95} `;
    discountResult += `${dis[1]}% 할인 = ${price*0.9} `;
    discountResult += `${dis[2]}% 할인 = ${price*0.8} `;
    discountResult += `${dis[3]}% 할인 = ${price*0.7} `;
    discountResult += `${dis[4]}% 할인 = ${price*0.6} `;
    discountResult += `${dis[5]}% 할인 = ${price*0.5} `;
    return discountResult;
}
console.log(discount(27900));
console.log('-------------------------------------------');
const basic = [0,1,2,3,4,5,6,7,8,9]
let ch = 15;
const result = basic.map(function(num){return num *ch});
console.log(result);
const result2 = basic.map (num => num * ch);
console.log(result2);
//함수 5/20---------------------------------------------------------------------------
console.log('---------------------------------------------');
//익명함수란? 변수 내 function 키워드를 지정해 대입하는 함수
//함수 자체의 이름이 아닌 변수 이름에 의존해서 할당되기 때문에 익명함수라고 부른다.
//function greeting(){} // 일반함수
const greeting = function(){
    console.log('hello');
}; //익명함수
greeting(); //익명함수 호출은 함수명이 아닌 변수명으로 호출한다.
//일반함수는 선언보다 호출을 먼저해도 오류가 발생하지 않지만 익명함수는 선언보다 호출을 먼저 하면 오류가 발생한다.
console.log('--------------------------------------------화살표 함수 ES6');
//화살표 함수는 일반함수가 아닌 익명함수일 때 함수를 간결하게 줄이는 목적으로 사용한다.
//function을 => 기호로 바꿔서 사용한다.
//대입연산자(=)와 화살표함수(=>)를 붙여서 사용할 수 없기 때문에 매개변수와 함수선언표시 순서를 바꿔서 = () => 로 사용한다.
//일반함수인 경우
function bab (num) {
    return '밥'+num+'공기 주세요';
};
console.log(bab(2));
//화살표함수인 경우
const bab2 = (num) => {return '밥'+num+'공기 주세요'};
console.log(bab2(2));
//함수 호출할 때마다 아래와 같은 결과 출력하기(매개변수 활용)
const bab3 =(menu) =>{return menu+'주세요'};
console.log(bab3('밥'));
console.log(bab3('반찬'));
console.log(bab3('국'));
//밥 주세요, 반찬 주세요, 국 주세요
//const 변수 = (매개변수) => {return 함수반환값}
//변수() //익명함수호출식
