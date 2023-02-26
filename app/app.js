// 모듈
const express = require("express");
const bodyParser = require("body-parser"); // 바디파서 해주는 모듈 가져오기
const app = express();

// 라우팅
const home = require("./src/routes/home"); // 폴더를 상대적으로 명시를 해줘야함.

// 앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/src/public`));
app.use(bodyParser.json()); // 이렇게 미들웨어를 등록을 해주어야함. json데이터를 파싱해올 수 있음

// URL을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함될 경우 제대로 인식되지 않는 문제 해결.
app.use(bodyParser.urlencoded({ extended: true }));

// 라우터 가져오기
app.use("/", home);

module.exports = app;
