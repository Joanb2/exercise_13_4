function Convert(numb) {
    var h = Math.floor(numb/3600);
    var m = Math.floor((numb%3600)/60);
    var s = Math.floor((numb%3600)%60);

    return(h + " hours " + m + " minutes " + s + " seconds.");
}

exports.print = Convert(numb);