define(
    ["validly"],
    function( Validly ){
        /****** Set up things we need ******/
        var validator = new Validly();

        /****** Add / export functionality ******/
        Validly = Validly.plugin( "isIpv4", function( input ){
            return validator.matches( /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/, input );
        });

        Validly = Validly.plugin( "isIpv6", function( input ){
            return validator.matches( /^((?=.*::)(?!.*::.+::)(::)?([\dA-F]{1,4}:(:|\b)|){5}|([\dA-F]{1,4}:){6})((([\dA-F]{1,4}((?!\3)::|:\b|$))|(?!\2\3)){2}|(((2[0-4]|1\d|[1-9])?\d|25[0-5])\.?\b){4})$/i, input );
        });

        return Validly;
    }
);
