//데스크탑 메뉴 복제 -> 모바일 메뉴 붙여넣기
const mNavOpen = document.querySelector('.m_nav_open');
const gnb = document.querySelector('.gnb');
const gnbClone = gnb.cloneNode(true);
console.log(mNavOpen, gnb, gnbClone);
mNavOpen.appendChild(gnbClone);
//데스크탑 nav-lnb 숨기기
const navLnb = document.querySelectorAll('nav .lnb');
//모바일 m_nav_wrap 숨기기
const mNavWrap = document.querySelector('.m_nav_wrap');
console.log(navLnb, mNavWrap);
//navLnb 5개이고 5번 똑같은 값 반복해서 작성하지 않으려면 반복문 사용
//navLnb 5개니까 0,1,2,3,4 인덱스 생각하고 0으로 시작해서 4까지 커지는 반복문 제작
for(let i=0; i<5; i++) {
    navLnb[i].style.display = 'none';
}
//mNavWrap.style.display = 'none'; //1개 DOM으로 반복문 없이 바로 사용
mNavWrap.style.overflow = 'hidden';
mNavWrap.style.height = '0';

//nav 마우스 올렸을 때 lnb(navLnb), lnb_bg 보이기
const nav = document.querySelector('nav');
const lnbBg = document.querySelector('nav .lnb_bg');
console.log(nav, lnbBg);
lnbBg.style.display = 'none';
nav.addEventListener('mouseover',()=>{
    lnbBg.style.display = 'block';
    for (let i=0; i<navLnb.length; i++){
        navLnb[i].style.display = 'block';
    }
});
nav.addEventListener('mouseout',()=>{
    lnbBg.style.display = 'none';
    for (let i=0; i<navLnb.length; i++) {
        navLnb[i].style.display = 'none';
    }
}); //navLnb.length 사용하기~~
//모바일 메뉴 클릭 시 m_nav_wrap 보이기
mNavWrap.style.transition = 'height 0.3s linear'
const mNav = document.querySelector ('.m_nav');
mNav.addEventListener('click',()=>{
    /* mNavWrap.style.display = 'block'; */
    mNavWrap.style.height = '500px';
})
//x 클릭 시 m_nav_wrap 숨기기
const closeBtn = document.querySelector('.m_nav_wrap .close');
closeBtn.addEventListener('click',()=>{
    /* mNavWrap.style.display = 'none'; */
    mNavWrap.style.height = '0'
})
