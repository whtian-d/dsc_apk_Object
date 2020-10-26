import axios from 'axios';
export default function ajax(url = '', params = {}, type = 'get') {
    let promise;
    return new Promise((resolve, reject) => {
        if (type == 'get') {
            let paramsStr = '';
            Object.keys(params).forEach((key) => {
                paramsStr += key + '=' + params[key] + '&';
            })
            if (paramsStr.trim() != '') {
                paramsStr = paramsStr.substr(0, paramsStr.length - 1);
            }
            url += '?' + paramsStr
            promise = axios.get(url);
        } else if (type == 'post') {
            promise = axios.post(url, params)
        }
        promise.then((res) => {
            resolve(res.data)
        }).catch((err) => {
            reject(err)
        })
    })
}