const e = require('express');
// const puppeteer = require('puppeteer'); ??머임

const getApi = (app) => {
    const getList = (filePath) => {
        let data = [];
        try {
            data = require(filePath); // 파일 경로 
        } catch (err) {
            console.log('data load error!');
        }
        return data;
    }
}

// 게시판 리스트 호출
app.get('/api/board', (req, res) => res.json('/data/data.json'));

module.exports = getApi;