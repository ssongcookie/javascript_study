//생성자 함수를 사용해 Book 객체 정의
function Book(title, author, volume, price){
    this.title = title
    this.author = author
    this.volume = volume
    this.price = price
};

//인스턴스
var html = new Book('웹 표준의 정석', 'Ko', '608', '28,000');
var youtube = new Book('유튜브 영상 만들기', 'Kim', '368', '16,000');
var python = new Book('점프 투 파이썬', 'Park', '352', '18,800');

//여러 인스턴스를 배열에 담아 활용
var bookList = [html, youtube, python];

/*
bookList
(3) [Book, Book, Book]
    0: Book {title: '웹 표준의 정석', author: 'Ko', volume: '608', price: '28,000'}
    1: Book {title: '유튜브 영상 만들기', author: 'Kim', volume: '368', price: '16,000'}
    2: Book {title: '점프 투 파이썬', author: 'Park', volume: '352', price: '18,800'}
    length: 3
    [[Prototype]]: Array(0)
*/

//bookList 배열에 저장된 객체에서 책 제목만 골라서 표시
document.write("<h1>책 제목으로 살펴보기</h1>");
for (let i = 0; i < bookList.length; i++) {  //bookList에 있는 객체마다 접근해서 
    document.write("<p>"+bookList[i].title+"</p>");       //title 속성 값을 가져와 화면에 표시
    
}

//bookList 배열에 저장된 객체에서 가격만 골라서 표시
document.write("<h1>책 가격 살펴보기</h1>");
for (let k = 0; k < bookList.length; k++) {
    document.write("<p>"+bookList[k].price+"</p>")
    
}