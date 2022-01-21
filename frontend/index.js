require('./style.css')

const {
    initalRoutes,
    hashRouterPush
} = require('./router')

const hashAppDiv = document.querySelector('#hash-app')

initalRoutes('hash', hashAppDiv)

window.onload = () => {
    const hashLinker = document.querySelectorAll('a.hash')

    hashLinker.forEach(el => {
        el.addEventListener('click', (evt) => {
            const pastName = evt.target.getAttribute('route')

            hashRouterPush(pathName, hashAppDiv)
        })
    })
}