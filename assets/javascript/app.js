$(document).ready(function() {
//timer function

$("#start").on("click", timer);


function timer(){
hideButton();
showGame();
var time=120;
var buttonHidden=false;
var gameShown = false;
$("#display").html("Time Remaining: " + "<br>" + timeConverter(time));
var intervalId;
function countDown() {
    stop();
    if (time>0) {
    time--;
    $("#display").html("Time Remaining: " + "<br>" + timeConverter(time));
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
        $("#display").html("Time Remaining: " + "<br>" + "00:00");
        alert("Times up!")
}
    }
function hideButton() {
    if (!buttonHidden){
    $("#start").css("display", "none");
    $("#instructions").css("display", "none");
    buttonHidden=true;
    }
}
function showGame() {
    if (!gameShown) {
        $(".game").css("display", "block");
        gameShown=true;
    }
}
}

});