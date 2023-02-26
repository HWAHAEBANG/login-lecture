"use strict";

// 질의 선택자 : querySelector
const id = document.querySelector("#id"),
  psword = document.querySelector("#psword"),
  loginBtn = document.querySelector("button");

// 아래를 실행시켜 보면 null 값이 나온다.
// 이유는? ejs를 가져오기전에 실행되기 때문.
// 해결방법은? ejs의 script태그에 defer라는 속성을 부여한다.
console.log(id);
console.log(psword);
console.log(loginBtn);

loginBtn.addEventListener("click", login);

function login() {
  console.log(id.value); // 해당 태그의 값을 가저오는 함수
  const req = {
    // 받아온 값은 requst변수에 담아서 fetch를 통해 서버로 전달할 것임.
    id: id.value,
    psword: psword.value,
  };

  console.log(req); // 객체에 잘 담기는지 확인
}
