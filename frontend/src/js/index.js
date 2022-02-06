
// import Ajax from './ajax';
// import Home from "./pages/Home.js";
// import Board from "./pages/Board.js";
// import Settings from "./pages/Settings.js";
// import NotFound from "./pages/NotFound.js";

// // router 설정들
// const router = async () => {
//     const routes = [
//         { path: "/", view: Home },
//         { path: "/board", view: Board },
//         { path: "/settings", view: Settings },
//     ];

//     const pageMatches = routes.map((route) => {
//         return {
//             route, // route: route
//             isMatch: route.path === location.pathname,
//         };
//     });
//     let match = pageMatches.find((pageMatch) => pageMatch.isMatch);

//     if (!match) {
//         match = {
//             route: location.pathname,
//             isMatch: true,
//         };
//         const page = new NotFound();
//         document.querySelector("#root").innerHTML = await page.getHtml();
//     } else {
//         const page = new match.route.view();
//         document.querySelector("#root").innerHTML = await page.getHtml();
//     }
// };

// // 뒤로 가기 할 때 데이터 나오게 하기 위함
// window.addEventListener("popstate", () => {
//     router();
// });

// document.addEventListener("DOMContentLoaded", () => {
//     document.body.addEventListener("click", (e) => {
//         if (e.target.matches("[data-link]")) {
//             e.preventDefault();
//             history.pushState(null, null, e.target.href);
//             router();
//         }
//     });
//     router();
// });

// webpack의 end point 역할
import { router, navigateTo } from './router.js';

window.addEventListener('popstate', router);

document.querySelector('.main-link').addEventListener('click', e => {
    e.preventDefault();
    navigateTo(e.target.href);
});

window.onload = () => {
    router();
}

