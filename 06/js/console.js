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