//portfolio.js
//프로젝트 소개 팝업 알고리즘
//1. 팝업 숨기기
//기본값: display = none으로 설정하고 class가 design인 div안의 a를 클릭하면 팝업이 뜬다.
//클릭한 a의 해당 img경로를 contents div안의 img경로에 넣는다.
//2. 썸네일 이미지(a) 클릭 시 팝업 보이기
//3. (팝업 실행 기준) 배경 클릭 시 팝업 숨기기
//프로젝트 팝업 실행 시 클릭한 대상의 이미지가 출력되는 알고리즘
//1. 클릭한 대상의 이미지 경로 확인
//2. 위 경로를 팝업 이미지의 경로에 대입

//알고리즘 기준 반복해야하는 데이터를 변수로 생성하기
const popupBg = document.querySelector('.popup_bg');
const thumbNailA = document.querySelectorAll('.design > a');
console.log (popupBg,thumbNailA);
//기본 팝업 값
popupBg.style.display = 'none';
//변수로 만든 DOM요소가 여러개일 경우 이벤트를 위해 접근할 때는 인덱스를 사용해서 하나씩 개별 접근해야한다.
//팝업 켜지는 기능
thumbNailA.forEach(function(item) { //익명함수
    //forEach로 thumbNailA의 각 배열의 index를 순회하면서 하나씩 변수item에 넣는다.
    item.addEventListener('click',function(e) {
        e.preventDefault();
        //링크 기본 동작 제거 (맨 위로 올라가는 거)
        //그냥 이벤트라는 의미에서 변수 e (또는 event) 지어준 것.
        popupBg.style.display = 'flex';
        const imgSrc = item.querySelector('img').getAttribute('src');
        const popupImg = popupBg.querySelector('img');
        popupImg.setAttribute('src', imgSrc);
    });
    // this.children[0].src // this이용 시
    // popupBg.children[0].children[0].scr = this.children[0].src;
    // return; 함수종료
});
/* thumbNailA[0].addEventListener('click', openPopup);
function openPopup(){
    popupBg.style.display = 'flex';
} */
//팝업 꺼지는 기능
popupBg.addEventListener('click',closePopup);
function closePopup(){
    popupBg.style.display = 'none';
};