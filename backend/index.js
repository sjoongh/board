const express = require('express');
const app = express();
const PORT = 8081;
const path = require('path');

app.use(
    '/static',
    express.static(path.resolve(__dirname, 'frontend', 'static'))
)

// 필요한 경로만 지정, 나머지는 에러페이지
 
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'index.html'));
});