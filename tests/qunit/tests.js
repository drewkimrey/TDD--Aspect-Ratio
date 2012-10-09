test( "pythagorean theorem", function() {

    var testx = 3;
    var testy = 8;

    ok( hypth(testx,testy) == Math.sqrt( Math.pow(testx,2) +  Math.pow(testy,2) ), "Passed!" );

});

test( "aspect ratio xy", function() {

    var testdata = new Array();

    testdata[0]               = [];
    testdata[0]['ratio']      = '16:9';
    testdata[0]['screensize'] = '17';

    testdata[1]               = [];
    testdata[1]['ratio']      = '31:5';
    testdata[1]['screensize'] = '52';

    testdata[2]               = [];
    testdata[2]['ratio']      = '55:3';
    testdata[2]['screensize'] = '393953';

    for (var i = 0; i < testdata.length; i++) {
        var testaspect = getScaledAB(testdata[i].screensize, testdata[i].ratio);
        ok( testdata[i].screensize == hypth(testaspect.x, testaspect.y), "Passed!" );
    }

});