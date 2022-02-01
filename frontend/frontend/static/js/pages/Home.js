export default class {
    constructor() {
        document.title = "Home";
    }
    async getHtml() {
        return `
            <h1>This is Home Page</h1>
        `;
    }
}

// 게시판 기능 추가
function loadBoard() {
    return fetch("data/data.json")
        .then((response) => response.json())
        .then((json) => json.items);
}
loadBoard().then((items) => {
    console.log(items);
}) 

// 받아온 items 화면에 출력
function displayItems(itmes) {
    const container = document.querySelector(".items");
    container.innerHTML = items.map((item) => homeBoard(item)).join("");
}


// items object를 HTML li형태로 리턴
function homeBoard(item) {
    return `
    <ul>
        <li>
            작성자 : ${item.name}
        </li>
        <li>
            내용 : ${item.context}
        </li>
        <li>
            작성일자 : ${item.date}
        </li>
    </ul>
    `
}