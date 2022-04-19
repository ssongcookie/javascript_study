//queryselector 함수를 사용해 id="cover"인 이미지를 가져와 coverImage변수에 저장
//click 이벤트가 발생했을 때 실행할 함수 작성

var coverImage = document.querySelector("#cover");
coverImage.onclick = function(){
    alert('눌렀습니다.');
};

//mouseover, mouserout 이벤트 처리

coverImage.onmouseover = function(){
    coverImage.style.border = "5px black solid";
};

coverImage.onmouseout = function(){
    coverImage.style.border = "";
};