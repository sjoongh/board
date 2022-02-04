// export default class {
//     constructor() {
//         document.title = "404 Not found";
//     }
//     async getHtml() {
//         return `
//             <h1>404 Not found</h1>
//         `;
//     }
// }

const Error404 = {
    render: async () => {
        return `
        <section>
            <h1 class="text-center">Error 404. Page not found.</h1>
        </section>`;
    }
};
export default Error404;