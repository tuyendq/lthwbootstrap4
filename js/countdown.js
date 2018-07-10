// Countdown - based on tutorial from https://www.w3schools.com/howto/howto_js_countdown.asp
// Set the data we're counting down to
const msecDay = 86400000;
const msecHour = 3600000;
var countDownDate = new Date("Sep 5, 2018 15:37:25").getTime();

// Update the countdown every 1 second
var x = setInterval(function(){
    // Get today's date and time
    var now = new Date().getTime();
    // Find the differrence between now and the count down data
    var distance = countDownDate - now;
    // Time calculation for days, hours, minutes and seconds
    var days = Math.floor(distance / msecDay);
    var hours = Math.floor((distance % msecDay) / msecHour);
    var minutes = Math.floor((distance % msecHour) / 60000  );
    var seconds = Math.floor(distance % 60000);

},1000);