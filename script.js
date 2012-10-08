function hypth (a,b) {
    c = Math.pow(a,2) +  Math.pow(b,2);
    return Math.sqrt(c);
}

function getScaledAB (c, ratio) {
    ratio = ratio.split(":");
    var base_c = hypth(ratio[0], ratio[1]);
    var c_rat = c/base_c;
    var results = [];
    results['y'] = ratio[0] * c_rat;
    results['x'] = ratio[1] * c_rat;
    return results;
}