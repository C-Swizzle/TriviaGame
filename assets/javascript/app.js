$(document).ready(function() {
//timer function
var time=120;
$("#display").text("Time remaining: " + timeConverter(time));
var intervalId;
function countDown() {
    stop();
    if (time>0) {
    time--;
    $("#display").text("Time remaining: " + timeConverter(time));
    }
}
intervalId=setInterval(countDown, 1000);

function timeConverter(x) {
    minutes = Math.floor(x/60)
    seconds = x-minutes*60

    if (seconds<10) {
        seconds = "0" + seconds;
    }
    if (minutes<10) {
        minutes = "0" + minutes;
    }

    return minutes + ":" + seconds;
}
function stop() {
    if (time===0) {
        clearInterval(intervalId);
        $("#display").text("Time remaining: " + "00:00");
        alert("Times up!")
}
    }




});