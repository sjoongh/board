export default class {
    constructor() {
        document.title = "home"
    }
    async getHtml() {
        return `
            <h1>This is Home Page</h1>
        `
    }
}