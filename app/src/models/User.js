"use strict";

const UserStorage = require("./UserStorage");

class User {
  constructor(body) {
    //생성자를 만들어 줄건데, 일단 body를 받아올 것이다.
    this.body = body; // 받아온 바디를 User의 body라는 안으로 들어가게 되는 것이다.
  }

  //메서드를 하나 만들거다
  login() {
    //const { id, psword } = UserStorage.getUsers("id", "psword"); 이제 getUserInfo 쓸거임
    const body = this.body;
    const { id, psword } = UserStorage.getUserInfo(body.id);

    // 로직을 기존에 했던과 조금 다르게 바꿔보자.
    // 스토리지에서 가져온 아이디랑, 클라이언트가 입력한 바디의 아이디가 같고,
    // 스토리지에서 가져온 패스워드랑, 클라이언트가 입력한 바디의 패스워드가 같은지 확인고싶다.
    // 하지만 지금 데이터는 [ '나개발', '김팀장', '박인턴' ] [ '1234', '1234', '123456' ] 이렇게 와서 안된다.
    // 내가 요청한 id의 정보만을 가져오는 메서드를 따로 또 만들어줘야함. UserStarage에 만든다.

    if (id) {
      // 아이디가 있으면
      if (id === body.id && psword === this.body.psword) {
        return { success: true };
      }
      return { success: false, msg: "비밀번호가 틀렸습니다." };
    }
    return { success: false, msg: "존재하지 않는 아이디 입니다." };
  }
}

module.exports = User;
