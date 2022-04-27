var myArray = new Array(); //Array 객체의 인스턴스를 만든다.
var numbers = ["one","two","three","four"]; //리터럴을 사용한 배열
var numbers = new Array("one","two","three","four"); //Array 객체를 사용한 배열

var seasons = ["봄","여름","가을","겨울"]
seasons.length
//4

for (let i = 0; i < seasons.length; i++) {
    console.log(seasons[i]);  
}
//봄
//여름
//가을
//겨울


//quize
var triple = [3, 6, 9];
for (let i = 0; i < triple.length; i++) {
    console.log(triple[i]);    
}


//둘 이상의 배열을 연결하는 concat() 함수
var nums = ["1","2","3"];
var chars = ["a","b","c","d"];
nums.concat(chars) //num배열에 chars배열 연결
//["1","2","3","a","b","c","d"]

//concat()함수를 사용할 때 nums 배열과 chars 배열 순서를 바꾸면 연결 순서가 달라진다.