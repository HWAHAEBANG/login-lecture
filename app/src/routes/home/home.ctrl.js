"use strict";

// const hello = (req, res) => {
//   res.render("home/index");
// };

// const login = (req, res) => {
//   res.render("home/login");
// };

const output = {
  hello: (req, res) => {
    res.render("home/index");
  },

  login: (req, res) => {
    res.render("home/login");
  },
};

const process = {
  login: (req, res) => {
    // 일단 잘 받아 올 수 있는지부터 체크
    // 데이터가 body에 들어있기 때문에 .body 추가해주고, 실행하면 undefined.
    // body-parser라는 모듈이 필요하다.
    // app.js에 "const bodyParser = require("body-parser")"추가하고

    console.log(req.body);
  },
};

module.exports = {
  // hello,
  // login,
  // 객체들을 export하는 것으로 바꾸기
  output,
  process,
};
