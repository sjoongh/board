export default class {
    constructor() {
        document.title = "404 Page"
    }
    async getHtml() {
        return `
            <h1>404 Error!</h1>
            <h2>Get Out Of Here!</h2>
        `
    }
}