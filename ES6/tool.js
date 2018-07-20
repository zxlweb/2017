let Tools = {
    checkStates: function(response) {
        if (response.ok) {
            return response
        } else {
            let error = new Error(response.statusText);
            error.state = response.status;
            error.response = response;
            throw error;
        }
    },
    parseJSON: function(response) {
        return response.json();
    },
    _getSearchFromObject: function(param, key) {

        if (param == null) return '';
        let _search = '?';
        for (let key in param) {
            _search += `${key}=${encodeURIComponent(param[key])}&`
        }
        return _search.slice(0, -1);
    },
}