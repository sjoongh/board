
const fs = require('fs');

var dbFile = './db.json';
var dbDataBuffer = fs.readFileSync(dbFile);
var dbJSON = dbDataBuffer.toString();

const express = require('express');
const { captureRejectionSymbol } = require('events');
const { type } = require('os');
const e = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    console.log('GET\t/');
    res.send('HELLo World!');
});

// JSON 데이터 get
app.get('/cu/', (req, res) => {
    console.log('GET\t/cu/');
    try {
        res.json(dbJSON);
    } catch(express) {
        console.err(e);
    }
})

// post data
app.post('/cu/', (req, res) => {
    console.log('POST\t/cu');
    try {
        const todo = req.body;
        var arr = new Array();
        var temp = JSON.parse(dbJSON).todos;
        arr = temp;
        arr.push(todo);
        const result = JSON.parse(dbJSON);
        result.todos = arr;
        var dataJson = JSON.stringify(result);
        fs.writeFileSync(dbFile, dataJson);
        res.send('success');
    } catch (express) {
        console.err(e);
    }
    console.log(req.body);
    console.log(dataJson);
});

app.patch('/cu', (req, res) => {
    console.log('PATCH\t/todo');
    try {
        var id = req.params.todo_id;
        var data = JSON.parse(dbJSON);
        for (var i = 0; i < data.todos.length; i++) {
            if (data.todos[i].id === Number(id)) {
                data.todos[i] = req.body;
                break;
            }
            if (i === data.todos.length - 1) {
                throw e;
            }
        }
        // JSON data change
        var dataJson = JSON.stringify(data);
        fs.writeFileSync(dbFile, dataJson);
        res.send('success');        
    } catch (e) {
        res.send('fail');
        console.log("don't find data");
    }
});

// JSON data delete
app.delete('\todos/:todo:id', (req, res) => {
    console.log('DELETE\t/todos/');
    try {
        var id = req.params.todo_id;
        var data = JSON.parse(dbJSON);
        for (var i = 0; i < data.todos.length; i++) {
            if (data.todos[i].id === Number(id)) {
                data.todos.splice(i, 1);
                break;
            }
            if (i === data.todos.length - 1) {
                throw e;
            }
        }
            // JSON data 변환 후 삭제
            var dataJson = JSON.stringify(data);
            fs.writeFileSync(dbFile, dataJson);
            res.send('success');
        } catch (e) {
            res.send('fail');
        }
    });


// // 404 에러 페이지 설정 --> error 페이지 따로 제작
// app.use(function(req, res, next) {
//     // if (req.query.id != null) \
//     next(createError(404));
// });

// // 5xx관련 에러 또한 관련 UI 제작
// app.use(function(err, req, res, next) {
//     res.locals.message = err.message;
//     res.locals.error = req.app.get('env') === 'development' ? err : {};

//     res.status(err.status || 500)
//     res.render('잘못된 접근입니다.');
// })

// // 라우터 생성
// const mainRouter = express.Router();
// const cuRouter = express.Router();

// // JSON 파일 get data
// function getData() {

// }

// // JSON 파일에 post data
// function setData(data) {
//     var jsonObj = JSON.parse(data);
//     console.log()
// }

// // 경로 설정
// app.use(
//     '/static',
//     express.static(path.resolve(__dirname, 'frontend', 'static'))
// )

// // 서버 생성
// const server = http.createServer(app);

// // TODO : 필요한 경로만 지정, 나머지는 404

// // 게시글 목록 router -> get만
// app.get('/', (req, res) => {
//     res.send(getData());
// });

// // 게시글 생성/수정 router -> get/post 둘 다
// app.get('/cu', (req, res) => {
//     res.send(getData());
// });

// app.post('/cu', (req, res) => {
//     const posts = getData();
//     posts.push(req.body);
//     setData(posts);
//     res.send()
// });


module.exports = {
    dev: {
        // Paths
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',
        proxyTable: {},

        host: 'ec2-3-34-126-3.ap-northeast-2.compute.amazonaws.com', // can be overwritten by process.env.HOST
        port: 8082, 
        autoOpenBrowser: false,
        errorOverlay: true,
        notifyOnErrors: true,
        poll: false, 
    }
}