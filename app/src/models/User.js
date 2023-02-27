/*user.js*/

"use strict";

const UserStorage = require("./UserStorage");

class User {
  constructor(body) {
    this.body = body;
  }

  async login() {
    // + 이 로그인 함수가 실행되는 데에도 시간이 오래걸리므로
    //  이 로그인을 실행하는 애한태도 어싱크를 걸어줘야함  컨트롤러의 process.login
    const client = this.body; // body가 아닌 Client로 이름 바꿔주자.
    const { id, psword } = await UserStorage.getUserInfo(client.id);

    if (id) {
      if (id === client.id && psword === client.psword) {
        return { success: true };
      }
      return { success: false, msg: "비밀번호가 틀렸습니다." };
    }
    return { success: false, msg: "존재하지 않는 아이디 입니다." };
  }

  async register() {
    const client = this.body;
    try {
      // UserStorage에 save라는 메서드를 호출해서 데이터가 저장되도록 해주겠음.
      const response = await UserStorage.save(client); // 저장될 데이터 (this.body)를 스토리지로 던져주기
      return response; // 리스폰스로 받아서 반환해준디
    } catch (err) {
      return { success: false, msg: err };
    }
  }
}

module.exports = User;
