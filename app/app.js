// 모듈
const express = require("express");
const app = express();

// 라우팅
const home = require("./src/routes/home"); // 폴더를 상대적으로 명시를 해줘야함.

// 앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/src/public`));
//express의 static이라는 메서드를 통해서 정적경로는 추가해주도록 할것임
// 현재 디렉터리네임을 가져와서 src라는 폴더 안에 public이라는 폴더를 만들어 줄것임.
// 구체적으로 설명하자면, __dirname 는 현재 app.js가 있는 위치를 반환을 하는데,
// 그 위치 아래있는 src폴더 아래있는, public을 정적경로로 추가해주겠다는 말임.
// 그래서 src 안에 public을 만들어 주자. 그리고 js 폴더를 그 안에 넣어라.
// 이렇게 되면 login.ejs에서 헤드에 있는 스크립트가 실행될때, public 안에있는 js에 로 접근하게 된다

// 라우터 가져오기
app.use("/", home);

module.exports = app;
