/*user.js*/

"use strict";

const UserStorage = require("./UserStorage");

class User {
  constructor(body) {
    this.body = body;
  }

  login() {
    const client = this.body; // body가 아닌 Client로 이름 바꿔주자.
    const { id, psword } = UserStorage.getUserInfo(client.id);

    if (id) {
      if (id === client.id && psword === client.psword) {
        return { success: true };
      }
      return { success: false, msg: "비밀번호가 틀렸습니다." };
    }
    return { success: false, msg: "존재하지 않는 아이디 입니다." };
  }

  register() {
    const client = this.body;
    // UserStorage에 save라는 메서드를 호출해서 데이터가 저장되도록 해주겠음.
    const response = UserStorage.save(client); // 저장될 데이터 (this.body)를 스토리지로 던져주기
    return response; // 리스폰스로 받아서 반환해준디
  }
}

module.exports = User;
