export default class Ajax {
    // GET END POINT
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
        
    // CREATE END POINT
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
   
    // UPDATE END POINT
    static put(url, id, data) {
        return new Promise((resolve, reject) => {
            const req = new XMLHttpRequest();
            req.open('PUT', `${url}/${id}`);
            req.setRequestHeader('Content-type', 'application/json');
            req.send(JSON.stringify(data));

            req.onreadystatechange = function () {
                if (req.readyState === XMLHttpRequest.DONE) {
                    if (req.status === 200) resolve(req.response);
                    else reject(req.statusText);
                }
            }
        })
    }

    // DELETE END POINT
    static delete(url, id) {
        return new Promise((resolve, reject) => {
            const req = new XMLHttpRequest();
            res.open('DELETE', `${url}/${id}`);
            res.send();

            req.onreadystatechange = function () {
                if (req.readyState === XMLHttpRequest.DONE) {
                    if (req.status === 200) resolve(req.response);
                    else reject(req.statusText);
                }
            }
        })
    }
}