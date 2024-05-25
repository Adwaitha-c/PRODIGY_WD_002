// main.js
const timer = document.getElementById("stopwatch");
const lapsContainer = document.getElementById("laps");
let hr = 0;
let min = 0;
let sec = 0;
let stoptime = true;
let tInterval;

function startTimer() {
    if (stoptime) {
        stoptime = false;
        timerCycle();
    }
}

function stopTimer() {
    if (!stoptime) {
        stoptime = true;
    }
}

function resetTimer() {
    clearInterval(tInterval);
    timer.innerHTML = "00:00:00";
    stoptime = true;
    hr = 0;
    sec = 0;
    min = 0;
    lapsContainer.innerHTML = ''; // Clear the laps
}

function recordLap() {
    if (!stoptime) {
        const lapTime = timer.innerHTML;
        const lapElement = document.createElement('div');
        lapElement.innerHTML = lapTime;
        lapsContainer.appendChild(lapElement);
    }
}

function timerCycle() {
    if (!stoptime) {
        sec = parseInt(sec);
        min = parseInt(min);
        hr = parseInt(hr);

        sec++;

        if (sec == 60) {
            min++;
            sec = 0;
        }
        if (min == 60) {
            hr++;
            min = 0;
            sec = 0;
        }

        if (sec < 10) sec = "0" + sec;
        if (min < 10) min = "0" + min;
        if (hr < 10) hr = "0" + hr;

        timer.innerHTML = hr + ":" + min + ":" + sec;

        tInterval = setTimeout(timerCycle, 1000);
    }
}
