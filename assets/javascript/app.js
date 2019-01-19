$(document).ready(function() {
//timer function
var q1Ans="";
var q2Ans="";
var q3Ans="";
var q4Ans="";
var q5Ans="";
var q6Ans="";
var q7Ans="";
var intervalId;
$("#start").on("click", timer);


function timer(){
hideButton();
showGame();
var time=120;
var buttonHidden=false;
var gameShown = false;
$("#display").html("Time Remaining: " + "<br>" + timeConverter(time));

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
        checkAnswers();
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
$("#submit").on("click", checkAnswers);

function checkAnswers () {
    var correct=0;
    var incorrect=0;
    var unanswered=0;
    var correctAnswerArray = ["Euclid", "Apollo 11", "Uranium", "3.1415", "450", "barometer", "photo"];
    if (q1Ans==="") {
        unanswered++;
        
    } else if (correctAnswerArray.indexOf(q1Ans)>-1) {
        correct++
    } else {
        incorrect++;
    }
    if (q2Ans==="") {
        unanswered++;
        
    } else if (correctAnswerArray.indexOf(q2Ans)>-1) {
        correct++
    } else {
        incorrect++;
    }
    if (q3Ans==="") {
        unanswered++;
        
    } else if (correctAnswerArray.indexOf(q3Ans)>-1) {
        correct++
    } else {
        incorrect++;
    }
    if (q4Ans==="") {
        unanswered++;
        
    } else if (correctAnswerArray.indexOf(q4Ans)>-1) {
        correct++
    } else {
        incorrect++;
    }
    if (q5Ans==="") {
        unanswered++;
        
    } else if (correctAnswerArray.indexOf(q5Ans)>-1) {
        correct++
    } else {
        incorrect++;
    }
    if (q6Ans==="") {
        unanswered++;
        
    } else if (correctAnswerArray.indexOf(q6Ans)>-1) {
        correct++
    } else {
        incorrect++;
    }
    if (q7Ans==="") {
        unanswered++;
        
    } else if (correctAnswerArray.indexOf(q7Ans)>-1) {
        correct++
    } else {
        incorrect++;
    }
    // console.log("Correct: " + correct);
    // console.log("Incorrect: " + incorrect);
    // console.log("Unanswered: " + unanswered);

    function displayAnswers() {
        $(".game").css("display", "none");
        $("#answers").css("display", "block");
        $("#right").text(correct);
        $("#wrong").text(incorrect);
        $("#bad").text(unanswered);
    
    
    }
    displayAnswers();
    clearInterval(intervalId);

}

// $("#q1").on("click", function (){
//     $(":radio").on("click", function (){
//         q1Ans=$(this).val();
//         console.log(q1Ans);
//         });
// });

// $(":radio").on("click", function (){
//     q1Ans=$(this).val();
//     console.log(q1Ans);
//     });

$("input:radio[name='q1']").on("click", function (){
q1Ans=$(this).val();
// console.log(q1Ans);
});
$("input:radio[name='q2']").on("click", function (){
    q2Ans=$(this).val();
    //console.log(q2Ans);
    });
    $("input:radio[name='q3']").on("click", function (){
        q3Ans=$(this).val();
        //console.log(q3Ans);
        });
        $("input:radio[name='q4']").on("click", function (){
            q4Ans=$(this).val();
            //console.log(q4Ans);
            });
            $("input:radio[name='q5']").on("click", function (){
                q5Ans=$(this).val();
                //console.log(q5Ans);
                });
                $("input:radio[name='q6']").on("click", function (){
                    q6Ans=$(this).val();
                    //console.log(q5Ans);
                    });

                    $("input:radio[name='q7']").on("click", function (){
                        q7Ans=$(this).val();
                        //console.log(q5Ans);
                        });
        


});