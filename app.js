const timer = document.getElementById("stopwatch");

let min = 0;
let sec = 0;
let milisec = 0;
let stoptime = true;
window.addEventListener('keyup', toggleTimer);

let ul = document.getElementById("timeList");
let li = document.getElementsByTagName("li");

const scrambleCharacters = ['R', 'L', 'R\'', 'L\'', 'U', 'D', 'U\'', 'D\'', 'F', 'B', 'F\'', 'B\'', 'R2', 'L2', 'U2', 'D2', 'F2', 'B2']

createScramble();

function toggleTimer(evt) {
    if (evt.code !== "Space" || evt.repeat)
        return; 
    if (stoptime) {
        stoptime = false;
        sec = 00;
        min = 00;
        milisec = 00;
        timer.innerHTML = '00' + ':' + '00' + '.' + '00';
        timerCycle();
    } else if (!stoptime) {
        stoptime = true;
        createScramble();
        addTime(sec + ':' + min + "." + milisec);
    }
}
 
function timerCycle() {
    if (stoptime == false) {
        milisec = parseInt(milisec);
        sec = parseInt(sec);
        min = parseInt(min);

        milisec = milisec + 1; 
 
        if (sec == 60) {
            min += 1;
            sec = 0;
        } 
        if (milisec == 100) {
            sec += 1;
            milisec = 0;
        } 

        if (sec < 10 || sec == 0) {
            sec = '0' + sec;
        } 
        if (min < 10 || min == 0) {
            min = '0' + min;
        }
        if (milisec < 10 || milisec == 0) {
            milisec = '0' + milisec;
        }

        setTimeout("timerCycle()", 10);
        timer.innerHTML = min + ':' + sec + '.' + milisec;
    }
}

function resetTimer() {
    timer.innerHTML = '00:00.00'
    sec = 0;
    min = 0;
    stopTimer();
}

function addTime(time) {
    const times = JSON.parse(localStorage.getItem('times') || '[]');
    const li = document.createElement("li");
    li.append(document.createTextNode(time));

    ul.appendChild(li);

    times.push(time);

    localStorage.setItem('times', JSON.stringify(times));
}

function createScramble() {
    var scramble = scrambleCharacters[Math.floor(Math.random() * 18)].concat(' ', scrambleCharacters[Math.floor(Math.random() * 18)], ' ', scrambleCharacters[Math.floor(Math.random() * 18)], ' ', scrambleCharacters[Math.floor(Math.random() * 18)], ' ', scrambleCharacters[Math.floor(Math.random() * 18)], ' ', scrambleCharacters[Math.floor(Math.random() * 18)], ' ', scrambleCharacters[Math.floor(Math.random() * 18)], ' ', scrambleCharacters[Math.floor(Math.random() * 18)], ' ', scrambleCharacters[Math.floor(Math.random() * 18)], ' ', scrambleCharacters[Math.floor(Math.random() * 18)], ' ', scrambleCharacters[Math.floor(Math.random() * 18)], ' ', scrambleCharacters[Math.floor(Math.random() * 18)], ' ', scrambleCharacters[Math.floor(Math.random() * 18)], ' ', scrambleCharacters[Math.floor(Math.random() * 18)], ' ', scrambleCharacters[Math.floor(Math.random() * 18)], ' ', scrambleCharacters[Math.floor(Math.random() * 18)], ' ', scrambleCharacters[Math.floor(Math.random() * 18)], ' ', scrambleCharacters[Math.floor(Math.random() * 18)], ' ', scrambleCharacters[Math.floor(Math.random() * 18)], ' ', scrambleCharacters[Math.floor(Math.random() * 18)]);

    scram.innerHTML = scramble;
}