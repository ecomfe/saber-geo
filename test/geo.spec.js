/**
 * @file geo spec
 * @author zfkun(zfkun@msn.com)
 */

define(function() {

    var geo = require( 'saber-geo' );

    describe( 'geo', function() {
        it( 'should existed.', function() {
            expect( typeof geo ).toEqual( 'object' );
        });

        it( 'should defined `get()`.', function() {
            expect( typeof geo.get ).toEqual( 'function' );
        });

        it( 'should defined `watch()`.', function() {
            expect( typeof geo.watch ).toEqual( 'function' );
        });

        it( 'should defined `clear()`.', function() {
            expect( typeof geo.clear ).toEqual( 'function' );
        });
    });

});
