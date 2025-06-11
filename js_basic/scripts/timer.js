function greeting(){
    return console.log('hello');
}

//setInterval(greeting, 3000);
//타이머함수 setInterval 일정시간 반복
let num1 = 0;
function num1Func(){
    if(num1>4) {
        num1 = 0;
    }
    num1++;
    console.log(num1);
    //1234123412341234
}
//setInterval(num1Func, 1000)

let num2 = 0;
//0 ~ 5 반복 출력 타이머
function num2Func(){
    console.log(num2);
    num2++;
    if(num2>5){
        num2 = 0;
    }
}
//setInterval(num2Func, 1000);

//6 ~ 0 출력 타이머 65432106543210...
let num3 = 6;
function num3Func(){
    console.log(num3);
    num3--;
    if(num3<0){
        num3 = 6;
    }
}
setInterval(num3Func, 500);