"use strict";

class UserStorage {
  static #users = {
    // 정적변수에다가 은닉화까지 해준다.
    id: ["나개발", "김팀장", "박인턴"],
    psword: ["1234", "1234", "123456"],
    name: ["방충림", "박다나", "고나희"],
  };

  // 메서드를 만들어서 #users에 접근할거다 근데 그러려면 얘도 정적이여야함
  // 또한 위처럼 정보가 id,pw왜에 더 있을 수 있다.
  // 이때 원하는 것만 가져오고 싶을 땐, reduce를 사용해서 구현할 수 있다.
  static getUsers(...fields) {
    // console.log(fields);
    const users = this.#users;
    const newUsers = fields.reduce((newUsers, field) => {
      // console.log(newUsers, field);
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field]; //키는 필드로 하고, 값은 users의 필드다
      }
      return newUsers; // 첫번째 파라미터로 다시 들어가면서 반복
    }, {});
    return newUsers;
  }
}

module.exports = UserStorage;
