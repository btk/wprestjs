class WPRestAPI {
    constructor(url) {
        this.url = url;
    }
    getJSON(url) {
        return new Promise(function(resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.open('get', url, true);
            xhr.responseType = 'json';
            xhr.onload = function() {
                var status = xhr.status;
                if (status == 200) {
                    resolve(xhr.response);
                } else {
                    reject(status);
                }
            };
            xhr.send();
        });
    }
    getPosts(options) {
        const apiurl = `${this.url}/posts/?_jsonp&per_page=${options.number}`;
        return this.getJSON(apiurl);
    }

    getCategories(options) {
        const apiurl = `${this.url}/categories/?_jsonp`;
        return this.getJSON(apiurl);
    }

    // TODO: add other utilities of the API as methods for this class.
}

export default WPRestAPI;
