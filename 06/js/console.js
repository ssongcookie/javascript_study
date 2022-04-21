//내장객체
var now = new Date();
now

//1부터 100까지 숫자 중에서 무작위 수를 구하라 (정수)
Math.floor(Math.random() * 100 + 1)

//리터럴 표기법을 사용해 객체 생성
var book = {title: "자바스크립트", 
/*속성 이름*/author: "고쌤", /*속성 값*/
            pages: 500,
            price: 15000,
/*함수 이름*/info: function(){
                alert(this.title+"책의 분량은 "+this.pages+"쪽 입니다.");
                }
            };

book.title
'자바스크립트'

book.info() //info함수 실행

book.field="IT"
'IT'

book
/*
{title: '자바스크립트', author: '고쌤', pages: 500, price: 15000, info: ƒ, …}
author: "고쌤"
field: "IT"
info: ƒ ()
pages: 500
price: 15000
title: "자바스크립트"
[[Prototype]]: Object
*/

function Book(author, pages, price, title){
    this.author = author;
    this.pages = pages;
    this.price = price;
    this.title = title;

}

jsBook = new Book("홍길동","500","15000","자바스크립트")

//Date()객체 알아보기  (Date함수를 사용할 때 주의점: 결과값이 0부터 시작됨)

// 현재 날짜 정보
new Date()

// 특정 날짜나 시간 정보
new Date("1111-12-25");

// 연도와 월까지만 지정했다면, 해당 월의 1일, 오전 9시로 설정됨
new Date("1111-12");

// 시간 정보까지 함께 지정하려면 날짜 다음에 대문자 T를 추가
new Date("1111-12-25T18:00:00");

// UTC(국제 표준시)로 지정하려면 맨 끝에 Z
new Date("1111-12-25T18:00:00Z");


// 자바스크립트의 날짜/시간 입력 방식
// ISO 방식 (YYYY-MM-DDTHH:MM:SS)
// 짧은 날짜 형식(MM/DD/YYYY)
// 긴 날짜 형식(MM DD YYYY)

//현재 날짜와 시간 정보 가져오기
var now = new Date()
//now 객체에 있는 정보 중 날짜 정보 가져오기
now.getDate()
//요일 정보 가져오기
now.getDay()
//시간 정보 가져오기
now.getTime()

//오늘 날짜로부터 50일 지난 후의 날짜를 계산
now.setDate(now.getDate()+50)//오늘 날짜를 가져와 50을 더한 후 다시 날짜로 입력
