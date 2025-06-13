//회원가입 버튼 클릭 시 join_msg에 '가입축하합니다' 메세지 출력되고
const joinBtn = document.querySelector('#join');
const joinMsg = document.querySelector('.join_msg');
joinMsg.classList.add('hide'); //초기상태(숨기기)
joinBtn.addEventListener('click',()=>{
    joinMsg.classList.remove('hide');
    joinMsg.textContent = '가입축하합니다';
    //(메시지 출력 후)3초 후 메세지 자동 사라지기
    const hideMsg = setTimeout(()=>{
        joinMsg.classList.add('hide');
    },3000)
})

const payBtn = document.querySelector('#pay');
const payResetBtn = document.querySelector('#pay_reset');
const payMsg = document.querySelector('.pay_msg');
let payMsgOut;
payMsg.classList.add('hide');
payResetBtn.classList.add('hide');
payBtn.addEventListener('click',()=>{
    payMsg.classList.remove('hide'); //숨기는 클래스 제거로 보이게 하기
    payResetBtn.classList.remove('hide'); //결제 취소를 누르면 setTimeout이 멈추게.
    payMsg.textContent = '결제 완료되었습니다.';
    payMsgOut= setTimeout(()=>{
        window.location.href = './timer3.html'; //광고
    },5000);
})
payResetBtn.addEventListener('click',()=>{
    clearTimeout(payMsgOut);
    console.log('setTimeout 이동삭제완료');
})