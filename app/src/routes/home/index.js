"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

router.get("/", ctrl.output.hello); // output 추가
router.get("/login", ctrl.output.login); // output 추가
// 위와 똑같은데 post로 동작하게 바꿔보겠음.
router.post("/login", ctrl.process.login); // 로그인을 처리해주는 놈이라 process객체에 넣어주겠음
// 근데 이렇게하면 내용이 중복됨. 그래서 다음과 같은 처리를해줌
/**
 * 1. home.ctrl.js에 가서 렌더링해주는 두 함수를 합쳐서 out이라는 객체로 묶는다.
 * 2. index.js로 돌아와서  get과 post경로에 output 끼워넣어준다.
 */

module.exports = router;
