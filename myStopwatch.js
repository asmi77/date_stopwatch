var timerElement = document.getElementById('timer');
var lapsElement = document.getElementById('laps');
var minutes = 0;
var seconds = 0;
var milliseconds = 0;
var timerIsRunning = false;
var lapsNumber = 0;

function formatDisplay(value) {
  if (value < 10) {
    return '0' + value;
  } else {
    return value;
  }
}

function displayTimer() {
  timerElement.innerHTML = formatDisplay(minutes) + ':' + formatDisplay(seconds) + ':' + formatDisplay(milliseconds);
}

function runTimer() {
  if (timerIsRunning) {
    milliseconds += 1;

    if (milliseconds >= 100) {
      milliseconds = 0;
      seconds += 1;
    }
    if (seconds >= 60) {
      seconds = 0;
      minutes += 1;
    }
    if (minutes >= 60) {
      minutes = 0;
    }
  }

  displayTimer();
}

function startTimer() {
  timerIsRunning = true;
}

function stopTimer() {
  timerIsRunning = false;
}

function resetTimer() {
  minutes = 0;
  seconds = 0;
  milliseconds = 0;
  lapsNumber = 0;
  lapsElement.innerHTML = '';
}

function lap() {
  if (timerIsRunning) {
    var lap = formatDisplay(minutes) + ':' + formatDisplay(seconds) + ':' + formatDisplay(milliseconds);

    lapsNumber += 1;
    lapsElement.innerHTML += '<li><i>'+ lapsNumber+ '-</i> ' + lap + '</li>';
  }
}

displayTimer();
setInterval(runTimer, 10);