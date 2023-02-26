"use strict";

const id = document.querySelector("#id"),
  psword = document.querySelector("#psword"),
  loginBtn = document.querySelector("button");

loginBtn.addEventListener("click", login);

function login() {
  const req = {
    id: id.value,
    psword: psword.value,
  };

  fetch("./login", {
    //(보내줄 경로, 보낼 데이타<객체형대로 보내줘야함>)
    //body라는 key값으로 해서 req라는 데이터를 보내줄 수 있다
    //  JSON라는 데이터 타일일 이용해서 데이터를 전달할 것이므로, JSON형태로 감싸주어야한다.

    // +body를 통해서 데이터를 전달할 때에는 http메서드 중에서 post라는게 있다.
    // +이 포스트의 메서드로 데이터를 전달해주여야 한다. // RestAPI 강의 참고
    method: "POST",
    // 내가 전달하는 데이터가 JSON 데이터라는 것들 알려줌
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req), // 오브젝트 데이터를 JSON으로 감싸주는 매서드
  });
  // 이러한 데이터를 서버에서 받으려면, 여기에 ./login이라는 경로, POST라는 메서드로
  // 받을 수 있는 API가 마련이 되어 있어함.
}
