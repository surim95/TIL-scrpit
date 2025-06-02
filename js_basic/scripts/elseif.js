const aniImg = document.querySelector ('main > img');
const topBtn = document.querySelector ('.control .top');
const downBtn = document.querySelector ('.control .down');
const leftBtn = document.querySelector ('.control .left');
const rightBtn = document.querySelector ('.control .right');
const inputMove = document.querySelector ('.io input');
let currentY = 0; //이미지의 y 초기 좌표
let currentX = 0; //이미지의 x 초기 좌표

console.log(topBtn, downBtn, leftBtn, rightBtn, inputMove);
//aniImg.style.transform = 'translate(10px, 10px)';
downBtn.addEventListener('click',downFunc);
topBtn.addEventListener('click',topFunc);
leftBtn.addEventListener('click',leftFunc);
rightBtn.addEventListener('click',rightFunc);
//input 입력창에 허용키를 입력하고 Enter를 누르면 캐릭터가 이동하는 알고리즘
//허용키 : 왼쪽, 오른쪽, 위, 아래
inputMove.addEventListener('keydown',function(e){
    if (e.key === 'Enter') {
        //왼쪽 입력 후 Enter 실행 시 이미지가 왼쪽 20px 이동
        if (inputMove.value === '왼쪽') {
            currentX -=20;
            aniImgTrans();            
        } else if(inputMove.value === '오른쪽') {//조건1 거짓일 때 검사하는 조건 2
            currentX +=20;
            aniImgTrans();
        } else if(inputMove.value === '위') {//조건1,2 거짓일 때 검사하는 조건3
            currentY -=20;
            aniImgTrans();
        } else if(inputMove.value === '아래'){//조건1,2,3 모두 거짓일 때 실행 결과
            currentY +=20;
            aniImgTrans();
        } else {
            alert('입력해주세요');
        }
    }
})
function downFunc() {
    currentY += 20;
    return aniImgTrans()
}
function topFunc() {
    currentY -=20;
    return aniImgTrans()
}
function leftFunc() {
    currentX -= 20;
    return aniImgTrans()
}
function rightFunc() {
    currentX +=20;
    return aniImgTrans()
}
function aniImgTrans() {
    aniImg.style.transform = `translate(${currentX}px,${currentY}px)`;
    return inputMove.value = '';
}