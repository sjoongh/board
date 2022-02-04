export default class {
    constructor(params) {
        this.params = params;
        this.url = `in root url here`;
        // return 값
        this.converDate = date => {
            return `${date.getFullYear()}`
        }
    }

    setTitle(title) {
        document.title = title;
    }

    attachEvent() {}

    async getHtml() {
        return "";
    }
}