import Ajax from '../ajax.js';

export default class {
    constructor() {
        document.title = "Home";
    }
    async getHtml() {
        const data = JSON.parse(await Ajax('GET',
        `http://localhost:8080/data.json`));
        // data크기만큼 게시물 출력함
        // for (const comment of data.board) {
        //     // 원하는 게시물 출력
        //     const li = document.createElement('li');
        // }
        // <div>${data}<div>
        return `
            <h1>This is Home Page</h1>
        `;
    }
}


// 게시판 기능 추가
// function loadBoard() {
//     return fetch("data/data.json")
//         .then((response) => response.json())
//         .then((json) => json.board);
// }
// loadBoard().then((board) => {
//     console.log(board);
// }) 

// // 받아온 items 화면에 출력
// function displayItems(board) {
//     const container = document.querySelector(".board");
//     container.innerHTML = board.map((item) => homeBoard(item)).join("");
// }


// // items object를 HTML li형태로 리턴
// function homeBoard(item) {
//     return `
//     <ul>
//         <li class="item">
//             작성자 : ${item.name}
//         </li>
//         <li class="item">
//             내용 : ${item.context}
//         </li>
//         <li class="item">
//             작성일자 : ${item.date}
//         </li>
//     </ul>
//     `
// }