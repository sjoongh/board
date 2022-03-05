// import BoardList from './pages/Board';
// import WriteView from './pages/WriteView';
// import DetailView from './pages/DetailView';
// import UpdateView from './pages/UpdateView';

// // id를 no로 변경해서 게시물을 특정할때 no값으로 가져옴
// async function router() {
//     const routes = [
//         { path: '/board', view: BoardList },
//         { path: 'write', view: WriteView },
//         { path: 'board/:no', view: DetailView },
//         { path: 'update/:no', view: UpdateView },
//     ];

//     let match = routes
//     .filter(route => location.pathname.match(pathToRegex(route.path)))
//     .map(route => {
//         return { route : route, result : location.pathname.match(pathToRegex(route.path))};
//     })[0];

//     // match가 다르다면 router data 전달하지 않음.
//     if (!match) {
//         match = { route: routes[0], result: [] };
//     }

//     const view = new match.route.view(getParams(match));
//     const appRoot = document.querySelector('.app-root');
//     appRoot.innerHTML = await view.getHtml();

//     if (match.route.path === '/board') {
//         console.log(123);
//         await view.getBoardList();
//         await view.getPageList();
//     } 

//     if (match.route.path === '/board:no' || match.route.path === '/update/:no') {
//         await view.getBoardDetail();
//     } 
//     view.attachEvent();
// }


import { Giact } from "./core/giact";
import { div } from "./core/h";
import Main from "./pages/Main";
import Modify from "./pages/Modify";
import Write from "./pages/Write";
import { Component } from "./types/component";

// type RouterMap = {
//   [path: string]: Component;
// };

function Router() {
  const getPath = () => {
    const path = document.location.pathname;
    const pathVariable = path.split("/");
    const queryParams = new URLSearchParams(document.location.search);
    return {
      path: `/${pathVariable[1]}`,
      params: pathVariable.slice(2, pathVariable.length),
      query: queryParams,
    };
  };
  const map = {
    "/": Main,
    "/write": Write,
    "/modify": Modify,
  };
  const initPage = getPath();
  const [curPage, setCurPage] = Giact.useRouter(
    map[initPage.path]({ params: initPage.params, query: initPage.query })
  );
  const onChangeLocation = () => {
    Giact.clear();
    const nextPage = getPath();
    setCurPage(
      map[nextPage.path]({ params: nextPage.params, query: nextPage.query })
    );
  };

  window.addEventListener("route", onChangeLocation);
  window.addEventListener("popstate", onChangeLocation);

  return {
    template: () => div({ class: "router" }, [curPage().template()]),
  };
}

export default Router;
