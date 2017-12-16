// We get back the HTML element representing the date div and the time div
var _date = document.getElementById('date');
var _time = document.getElementById('time');
// We store the month and day names in an Array
var _monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var _dayNames = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

/**
 * This function format the date. It takes one parameter that represent the current date;
 */
function formatDate(dateToFromat) {
  // For the name of the day and the name of the month, we get back the date value then
  // get back the corresponding month/day in the _monthNames/_dayNames array;
  // see Date documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
  var currentDay = _dayNames[dateToFromat.getDay()];
  var currentDate = dateToFromat.getDate();
  var currentMonth = _monthNames[dateToFromat.getMonth()];
  var currentYear = dateToFromat.getFullYear();

  var formattedDate = currentDay + ' ' + currentDate + ' ' + currentMonth + ' ' + currentYear;

  return formattedDate;
}

/**
 * This function format the time. It takes one parameter that represent the current date;
 */
function formatTime(dateToFromat) {
  var currentHours = dateToFromat.getHours();
  var currentMinutes = dateToFromat.getMinutes();
  var currentSeconds = dateToFromat.getSeconds();

  // Since the hour, minutes and seconds from 0 to 9 are represented only by one character,
  // when it's bellow 10, we add a '0' character before to have a consistent display.
  if (currentHours < 10) currentHours = '0' + currentHours;
  if (currentMinutes < 10) currentMinutes = '0' + currentMinutes;
  if (currentSeconds < 10) currentSeconds = '0' + currentSeconds;

  var formattedTime = currentHours + ':' + currentMinutes + ':' + currentSeconds;

  return formattedTime;
}

function updateDateTime() {
  // We get back the current Date
  var currentDate = new Date();

  // We insert the formatted date and time into their according div
  // using formatDate and formatTime function
  _date.innerHTML = formatDate(currentDate);
  _time.innerHTML = formatTime(currentDate);

  /**
   * We use the function setTimeout to re-call the updateDateTime function every 1000 millisecond
   * see setTimeout documentation: https://www.w3schools.com/jsref/met_win_settimeout.asp
   */
  setTimeout(updateDateTime, 1000);
}

// We call the updateDateTime function to trigger the function.
// This call will be executed when the web page will be loaded.
updateDateTime();
