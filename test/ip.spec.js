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
            expect( typeof ip.callback ).toEqual( 'string' );
            expect( ip.callback ).toEqual( 'callback' );
        });

        it( 'should writeable `callback`.', function() {
            var _callback = ip.callback;
            var cb = 'mycb';

            ip.callback = cb;
            expect( ip.callback ).toEqual( cb );

            ip.callback = _callback;
        });

        it( 'should defined `provider`.', function() {
            expect( typeof ip.provider ).toEqual( 'string' );
            expect( ip.provider ).toEqual( 'http://hendless.duapp.com/addr' );
        });

        it( 'should writeable `provider`.', function() {
            var _provider = ip.provider;
            var pr = 'http://ecomfe.baidu.io/saber';

            ip.provider = pr;
            expect( ip.provider ).toEqual( pr );

            ip.provider = _provider;
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
