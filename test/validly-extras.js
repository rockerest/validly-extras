define(
    ["validly-extras"],
    function( Validly ){
        describe( "Validly-extras", function(){
            var iv;

            beforeEach( function(){
                iv = new Validly();
            });

            it( "should return a Validly object", function(){
                iv.version.should.be.a( "string" );
            });

            it( "should add the correct methods", function(){
                iv.isIpv4.should.be.a( "function" );
                iv.isIpv6.should.be.a( "function" );
            });

            describe( "#isIpv4", function(){
                it( "should return false when called with non-IPv4 input", function(){
                    iv.isIpv4( "hey there!" ).should.be.false;
                });

                it( "should return true when called with IPv4 input", function(){
                    iv.isIpv4( "255.255.255.255" ).should.be.true;
                });
            });

            describe( "#isIpv6", function(){
                it( "should return false when called with non-IPv6 input", function(){
                    iv.isIpv6( "255.255.255.255" ).should.be.false;
                });

                it( "should return true when called with IPv6 input", function(){
                    iv.isIpv6( "::255.255.255.255" ).should.be.true;
                    iv.isIpv6( "2001:0db8:85a3:0000:0000:8a2e:0370:7334" ).should.be.true;
                    iv.isIpv6( "::1" ).should.be.true;
                });
            });
        });
    }
);
