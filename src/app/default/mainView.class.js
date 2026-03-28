export default class {
    params;

    constructor(params) {
        this.params = params;
    }

    async mount(parent) {
        const htmlContentDetails = await this?.getHtml();
        parent.innerHTML = htmlContentDetails;
    }

    setTitle(title) {
        document.title = title;
    }

    async getHtml() {    
        return '';
    }
}