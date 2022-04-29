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


//배열 요소를 연결하는 join()함수 -> 구분기호를 지정할 수 있다.
nums.join()
//"1,2,3"
nums.join("-")
//"1-2-3"

var myColor = ["red","green", "blue"];
myColor.join("+");
//"red+green+blue";





//새로운 요소를 추가하는 push() 함수와 unshift() 함수    push() : 맨 뒤  unshift() : 맨 앞
var number = ["1","2","3"]
nums.push("4","5") //nums 배열 맨 끝에 "4"와 "5" 요소 추가
//5 //새 요소가 추가된 후의 배열 요소의 개수가 반환됨
//nums
//(5) ['1', '2', '3', '4', '5']

nums.unshift("0");
//6
nums
//(6) ['0', '1', '2', '3', '4', '5']

double = ["0","4","6","8"]
//(4) ['0', '4', '6', '8']
double.push("10")
//5
double
//(5) ['0', '4', '6', '8', '10']


//배열에서 요소를 추출하는 pop() 함수와 shift() 함수    pop() : 맨 뒤  shift() : 맨 앞
var study = ["html","css","js"]
study.pop()
//'js'
study
//(2) ['html', 'css']
var js = ["es6+","none","react","angular","vue"]
js.shift()
//'es6+'
js
//(4) ['none', 'react', 'angular', 'vue']



//원하는 위치의 요소를 삭제하거나 추가하는 splice() 함수

//인수가 1개일 경우 => (배열의 인덱스 값)
//이 경우 splice 함수는 인수가 가리키는 인덱스의 요소부터 배열의 끝 요소까지 삭제한다.
var numbers=[0,1,2,3,4,5]
numbers.splice(2)
//(4) [2, 3, 4, 5]
numbers
//(2) [0, 1]

//인수가 2개일 경우 => (인덱스 값, 삭제할 개수)
//이 경우 인덱스 값이 2인 요소부터 1개의 요소를 삭제
var study = ["html","css","js","web"]
study.splice(2,1)
//['js']
study
//(3) ['html', 'css', 'web']

//인수가 3개 이상일 경우 => (인덱스 값, 삭제할 개수, 삭제한 위치에 새로 추가할 요소 지정)
study.splice(2,1,"js")
//['web']
study
//(3) ['html', 'css', 'js']


//기존 배열의 요소를 삭제하지 않고 새로운 요소를 추가하고 싶다면 삭제할 개수를 지정하는 두 번째 인수에 0을 넣으면 된다.
study.splice(2,0,'web')
study
//(4) ['html', 'css', 'web', 'js']