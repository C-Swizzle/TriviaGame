$(document).ready(function() {
//timer function
var time=120;
$("#display").text("Time remaining: " + time);
var intervalId;
function countDown() {
    time--;
    $("#display").text("Time remaining: " + time);
}
intervalId=setInterval(countDown, 1000);





});