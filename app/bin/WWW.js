// app이 없으므로 app.js를 불러와야함
const app = require("../app");
const PORT = 3000;

app.listen(PORT, () => {
  console.log("서버 가동");
});

// 이제 서버 실행코드가 여기 있으므로, 이 파일을 실행시켜야함.
