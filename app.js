const timer = document.getElementById("stopwatch");

let min = 0;
let sec = 0;
let milisec = 0;
let stoptime = true;
window.addEventListener('keyup', toggleTimer);

let ul = document.getElementById("timeList");
let li = document.getElementsByTagName("li");

let times = [];


createScramble();

function randInt (max) {
    return Math.floor(Math.random() * max);
  }
  
  function randEntry (arr) {
    return arr[randInt(arr.length)];
  }

  function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
  

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

//for reset function
function stopTimer() {
    if (stoptime) {
        timer.innerHTML = '00' + ':' + '00' + '.' + '00';
    } else if (!stoptime) {
        stoptime = true;
        createScramble();
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
    times.push(time);

    updateTimes();
}

function updateTimes() {
    removeAllChildNodes(ul);
    for (var i = 0; i < times.length; i++) {
        console.log(times[i]);
        const li = document.createElement("li");

        li.append(document.createTextNode(times[i]));

        ul.appendChild(li);
    }

    //mo3
    if (times.length <= 2) {
        ao5.innerHTML = "N/A";
    } else if (times.length >= 2) {
        
    }
}

function createScramble() {
    const sides = [ "R", "L", "U", "D", "F", "B" ];
    const directions = [ "", "'", "2" ];

    const moves = [];

      let lastSideMoved = "",
    currentSide = "";

    for (let i = 0; i < 20; ++i) {
    do {
        currentSide = randEntry(sides);
    } while (currentSide === lastSideMoved);

    lastSideMoved = currentSide;
    moves.push(currentSide + randEntry(directions));
    }

    scram.textContent = moves.join(" ");
}

let colorSelector = document.getElementById("colorSchemePicker");
let colorScheme = 1;

function colorSchemeEvent() {
    colorScheme = colorSelector.value;

    if (colorScheme == 1) {
        document.querySelector("body").style.backgroundColor = "#1A3A3A";
        document.getElementById("times").style.backgroundColor = "#A997DF";
        document.getElementById("scramble").style.backgroundColor = "#DDC4DD"
    } else if (colorScheme == 2) {
        document.querySelector("body").style.backgroundColor = "#3F4739";
        document.getElementById("times").style.backgroundColor = "#BACBA9";
        document.getElementById("scramble").style.backgroundColor = "#F1BF98"
    } else if (colorScheme == 3) {
        document.querySelector("body").style.backgroundColor = "#8C5E58";
        document.getElementById("times").style.backgroundColor = "#19323C";
        document.getElementById("scramble").style.backgroundColor = "#F2545B"
    } else if (colorScheme == 4) {
        document.querySelector("body").style.backgroundColor = "#4B5842";
        document.getElementById("times").style.backgroundColor = "#B7CE63";
        document.getElementById("scramble").style.backgroundColor = "#DADDD8"
    }
}


colorSelector.addEventListener("change", colorSchemeEvent);
