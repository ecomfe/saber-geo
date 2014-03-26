/**
 * @file IP查询服务
 * @author zfkun[zfkun@msn.com]
 */

define(function( require ) {

    var exports = {};

    var PREFIX_CALLBACK = '_SJC_';
    var PREFIX_ID = '_SJS_';
    var handlers = {};


    exports.callback = 'callback';

    exports.provider = 'http://hendless.duapp.com';

    exports.find = function ( fn ) {
        if ( !fn || typeof fn !== 'function') {
            return;
        }

        jsonp( this.provider, fn );
    };

    function jsonp( url, fn ) {
        var now = Date.now().toString( 16 );
        var id = PREFIX_ID + now;
        var key = PREFIX_CALLBACK + now;
        
        window[ key ] = function () {
            fn.apply( fn, arguments );
            clean( id, key );
        };

        var script = document.createElement( 'script' );
        script.id = id;
        script.defer = 'defer';
        script.async = 'async';
        script.charset = 'utf-8';
        script.src = url
            + ( url.indexOf( '?' ) < 0 ? '?' : '&' )
            + exports.callback + '=' + key;

        document.getElementsByTagName('head')[0].appendChild( script );
    }

    function clean( id, key ) {
        try {
            var node = document.getElementById( id );
            if ( node && node.parentNode ) {
                node.parentNode.removeChild( node );
            }
            delete window[ key ];
        }
        catch ( e ) {}
    }

    return exports;

});