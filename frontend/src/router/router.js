import Home from './components/home';
import Board from './components/board';
import NotFound from './components/NotFound'


const router = async () => {
    const routes = [
        { path: '/', view: Home },
        { path: '/board', view: Board }
    ];

    const pageMatches = routes.map((route) => {
        return {
            route,
            isMatch: route.path === location.pathname,
        };
    });
    let match = pageMatches.find((pageMatch) => pageMatch.isMatch);

    if (!match) {
        match = {
            route: location.pathname,
            isMatch: true,
        };
        const page = new NotFound();
        document.querySelector('#root').innerHTML = await page.getHtml();
    } else {
        const page = new match.route.view();
        document.querySelector('#root').innerHTML = await page.getHtml();
    }
};

// 뒤로가기 일 때 데이터 출력
window.addEventListener("popstate", () => {
    router();
});

document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", (e) => {
        if (e.target.matchs("[data-link]")) {
            e.preventDefault();
            history.pushState(null, null, e.target.href);
            router();
        }
    });
    router();
})
