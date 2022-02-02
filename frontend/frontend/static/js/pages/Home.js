export default class {
    constructor() {
        document.title = "Home";
    }
    async getHtml() {
        // fetch로 신호 보내면 백쪽에서 해당 data 전달
        // fetch("./data.json")
        //     .then(response => {
        //         // console.log(response.json());
        //         return response.json();
        //     }).then(jsondata => console.log(jsondata));
        // for (var i = 0; i < dataJson.board.length; i++) {
        //     console.log(dataJson.board[i]);
        //     var no = dataJson.board[i].no;
        //     var title = dataJson.board[i].title;
        //     var name = dataJson.board[i].name;
        //     var date = dataJson.board[i].date;
        // }
        return `
        
            <h1>This is Home Page</h1>
        `;
    }
}

{/* <ul>
            <li>${no}</li>
            <li>${name}</li>
            <li>${title}</li>
            <li>${date}</li>
        </ul>
            <div>${no}</div>
            <div>${title}</div>
            <div>${name}</div>
            <div>${date}</div> */}

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