export default class Ajax {
    static get(url) {
        return new Promise((resolve, reject) => {
            const req = new XMLHttpRequest();
            req.open('GET', url);
            req.send();

            req.onreadystatechange = function() {
                if (req.readyState === XMLHttpRequest.DONE) {
                    if (req.status === 200) resolve(req.response);
                    else reject(req.statusText);
                }
            }
        });
    };
    
    static post(url, data) {
        return new Promise((resolve, reject) => {
            const req = new XMLHttpRequest();
            req.open('POST', url);
            req.setRequestHeader('Content-type', 'application/json');
            req.send(JSON.stringify(data));

            req.onreadystatechange = function() {
                if (req.readyState === XMLHttpRequest.DONE) {
                    if (req.status === 200) resolve(req.response);
                    else reject(req.statusText);
                }
            }
        })
    }
}