const birthday = new Date(2016,4,20);
//const calcBtn = document.querySelector('#calc_btn');
const year = document.querySelector('.year em');
const month = document.querySelector('.month em');
const day = document.querySelector('.day em');
const time = document.querySelector('.time em');
const old = document.querySelector('.old em');
//console.log(birthday, calcBtn, year, month, day, time, old);
/* calcBtn.addEventListener('click',calcFunc);
function calcFunc(){
    const today = new Date();
    const birth = new Date(birthday.value);
    console.log(today, birth);
    const birthToday = today.getTime() - birth.getTime();
    console.log(birthToday);
    //시간 계산
    const yearFlow = Math.floor(birthToday / (1000*60*60*24*365));
    year.textContent = yearFlow;
    const monthFlow = Math.floor(birthToday / (1000*60*60*24));
    month.textContent = monthFlow;
    const dayFlow = Math.floor(birthToday / (1000*60*60));
    day.textContent = dayFlow;
    const timeFlow = Math.floor(birthToday / (1000*60));
    time.textContent = timeFlow;
    const oldFlow = today.getFullYear() - birth.getFullYear();
    old.textContent = oldFlow;
} */
    const today = new Date();
    //const birth = new Date(birthday.value);
    //console.log(today, birth);
    const birthToday = today.getTime() - birthday.getTime();
    //console.log(birthToday);
    //시간 계산
    const yearFlow = Math.floor(birthToday / (1000*60*60*24*365));
    year.textContent = yearFlow;
    const monthFlow = Math.floor(birthToday / (1000*60*60*24));
    month.textContent = monthFlow;
    const dayFlow = Math.floor(birthToday / (1000*60*60));
    day.textContent = dayFlow;
    const timeFlow = Math.floor(birthToday / (1000*60));
    time.textContent = timeFlow;
    const oldFlow = today.getFullYear() - birthday.getFullYear();
    old.textContent = oldFlow;