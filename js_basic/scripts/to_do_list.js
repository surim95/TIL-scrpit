//오늘의 할일 JS
//1. 변수 지정(복사되는 위치?, 복사해야하는 태그, 닫기 버튼, 할일 입력input, 등록 태그)
//2. input 입력 후 등록 버튼을 누르면 input 값이 li에 등록됨.
//3. 닫기 버튼을 누르면 복사된 li가 삭제.
//--------------------------------------------------------------------------------
//1. 할 일 입력 후
//2. 등록 버튼 클릭(클릭 이벤트 내에서 1번 입력값 인식)
//3. "여기에 할 일이 등록됩니다." 기존 li의 다음 형제 위치에 입력한 정보 등록
//**위 알고리즘 3번 작업 시 주의사항**
//ul태그의 마지막 자식 위치(appendChild)로 li추가일 때(문자열 생성 안됨, createElement() 속성으로 DOM을 생성해야만 가능)

const toInput = document.querySelector('.to');
const toBtn = document.querySelector('#to_btn');
const ul = document.querySelector('ul');
//const closeBtn = document.querySelector('.del_btn');
//const cloneCloseBtn = closeBtn.cloneNode(true);
//cloneNode의 문제점:
//cloneNode는 HTML에서 딱 한번만 복제해서 저장하기 때문에 중복적인 복제가 불가능. 재사용 불가.
console.log(toInput, toBtn, ul);

toBtn.addEventListener('click',()=>{
    //console.log(toInput.value)
    //ul.appendChild("<li>abc</li>"); -> 문자열삽입에러
    //클릭할 때 ul에 삽입할 li를 새로 만들어줘야 함
    if (toInput.value == ''){//input의 값이 입력되지 않았을 경우 경고창으로 '입력 후 등록해야 합니다.' 메시지 출력
        alert('입력 후 등록해야 합니다.');
    } else {
        let li = document.createElement('li');
        console.log(li);
        li.innerHTML = `<span>${toInput.value}</span><button type="button" class="del_btn">X</button>`;
        //li.appendChild(cloneCloseBtn);
        //위 방식의 문제점 :
        //DOM에서는 한 노드는 동시에 하나의 위치에만 존재할 수 있기 때문에 기존 li에서 closeBtn이 뽑혀서 다음 li에 추가됨.
        ul.appendChild(li);
        toInput.value = ''; //입력값 초기화

        //등록된 할 일 옆 X 클릭 시 나의 부모 li 제거하기
        const close = document.querySelectorAll('.del_btn');
        for(let i of close){
            console.log(i);//배열 형태가 아닌 객체형태로 출력되서 바로 사용가능한 형태인지 확인
            i.addEventListener('click',()=>{
                i.parentNode.remove();
            })
        }
        
        //내용 클릭 시 취소선
        const lineDel = document.querySelectorAll('li > span');
        for(let i of lineDel){
            console.log(i);
            i.addEventListener('click',()=>{
                i.style.textDecoration = 'line-through';
            })
        }
    }
})
toInput.addEventListener('focus',()=>{
    toInput.placeholder = '';
    toInput.value = '';
})
toInput.addEventListener('blur',()=>{
    toInput.placeholder = '할 일을 입력하세요.';
})