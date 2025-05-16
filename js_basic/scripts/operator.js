// 연산자 25/05/16
// 증감 연산자(단항)
let a = 1;
let b = 10;
/* console.log(a,b); */
//
//a에 1을 더한 후 a를 b에 대입한다.
/* b = ++a; 
console.log(b); // 2 */
//
//a를 먼저 대입하고 a에 1을 더한다.
/* b = a++; 
console.log(a,b); */ // 2 1
//
//b에 1을 뺀 후 b를 a에 대입한다.
/* a = --b;
console.log(a); */ // 9
//
//b를 먼저 대입하고 b에 1을 뺀다.
/* a = b--;
console.log(a,b); */ //10 9
//예제2==============================================
let x = 5;
/* let y = ++x; */ //1증가된 x값을 대입받는 변수 y (++x로 하면 y에 1증가된 x값이 들어가긴 하지만 x 값도 1이 증가되어 6이 된다.)
// 증감연산은 x변수 자체에 영향을 주기 때문에 일회성 더하기 연산자로 +1을 붙여서 계산하고 x에 영향을 주지 않게 y에 대입한다.
let y = x+1; //1 증가된 x값을 대입받는 변수 y
console.log (x,y); //5, 6
y = x++; //x++하면 y에 x의 원래 값인 5가 들어가고 x가 1 증가된 값인 6이 된다.
console.log(x,y); //6, 5
x = ++y; //6, 6
console.log(x,y);
x++; //++x와의 차이가 없음. 대입이 없기 때문에.
console.log(x,y); //7, 6
--y;
console.log(x,y); //7, 5
x+1; //더하기, 빼기, 곱하기, 나누기 등 일반 산술 연산자는 대입연산자가 없으면 변수에 영향을 주지 않는다.
console.log(x,y); //8, 5 (X) -> 7, 5 (O)
//증감연산자 연습 문제 ==========================================
let num1 = 10;
let num2 = 20;
let num3 = 30;
let num4 = 40;
console.log(num1, num2, num3, num4);
// num1, num2, num3, num4의 값은? 10, 20, 30, 40
num1++;
num2--;
num3++;
num4--;
console.log(num1, num2, num3, num4);
// num1, num2, num3, num4의 값은? 11, 19, 31, 39
//
num1 = ++num2;
// 19에 1을 증가한 후 20이 된 num2를 num1에 대입 => num1 = 20; num2 = 20; (자기 자신에게도 1을 더하기 때문에);
num2 = num1++;
// num1을 먼저 num2에 대입 => num2 = 20; num1에 1을 더한 수를 num1에 대입 => num1 = 21;
// 따라서 num1 = 21; num2 = 20;
// **대입 순서, ```자기 자신에게 영향 주는 것 잘 확인```하기**
console.log(num1, num2, num3, num4);
// num1, num2, num3, num4의 값은? 20, 21, 31, 39 => 결과 : 21, 20, 31, 39
//
num3 = num1 + num2;
num4 = ++num3;
console.log(num1, num2, num3, num4);
// num1, num2, num3, num4의 값은? 20, 21, 41, 42 => 결과 : 21, 20, 42, 42
num1 = ++num3 +10;
num2 = --num4 +1;
console.log(num1, num2, num3, num4);
// num1, num2, num3, num4의 값은? 52, 42, 42, 41 => 결과 : 53, 42, 43, 41
//복합대입연산자=============================================
console.log('=====================');
let number = 10;
//number = 15; //기존값을 제거하고 단순 새로운 값 삽입 *지양
//number = 5; //위와 동일
//numder = number +5; //기존값을 유지하고 원하는 계산 추가 
number +=5; //복합대입 활용 (위(numver와 결과는 동일)
console.log(number); // 15
number -=5; //빼기복합
console.log(number); //10
number *=5; //곱하기 복합
console.log(number); //50
number /=5; //나누기 복합
console.log(number); //10
number %=5; //나머지 복합
console.log(number) //0
