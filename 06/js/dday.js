//오늘 날짜 Date객체 만들기
var today = new Date();
//처음 만난 날 Date 객체 만들기
var firstDay = new Date("2019-05-27");


//오늘 날짜 밀리초로 바꾸기
var toNow = today.getTime();
//처음 만난 날 밀리초로 바꾸기
var toFirst = firstDay.getTime();

//두 밀리초 차이 계산하기
var passedTime = toNow - toFirst;

//결괏값(밀리초)을 날짜 수로 바꾸기
var passedDay = Math.round(passedTime/(24*60*60*1000)); //1일=24시간*60분*60초*1000밀리초

//화면에 표시
document.querySelector('#accent').innerText = passedDay + "일";

calcDate(100);  // 100일 기념일을 계산해서 표시합니다.
calcDate(365);  // 1년 기념일을 계산해서 표시합니다.
calcDate(1000);
calcDate(3000);

//100일 후 날짜 표시
function calcDate(days){
    var future = toFirst + days*(1000*60*60*24); //처음 만난 날에 100일을 더한다.
    var someday = new Date(future); //future 값을 사용해 Date객체의 인스턴스를 만든다.
    var year = someday.getFullYear( );  // ‘연도’를 가져와 year 변수에 저장합니다.
    var month = someday.getMonth( ) + 1;  // ‘월’을 가져와 month 변수에 저장합니다.
    var date = someday.getDate( );  // ‘일’을 가져와 date 변수에 저장합니다.
    document.querySelector("#date"+days).innerText = year + "년 " + month + "월 " + date + "일";
}