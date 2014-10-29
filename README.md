# saber-geo [![Build Status](https://travis-ci.org/ecomfe/saber-geo.png)](https://travis-ci.org/ecomfe/saber-geo)

适合移动端的 GeoLocation 封装


## Installation

通过 [edp](https://github.com/ecomfe/edp) 引入模块：

```sh
edp import saber-geo
```

## Usage


```javascript
require( [ 'saber-geo' ], function( Geo ) {

	function onSuccess( position ) {
    	var coords = position.coords;
       	console.log( 'latitude,longitude: ', coords.latitude, coords.longitude);
    }
    
    function onError( error ) {
    	console.log( 'Error: ', error.code, error.message );
    }
	
	// 一次性获取
	Geo.get( onSuccess, onError );
    
    // 持续性获取
    var watchId = Geo.watch( onSuccess, onError );
    
    // 停止获取
    Geo.clear( watchId );

});
```


## Methods

该部分是标准的 [HTML5 Geolocation API](http://www.w3.org/TR/geolocation-API) 封装，在 `require( 'saber-geo' )` 时加载。

#### get( onSuccess[, onError, options] )

`一次性`获取当前`地理位置信息`。

```javascript
Geo.get(
	function ( position ) {
    	console.info( 'Position: ', position );
	},
	function ( error ) {
		console.error( 'Error: ', error );
	}
);
```

+ **onSuccess** `{Function}` 成功回调，参数参考[`Position`](http://www.w3.org/TR/geolocation-API/#position_interface)
+ **onError** `{Function=}` 错误回调，参数参考[`PositionError`](http://www.w3.org/TR/geolocation-API/#position_error_interface)
+ **options** `{Object=}` 配置对象
	+ **highAcuracy** `{boolean=}` 是否使用高精度
	+ **timeout** `{number=}` 超时时长,单位毫秒
	+ **age** `{number=}` 数据缓存时间,单位毫秒,为`0`时每次都执行新的检索

#### watch( onSuccess[, onError, options] )

`持续性`获取当前`地理位置信息`。

```javascript
Geo.watch(
	function ( position ) {
    	console.info( 'Position: ', position );
	},
	function ( error ) {
		console.error( 'Error: ', error );
	},
	{ timeout: 20000, age: 10000 }
);
```

+ **onSuccess** `{Function}` 成功回调，参数参考[`Position`](http://www.w3.org/TR/geolocation-API/#position_interface)
+ **onError** `{Function=}` 错误回调，参数参考[`PositionError`](http://www.w3.org/TR/geolocation-API/#position_error_interface)
+ **options** `{Object=}` 配置对象
	+ **highAcuracy** `{boolean=}` 是否使用高精度
	+ **timeout** `{number=}` 超时时长,单位毫秒
	+ **age** `{number=}` 数据缓存时间,单位毫秒,为`0`时每次都执行新的检索 

#### clear( watchId )

停止指定的位置监控。

```javascript
var watchId = Geo.watch( ... );
Geo.clear( watchId );
```

+ **watchId** `{number}` `watch`方法返回的`watchId`


## Optional Modules 可选模块

* [Object](./src/ip.js) IP模块
	* require('saber-geo/ip') 

## IP

`在线IP查询服务`的扩展支持，需以 `require( 'saber-geo/ip' )` 引入。

### Methods

#### setup( options )

* **options** `{Object}`
    * **callback** `{string}` 查询请求(`JSOP`)附带的`callback`参数的`键值`，默认为`callback`
    * **provider** `{string}` 查询服务的`JSONP`服务地址，默认为`http://hendless.duapp.com/addr`

#### find( callback )

查询当前`IP信息`

* **callback** `{Function}` 回调函数


```javascript
require( [ 'saber-geo/ip' ], function( IP ) {
	IP.find( function () {
    	console.info( 'IP Info: ', arguments );
	});
});
```
