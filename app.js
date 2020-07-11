var hour = 00;
var min = 00;
var sec = 00;
var msec = 00;
var interval;

var getHours = document.getElementById("hours");
var getMins = document.getElementById("mins");
var getSecs = document.getElementById("secs");
var getMiliSecs = document.getElementById("msecs");

function startTimer() {
    msec++
    getMiliSecs.innerHTML = msec;
    if (msec >= 100) {
        sec++
        getSecs.innerHTML = sec + " .";
        msec = 0;
    } else if (sec > 59) {
        min++
        getMins.innerHTML = min + " : ";
        sec = 0;
    } else if (min > 59) {
        hour++
        getHours.innerHTML = hour + " : ";
        min = 0;
    } else if (hour === 23) {
        hour = 0;
        min = 0;
        sec = 0;
        msec = 0;
        getHours.innerHTML = hour;
        getMins.innerHTML = min;
        getSecs.innerHTML = sec;
        getMiliSecs.innerHTML = msec;
    }
}

function startWatch() {
    interval = setInterval(startTimer, 10);
    var startBtn = document.getElementById("start-btn");
    startBtn.disabled = true;
    var stopBtn = document.getElementById("stop-btn");
    stopBtn.disabled = false;
}

function stopWatch() {
    clearInterval(interval);
    var startBtn = document.getElementById("start-btn");
    startBtn.disabled = false;
    var stopBtn = document.getElementById("stop-btn");
    stopBtn.disabled = true;
}

function resetWatch() {
    hour = 0;
    min = 0;
    sec = 0;
    msec = 0;
    getHours.innerHTML = " " + hour + 0 + " : ";
    getMins.innerHTML = " " + min + 0 + " : ";
    getSecs.innerHTML = " " + sec + 0 + " . ";
    getMiliSecs.innerHTML = " " + msec + 0 ;
    stopWatch();
    var startBtn = document.getElementById("start-btn");
    startBtn.disabled = false;
}