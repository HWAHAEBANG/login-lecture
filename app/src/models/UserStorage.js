/*UserStorage.js*/

"use strict";

//걸어 엎어
// const fs = require("fs").promises; // fileSystem의 약자 파일 불러오는 것 // + 프로미시스 추가

const db = require("../config/db");

class UserStorage {
  // 필요없어짐 날려
  // 은닉화된 변수를 하나 만들 것임.
  // static #getUserInfo(data, id) {
  //   const users = JSON.parse(data);
  //   const idx = users.id.indexOf(id); // 스코프로 인해서 안으로 넣어줘야함
  //   const usersKeys = Object.keys(users);
  //   const userInfo = usersKeys.reduce((newUser, info) => {
  //     newUser[info] = users[info][idx];
  //     return newUser;
  //   }, {});
  //   console.log(userInfo);
  //   return userInfo;
  // }

  // 필요없어짐 날려
  // static #getUsers(data, isAll, fields) {
  //   const users = JSON.parse(data);
  //   if (isAll) return users;
  //   const newUsers = fields.reduce((newUsers, field) => {
  //     if (users.hasOwnProperty(field)) {
  //       newUsers[field] = users[field];
  //     }
  //     return newUsers;
  //   }, {});

  //   return newUsers;
  // }

  // static getUsers(isAll, ...fields) {}

  static getUserInfo(id) {
    return new Promise((resolve, reject) => {
      const query = "SELECT * FROM users WHERE id = ?;";
      db.query(query, [id], (err, data) => {
        if (err) reject(`${err}`);
        else resolve(data[0]);
      });
    });
  }

  static async save(userInfo) {
    return new Promise((resolve, reject) => {
      const query = "INSERT INTO users(id, name, psword) VALUES(?,?,?);";
      db.query(query, [userInfo.id, userInfo.name, userInfo.psword], (err) => {
        if (err) reject(`${err}`);
        // console.log(data[0]);
        else resolve({ success: true });
      });
    });
  }
}

module.exports = UserStorage;
