const express = require('express');
// express에서 json으로 이루어진 Request Body(http body내용)를 받았을 경우
// 1. body-parser모듈(4.16이전버전)
// 2. express.json()사용 -> 4.16이후버전
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');
const { json } = require('body-parser');

const app = express();
const dbPath = path.join(__dirname, '/data/data.json');

// CONFIGURATION
app.use("/static", express.static(path.resolve(__dirname, "src", "static")));
app.use(bodyParser.json()); // 4.16이전
// app.use(express.json()) --> 4.16이후


// ======================================================================
// ROUTES

// 홈화면 index.html표시 --> 비동기로 완성할 것
app.get("/", (req, res) => {
    res.sendFile(path.resolve("src", "index.html"));
    // fs.readFile(dbPath, 'utf8', (err, data) => {
    //     if (err) throw err;
    //     console.log(data,'sibal'); // 얘를 Home에 뿌려줌
    // })
});

// get user test
let test = {};

test = JSON.parse(
    fs.readFileSync(dbPath, "utf8")
);

// data.json파일에 접근
app.get("/data.json", (req, res, next) => {
    res.json(test);
})

// get board data
app.get('/board', (req, res) => {
    fs.readFile(dbPath, 'utf8', (err, data) => {
        if (err) throw alert('error 발생!');

        const { boardata } = JSON.parse(data);
        res.json(boardata);
    })
})

// create board
app.post("/create", (req, res) => {
    // no, title, name, date
    const result = {};
    const { no, title, name, date } = req.body;
    
    // add data
    json.board.push(req.body);

    // json 파일에 추가
    fs.writeFile(dbPath, JSON.stringify(json, null, 2), 'utf8', err => {
        if (err) throw err;

        result.success=true;
        res.json(result);
    })
})
// update board
app.post("/update", (req, res) => {
    const result {};
    const { title, name } = req.params;

    fs.readFile(dbPath, 'utf8', (err, data) => {
        if (err) throw err;

        const json = JSON.parse(data);

        // update data
        fs.writeFile(dbPath, JSON.stringify(json, null, 2), 'utf8', err => {
            if (err) throw err;

            result.success = true;
            res.json(result);
        })
    })

})
// delete board
app.post("/delete", (req, res) => {
    const result = {};
    const { no } = req.params;

    fs.readFile(dbPath, 'utf8', (err, data) => {
        if (err) throw err;

        const json = JSON.parse(data);

        // 삭제 대상 없음

        // DELETE JSON File
        fs.writeFile(dbPath, JSON.stringify(json, null, 2), 'utf8', err => {
            result.success = true;
            res.json(result);
        })
    })
    // no로 게시물 찾은후 delete
})

app.listen(3000, () => console.log('Server is running... http://localhost:3000'));


// create
// fetch("http://localhost:3000/create", {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json"
//     },
//     body: JSON.stringify({
//         title: "Test",
//         body: "I am testing!",
//         userId: 1,
//     }),
// })
//     .then((response) => response.json())
//     .then((data) => console.log(data));

// delete
// fetch("http://localhost:3000/test", {
//     method: "DELETE",
// })

// 원하는 data 출력
// let item = fetch("http://localhost:3000/data.json")
//     .then(response => response.json())
//     .then(json => console.log(json.board[0].name));
