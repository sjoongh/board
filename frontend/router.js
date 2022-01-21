const cU = require('./pages/cu.html')

const update = cU()

const router = {
    '/cu': update
}

function initialRouter (mode, el) {
    renderHTML(el, router['/'])

    window.addEventListener('hashchange', () => {
        return renderHTML(el, getHashRoute())
    })
}

function getHashRoute () {
    let route = '/'

    Object.keys(routes).forEach(hashRoute => {
        if(window.location.hash.replace('#', '') === hashRoute.replace('/', '')) {
            route = routes[hashRoute]
        }
    })
    return route
}

function hashRouterPush (pathName, el) {
    renderHTML(el, getHashRoute())
}

function renderHTML (el, route) {
    el.innerHTML = route
}

module.exprts = {
    initialRouter,
    hashRouterPush
}