/*UserStorage.js*/

"use strict";

const fs = require("fs").promises; // fileSystem의 약자 파일 불러오는 것 // + 프로미시스 추가

class UserStorage {
  // 은닉화된 변수를 하나 만들 것임.
  static #getUserInfo(data, id) {
    const users = JSON.parse(data);
    const idx = users.id.indexOf(id); // 스코프로 인해서 안으로 넣어줘야함
    const usersKeys = Object.keys(users);
    const userInfo = usersKeys.reduce((newUser, info) => {
      newUser[info] = users[info][idx];
      return newUser;
    }, {});
    console.log(userInfo);
    return userInfo;
  }

  static getUsers(...fields) {
    // const users = this.#users;
    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {});
    return newUsers;
  }

  static getUserInfo(id) {
    // const users = this.#users;
    //fs모듈의 readfile을 통해서 파일을 읽을 것임
    return fs
      .readFile("./src/databases/users.json")
      .then((data) => {
        return this.#getUserInfo(data, id);
      }) // fetch와 같이 프로미스를 반환하기 때문에 then이라는 메소드에 접근을 할수 있게된다.
      .catch((err) => console.error(err)); // 그리고 오류도 잡아낼 수 있지.
  }

  static save(userInfo) {
    // 클라이언트에서 전달한 데이터를 저장해주는 함수"만" 만들었음.
    // const users = this.#users;
    // users.id.push(userInfo.id);
    // users.name.push(userInfo.name);
    // users.psword.push(userInfo.psword);
    // return { success: true };
    // 받아오는 데이터가 user의 정보이기 때문에 userInfo로 받아준다.
  }
}

module.exports = UserStorage;
