/**
 * @file IP查询服务
 * @author zfkun[zfkun@msn.com]
 */

define(function( require ) {

    var exports = {};

    /**
     * @const
     * @type {string}
     */
    var PREFIX_CALLBACK = '_SJC_';

    /**
     * 
     * @const
     * @type {string}
     */
    var PREFIX_ID = '_SJS_';


    /**
     * callback name for jsonp
     * 
     * @public
     * @type {string}
     */
    exports.callback = 'callback';

    /**
     * provider url for ip-server
     * 
     * @public
     * @type {string}
     */
    exports.provider = 'http://hendless.duapp.com';

    /**
     * search ip info
     * 
     * @public
     * @param {Function} fn success handler
     */
    exports.find = function ( fn ) {
        if ( fn && typeof fn === 'function') {
            jsonp( exports.provider, fn );
        }
    };

    /**
     * jsonp request maker
     * 
     * @inner
     * @param {string} url request url
     * @param {Function} fn success handler
     */
    function jsonp( url, fn ) {
        var now = Date.now().toString( 16 );
        var id = PREFIX_ID + now;
        var key = PREFIX_CALLBACK + now;
        
        window[ key ] = function () {
            clean( id, key );
            fn.apply( fn, arguments );
        };

        var script = document.createElement( 'script' );
        script.id = id;
        script.defer = 'defer';
        script.async = 'async';
        script.charset = 'utf-8';
        script.src = url
            + ( url.indexOf( '?' ) < 0 ? '?' : '&' )
            + exports.callback + '=' + key;

        document.getElementsByTagName( 'head' )[ 0 ].appendChild( script );
    }

    /**
     * cleanup JSONP request
     * 
     * @inner
     * @param {string} id script id for JSONP
     * @param {string} key key of callback handler for JSONP
     */
    function clean( id, key ) {
        var node = document.getElementById( id );
        if ( node && node.parentNode ) {
            try {
                node.parentNode.removeChild( node );
            }
            catch ( e ) {}
        }
        delete window[ key ];
    }

    return exports;

});