$(document).ready(function () {

    //declaring variables
    var timeLeft = 61;
    var intervalId;
    var score = 0;

    //defining correct/computer answer against available answers
    //tracking user answer
    //tracking correct answer
    var compAnswer = {
        "answer1": "Toy Story",
        "answer2": "Athletic Spice",
        "answer3": "Chicago Bulls",
        "answer4": "Gemini",
        "answer5": "97",
        "answer6": "William Henry Harrison"
    };

    var userAnswer = {
        "question1": "",
        "question2": "",
        "question3": "",
        "question4": "",
        "question5": "",
        "question6": ""
    };


    //submitting a correct answer, prior to timeout
    //audit how much time is left, > 0 = keep playing
    //submitting can be done via a Submit button, that causes 'comparison' function to fire
    //Submitting can Also be done via timeout automatically
    //on timeout a 'comparison' function would fire, same function used upon clicking Submit button   
    //defining what happens when answer is wrong
    //after comparison runs, if any answers are wrong at all (even one of them, or three etc) alert player to how many were wrong.

    $("#startBtn").on("click", function () {
        $("#landingImage").css("display", "none");
        $("#game").css("visibility", "visible");
        intervalId = setInterval(function () {
            //1) we want to decrement the number, 2)show that number on the screen
            //compare the timer to 0, if it equals 0 alert the player Time's Up
            //tell the user their score, then reset the game upon clicking the alert
            //when times runs out/click Submit -> run Compare function.
            timeLeft--;
            $("#timeLeft").html("Time Remaining: " + timeLeft + " second(s)");
            if (timeLeft == 0) {
                compare();
            }
        }, 1000);
    });

    //Allow player to end game before timer expires by clicking Submit button.
    $("#submit").on("click", function () {
        compare();
    });


    function countdownTimer() {
    };

    //resetting the game
    //refresh html upon player clicking Ok button
    //ensure that radio buttons are cleared of any selections
    //timer is now back at 60 seconds


    function reset() {
        clearInterval(intervalId);
        $("input[name='cgiMovie']").prop('checked', false);
        $("input[name='spiceGirls']").prop('checked', false);
        $("input[name='nbaTeam']").prop('checked', false);
        $("input[name='zodiacSign']").prop('checked', false);
        $("input[name='primeNumber']").prop('checked', false);
        $("input[name='usPrez']").prop('checked', false);
        timeLeft = 61;
        score = 0;
    };

    var compare = function () {
        //user answer is stored
        //compare user answer to respective computer answer
        //inform them of the score accordingly
        userAnswer.question1 = $("input[name='cgiMovie']:checked").val();
        userAnswer.question2 = $("input[name='spiceGirls']:checked").val();
        userAnswer.question3 = $("input[name='nbaTeam']:checked").val();
        userAnswer.question4 = $("input[name='zodiacSign']:checked").val();
        userAnswer.question5 = $("input[name='primeNumber']:checked").val();
        userAnswer.question6 = $("input[name='usPrez']:checked").val();

        console.log("userAnswer" + userAnswer);
        if (userAnswer.question1 === compAnswer.answer1) {
            score++;
        }
        if (userAnswer.question2 === compAnswer.answer2) {
            score++;
        }
        if (userAnswer.question3 === compAnswer.answer3) {
            score++;
        }
        if (userAnswer.question4 === compAnswer.answer4) {
            score++;
        }
        if (userAnswer.question5 === compAnswer.answer5) {
            score++;
        }
        if (userAnswer.question6 === compAnswer.answer6) {
            score++;
        }
        alert("Great Guessing! Here's your score: " + score + "/6");
        reset();
    };
});