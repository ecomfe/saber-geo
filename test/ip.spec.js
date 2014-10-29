/**
 * @file geo/ip spec
 * @author zfkun(zfkun@msn.com)
 */

define(function() {

    var ip = require( 'saber-geo/ip' );

    describe( 'IP', function() {
        it( 'should existed.', function() {
            expect( typeof ip ).toEqual( 'object' );
        });

        it( 'should defined `callback`.', function() {
            expect( typeof ip.getConfig().callback ).toEqual( 'string' );
            expect( ip.getConfig().callback ).toEqual( 'callback' );
        });

        it( 'should writeable `callback`.', function() {
            var _callback = ip.getConfig().callback;
            var cb = 'mycb';

            ip.setConfig({
                callback: cb
            });
            expect( ip.getConfig().callback ).toEqual( cb );

            ip.setConfig({
                callback: _callback
            });
        });

        it( 'should defined `provider`.', function() {
            expect( typeof ip.getConfig().provider ).toEqual( 'string' );
            expect( ip.getConfig().provider ).toEqual( 'http://hendless.duapp.com/addr' );
        });

        it( 'should writeable `provider`.', function() {
            var _provider = ip.getConfig().provider;
            var pr = 'http://ecomfe.baidu.io/saber';

            ip.setConfig({
                provider: pr
            });
            expect( ip.getConfig().provider ).toEqual( pr );

            ip.setConfig({
                provider: _provider
            });
        });

        it( 'should defined `find`.', function() {
            expect( typeof ip.find ).toEqual( 'function' );
        });

        it( 'should `find` return correct.', function( done ) {
            ip.find( function ( json ) {
                expect( typeof json ).toEqual( 'object' );
                expect( typeof json.ip ).toEqual( 'string' );
                expect( typeof json.address ).toEqual( 'string' );
                done();
            } );
        });
    });

});
