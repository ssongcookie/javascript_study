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

//익명 함수
var add = function(a,b){
    return a+b;
}

var sum = add(10,20);
sum


//즉시 실행 함수
var result = (function(a,b){
    return a+b;
}(10,20));

console.log(result);

//화살표 함수
    //매개변수가 1개일 때
    let hi = user => document.write(user);

    //매개변수가 2개일 때
    let sum = (a,b) => a+b;