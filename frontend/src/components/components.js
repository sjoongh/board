// // template
// const homeTemplate = require('./pages/home.html')
// const aboutTemplate = require('./pages/about.html')

// // const Home = homeTemplate()
// // const About = aboutTemplate()

// const routes = {
//   Home: './pages/home.html',
//   About: './pages/about.html'
// }

// // entry point
// function initialRoutes (mode, el) {
//   renderHTML(el, routes['/'])

//   if (mode === 'history') {
//     window.onpopstate = () => renderHTML(el, routes[window.location.pathname])
//   } else {
//     window.addEventListener('hashchange', () => {
//       return renderHTML(el, getHashRoute())
//     })
//   }
// }

// // set browser history
// function historyRouterPush (pathName, el) {
//   window.history.pushState({}, pathName, window.location.origin + pathName)
//   renderHTML(el, routes[pathName])
// }

// // get hash history route
// function getHashRoute () {
//   let route = '/'

//   Object.keys(routes).forEach(hashRoute => {
//     if (window.location.hash.replace('#', '') === hashRoute.replace('/', '')) {
//       route = routes[hashRoute]
//     }
//   })

//   return route
// }

// // set hash history
// function hashRouterPush (pathName, el) {
//   renderHTML(el, getHashRoute())
// }

// // render
// function renderHTML (el, route) {
//   el.innerHTML = route
// }

// module.exports = {
//   initialRoutes,
//   historyRouterPush,
//   hashRouterPush
// }

// ------------------------------------------------------------------------

// element 사용 && get
// ??? 얘네는 써야하나?
// const createElement = string => {
//   const $temp = document.createElement('template');
//   $temp.innerHTML = string;
//   return $temp.content;
// };

// const createData = async () => {
//   const res = await fetch('./board/create');
//   const json = await res.json();
//   return json;
// };

// ------------------------------------------------------------------------

// 게시판 전체 data 렌더링
export const getdata = async () => {
  const { title, content, name } = await allData('./data/home/json');
  return createElement(`<h1>All Data Lendering</h1>
  <div>
      <ul class="board">
          <li class="board-content">${title}</li>
          <li class="board-content">${content}</li>
          <li class="board-content">${name}</li>
      </ul>
  </div>`) // 여기서 template 만들어주면 될듯
}

// create JSON router 전송
export const create = async () => {
  const { title, content, name } = await createData('./data/home/json');
  return createElement(`<h1>${title}</h1>`) // 여기서 template 만들어주면 될듯
}

// select JSON router
export const select = async () => {
  const { title, content, name } = await selectData('') // 여기서 db로 보내줌
  return createElement(``) // 받은 데이터 출력
}

// update JSON
export const update = async () => {
  const { title, content, name } = await updateData('') // 여기서 db로 보내줌
  return createElement(`<div class="page">
  <h1>fix page</h1>
  
<div class="column-1">
  <div class="column-2">
      <input type="inputText" class="column-title" placeholder="제목을 입력하세요." autofocus>

      <textarea class="column-content" cols="100" rows="8" placeholder="내용을 입력하세요."></textarea>

      <input type="inputText" class="column-writer" placeholder="작성자이름을 입력하세요.">
  </div>
</div>
<button onclick="location.href='index.html'">data upload</button>`) // 받은 데이터 출력
}


// delete JSON
export const exit = async () => {
  const { title, content, name } = await exitData('') // 여기서 db로 보내줌
  return createElement(`<div class="page">
  <h1>fix page</h1>
<div class="column-1">
  <div class="column-2">
      <input type="inputText" class="column-title" placeholder="제목을 입력하세요." autofocus>

      <textarea class="column-content" cols="100" rows="8" placeholder="내용을 입력하세요."></textarea>

      <input type="inputText" class="column-writer" placeholder="작성자이름을 입력하세요.">
  </div>
</div>
<button onclick="location.href='index.html'">전송</button>`) // 받은 데이터 출력
}


// how to use??
// export const Board = async () => {
//   const { title, content, name } = await fetchData('./data/board/json');
//   return createElement(`<h1>${title}</h1><p>${content}</p>`)
// };

export const NotFound = () => createElement(`<h1>404 NotFound</h1>`);


// data upload
// fetch use

export const NotFount = () => 
createElement(`<h1>404 NotFound</h1>`)
