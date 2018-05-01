var os = require('os');

function getOSinfo() {
    var type = os.type();
    if(type === 'Darwin') {
        type = 'OSX';
    } else if(type === 'Windows_NT') {
        type = 'Windows';
    }
    var release = os.release();
    var cpu = os.cpus()[0].model;
    var uptime = os.uptime();
    var userInfo = os.userInfo();
    console.log('System:', type);
    console.log('Release:', release);
    console.log('CPU model:', cpu);
    console.log('Uptime: ~', convert(uptime));
    console.log('User name:', userInfo.username);
    console.log('Home dir:', userInfo.homedir);
}

exports.print = getOSinfo();

function convert(numb) {
    var h = Math.floor(numb/3600);
    var m = Math.floor((numb%3600)/60);
    var s = Math.floor((numb%3600)%60);

    return(h + " hours " + m + " minutes " + s + " seconds.");
}