// // express 모듈 불러오기
// const http = require('http');
// const express = require("express");
// const path = require("path");
// const app = express();


// // express의 기본 미들웨어 함수 : express.static
// // app.use("/static", express.static(path.resolve(__dirname, "frontend", "static")));

// // // get 요청 받으면 index.html파일을 읽고 클라이언트로 전송
// // app.get('/*', (req, res) => {
// //     res.sendFile(path.resolve("frontend", "index.html"));
// // });

// app.get('/', function(req, res) {
//     res.send('hello');
// })

// // node.js 서버 설정
// var port = 3000;

// // // port 실행
// app.listen(port, function() {
//     console.log('server on! http://localhost:'+port);
// })