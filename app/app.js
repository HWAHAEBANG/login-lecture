// 모듈
const express = require("express");
const app = express();

// 라우팅
const home = require("./src/routes/home"); // 폴더를 상대적으로 명시를 해줘야함.

// 앱 세팅
app.set("views", "./views");
app.set("view engine", "ejs");

// 라우터 가져오기
app.use("/", home); // use는 미들웨어를 등록하는 메서드임
//(루터경로로 오면, 홈으로 이동한다)

module.exports = app; // app을 사용할수 있도록 내보내주기
