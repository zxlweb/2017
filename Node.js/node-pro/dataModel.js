const USER_TOKEN = 'userToken';
var Tools = {
        checkStates: function(response) {
            console.log(response)
            if (response.ok) {
                return response
            } else {
                var error = new Error(response.statusText);
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
            var _search = '?';
            for (var key in param) {
                _search += `${key}=${encodeURIComponent(param[key])}&`
            }
            return _search.slice(0, -1);
        },
    }
    // const API = 'http://localhost:4545/'
const API = 'http://192.168.41.5:4545/'
    /**
     * fetch请求数据Model
     * @param _method
     * @param _api
     * @param _params
     * @param _onSuccess
     * @param _onError
     * @private
     */
function _request(_method, _api, _params, _onSuccess, _onError) {
    // console.log(_method)
    var _options = {
        method: _method,
        mode: "cors",
        headers: {
            // 'Accept':'application/json',
            'Content-Type': 'application/json',
        },
        body: (_method == 'GET') ? null : JSON.stringify(_params)
    };
    // console.log(_options,'123456');
    if (_method.toLowerCase() == 'get') {
        _api += Tools._getSearchFromObject(_params)
    }
    console.log(fetch)

    fetch(_api, _options)
        .then(Tools.checkStates)
        .then(Tools.parseJSON)
        .then((data) => {
            _onSuccess(data)
        })
        .catch((err) => {
            console.log(err);
            if (err.state == 401) {
                alert("登录过期,重新登录")
                location.hash = "login";
                return
            }
            if (err.response) {
                err.response.json().then((data) => {
                    console.log(data)
                    if (data.message)
                        alert(data.message)
                })
            }
        })
}
var UserModel = {

    register: (_params, _success, _error) => {
        _request('POST', `${API}user/register`, _params, _success, _error)
    }
}


var UserModel = (function() {
    function register(_params, _success, _error) {
        _request('POST', `${API}user/register`, _params, _success, _error)
    }
    return {
        register: register
    }
})()