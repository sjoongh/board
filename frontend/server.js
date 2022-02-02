const express = require('express');
// express에서 json으로 이루어진 Request Body(http body내용)를 받았을 경우
// 1. body-parser모듈(4.16이전버전)
// 2. express.json()사용 -> 4.16이후버전
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');

const app = express();
const dbPath = path.join(__dirname, '/data/data.json');

// CONFIGURATION
app.use("/static", express.static(path.resolve(__dirname, "src", "static")));
app.use(bodyParser.json());

// ROUTES
// app.get('/', (req, res) => res.render('index'));

app.get("/*", (req, res) => {
    res.sendFile(path.resolve("src", "index.html"));
    fs.readFile(dbPath, 'urf8', (err, data) => {
        if (err) throw err;
        const { datas } = JSON.parse(data);
        console.log(datas);
        console.log(res.json(datas));
    })
});

// get board;

// create board

// update board

// delete board

app.listen(3000, () => console.log('Server is running... http://localhost:3000'));


// ----------------------------------------------------------
// const express = require("express");
// const path = require("path");

// // express 사용
// const app = express();

// app.use("/static", express.static(path.resolve(__dirname, "frontend", "static")));

// app.get("/*", (req, res) => {
//     res.sendFile(path.resolve("frontend", "index.html"));
// });

// // port 생성 서버 실행
// app.listen(process.env.PORT || 3000, () => console.log("Server running ...."));

