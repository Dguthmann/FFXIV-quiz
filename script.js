// set variable for block div
var block = document.querySelector(".blockQ")
// set variable for question
var quiz = document.querySelector(".question");
// set variable for the final screens
var finished = document.querySelector(".finished")
// set variable for the final screens
var pastScores = document.querySelector(".hall-of-fame")
// set variables for choices
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var choiceD = document.getElementById("D");
var correct;
// Consider if time, adding a special image for each question

// set variable for timer
var timeClock = document.querySelector(".timer");
// set variable for score
var userScore = 0;
var userTracker = document.querySelector(".score");
var userFinal = document.querySelector(".scoreFinal");
// set variable for Progress of Quiz
var progress = document.querySelector(".quizLength");
// set variable for Quiz End
var finished = document.querySelector(".finished");
// set hall of fame
var hallOfFame = [
    {
        myName: "Yuroko Reizei",
        myScore: 3,
        myTime: 50
    }
]

// Write in Questions (array of objects(Question: , ChoiceA:, Choice2:, Choice3:, Choice4:, CorrectAnswer : 1))
var questions = [
    {
        question: "Example Question",
        choiceA: "A is right",
        choiceB: "B is wrong",
        choiceC: "C is wrong",
        choiceD: "D is wrong",
        correct: "A"
    },
    {
        question: "Example Question",
        choiceA: "A is right",
        choiceB: "B is wrong",
        choiceC: "C is wrong",
        choiceD: "D is wrong",
        correct: "A"
    },
    {
        question: "Example Question",
        choiceA: "A is right",
        choiceB: "B is wrong",
        choiceC: "C is wrong",
        choiceD: "D is wrong",
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
        console.log(userScore);
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
    console.log("final: " + userScore);
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
        console.log(event);
        var response = "Thank you for your submission " + fNameInput.value + " " + lNameInput.value;
        userFinal.textContent = response;
        //Create object of user
        var userHof = {
            myName: `${fNameInput.value} ${lNameInput.value}`,
            myScore: userScore,
            myTime: timeScore
        }
        console.log(hallOfFame);
        //Push score into Hall of Fame
        hallOfFame.push(userHof);
        console.log(hallOfFame);
        for (var k = 0; k < hallOfFame.length; k++) {
            var hof = hallOfFame[k];
            var layoutScore = document.createElement("p");
            layoutScore.textContent = `Name: ${hof.myName}   Score: ${hof.myScore}   Time Left: ${hof.myTime}`
            pastScores.appendChild(layoutScore);
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
