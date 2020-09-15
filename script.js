// set variable for start button
var startButton = document.getElementById("start");
// set variable for question
var quiz = document.querySelector(".question");
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
var userScore = document.querySelector(".score");
// set variable for Progress of Quiz
var progress = document.querySelector(".quizLength");
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
        question: "",
        choiceA: "",
        choiceB: "",
        choiceC: "",
        choiceD: "",
        correct: ""
    }
]

// Create Function for generating the questions on the screen

var questionTotalIndex = questions.length;
var questionCurrentIndex = 0;

function askQuestion(){
    var q = question[questionCurrentIndex];
    quiz.textContent = q.question;
    choiceA.textContent = q.choiceA;
    choiceB.textContent = q.choiceB;
    choiceC.textContent = q.choiceC;
    choiceD.textContent = q.choiceD;
}

// Create a Function to check if answer is right or wrong
function answerChecker(answer){
    if(questions[questionCurrentIndex].correct === answer){
        userScore++;
        correctAnswer();
    } else {
        timeTotal += 10;
        wrongAnswer();
    }
    if(questionCurrentIndex < questionTotalIndex){
        questionCurrentIndex++;
        askQuestion
    }
}

// Create Function to display correct answer for user
function correctAnswer(){
    // Display Correct for user
    document.querySelector(".validity").textContent = "Correct!"

}

// Create Function to display incorrect answer for user
function wrongAnswer(){
    // Display User incorrect
    document.querySelector(".validity").textContent = "Incorrect!"
}

var timeTotal = 90;
var timeLeft = 0;

// Create running display counter, when time used is the same as time left end quiz
function timerDisplay(){
    if(timeLeft <= timeTotal){
        timeClock.textContent = (timeTotal-timeLeft)+" Seconds Left";
        timeLeft++;
    } else {
        timeLeft = 0;
        endQuiz();
    }
}

setInterval(timerDisplay, 1000);

// Create a Function to End the Quiz
function endQuiz(){
    //Way 1: User Answered All Questions

    //Way 2: User is out of time

}