$(document).ready(function () {

    var timeLeft = 10;
    var intervalId;
    var score = 0;

    //defining correct/computer answer against available options
    //tracking user answer
    //tracking correct answer

    var compAnswer = {
        "answer1": "Toy Story",
        "answer2": "Athletic Spice",
        "answer3": "Chicago Bulls"
    }

    var userAnswer = {
        "question1": "",
        "question2": "",
        "question3": ""
    }


    //submitting a correct answer, prior to timeout
    //audit how much time is left, > 0 = keep playing
    //submitting can be done via a Submit button, that causes 'comparison' function to fire
    //Submitting can Also be done via timeout automatically
    //on timeout a 'comparison' function would fire, same function used upon clicking Submit button   

    $("#start").on("click", function() {
        $("#landingImage").css("display", "none");
        $("#game").css("visibility", "visible");
        intervalId = setInterval(function() {
        //1) we want to decrement the number, 2)show that number on the screen
        //compare the timer to 0, if it equals 0 alert the player Time's Up
            //tell the user their score, then reset the game upon clicking the alert
            //when times runs out/click Submit -> run Compare function.
            timeLeft--;
            $("#timer").html("Time Remaining: " + timeLeft + " seconds");
            if (timeLeft == 0){
                compare();
            }

        }, 1000);
    });

    $("#submit").on("click", function() {
        compare();
    });


    function countdownTimer() {
        //intervalId
    }



    //function to clear timer
    function reset() {
        clearInterval(intervalId);
        $("input[name='cgiMovie']").prop('checked', false);
        $("input[name='spiceGirls']").prop('checked', false);
        $("input[name='nbaTeam']").prop('checked', false);
        timeLeft = 10;
        score = 0;
    }



    var compare = function () {
        //user answer is stored
        //compare user answer to respective computer answer
        //inform them of the score accordingly
        userAnswer.question1 = $("input[name='cgiMovie']:checked").val();
        userAnswer.question2 = $("input[name='spiceGirls']:checked").val();
        userAnswer.question3 = $("input[name='nbaTeam']:checked").val();

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
        alert("Great Guessing! Here's your score: " + score + "/3");

        reset();

    }

    

    //defining what happens when answer is wrong
    //after comparison runs, if any answers are wrong at all (even one of them, or three etc) alert player to how many were wrong.
    //then reset game



    //resetting the game
    //refresh html upon player clicking Ok button
    //ensure that radio buttons are cleared of any selections
    //timer is now back at 60 seconds





















})
