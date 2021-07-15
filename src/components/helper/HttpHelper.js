class HttpHelper {
    static makeGetRequest(url) {
        return window.fetch(url)
        .then(resp => resp.json())
        .catch(reason => {
            console.error("Error occured parsing response to json: ");
            console.error(reason);
            this.changeIsDataValid(false);
            return Promise.reject("Error occured parsing response to json");
        })
        .then(data => {
            console.log("Got response from " + url + ": ");
            console.log(data);
            return Promise.resolve(data);
        });
    }
}

export default HttpHelper;