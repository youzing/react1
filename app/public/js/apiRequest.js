import apiManager from '../../public/js/apiManager'
const xmlNative = opt => {
    opt = opt || {};
    opt.method = opt.method.toUpperCase() || 'POST';
    opt.url = opt.url || '';
    opt.async = opt.async || true;
    opt.data = opt.data || null;
    opt.success = opt.success || function () {
        };
    let xmlHttp = new XMLHttpRequest();
    if (opt.method.toUpperCase() === 'POST') {
        xmlHttp.open(opt.method, opt.url, opt.async);
        xmlHttp.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
        xmlHttp.send(JSON.stringify(opt.data));
    }
    else if (opt.method.toUpperCase() === 'GET') {
        let params = [];
        for (let key in opt.data) {
            params.push(key + '=' + opt.data[key]);
        }
        let postData = params.join('&');
        xmlHttp.open(opt.method, opt.url + '?' + postData, opt.async);``
        xmlHttp.send(null);
    }
    xmlHttp.onreadystatechange = () => {
        if (xmlHttp.readyState === 4) {
            if (xmlHttp.status === 200) {
                opt.success(JSON.parse(xmlHttp.responseText), xmlHttp.status);
            } else {
                opt.error(JSON.parse(xmlHttp.responseText), xmlHttp.status);
            }
        }
    };
};
const ajax = (url, method, data, successCB, errorCB) => {
    let dataJson = {
        version: "1.0.0",
        data: data
    };
    return xmlNative({
        method: method,
        url: url,
        data: dataJson,
        success: (data, status) => {
            if (data.code === 0) {
                successCB && successCB(data, status)
            } else {
                if (errorCB) {
                    errorCB(data, status)
                } else {
                    console.log(data, status);
                }
            }
        },
        error: (data, status) => {
            console.log(status, status)
        }
    });
};
const apiRequest = {
    get: (apiName, data, successCB, errorCB) => {
        return ajax(apiManager[apiName], "get", data,
            (data, status, xhr) => successCB && successCB(data.data, data.systemDate),
            errorCB);
    },
    post: (apiName, data, successCB, errorCB) => {
        return ajax(apiManager[apiName], "post", data,
            (data, status, xhr) => successCB && successCB(data.data, data.systemDate),
            errorCB);
    }
};
export default apiRequest;