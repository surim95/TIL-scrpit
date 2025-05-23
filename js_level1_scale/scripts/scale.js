//scale.js
//다이어트 체중계 알고리즘
//사용자가 본인의 키와 몸무게를 입력하고 버튼을 클릭하면 함수 실행
//계산식 ) 적정체중 = (본인신장-100)*0.9
//결과예 ) 당신의 적정체중은 ?kg이며 ?kg초과되셨습니다.
//미만, 적정체중은 조건문 배워야 가능하므로 나중에 자바스크립트 추가 예정
//객-이-함
const userHeight = document.querySelector('input[name*=height'); 
const userWeight = document.querySelector('input[name*=weight');
const resultBtn = document.querySelector('#result_btn');
const result = document.querySelector('#result');
console.log(userHeight, userWeight, resultBtn, result);
console.log(`초기값 키: ${userHeight.value}`);
console.log(`초기값 몸무게: ${userWeight.value}`);
//사용자 정의 함수 없이 속성 및 내장함수를 작성하면 사용자 동작과 관계없이 즉시 실행된다.
//사용자가 키를 입력한 후 프로그램이 그 값을 인식하게 만드는 법
//값을 실시간으로 입력하는 동안은 프로그램 과부하 및 보안 문제로 함수를 작동하게 해선 안되며 결정 버튼을 따로 만들어두고 버튼에 특정 동작을 해야만 함수가 실행되게 만들어야 한다.
//실시간 함수 허용하는 경우 ) 보안이 필요하지 않은 가벼운 프로그래밍 부분(예) 리뷰 글자 수 제한 등
resultBtn.addEventListener('click',weightCal);
//이벤트 수행 시 호출할 콜백함수 준비
function weightCal() {
    console.log(`입력 키: ${userHeight.value}`);
    console.log(`입력 몸무게: ${userWeight.value}`);
    //입력받고 나서 계산해야 하니까 함수 안에서 변수 선언하고 계산.
    const normalWeight = (Number(userHeight.value)-100)*0.9;
    //input요소일 경우 값 읽기/수정/삭제는 value 속성 사용
    //input이 아닌 요소일 경우 값 읽기/수정/삭제는 textContent 또는 innerHTML 속성 사용
    result.innerHTML = `당신의 적정 체중은 ${normalWeight}Kg이며<br> ${Number(userWeight.value)-normalWeight}Kg <em style = "color: red">초과</em>되셨습니다.`;//CSS에서도 디자인 가능
    console.log(result);
}