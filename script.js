// set variable for block div
var block = document.querySelector(".blockQ");
// set variable for question
var quiz = document.querySelector(".question");
// set variable for the final screens
var finished = document.querySelector(".finished");
// set variable for the final screens
var pastScores = document.getElementById("hall-of-fame");
// set variables for choices
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var choiceD = document.getElementById("D");
var correct;
// set variable for timer
var timeClock = document.querySelector(".timer");
// set variable for score
var userScore = 0;
var userFinal = document.querySelector(".scoreFinal");
// set variable for Progress of Quiz
var progress = document.querySelector(".quizLength");
// set variable for Quiz End
var finished = document.querySelector(".finished");
// Logic Check to allow for only 1 submit button push
var hitSubmit = true;
// set hall of fame
var hallOfFame = [
    {
        myName: "Yuroko Reizei",
        myScore: 9,
        myTime: 75
    }
]

// Write in Questions (array of objects(Question: , ChoiceA:, Choice2:, Choice3:, Choice4:, CorrectAnswer : 1))
var questions = [
    {
        question: "The player character is known what title as the game progresses?",
        choiceA: "A: The Arbiter",
        choiceB: "B: Warrior of Light",
        choiceC: "C: Deathwalker",
        choiceD: "D: Timelord",
        correct: "B"
    },
    {
        question: "What was the first additional class to be added to the game?",
        choiceA: "A: Dark Knight",
        choiceB: "B: Red Mage",
        choiceC: "C: Dancer",
        choiceD: "D: Ninja",
        correct: "D"
    },
    {
        question: "Which japanese mythological figure as of patch 5.3 has not be in a trial?",
        choiceA: "A: Amaterasu",
        choiceB: "B: Byakko",
        choiceC: "C: Susano",
        choiceD: "D: Tsukiyomi",
        correct: "A"
    },
    {
        question: "How many Heavensward Relic Weapons (lux/anima weapons) are in a complete set?",
        choiceA: "A: 10",
        choiceB: "B: 13",
        choiceC: "C: 15",
        choiceD: "D: 17",
        correct: "B"
    },
    {
        question: "How many non-combat classes are playable in the game as of patch 5.3?",
        choiceA: "A: 5",
        choiceB: "B: 8",
        choiceC: "C: 10",
        choiceD: "D: 11",
        correct: "D"
    },
    {
        question: "Previous to 5.3, how many Main Story Quests were between 2.0 and start of Heavensward?",
        choiceA: "A: 45",
        choiceB: "B: 86",
        choiceC: "C: 100",
        choiceD: "D: 126",
        correct: "C"
    },
    {
        question: "The Shadowbringers Expansion Explores what continent region in game?",
        choiceA: "A: Gyr Abania",
        choiceB: "B: Black Shroud",
        choiceC: "C: Norvrandt",
        choiceD: "D: Abalathia's Spine",
        correct: "C"
    },
    {
        question: "A Player has a chance to parry, dodge, and block (if shield equipped) if what is true?",
        choiceA: "A: The player is targeting the attacker",
        choiceB: "B: The player is a higher level than the attacker",
        choiceC: "C: The attacker is not directly behind the player",
        choiceD: "D: The attacker is in a 90 cone directly in front of the player",
        correct: "D"
    },
    {
        question: "Which is not a grand company in the game?",
        choiceA: "A: The Frozen Knighthood",
        choiceB: "B: The Maelstrom",
        choiceC: "C: The Immortal Flames",
        choiceD: "D: The Order of the Twin Adder",
        correct: "A"
    }
]

// Create Function for generating the questions on the screen
var questionTotalIndex = questions.length;
var questionCurrentIndex = 0;

function askQuestion() {
    var q = questions[questionCurrentIndex];
    quiz.textContent = q.question;
    choiceA.textContent = q.choiceA;
    choiceB.textContent = q.choiceB;
    choiceC.textContent = q.choiceC;
    choiceD.textContent = q.choiceD;
}

// Create Function for Listing Question X of Y
function quizProgress() {
    document.querySelector(".quizLength").textContent = `Question: ${questionCurrentIndex + 1} of ${questionTotalIndex}`;
}

// Create a Function to check if answer is right or wrong
function answerChecker(answer) {
    if (questions[questionCurrentIndex].correct === answer) {
        userScore++;
        correctAnswer();
        // console.log(userScore);
    } else {
        timeLeft += 10;
        wrongAnswer();
    }
    if (questionCurrentIndex < questionTotalIndex - 1) {
        questionCurrentIndex++;
        quizProgress();
        askQuestion();
    } else {
        endQuiz();
    }
}

// Create Function to display correct answer for user
function correctAnswer() {
    // Display Correct for user
    document.querySelector(".validity").textContent = "Correct!"

}

// Create Function to display incorrect answer for user
function wrongAnswer() {
    // Display User incorrect
    document.querySelector(".validity").textContent = "Incorrect!"
}

var timeTotal = 90;
var timeLeft = 0;

// Create running display counter, when time used is the same as time left end quiz
function timerDisplay() {
    if (timeLeft <= timeTotal) {
        timeClock.textContent = (timeTotal - timeLeft) + " Seconds Left";
        timeLeft++;
    } else {
        clearInterval(timerValue);
        timeLeft = 0;
        endQuiz();
    }
}



// Create a Function to End the Quiz
function endQuiz() {
    //Way 1: User Answered All Questions
    if (timeLeft == 0) {
        var timeScore = 0;
    } else {
        timeScore = timeTotal - timeLeft;
    }
    clearInterval(timerValue);
    timeLeft = 0;
    // console.log("final: " + userScore);
    //Way 2: User is out of time
    block.style.display = "none";
    finished.style.display = "block";
    userFinal.textContent = `You got ${userScore} correct, with ${timeScore} seconds left`;
    //User input on the score
    var submitEl = document.querySelector("#submit");
    var fNameInput = document.querySelector("#firstName");
    var lNameInput = document.querySelector("#lastName");
    submitEl.addEventListener("click", function (event) {
        event.preventDefault();
        // console.log(event);
        // stopping people from submitting more than once on a single run
        if(hitSubmit){
        var response = "Thank you for your submission " + fNameInput.value + " " + lNameInput.value;
        userFinal.textContent = response;
        //Create object of user
        var userHof = {
            myName: `${fNameInput.value} ${lNameInput.value}`,
            myScore: userScore,
            myTime: timeScore
        }
        // console.log(hallOfFame);
        //Push score into Hall of Fame
        hallOfFame.push(userHof);
        // console.log(hallOfFame);
        // clearScores('hall-of-fame')
        var pastScore = document.createElement("h2");
        pastScore.textContent = `Past Scores`
        pastScores.appendChild(pastScore);
        hitSubmit = false;
        for (var k = 0; k < hallOfFame.length; k++) {
            var hof = hallOfFame[k];
            var layoutScore = document.createElement("p");
            layoutScore.textContent = `${hof.myName} -- ${hof.myScore} correct -- ${hof.myTime} sec left`
            pastScores.appendChild(layoutScore);
        }
    }
    });
    // List Updated Hall of Fame
    


}


var timerValue;
// Function to Start the quiz
function startQuiz() {
    start.style.display = "none";
    block.style.display = "block";
    timerDisplay();
    timerValue = setInterval(timerDisplay, 1000);
    quizProgress();
    askQuestion();
}
// Clickable Event to start quiz
var start = document.querySelector(".start");
start.addEventListener("click", startQuiz);

// Hall of Fame Board functionality
