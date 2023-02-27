/*UserStorage.js*/

"use strict";

class UserStorage {
  static #users = {
    // 데이터를 단순히 검진하는 용도로는 이런식으로 할 수 있는데
    // 데이터를 저장하기 위해서는 이렇게 하면 안된다
    id: ["나개발", "김팀장", "박인턴"],
    psword: ["1234", "1234", "123456"],
    name: ["방충림", "박다나", "고나희"],
  };

  static getUsers(...fields) {
    const users = this.#users;
    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {});
    return newUsers;
  }

  static getUserInfo(id) {
    const users = this.#users;
    const idx = users.id.indexOf(id);
    const usersKeys = Object.keys(users);
    const userInfo = usersKeys.reduce((newUser, info) => {
      newUser[info] = users[info][idx];
      return newUser;
    }, {});
    return userInfo;
  }

  static save(userInfo) {
    // 클라이언트에서 전달한 데이터를 저장해주는 함수"만" 만들었음.
    const users = this.#users;
    users.id.push(userInfo.id);
    users.name.push(userInfo.name);
    users.psword.push(userInfo.psword);
    return { success: true };
    // 받아오는 데이터가 user의 정보이기 때문에 userInfo로 받아준다.
  }
}

module.exports = UserStorage;
