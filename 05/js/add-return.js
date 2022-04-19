//1. num1과 num2 변수에 값을 저장
var num1 = parseInt(prompt("첫 번째 숫자 : "));
var num2 = parseInt(prompt("두 번째 숫자 : "));

//2. addNumber 함수 호출
//6. 반환된 값을 result에 저장
var result = addNumber(num1, num2);

//7. result 변수값을 화면에 표시
alert("두 수를 더한 값은 " + result + "입니다.");

//3.함수 실행, num1은 a로 num2는 b로
function addNumber(a, b) { 		
    
    //4.a값과 b값을 더해 sum 변수에 저장
    var sum = a + b;

    //5. 결과값 sum 반환
    return sum;
}
