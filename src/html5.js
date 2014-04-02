/**
 * @file HTML5 Geolocation 封装
 * @author zfkun[zfkun@msn.com]
 */

define(function( require ) {

    var geo = navigator.geolocation;

    var exports = {};

    /**
     * 获取当前地理位置信息
     * 
     * @public
     * @param {Function} onSuccess 成功回调
     * @param {Function=} onError 错误回调
     * @param {Object=} options 配置项
     * @param {boolean=} options.highAcuracy 是否使用高精度
     * @param {number=} options.timeout 超时时长,单位毫秒
     * @param {number=} options.interval 最大检测间隔,单位毫秒
     */
    exports.get = function ( onSuccess, onError, options ) {
        if ( geo ) {
            geo.getCurrentPosition( onSuccess, onError, getPositionOptions( options ) );
        }
    };

    /**
     * 地理位置信息监控
     * 
     * @param {Function} onSuccess 成功回调
     * @param {Function=} onError 错误回调
     * @param {Object=} options 配置项
     * @param {boolean=} options.highAcuracy 是否使用高精度
     * @param {number=} options.timeout 超时时长,单位毫秒
     * @param {number=} options.interval 最大检测间隔,单位毫秒
     * @return {number=} 支持`geolocation`环境返回`watchId`，否则返回`undefined`
     */
    exports.watch = function ( onSuccess, onError, options ) {
        if ( geo ) {
            return geo.watchPosition( onSuccess, onError, getPositionOptions( options ) );
        }
    };

    /**
     * 停止指定的位置监控
     * 
     * @public
     * @param {number} watchId `watch`方法返回的`watchId`
     */
    exports.clear = function ( watchId ) {
        if ( geo ) {
            geo.clearWatch( watchId );
        }
    };


    /**
     * PositionOptions Maker
     * see http://www.w3.org/TR/geolocation-API/#position-options
     * 
     * @inner
     * @param {Object=} options 用户配置
     * @param {boolean=} options.highAcuracy 是否使用高精度
     * @param {number=} options.timeout 超时时长,单位毫秒
     * @param {number=} options.interval 最大检测间隔,单位毫秒
     * @return {Object} 符合`W3C PositionOptions`规格的对象
     */
    function getPositionOptions ( options ) {
        options = options || {};

        var opt = {};
        
        // 高精准度
        if ( options.highAccuracy ) {
            opt.enableHighAccuracy = !!options.highAccuracy;
        }

        // 超时时长
        if ( options.timeout >= 0 ) {
            opt.timeout = options.timeout;
        }

        // 最大检测间隔
        if ( options.interval >= 0 ) {
            opt.maximumAge = options.interval;
        }

        return opt;
    }

    return exports;

});