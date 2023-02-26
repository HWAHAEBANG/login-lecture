"use strict";

const UserStorage = require("../../models/UserStorage.js"); // 가져오기

const output = {
  hello: (req, res) => {
    res.render("home/index");
  },

  login: (req, res) => {
    res.render("home/login");
  },
};

// 임시 => Userstorage.js
// const users = {
//   id: ["나개발", "김팀장", "박인턴"],
//   psword: ["1234", "1234", "123456"],
// };

const process = {
  login: (req, res) => {
    const id = req.body.id,
      psword = req.body.psword;

    // const userStorage = new UserStorage(); // 클래스니까 이렇게해서 인스턴스로 만들어 줌.
    // 하지만 인스턴스화 안하고 바로 사용하는 방법도 있다.
    // console.log(UserStorage.users); // 이렇게 사용한다. 단, 이대로 하면 undefined가 출력된다.
    //+ 정적메서드를 사용하여 users를 가져와보자
    const users = UserStorage.getUsers("id", "psword");

    // 클래스로 돌아가서 앞에 static을 붙이면(정적 변수) 정상적으로 사용 가능하다.

    // 보기 싫으니까 지운대..
    const response = {}; // + 보기좋게 조금 바꾸기. [보기좋은지 모르겠다]
    if (users.id.includes(id)) {
      const idx = users.id.indexOf(id);
      if (users.psword[idx] === psword) {
        response.success = true; // +
        return res.json(response); // +
        // return res.json({
        //   success: true,
        // });
      }
    }

    response.success = false; // +
    response.msg = "로그인에 실패하셨습니다."; // +
    return res.json(response);
    // return res.json({
    //   success: false,
    //   msg: "로그인에 실패하셨습니다.",
    // });
  },
};

module.exports = {
  output,
  process,
};
