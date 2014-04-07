requirejs.config({
    "baseUrl": "../",
    "paths":{
        "validly":      "vendor/validly/validly",
        // Testing Libraries
        "chai":         "vendor/chai/chai",
        "mocha":        "vendor/mocha/mocha"
    },
    "config": {
        "testRunner": {
            "tests": [
                "test/validly-extras"
            ]
        }
    }
});

define(
    "testRunner",
    ["require", "module", "chai"],
    function( require, module, chai ){
        var should = chai.should();

        // Mocha setup
        mocha.setup( 'bdd' );

        // tests
        require(
            module.config().tests,
            function(){
                if( window.mochaPhantomJS ){
                    mochaPhantomJS.run();
                }
                else{
                    mocha.run();
                }
            }
        );
    }
);

require(["testRunner"]);
