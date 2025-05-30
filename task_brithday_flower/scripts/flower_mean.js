const birthday_flower = [
    {
        month:1,
        flower:'수선화',
        content:'자기애, 자존심, 외로움',
    },{
        month:2,
        flower:'제비꽃',
        content:'겸손, 양보',
    },{
        month:3,
        flower:'수선화',
        content:'자기애, 자존심, 외로움',
    },{
        month:4,
        flower:'스위트피',
        content:'추억, 즐거움'
    },{
        month:5,
        flower:'은방울꽃',
        content:'희망, 섬세함'
    },{
        month:6,
        flower:'백합',
        content:'순결'
    },{
        month:7,
        flower:'미나리아재비',
        content:'아름다움, 인격'
    },{
        month:8,
        flower:'글라디올러스',
        content:'비밀, 상상, 견고함'
    },{
        month:9,
        flower:'물망초',
        content:'진실한 사랑'
    },{
        month:10,
        flower:'금잔화',
        content:'실망, 비애'
    },{
        month:11,
        flower:'국화',
        content:'성실, 진실'
    },{
        month:12,
        flower:'포인세티아',
        content:'축하, 감사'
    }
]
const userYear = document.querySelector ('input[name*=year');
const userMonth = document.querySelector ('input[name*=month');
const userDay = document.querySelector ('input[name*=day');
const flowerBtn = document.querySelector ('.wrap .question_btn');
const flowerOutput = document.querySelector ('.flower_output');
const flowerOutputChange = document.querySelectorAll ('.flower_output em');
console.log(userYear, userMonth, userDay, flowerBtn, flowerOutput, flowerOutputChange);

flowerOutput.style.display = 'none';

userMonth.addEventListener('change',()=>{
    flowerBtn.addEventListener ('click',function(){

    flowerOutput.style.display == 'none' ? flowerOutput.style.display = 'block' : flowerOutput.style.display = 'none'
    birthday_flower.forEach(function(flowerMonth){
            if(flowerMonth.month == userMonth.value) {
                flowerOutputChange[0].textContent = flowerMonth.month;
                flowerOutputChange[1].textContent = flowerMonth.flower;
                flowerOutputChange[2].textContent = flowerMonth.content;
            }
        })
    }) 
})