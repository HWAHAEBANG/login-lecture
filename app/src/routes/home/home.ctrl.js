"use strict";

const User = require("../../models/User.js");
// const UserStorage = require("../../models/UserStorage.js");  필요 없어짐 ㅎㅎ

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
    // 인스턴스를 만들어준다.
    const user = new User(req.body); // request의 바디를 이렇게 여기서 넘기는 것임
    const response = user.login(); // 인스턴스의 메서드에서 어떠한 값을 받아오게 될것임.
    return res.json(response); //그걸 클라이언트한테 JSON의 형태로 응답해 줄것이다.
    //끝! 이 세줄로 끝낼 수 있는 것이다.

    // const id = req.body.id,
    //   psword = req.body.psword;

    // const users = UserStorage.getUsers("id", "psword");

    // const response = {};
    // if (users.id.includes(id)) {
    //   const idx = users.id.indexOf(id);
    //   if (users.psword[idx] === psword) {
    //     response.success = true;
    //     return res.json(response);
    //   }
    // }

    // response.success = false;
    // response.msg = "로그인에 실패하셨습니다.";
    // return res.json(response);
  },
};

module.exports = {
  output,
  process,
};
