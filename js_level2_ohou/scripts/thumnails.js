// 1. 작은 썸네일 이미지 마우스 올렸을 때 큰 이미지 변경
const smallThum = document.querySelectorAll ('.small > a');
const bigThum = document.querySelector ('.big img');
//console.log(smallThum, bigThum); //5개, 1개 모두 출력
//콘솔 확인 시 1개의 DOM 요소가 아닌 [index]표시된 여러 개 DOM요소로 출력될 때는 실제 사용시 요소 [index]를 붙여서 사용해야 한다.
//thum2에 마우스 올렸을 시 big 이미지가 big2로 변경
/* smallThum[1].addEventListener ('mouseover', function(){
    bigThumSrc(2)
});
function bigThumSrc(num) {
    //return bigThum.src = "./images/big"+num+".jpg"; 
    return bigThum.src = `./images/big${num}.jpg`
} */
/* smallThum.forEach(function(srcNum, index){ //forEach로 넣는데 배열의 순서가 필요하니까 배열 0부터 시작하는 index 사용하기.
    srcNum.addEventListener('mouseover',function(){//forEach로 넣은 이미지의 이벤트
        bigThum.src = `./images/big${index+1}.jpg`
    })
}) */
// 테두리 활성화 추가 ver
//첫번째 썸네일 활성화 디자인(CSS)
/* smallThum[0].style.border = "2px solid #0aa5ff" */
smallThum[0].addEventListener('mouseover', function() {
    bigThumSrcBorder(1, this)
})
smallThum[1].addEventListener('mouseover', function() {
    bigThumSrcBorder(2, this)
})
smallThum[2].addEventListener('mouseover', function() {
    bigThumSrcBorder(3, this)
})
smallThum[3].addEventListener('mouseover', function() {
    bigThumSrcBorder(4, this)
})
smallThum[4].addEventListener('mouseover', function() {
    bigThumSrcBorder(5, this)
})
function bigThumSrcBorder (num, target) {
    //현재 마우스 올린 작은썸변수에 테두리 생성(this(현재이벤트대상)활용)
    smallThum[0].style.border ='0'
    smallThum[1].style.border ='0'
    smallThum[2].style.border ='0'
    smallThum[3].style.border ='0'
    smallThum[4].style.border ='0'
    target.style.border = "2px solid #0aa5ff"
    return bigThum.src = `./images/big${num}.jpg`
}
// this 
// * 특정 DOM요소의 이벤트(click, mouseover etc) 내에서 작성하는 키워드
// 이벤트 요소가 달라도 this는 이벤트 내에서 해당 요소를 가리키는 통합명칭으로 사용할 수 있기 때문에 쉬운 선언이 가능하다.
// 주의점) 화살표함수에서는 사용이 안되며 익명 함수에서만 사용 가능하다.
// DOM.이벤트리스너(이벤트, ()=>{ this }) // X
// DOM.이벤트리스너(이벤트, 익명함수(){ this }) // O
// 주의점2) 이벤트 내에 호출하는 함수라 해도 함수 내부에 this를 직접적으로 작성해서는 안되며 이벤트 익명 함수 내에서 작성해야 한다.
// DOM.이벤트리스너(이벤트, 익명함수() { 함수호출(this)}) // O
// function 호출한 함수명() { this } // X