let num = 2;//0, 400, 800 출력을 위한 변수
const slideContainer = document.querySelector('.slide_container');
const slideTimer = setInterval(()=>{
    num--;
    if(num<0){
        num = 2;
    }
    slideContainer.style.transform = `translateX(-${400*num}px)`;
    console.log(`현재 num:${num}, x축값:${400*num}`)
},3000);
slideContainer.style.transition = 'transform 0.5s';


/* setInterval(numFunc, 2000);
function numFunc (){
    num++;
    console.log(num);
} */
/* const numTimer = setInterval(function(){
    num++;
    console.log(num);
}, 2000); */

/* const numTimer = setInterval(()=>{
    num++;
    console.log(num);
},2000); */

//이벤트의 다양한 함수 호출 방법(콜백, 화살표함수, 익명함수 순서)
//DOM.addEventListner('event',콜백함수)
//DOM.addEventListner('event',()=>{})
//DOM.addEventListner('event',function(){})

//타이머의 다양한 함수 작성방법
//setInterval(콜백함수, 밀리초);
//(위) 특징 : 콜백함수를 재사용할 수 있다.
//const 변수명 = setInterval(익명함수, 밀리초);
//(위) 특징 : 타이머를 담은 변수명으로 타이머 정지, 다시 재생 등의 제어를 할 수 있다.
