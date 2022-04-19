//프롬프트 창에서 숫자 입력받기
var num1 = parseInt(prompt("첫번째 숫자: "));
var num2 = parseInt(prompt("두번째 숫자: "));

//num1, num2와 함께 add 함수 호출
add(num1,num2);

//넘겨받은 값 num1은 a로, num2는 b로 전달
function add(a,b){

    //a와 b를 연산해서 표시
    var sum = a+b;
    alert("두 수를 더한 값은? : "+sum);
}