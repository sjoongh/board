// export default class Ajax {
//     // GET END POINT
//     static get(url) {
//         return new Promise((resolve, reject) => {
//             const req = new XMLHttpRequest();
//             req.open('GET', url);
//             req.send();

import { reject, resolve } from "core-js/fn/promise";

//             req.onreadystatechange = function() {
//                 if (req.readyState === XMLHttpRequest.DONE) {
//                     if (req.status === 200) resolve(req.response);
//                     else reject(req.statusText);
//                 }
//             }
//         });
//     };
        
//     // CREATE END POINT
//     static post(url, data) {
//         return new Promise((resolve, reject) => {
//             const req = new XMLHttpRequest();
//             req.open('POST', url);
//             req.setRequestHeader('Content-type', 'application/json');
//             req.send(JSON.stringify(data));

//             req.onreadystatechange = function() {
//                 if (req.readyState === XMLHttpRequest.DONE) {
//                     if (req.status === 200) resolve(req.response);
//                     else reject(req.statusText);
//                 }
//             }
//         })
//     }
   
//     // UPDATE END POINT
//     static put(url, id, data) {
//         return new Promise((resolve, reject) => {
//             const req = new XMLHttpRequest();
//             req.open('PUT', `${url}/${id}`);
//             req.setRequestHeader('Content-type', 'application/json');
//             req.send(JSON.stringify(data));

//             req.onreadystatechange = function () {
//                 if (req.readyState === XMLHttpRequest.DONE) {
//                     if (req.status === 200) resolve(req.response);
//                     else reject(req.statusText);
//                 }
//             }
//         })
//     }

//     // DELETE END POINT
//     static delete(url, id) {
//         return new Promise((resolve, reject) => {
//             const req = new XMLHttpRequest();
//             res.open('DELETE', `${url}/${id}`);
//             res.send();

//             req.onreadystatechange = function () {
//                 if (req.readyState === XMLHttpRequest.DONE) {
//                     if (req.status === 200) resolve(req.response);
//                     else reject(req.statusText);
//                 }
//             }
//         })
//     }
// }

export default function Ajax(method, url, obj) {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader('Accept', 'application/json');
    if (method === 'PUT' || method === 'POST')
        xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(obj || null));

    const promise = new Promise((resolve, reject) => {
        xhr.onreadystatechange = (evt) => {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                // data가 온전히 잘 넘어온다면
                if (xhr.status === 200) {
                    resolve(xhr.responseText);
                } else {
                    reject(new Error('error! 발생 --> status is not 200'));
                }
            }
        };
    });

    return promise;
};