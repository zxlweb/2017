var GetCookie=function(name){
    var arr = document.cookie.match(new RegExp("(^| )"+name+"=([^;]*)(;|$)"));
    if(arr != null) return decodeURIComponent(arr[2]); return null;
}
var SetCookie=function(name,value,options){
    var expires = '', path = '', domain = '', secure = '';
    if(options)
    {
        if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
            var exp;
            if (typeof options.expires == 'number') {
                exp = new Date();
                exp.setTime(exp.getTime() + options.expires*24*60*60*1000);
            }
            else{
                exp = options.expires;
            }
            expires = ';expires=' + exp.toUTCString();
        }
        path = options.path ? '; path=' + options.path : '';
        domain = options.domain ? '; domain=' + options.domain : '';
        secure = options.secure ? '; secure' : '';
    }
    document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');
}