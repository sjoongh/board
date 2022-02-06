import ListView from './pages/ListView';
import WriteView from './pages/WriteView';
import DetailView from './pages/DetailView';
import UpdateView from './pages/UpdateView';

// id를 no로 변경해서 게시물을 특정할때 no값으로 가져옴
async function router() {
    const routes = [
        { path: '/board', view: ListView },
        { path: 'write', view: WriteView },
        { path: 'board/:no', view: DetailView },
        { path: 'update/:no', view: UpdateView },
    ];

    let match = routes
    .filter(route => location.pathname.match(pathToRegex(route.path)))
    .map(route => {
        return { route : route, result : location.pathname.match(pathToRegex(route.path))};
    })[0];

    // match가 다르다면 router data 전달하지 않음.
    if (!match) {
        match = { route: routes[0], result: [] };
    }

    const view = new match.route.view(getParams(match));
    const appRoot = document.querySelector('.app-root');
    appRoot.innerHTML = await view.getHtml();

    if (match.route.path === '/board') {
        await view.getBoardList();
        await view.getPageList();
    } 

    if (match.route.path === '/board:no' || match.route.path === '/update/:no') {
        await view.getBoardDetail();
    } 
    view.attachEvent();
}
