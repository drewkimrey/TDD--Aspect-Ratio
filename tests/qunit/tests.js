var testx = 3;
var testy = 8;

var testratio1 = "16:9";
var testsize1 = 17;
var testaspect1 = getScaledAB(testsize1, testratio1);

var testratio2 = "55:3";
var testsize2 = 393953;
var testaspect2 = getScaledAB(testsize2, testratio2);

var testratio3 = "31:5";
var testsize3 = 52;
var testaspect3 = getScaledAB(testsize3, testratio3);


test( "pythagorean theorem", function() {
  ok( hypth(testx,testy) == Math.sqrt( Math.pow(testx,2) +  Math.pow(testy,2) ), "Passed!" );
});

test( "aspect ratio xy", function() {
    ok( testsize1 == hypth(testaspect1.x, testaspect1.y), "Passed!" );
    ok( testsize2 == hypth(testaspect2.x, testaspect2.y), "Passed!" );
    ok( testsize3 == hypth(testaspect3.x, testaspect3.y), "Passed!" );
});