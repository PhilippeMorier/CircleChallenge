const execSync = require('child_process').execSync;

function npmRun(command, title) {
    console.log('┌───────────────────────────────────────────── \u001b[32;1m' + title + '\u001b[0m ─────────────────────────────────────────────┐');
    execSync('npm run ' + command, {stdio: [process.stdin, process.stdout, process.stderr]});
}

function logCurrentDateFormatted() {
    var currentDate = new Date();
    console.log();
    console.log(
        '                                   \u001b[32;1mWebpack\u001b[0m @ '
        + currentDate.getDate() + '.' + (currentDate.getMonth() + 1) + '.' + currentDate.getFullYear()
        + ' - \u001b[33;1m'
        + currentDate.getHours() + ':' + currentDate.getMinutes() + '.' + currentDate.getSeconds()
        + '\u001b[0m');
}

module.exports = {
    npmRun: npmRun,
    logCurrentDateFormatted: logCurrentDateFormatted
};
