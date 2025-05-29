// 11. 상품 옵션 선택 시 색상 선택 후(클릭(X) 변경(O)) 사이즈 선택 가능, 색상 미 선택시 사이즈 선택 불가
// 색상, 사이즈 select 태그 변수 선언
const colorSelect = document.querySelector ('select[name=color]');
const sizeSelect = document.querySelector ('select[name=size]');
console.log(colorSelect, sizeSelect)
sizeSelect.disabled = true; //사이즈 비활성화 초기값 설정
//색상 select를 변경했을 때 이벤트 생성
colorSelect.addEventListener('change', changeFunc);
function changeFunc () { //색상이 변경되었을 때 호출하는 함수
    return sizeSelect.disabled = false; //변경 시 사이즈 재활성화
}