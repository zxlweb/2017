var a = require('normal-dep');

if (module.hot) {
    require.ensure(['b'], function(require) {
        var c = require('c');

        // Do something special...
    });
}