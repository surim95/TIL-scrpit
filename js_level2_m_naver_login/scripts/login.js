//main .lang_group 기준
//초기설정 : 한국어~중국어 옵션 숨기기
//#lang_select 클릭 시 .lang_open 보이기
//.lang_open이 보이는 상태라면 #lang)select 클릭 시 .lang_open 숨기기
//변수 생성 -> 이벤트 제작 -> 이벤트 만족 시 실행 함수 (중간중간 콘솔 자주 체크)
const langSelectBtn = document.querySelector ('#lang_select');
const langGroupOpen = document.querySelector ('.lang_group .lang_open');
const langSelectChange = document.querySelectorAll ('.lang_group .lang_open > a');
console.log (langGroupOpen, langSelectBtn, langSelectChange);
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
//네이버 로그인 에러 메세지 알고리즘
/* 
조건1) 아이디와 비밀번호를 모두 입력하지 않고 로그인 클릭 시
조건1 결과) 아이디 또는 전화번호를 입력해 주세요.
조건2) 아이디 작성O, 비밀번호 작성X 로그인 클릭 시
조건2 결과) 비밀번호를 입력해 주세요.
조건3) 아이디 작성O, 비밀번호 작성O 로그인 클릭 시
조건3 결과) 한번 틀릴 시: 아이디(로그인 전화번호, 로그인 전용 아이디) 또는 비밀번호가 잘못 되었습니다. 아이디와 비밀번호를 정확히 입력해 주세요.
조건4) 조건3 상황에서 로그인 실패가 3회 이상일 때 
조건4 결과) 영수증 퀴즈와 ' 아이디(로그인 전화번호, 로그인 전용 아이디) 또는 비밀번호가 잘못 되었습니다. 아이디와 비밀번호를 정확히 입력해 주세요.' 메세지 출력
조건5) 조건4 상황에서 페이지 새로고침할 시
조건5 결과) 다시 로그인해 주세요.
*/
//네이버 회원 정보 저장 DB
const naverUserDB =[{
    id: 'aaa',
    pw: 'a1234',
},{
    id: 'bbb',
    pw: 'b1234',
}
]
//조건1) 아이디와 비밀번호를 모두 입력하지 않고 로그인 클릭 시
//조건1 결과) 아이디 또는 전화번호를 입력해 주세요.
const errorMsg = document.querySelector ('#login_frm .error_msg');
const loginBtn = document.querySelector ('#login_btn');
const userId = document.querySelector ('#login_frm .id_pw_wrap input[name*=id]');
const userPw = document.querySelector ('#login_frm .id_pw_wrap input[name*=pw]');
console.log(errorMsg, loginBtn, userId, userPw, naverUserDB);
errorMsg.style.display = 'none'
loginBtn.addEventListener('click',()=>{
    errorMsg.style.display = 'block'
    naverUserDB.forEach(function(naverUserDBIndex){
        //삼항조건 활용 조건1
        //조건식 ? 조건식 참 결과 : 조건식 거짓 결과
        //조건결과 대입 변수 = 조건식 ? 조건식 참 결과 : 조건식 거짓 결과
        //아이디와 비밀번호를 모두 입력 안할 시(참) 실행결과
        //errorMsg.textContent = userId.value == '' && userPw.value == '' ? '아이디 또는 전화번호를 입력해 주세요.' : ''
        //리액트는 if 보다 삼항조건을 많이 사용.
        if (userId.value == '' && userPw.value == '') {
            errorMsg.textContent = '아이디 또는 전화번호를 입력해 주세요.';
        }
        //조건2) 아이디 작성O, 비밀번호 작성X 로그인 클릭 시
        //조건2 결과) 비밀번호를 입력해 주세요.
        else if (userPw.value == '') {
            errorMsg.textContent = '비밀번호를 입력해 주세요.';
        }
        //조건3) 아이디 작성O, 비밀번호 작성O 로그인 클릭 시
        //조건3 결과) 한번 틀릴 시: 아이디(로그인 전화번호, 로그인 전용 아이디) 또는 비밀번호가 잘못 되었습니다. 아이디와 비밀번호를 정확히 입력해 주세요.
        /* else if (userId.value == '') {
            errorMsg.textContent = '아이디 또는 전화번호를 입력해 주세요.';
        } */
        else if (userId.value == naverUserDBIndex.id && userPw.value == naverUserDBIndex.pw) {
            console.log('id일치')
            errorMsg.style.display = 'none';
            //아이디와 비밀번호가 DB서버의 0인덱스 값과 모두 일치할 때 네이버 메인페이지로 이동
            window.location.href = 'http://naver.com';
        } else {
            errorMsg.textContent = '아이디(로그인 전화번호, 로그인 전용 아이디) 또는 비밀번호가 잘못 되었습니다. 아이디와 비밀번호를 정확히 입력해 주세요.';
        }
    })
});
userId.addEventListener('focus',()=> userId.placeholder = ''
)
userId.addEventListener('blur',()=> userId.placeholder = '아이디 또는 전화번호'
)