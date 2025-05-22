/* insta.js */
// 인스타그램 알고리즘
//1. 1행 사진, 닉네임, 인증 부분 누르면 프로필 페이지로 이동 (html추가 필요)
//클릭 == 터치 동일 이벤트 처리
const profileDom = document.querySelector('.profile');
console.log(profileDom);
profileDom.addEventListener ('click',goProfile);
function goProfile() {
    return window.location.href = 'insta_profile.html';
}

//2. 메뉴를 누르면 저장~신고 등 기능 실행 메뉴가 나옴 (html추가 필요)
//3. 이미지를 한번 터치시 반응없음. (js없음)
//4. 두번 터치 시 좋아요 자동 등록. O
const photo = document.querySelector('main > .photo');
const likeIcon = document.querySelector('.like > img');
/* console.log(photo, likeIcon);
console.log(likeIcon.src); */ //객체.속성 = 값;
photo.addEventListener ('dblclick',likeOnOff);
/* function likeOn() {
    likeIcon.src = "./images/icons/like_on.png";
} */
function likeOnOff() {
    if (likeIcon.src.includes("like_off.png")) {
        //src ==로 비교할 경우 false만 나옴. 포함으로 찾기.
        likeIcon.src = "./images/icons/like_on.png";
    } else {
        likeIcon.src = "./images/icons/like_off.png";
    }
}
//5. 좋아요 아이콘 한번 터치하면 좋아요, O 다시 터치 시 좋아요 해제 반복 (조건문공부 필요)
// likeIcon.addEventListener ('click',likeOnOff);

//(위) likeIcon 클릭 시 실행되는 콜백함수
//(아래) likeIcon 객체가 a태그로 클릭 시 새로고침되어 스크롤이 위로 올라가는 문제 해결을 위한 방법
//콜백함수 호출리 아닌 익명함수 또는 화살표 함수 이용 필수
//익명함수 또는 화살표함수로 작성 시 이벤트 앞 객체 정보가 함수의 매개변수 정보로 자동으로 대입된다.
//위 매개변수가 받은 정보를 확인하려면 매개변수에 변수명을 작성하고 console.log()로 확인할 수 있다.
likeIcon.addEventListener ('click', function (e) {
    //console.log(e);
    e.preventDefault(); //태그의 동적기능 취소
    likeOnOff();
});


//6. 댓글 아이콘을 누르면 댓글 입력창이 실행, 실행화면에서 바깥쪽 영역 터치하면 댓글 입력창 닫힘 (html추가 필요)
//7. 공유 아이콘을 누르면 공유 가능 계정들 표시된 창 실행, 바깥쪽 영역 터치 시 닫힘 (html추가 필요)
//8. 즐겨찾기 아이콘을 누르면 저장됨(x DB필요)이란 안내문과 컬렉션에 저장이 메인 이미지 하단에 나타나고 컬렉션 선택 출력.(html추가 필요) 다시 터치하면 저장이 해제된다. (O)
//9. 글 1줄, 날짜만 미리표시, 글 터치 시 전체 내용(나머지 글 줄과 해시태그 포함) 펼치기 (O)
const storyDom = document.querySelector ('.story');
const dayDom = document.querySelector ('.day');
const tagDom = document.querySelector ('.tag');
console.log(storyDom, dayDom);
//함수를 생성하지 않고 바로 작성한 이유? 즉시 실행되고 반복이 아니기 때문에.
tagDom.style.display = 'none';
//글 클릭 시 태그 표시
storyDom.addEventListener ('click',tagShow);
function tagShow () {
    if (tagDom.style.display == 'none') {
        tagDom.style.display = 'block';}
    else {tagDom.style.display = 'none';}
}
//10. 해시태그 터치 시 해당 태그 사용 게시글 페이지 이동 (html추가 필요)
console.log(tagDom);
tagDom.addEventListener ('click',goTag);
function goTag () {
    return window.location.href = 'insta_tag.html';
}
//별도의 동적 기능 없이 단순한 링크만 있는 경우는 js없이 a태그에 링크 걸기
//동적기능 예) 해외IP접속차단, 동일IP접속차단, 성인사이트접속인증, 로그인에 따른 접속가능 페이지일 경우 로그인 유무 확인 등

//11. 날짜 터치 기능 없음 (js없음)
//추가 페이지 목록
//1. 프로필 페이지(insta_profile.html)
//2. 메뉴(저장~신고) 페이지
//3. 댓글 페이지
//4. 공유 페이지
//5. 컬렉션 페이지
//6. 해시테그 페이지(insta_tag.html)