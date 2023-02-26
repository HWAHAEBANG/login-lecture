"use strict";

class UserStorage {
  static #users = {
    id: ["나개발", "김팀장", "박인턴"],
    psword: ["1234", "1234", "123456"],
    name: ["방충림", "박다나", "고나희"],
  };

  static getUsers(...fields) {
    const users = this.#users;
    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field]; //키는 필드로 하고, 값은 users의 필드다
      }
      return newUsers; // 첫번째 파라미터로 다시 들어가면서 반복
    }, {});
    return newUsers;
  }

  static getUserInfo(id) {
    const users = this.#users;
    const idx = users.id.indexOf(id);
    const usersKeys = Object.keys(users); // => [id, psword, name]
    const userInfo = usersKeys.reduce((newUser, info) => {
      newUser[info] = users[info][idx]; // info에서 요소가 순차적으로 들어가니까
      //newUser[id] = user[id][2] 이런식으로 해서 나온 userInfo를 리턴해준당
      return newUser;
    }, {});
    return userInfo;
  }
}

module.exports = UserStorage;
