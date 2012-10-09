test( "pythagorean theorem", function() {

    // Test to make sure that this returns the sqrt of C

    var testx = 3;
    var testy = 8;

    ok( hypth(testx,testy) == Math.sqrt( Math.pow(testx,2) +  Math.pow(testy,2) ), "A^2 + B^2 = C^2!" );

});

test( "aspect ratio xy", function() {

    // Testing data against the Pythagorean Theorem

    var testData = [];

    testData[0]               = [];
    testData[0]['ratio']      = '16:9';
    testData[0]['screensize'] = 17;

    testData[1]               = [];
    testData[1]['ratio']      = '31:5';
    testData[1]['screensize'] = 52;

    testData[2]               = [];
    testData[2]['ratio']      = '55:3';
    testData[2]['screensize'] = 393953;

    testData[3]               = [];
    testData[3]['ratio']      = '50:3';
    testData[3]['screensize'] = 50;

    testData[4]               = [];
    testData[4]['ratio']      = '6:3';
    testData[4]['screensize'] = 393;

    testData[4]               = [];
    testData[4]['ratio']      = '10:4';
    testData[4]['screensize'] = 5454;

    for ( var i = 0; i < testData.length; i++ ) {
        var thisTestData = testData[i];
        var testaspect = getScaledAB(thisTestData.screensize, thisTestData.ratio);
        equal(
            thisTestData.screensize,
            hypth(testaspect.x, testaspect.y).toFixed(5),
            thisTestData.screensize + ' inch screen with a ' +
            thisTestData.ratio + ' aspect ratio passed! ( x:' +
            testaspect.x + ', y:'  +testaspect.y + ')'
        );
    }

});