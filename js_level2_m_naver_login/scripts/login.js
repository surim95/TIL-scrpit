//main .lang_group 기준
//초기설정 : 한국어~중국어 옵션 숨기기
//#lang_select 클릭 시 .lang_open 보이기
//.lang_open이 보이는 상태라면 #lang)select 클릭 시 .lang_open 숨기기
//변수 생성 -> 이벤트 제작 -> 이벤트 만족 시 실행 함수 (중간중간 콘솔 자주 체크)
const langSelectBtn = document.querySelector ('#lang_select');
const langGroupOpen = document.querySelector ('.lang_group .lang_open');
const langSelectChange = document.querySelectorAll ('.lang_group .lang_open > a');
console.log (langGroupOpen, langSelectBtn);
//langGroup 안보이게 (기본 설정)
langGroupOpen.style.display = 'none'
let openif = false; //초기 거짓(숨겨진) 상태
//langSelectBtn 클릭 시 langGroup 보이게 설정
langSelectBtn.addEventListener('click',()=> {
    //langOpen 숨겨진 상태면 보이기
    if (openif == false) {
        langGroupOpen.style.display = 'flex';
        openif = true;//상태값 변경
    } else if (openif == true) {
        langGroupOpen.style.display = 'none';
        openif = false;
    }
    //langOpen 보이는 상태면 숨기기
    /* if (langGroupOpen.style.display === 'none') {
        langGroupOpen.style.display = 'flex';
        } else {langGroupOpen.style.display = 'none'} */
        //바뀌는 것(동적)은 변수로 만들기
        //위 코드로 할 경우: 상태 관리 명확, 명시적, JS로 상태를 명확히 추적할 필요가 있을 때 좋음.
        //아래 코드는 스타일의 초기 설정에 따라 달라질 수 있음.
    })
    langSelectChange.forEach(function (langArray){
        console.log(langArray);
        langArray.addEventListener('click',function(){
            langSelectBtn.textContent = langArray.textContent;
        })
})
