export default class {
    constructor() {
        document.title = "Board";
    }
    async getHtml() {
        return `
            <h1>This is Board Page</h1>
        `;
    }
    /**
     * 
            <div>
                <ul>${board.title}</ul>
                <ul>${board.content}</ul>
                <ul>${board.user}</ul>
            </div>
     */
}

// --------------------------------------------------------------
// import Ajax from '../ajax.js';
// // const data = JSON.parse(await Ajax('GET',
// //         `http://localhost:8080/data.json`));
// let getBoardList = async () => {
//     const options = {
//         method: 'GET',
//         headers: {
//             'Content-Type': '../ajax.js'
//         }
//     };
//     try {
//         const response = await fetch('http://localhost:3000/board', options)
//         const json = await response.json();
//         return json
//     } catch (err) {
//         console.log('Error getting documents', err)
//     }
// }

// let Home = {
//     render: async () => {
//         let Boards = await getBoardList()
//         // TODO : 정렬에 대한 요청이 들어올 때 구분 and 구분된 요청에 맞게 json데이터를 뿌려주기!!!
//         let view = `
//         <section class="section">
//             <h1> Home </h1>
//             <ul>
//             ${ Boards.map(board => /*map을 활용해서 board에 json데이터를 전부 뿌려줌.*/
//                 `
//                 <li>${board.no}</li>
//                 <li>${board.title}</li>
//                 <li>${board.name}</li>
//                 <li>${board.date}</li>
//                 `
//                 ).join('\n ')
//             }
//             </ul>`
//     }
// }

// export default Board;