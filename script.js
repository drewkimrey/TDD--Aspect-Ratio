function hypth (a,b) {
    var c = Math.pow(a,2) +  Math.pow(b,2);
    return Math.sqrt(c);
}

function getScaledAB (c, ratio) {
    var ratio    = ratio.split(":");
    var base_c   = hypth(ratio[0], ratio[1]);
    var c_rat    = c/base_c;
    var results  = new Object();
    results['y'] = ratio[0] * c_rat;
    results['x'] = ratio[1] * c_rat;
    return results;
}