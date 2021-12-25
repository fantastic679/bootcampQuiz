// ==============================================================================================
// NUMBERING STARTS AT 0
// ==============================================================================================


// ==============================================================================================
// QUESTION 0 is the start quiz page
// ==============================================================================================

// start quiz button
var question0answer0Btn = document.querySelector("#question0answer0");
question0answer0Btn.addEventListener("click", question0answer0BtnAction);
function question0answer0BtnAction() {
    document.getElementById("question0").style.display = "none";
    document.getElementById("question1").style.display = "block";
    currentScore = 0;
    countdown();
}

// ==============================================================================================
// Deactivate multiple choice buttons
// ==============================================================================================

function question1deactivateButtons() {
    question1answer0Btn.removeEventListener("click", question1answer0BtnAction);
    question1answer1Btn.removeEventListener("click", question1answer1BtnAction);
    question1answer2Btn.removeEventListener("click", question1answer2BtnAction);
    question1answer3Btn.removeEventListener("click", question1answer3BtnAction);
}
function question2deactivateButtons() {
    question2answer0Btn.removeEventListener("click", question2answer0BtnAction);
    question2answer1Btn.removeEventListener("click", question2answer1BtnAction);
    question2answer2Btn.removeEventListener("click", question2answer2BtnAction);
    question2answer3Btn.removeEventListener("click", question2answer3BtnAction);
}
function question3deactivateButtons() {
    question3answer0Btn.removeEventListener("click", question3answer0BtnAction);
    question3answer1Btn.removeEventListener("click", question3answer1BtnAction);
    question3answer2Btn.removeEventListener("click", question3answer2BtnAction);
    question3answer3Btn.removeEventListener("click", question3answer3BtnAction);
}
function question4deactivateButtons() {
    question4answer0Btn.removeEventListener("click", question4answer0BtnAction);
    question4answer1Btn.removeEventListener("click", question4answer1BtnAction);
    question4answer2Btn.removeEventListener("click", question4answer2BtnAction);
    question4answer3Btn.removeEventListener("click", question4answer3BtnAction);
}
function question5deactivateButtons() {
    question5answer0Btn.removeEventListener("click", question5answer0BtnAction);
    question5answer1Btn.removeEventListener("click", question5answer1BtnAction);
    question5answer2Btn.removeEventListener("click", question5answer2BtnAction);
    question5answer3Btn.removeEventListener("click", question5answer3BtnAction);
}
function question6deactivateButtons() {
    question6answer0Btn.removeEventListener("click", question6answer0BtnAction);
    question6answer1Btn.removeEventListener("click", question6answer1BtnAction);
    question6answer2Btn.removeEventListener("click", question6answer2BtnAction);
    question6answer3Btn.removeEventListener("click", question6answer3BtnAction);
}
function question7deactivateButtons() {
    question7answer0Btn.removeEventListener("click", question7answer0BtnAction);
    question7answer1Btn.removeEventListener("click", question7answer1BtnAction);
    question7answer2Btn.removeEventListener("click", question7answer2BtnAction);
    question7answer3Btn.removeEventListener("click", question7answer3BtnAction);
}
function question8deactivateButtons() {
    question8answer0Btn.removeEventListener("click", question8answer0BtnAction);
    question8answer1Btn.removeEventListener("click", question8answer1BtnAction);
    question8answer2Btn.removeEventListener("click", question8answer2BtnAction);
    question8answer3Btn.removeEventListener("click", question8answer3BtnAction);
}
function question9deactivateButtons() {
    question9answer0Btn.removeEventListener("click", question9answer0BtnAction);
    question9answer1Btn.removeEventListener("click", question9answer1BtnAction);
    question9answer2Btn.removeEventListener("click", question9answer2BtnAction);
    question9answer3Btn.removeEventListener("click", question9answer3BtnAction);
}

// ==============================================================================================
// QUESTION 1 | ANSWER BUTTON 2
// ==============================================================================================

// question1answer0 button
var question1answer0Btn = document.querySelector("#question1answer0");
question1answer0Btn.addEventListener("click", question1answer0BtnAction);
function question1answer0BtnAction() {
    question1deactivateButtons();
    document.getElementById("question1answer0").style.backgroundColor = "DarkRed";
    document.getElementById("question1answer1").style.backgroundColor = "DarkRed";
    document.getElementById("question1answer2").style.backgroundColor = "DarkGreen";
    document.getElementById("question1answer3").style.backgroundColor = "DarkRed";
    document.getElementById("feedbackText").innerText = "Incorrect!";
    document.getElementById("question1next").style.display = "block";
    if (timeLeft >= 10) {
        timeLeft = timeLeft - 10;
    } else {
        timeLeft = 0;
    }
}

// question1answer1 button
var question1answer1Btn = document.querySelector("#question1answer1");
question1answer1Btn.addEventListener("click", question1answer1BtnAction);
function question1answer1BtnAction() {
    question1deactivateButtons();
    document.getElementById("question1answer0").style.backgroundColor = "DarkRed";
    document.getElementById("question1answer1").style.backgroundColor = "DarkRed";
    document.getElementById("question1answer2").style.backgroundColor = "DarkGreen";
    document.getElementById("question1answer3").style.backgroundColor = "DarkRed";
    document.getElementById("feedbackText").innerText = "Incorrect!";
    document.getElementById("question1next").style.display = "block";
    if (timeLeft >= 10) {
        timeLeft = timeLeft - 10;
    } else {
        timeLeft = 0;
    }
}

// question1answer2 button
var question1answer2Btn = document.querySelector("#question1answer2");
question1answer2Btn.addEventListener("click", question1answer2BtnAction);
function question1answer2BtnAction() {
    question1deactivateButtons();
    document.getElementById("question1answer0").style.backgroundColor = "DarkRed";
    document.getElementById("question1answer1").style.backgroundColor = "DarkRed";
    document.getElementById("question1answer2").style.backgroundColor = "DarkGreen";
    document.getElementById("question1answer3").style.backgroundColor = "DarkRed";
    document.getElementById("feedbackText").innerText = "Correct!";
    document.getElementById("question1next").style.display = "block";
    currentScore++;
}

// question1answer3 button
var question1answer3Btn = document.querySelector("#question1answer3");
question1answer3Btn.addEventListener("click", question1answer3BtnAction);
function question1answer3BtnAction() {
    question1deactivateButtons();
    document.getElementById("question1answer0").style.backgroundColor = "DarkRed";
    document.getElementById("question1answer1").style.backgroundColor = "DarkRed";
    document.getElementById("question1answer2").style.backgroundColor = "DarkGreen";
    document.getElementById("question1answer3").style.backgroundColor = "DarkRed";
    document.getElementById("feedbackText").innerText = "Incorrect!";
    document.getElementById("question1next").style.display = "block";
    if (timeLeft >= 10) {
        timeLeft = timeLeft - 10;
    } else {
        timeLeft = 0;
    }
}

var question1nextBtn = document.querySelector("#question1next");
question1nextBtn.addEventListener("click", question1nextBtnAction);
function question1nextBtnAction() {
    document.getElementById("feedbackText").innerText = "";
    document.getElementById("question1next").style.display = "none";
    document.getElementById("question1").style.display = "none";
    document.getElementById("question2").style.display = "block";
}

// ==============================================================================================
// QUESTION 2 | ANSWER BUTTON 1
// ==============================================================================================

// question2answer0 button
var question2answer0Btn = document.querySelector("#question2answer0");
question2answer0Btn.addEventListener("click", question2answer0BtnAction);
function question2answer0BtnAction() {
    question2deactivateButtons();
    document.getElementById("question2answer0").style.backgroundColor = "DarkRed";
    document.getElementById("question2answer1").style.backgroundColor = "DarkGreen";
    document.getElementById("question2answer2").style.backgroundColor = "DarkRed";
    document.getElementById("question2answer3").style.backgroundColor = "DarkRed";
    document.getElementById("feedbackText").innerText = "Incorrect!";
    document.getElementById("question2next").style.display = "block";
    if (timeLeft >= 10) {
        timeLeft = timeLeft - 10;
    } else {
        timeLeft = 0;
    }
}

// question2answer1 button
var question2answer1Btn = document.querySelector("#question2answer1");
question2answer1Btn.addEventListener("click", question2answer1BtnAction);
function question2answer1BtnAction() {
    question2deactivateButtons();
    document.getElementById("question2answer0").style.backgroundColor = "DarkRed";
    document.getElementById("question2answer1").style.backgroundColor = "DarkGreen";
    document.getElementById("question2answer2").style.backgroundColor = "DarkRed";
    document.getElementById("question2answer3").style.backgroundColor = "DarkRed";
    document.getElementById("feedbackText").innerText = "Correct!";
    document.getElementById("question2next").style.display = "block";
    currentScore++;
}

// question2answer2 button
var question2answer2Btn = document.querySelector("#question2answer2");
question2answer2Btn.addEventListener("click", question2answer2BtnAction);
function question2answer2BtnAction() {
    question2deactivateButtons();
    document.getElementById("question2answer0").style.backgroundColor = "DarkRed";
    document.getElementById("question2answer1").style.backgroundColor = "DarkGreen";
    document.getElementById("question2answer2").style.backgroundColor = "DarkRed";
    document.getElementById("question2answer3").style.backgroundColor = "DarkRed";
    document.getElementById("feedbackText").innerText = "Incorrect!";
    document.getElementById("question2next").style.display = "block";
    if (timeLeft >= 10) {
        timeLeft = timeLeft - 10;
    } else {
        timeLeft = 0;
    }
}

// question2answer3 button
var question2answer3Btn = document.querySelector("#question2answer3");
question2answer3Btn.addEventListener("click", question2answer3BtnAction);
function question2answer3BtnAction() {
    question2deactivateButtons();
    document.getElementById("question2answer0").style.backgroundColor = "DarkRed";
    document.getElementById("question2answer1").style.backgroundColor = "DarkGreen";
    document.getElementById("question2answer2").style.backgroundColor = "DarkRed";
    document.getElementById("question2answer3").style.backgroundColor = "DarkRed";
    document.getElementById("feedbackText").innerText = "Incorrect!";
    document.getElementById("question2next").style.display = "block";
    if (timeLeft >= 10) {
        timeLeft = timeLeft - 10;
    } else {
        timeLeft = 0;
    }
}

var question2nextBtn = document.querySelector("#question2next");
question2nextBtn.addEventListener("click", question2nextBtnAction);
function question2nextBtnAction() {
    document.getElementById("feedbackText").innerText = "";
    document.getElementById("question2next").style.display = "none";
    document.getElementById("question2").style.display = "none";
    document.getElementById("question3").style.display = "block";
}

// ==============================================================================================
// QUESTION 3 | ANSWER BUTTON 2
// ==============================================================================================

// question3answer0 button
var question3answer0Btn = document.querySelector("#question3answer0");
question3answer0Btn.addEventListener("click", question3answer0BtnAction);
function question3answer0BtnAction() {
    question3deactivateButtons();
    document.getElementById("question3answer0").style.backgroundColor = "DarkRed";
    document.getElementById("question3answer1").style.backgroundColor = "DarkRed";
    document.getElementById("question3answer2").style.backgroundColor = "DarkGreen";
    document.getElementById("question3answer3").style.backgroundColor = "DarkRed";
    document.getElementById("feedbackText").innerText = "Incorrect!";
    document.getElementById("question3next").style.display = "block";
    if (timeLeft >= 10) {
        timeLeft = timeLeft - 10;
    } else {
        timeLeft = 0;
    }
}

// question3answer1 button
var question3answer1Btn = document.querySelector("#question3answer1");
question3answer1Btn.addEventListener("click", question3answer1BtnAction);
function question3answer1BtnAction() {
    question3deactivateButtons();
    document.getElementById("question3answer0").style.backgroundColor = "DarkRed";
    document.getElementById("question3answer1").style.backgroundColor = "DarkRed";
    document.getElementById("question3answer2").style.backgroundColor = "DarkGreen";
    document.getElementById("question3answer3").style.backgroundColor = "DarkRed";
    document.getElementById("feedbackText").innerText = "Incorrect!";
    document.getElementById("question3next").style.display = "block";
    if (timeLeft >= 10) {
        timeLeft = timeLeft - 10;
    } else {
        timeLeft = 0;
    }
}

// question3answer2 button
var question3answer2Btn = document.querySelector("#question3answer2");
question3answer2Btn.addEventListener("click", question3answer2BtnAction);
function question3answer2BtnAction() {
    question3deactivateButtons();
    document.getElementById("question3answer0").style.backgroundColor = "DarkRed";
    document.getElementById("question3answer1").style.backgroundColor = "DarkRed";
    document.getElementById("question3answer2").style.backgroundColor = "DarkGreen";
    document.getElementById("question3answer3").style.backgroundColor = "DarkRed";
    document.getElementById("feedbackText").innerText = "Correct!";
    document.getElementById("question3next").style.display = "block";
    currentScore++;
}

// question3answer3 button
var question3answer3Btn = document.querySelector("#question3answer3");
question3answer3Btn.addEventListener("click", question3answer3BtnAction);
function question3answer3BtnAction() {
    question3deactivateButtons();
    document.getElementById("question3answer0").style.backgroundColor = "DarkRed";
    document.getElementById("question3answer1").style.backgroundColor = "DarkRed";
    document.getElementById("question3answer2").style.backgroundColor = "DarkGreen";
    document.getElementById("question3answer3").style.backgroundColor = "DarkRed";
    document.getElementById("feedbackText").innerText = "Incorrect!";
    document.getElementById("question3next").style.display = "block";
    if (timeLeft >= 10) {
        timeLeft = timeLeft - 10;
    } else {
        timeLeft = 0;
    }
}

var question3nextBtn = document.querySelector("#question3next");
question3nextBtn.addEventListener("click", question3nextBtnAction);
function question3nextBtnAction() {
    document.getElementById("feedbackText").innerText = "";
    document.getElementById("question3next").style.display = "none";
    document.getElementById("question3").style.display = "none";
    document.getElementById("question4").style.display = "block";
}

// ==============================================================================================
// QUESTION 4 | ANSWER BUTTON 3
// ==============================================================================================

// question4answer0 button
var question4answer0Btn = document.querySelector("#question4answer0");
question4answer0Btn.addEventListener("click", question4answer0BtnAction);
function question4answer0BtnAction() {
    question4deactivateButtons();
    document.getElementById("question4answer0").style.backgroundColor = "DarkRed";
    document.getElementById("question4answer1").style.backgroundColor = "DarkRed";
    document.getElementById("question4answer2").style.backgroundColor = "DarkRed";
    document.getElementById("question4answer3").style.backgroundColor = "DarkGreen";
    document.getElementById("feedbackText").innerText = "Incorrect!";
    document.getElementById("question4next").style.display = "block";
    if (timeLeft >= 10) {
        timeLeft = timeLeft - 10;
    } else {
        timeLeft = 0;
    }
}

// question4answer1 button
var question4answer1Btn = document.querySelector("#question4answer1");
question4answer1Btn.addEventListener("click", question4answer1BtnAction);
function question4answer1BtnAction() {
    question4deactivateButtons();
    document.getElementById("question4answer0").style.backgroundColor = "DarkRed";
    document.getElementById("question4answer1").style.backgroundColor = "DarkRed";
    document.getElementById("question4answer2").style.backgroundColor = "DarkRed";
    document.getElementById("question4answer3").style.backgroundColor = "DarkGreen";
    document.getElementById("feedbackText").innerText = "Incorrect!";
    document.getElementById("question4next").style.display = "block";
    if (timeLeft >= 10) {
        timeLeft = timeLeft - 10;
    } else {
        timeLeft = 0;
    }
}

// question4answer2 button
var question4answer2Btn = document.querySelector("#question4answer2");
question4answer2Btn.addEventListener("click", question4answer2BtnAction);
function question4answer2BtnAction() {
    question4deactivateButtons();
    document.getElementById("question4answer0").style.backgroundColor = "DarkRed";
    document.getElementById("question4answer1").style.backgroundColor = "DarkRed";
    document.getElementById("question4answer2").style.backgroundColor = "DarkRed";
    document.getElementById("question4answer3").style.backgroundColor = "DarkGreen";
    document.getElementById("feedbackText").innerText = "Incorrect!";
    document.getElementById("question4next").style.display = "block";
    if (timeLeft >= 10) {
        timeLeft = timeLeft - 10;
    } else {
        timeLeft = 0;
    }
}

// question4answer3 button
var question4answer3Btn = document.querySelector("#question4answer3");
question4answer3Btn.addEventListener("click", question4answer3BtnAction);
function question4answer3BtnAction() {
    question4deactivateButtons();
    document.getElementById("question4answer0").style.backgroundColor = "DarkRed";
    document.getElementById("question4answer1").style.backgroundColor = "DarkRed";
    document.getElementById("question4answer2").style.backgroundColor = "DarkRed";
    document.getElementById("question4answer3").style.backgroundColor = "DarkGreen";
    document.getElementById("feedbackText").innerText = "Correct!";
    document.getElementById("question4next").style.display = "block";
    currentScore++;
}

var question4nextBtn = document.querySelector("#question4next");
question4nextBtn.addEventListener("click", question4nextBtnAction);
function question4nextBtnAction() {
    document.getElementById("feedbackText").innerText = "";
    document.getElementById("question4next").style.display = "none";
    document.getElementById("question4").style.display = "none";
    document.getElementById("question5").style.display = "block";
}

// ==============================================================================================
// QUESTION 5 | ANSWER BUTTON 0
// ==============================================================================================

// question5answer0 button
var question5answer0Btn = document.querySelector("#question5answer0");
question5answer0Btn.addEventListener("click", question5answer0BtnAction);
function question5answer0BtnAction() {
    question5deactivateButtons();
    document.getElementById("question5answer0").style.backgroundColor = "DarkGreen";
    document.getElementById("question5answer1").style.backgroundColor = "DarkRed";
    document.getElementById("question5answer2").style.backgroundColor = "DarkRed";
    document.getElementById("question5answer3").style.backgroundColor = "DarkRed";
    document.getElementById("feedbackText").innerText = "Correct!";
    document.getElementById("question5next").style.display = "block";
    currentScore++;
}

// question5answer1 button
var question5answer1Btn = document.querySelector("#question5answer1");
question5answer1Btn.addEventListener("click", question5answer1BtnAction);
function question5answer1BtnAction() {
    question5deactivateButtons();
    document.getElementById("question5answer0").style.backgroundColor = "DarkGreen";
    document.getElementById("question5answer1").style.backgroundColor = "DarkRed";
    document.getElementById("question5answer2").style.backgroundColor = "DarkRed";
    document.getElementById("question5answer3").style.backgroundColor = "DarkRed";
    document.getElementById("feedbackText").innerText = "Incorrect!";
    document.getElementById("question5next").style.display = "block";
    if (timeLeft >= 10) {
        timeLeft = timeLeft - 10;
    } else {
        timeLeft = 0;
    }
}

// question5answer2 button
var question5answer2Btn = document.querySelector("#question5answer2");
question5answer2Btn.addEventListener("click", question5answer2BtnAction);
function question5answer2BtnAction() {
    question5deactivateButtons();
    document.getElementById("question5answer0").style.backgroundColor = "DarkGreen";
    document.getElementById("question5answer1").style.backgroundColor = "DarkRed";
    document.getElementById("question5answer2").style.backgroundColor = "DarkRed";
    document.getElementById("question5answer3").style.backgroundColor = "DarkRed";
    document.getElementById("feedbackText").innerText = "Incorrect!";
    document.getElementById("question5next").style.display = "block";
    if (timeLeft >= 10) {
        timeLeft = timeLeft - 10;
    } else {
        timeLeft = 0;
    }
}

// question5answer3 button
var question5answer3Btn = document.querySelector("#question5answer3");
question5answer3Btn.addEventListener("click", question5answer3BtnAction);
function question5answer3BtnAction() {
    question5deactivateButtons();
    document.getElementById("question5answer0").style.backgroundColor = "DarkGreen";
    document.getElementById("question5answer1").style.backgroundColor = "DarkRed";
    document.getElementById("question5answer2").style.backgroundColor = "DarkRed";
    document.getElementById("question5answer3").style.backgroundColor = "DarkRed";
    document.getElementById("feedbackText").innerText = "Incorrect!";
    document.getElementById("question5next").style.display = "block";
    if (timeLeft >= 10) {
        timeLeft = timeLeft - 10;
    } else {
        timeLeft = 0;
    }
}

var question5nextBtn = document.querySelector("#question5next");
question5nextBtn.addEventListener("click", question5nextBtnAction);
function question5nextBtnAction() {
    document.getElementById("feedbackText").innerText = "";
    document.getElementById("question5next").style.display = "none";
    document.getElementById("question5").style.display = "none";
    document.getElementById("question6").style.display = "block";
}

// ==============================================================================================
// QUESTION 6 | ANSWER BUTTON 1
// ==============================================================================================

// question6answer0 button
var question6answer0Btn = document.querySelector("#question6answer0");
question6answer0Btn.addEventListener("click", question6answer0BtnAction);
function question6answer0BtnAction() {
    question6deactivateButtons();
    document.getElementById("question6answer0").style.backgroundColor = "DarkRed";
    document.getElementById("question6answer1").style.backgroundColor = "DarkGreen";
    document.getElementById("question6answer2").style.backgroundColor = "DarkRed";
    document.getElementById("question6answer3").style.backgroundColor = "DarkRed";
    document.getElementById("feedbackText").innerText = "Incorrect!";
    document.getElementById("question6next").style.display = "block";
    if (timeLeft >= 10) {
        timeLeft = timeLeft - 10;
    } else {
        timeLeft = 0;
    }
}

// question6answer1 button
var question6answer1Btn = document.querySelector("#question6answer1");
question6answer1Btn.addEventListener("click", question6answer1BtnAction);
function question6answer1BtnAction() {
    question6deactivateButtons();
    document.getElementById("question6answer0").style.backgroundColor = "DarkRed";
    document.getElementById("question6answer1").style.backgroundColor = "DarkGreen";
    document.getElementById("question6answer2").style.backgroundColor = "DarkRed";
    document.getElementById("question6answer3").style.backgroundColor = "DarkRed";
    document.getElementById("feedbackText").innerText = "Correct!";
    document.getElementById("question6next").style.display = "block";
    currentScore++;
}

// question6answer2 button
var question6answer2Btn = document.querySelector("#question6answer2");
question6answer2Btn.addEventListener("click", question6answer2BtnAction);
function question6answer2BtnAction() {
    question6deactivateButtons();
    document.getElementById("question6answer0").style.backgroundColor = "DarkRed";
    document.getElementById("question6answer1").style.backgroundColor = "DarkGreen";
    document.getElementById("question6answer2").style.backgroundColor = "DarkRed";
    document.getElementById("question6answer3").style.backgroundColor = "DarkRed";
    document.getElementById("feedbackText").innerText = "Incorrect!";
    document.getElementById("question6next").style.display = "block";
    if (timeLeft >= 10) {
        timeLeft = timeLeft - 10;
    } else {
        timeLeft = 0;
    }
}

// question6answer3 button
var question6answer3Btn = document.querySelector("#question6answer3");
question6answer3Btn.addEventListener("click", question6answer3BtnAction);
function question6answer3BtnAction() {
    question6deactivateButtons();
    document.getElementById("question6answer0").style.backgroundColor = "DarkRed";
    document.getElementById("question6answer1").style.backgroundColor = "DarkGreen";
    document.getElementById("question6answer2").style.backgroundColor = "DarkRed";
    document.getElementById("question6answer3").style.backgroundColor = "DarkRed";
    document.getElementById("feedbackText").innerText = "Incorrect!";
    document.getElementById("question6next").style.display = "block";
    if (timeLeft >= 10) {
        timeLeft = timeLeft - 10;
    } else {
        timeLeft = 0;
    }
}

var question6nextBtn = document.querySelector("#question6next");
question6nextBtn.addEventListener("click", question6nextBtnAction);
function question6nextBtnAction() {
    document.getElementById("feedbackText").innerText = "";
    document.getElementById("question6next").style.display = "none";
    document.getElementById("question6").style.display = "none";
    document.getElementById("question7").style.display = "block";
}

// ==============================================================================================
// QUESTION 7 | ANSWER BUTTON 0
// ==============================================================================================

// question7answer0 button
var question7answer0Btn = document.querySelector("#question7answer0");
question7answer0Btn.addEventListener("click", question7answer0BtnAction);
function question7answer0BtnAction() {
    question7deactivateButtons();
    document.getElementById("question7answer0").style.backgroundColor = "DarkGreen";
    document.getElementById("question7answer1").style.backgroundColor = "DarkRed";
    document.getElementById("question7answer2").style.backgroundColor = "DarkRed";
    document.getElementById("question7answer3").style.backgroundColor = "DarkRed";
    document.getElementById("feedbackText").innerText = "Correct!";
    document.getElementById("question7next").style.display = "block";
    currentScore++;
}

// question7answer1 button
var question7answer1Btn = document.querySelector("#question7answer1");
question7answer1Btn.addEventListener("click", question7answer1BtnAction);
function question7answer1BtnAction() {
    question7deactivateButtons();
    document.getElementById("question7answer0").style.backgroundColor = "DarkGreen";
    document.getElementById("question7answer1").style.backgroundColor = "DarkRed";
    document.getElementById("question7answer2").style.backgroundColor = "DarkRed";
    document.getElementById("question7answer3").style.backgroundColor = "DarkRed";
    document.getElementById("feedbackText").innerText = "Incorrect!";
    document.getElementById("question7next").style.display = "block";
    if (timeLeft >= 10) {
        timeLeft = timeLeft - 10;
    } else {
        timeLeft = 0;
    }
}

// question7answer2 button
var question7answer2Btn = document.querySelector("#question7answer2");
question7answer2Btn.addEventListener("click", question7answer2BtnAction);
function question7answer2BtnAction() {
    question7deactivateButtons();
    document.getElementById("question7answer0").style.backgroundColor = "DarkGreen";
    document.getElementById("question7answer1").style.backgroundColor = "DarkRed";
    document.getElementById("question7answer2").style.backgroundColor = "DarkRed";
    document.getElementById("question7answer3").style.backgroundColor = "DarkRed";
    document.getElementById("feedbackText").innerText = "Incorrect!";
    document.getElementById("question7next").style.display = "block";
    if (timeLeft >= 10) {
        timeLeft = timeLeft - 10;
    } else {
        timeLeft = 0;
    }
}

// question7answer3 button
var question7answer3Btn = document.querySelector("#question7answer3");
question7answer3Btn.addEventListener("click", question7answer3BtnAction);
function question7answer3BtnAction() {
    question7deactivateButtons();
    document.getElementById("question7answer0").style.backgroundColor = "DarkGreen";
    document.getElementById("question7answer1").style.backgroundColor = "DarkRed";
    document.getElementById("question7answer2").style.backgroundColor = "DarkRed";
    document.getElementById("question7answer3").style.backgroundColor = "DarkRed";
    document.getElementById("feedbackText").innerText = "Incorrect!";
    document.getElementById("question7next").style.display = "block";
    if (timeLeft >= 10) {
        timeLeft = timeLeft - 10;
    } else {
        timeLeft = 0;
    }
}

var question7nextBtn = document.querySelector("#question7next");
question7nextBtn.addEventListener("click", question7nextBtnAction);
function question7nextBtnAction() {
    document.getElementById("feedbackText").innerText = "";
    document.getElementById("question7next").style.display = "none";
    document.getElementById("question7").style.display = "none";
    document.getElementById("question8").style.display = "block";
}

// ==============================================================================================
// QUESTION 8 | ANSWER BUTTON 3
// ==============================================================================================

// question8answer0 button
var question8answer0Btn = document.querySelector("#question8answer0");
question8answer0Btn.addEventListener("click", question8answer0BtnAction);
function question8answer0BtnAction() {
    question8deactivateButtons();
    document.getElementById("question8answer0").style.backgroundColor = "DarkRed";
    document.getElementById("question8answer1").style.backgroundColor = "DarkRed";
    document.getElementById("question8answer2").style.backgroundColor = "DarkRed";
    document.getElementById("question8answer3").style.backgroundColor = "DarkGreen";
    document.getElementById("feedbackText").innerText = "Incorrect!";
    document.getElementById("question8next").style.display = "block";
    if (timeLeft >= 10) {
        timeLeft = timeLeft - 10;
    } else {
        timeLeft = 0;
    }
}

// question8answer1 button
var question8answer1Btn = document.querySelector("#question8answer1");
question8answer1Btn.addEventListener("click", question8answer1BtnAction);
function question8answer1BtnAction() {
    question8deactivateButtons();
    document.getElementById("question8answer0").style.backgroundColor = "DarkRed";
    document.getElementById("question8answer1").style.backgroundColor = "DarkRed";
    document.getElementById("question8answer2").style.backgroundColor = "DarkRed";
    document.getElementById("question8answer3").style.backgroundColor = "DarkGreen";
    document.getElementById("feedbackText").innerText = "Incorrect!";
    document.getElementById("question8next").style.display = "block";
    if (timeLeft >= 10) {
        timeLeft = timeLeft - 10;
    } else {
        timeLeft = 0;
    }
}

// question8answer2 button
var question8answer2Btn = document.querySelector("#question8answer2");
question8answer2Btn.addEventListener("click", question8answer2BtnAction);
function question8answer2BtnAction() {
    question8deactivateButtons();
    document.getElementById("question8answer0").style.backgroundColor = "DarkRed";
    document.getElementById("question8answer1").style.backgroundColor = "DarkRed";
    document.getElementById("question8answer2").style.backgroundColor = "DarkRed";
    document.getElementById("question8answer3").style.backgroundColor = "DarkGreen";
    document.getElementById("feedbackText").innerText = "Incorrect!";
    document.getElementById("question8next").style.display = "block";
    if (timeLeft >= 10) {
        timeLeft = timeLeft - 10;
    } else {
        timeLeft = 0;
    }
}

// question8answer3 button
var question8answer3Btn = document.querySelector("#question8answer3");
question8answer3Btn.addEventListener("click", question8answer3BtnAction);
function question8answer3BtnAction() {
    question8deactivateButtons();
    document.getElementById("question8answer0").style.backgroundColor = "DarkRed";
    document.getElementById("question8answer1").style.backgroundColor = "DarkRed";
    document.getElementById("question8answer2").style.backgroundColor = "DarkRed";
    document.getElementById("question8answer3").style.backgroundColor = "DarkGreen";
    document.getElementById("feedbackText").innerText = "Correct!";
    document.getElementById("question8next").style.display = "block";
    currentScore++;
}

var question8nextBtn = document.querySelector("#question8next");
question8nextBtn.addEventListener("click", question8nextBtnAction);
function question8nextBtnAction() {
    document.getElementById("feedbackText").innerText = "";
    document.getElementById("question8next").style.display = "none";
    document.getElementById("question8").style.display = "none";
    document.getElementById("question9").style.display = "block";
}

// ==============================================================================================
// QUESTION 9 | ANSWER BUTTON 3
// ==============================================================================================

// question9answer0 button
var question9answer0Btn = document.querySelector("#question9answer0");
question9answer0Btn.addEventListener("click", question9answer0BtnAction);
function question9answer0BtnAction() {
    question9deactivateButtons();
    document.getElementById("question9answer0").style.backgroundColor = "DarkRed";
    document.getElementById("question9answer1").style.backgroundColor = "DarkRed";
    document.getElementById("question9answer2").style.backgroundColor = "DarkRed";
    document.getElementById("question9answer3").style.backgroundColor = "DarkGreen";
    document.getElementById("feedbackText").innerText = "Incorrect!";
    document.getElementById("summarynext").style.display = "block";
    clearInterval(timeInterval);
    if (timeLeft >= 10) {
        timeLeft = timeLeft - 10;
    } else {
        timeLeft = 0;
    }
}

// question9answer1 button
var question9answer1Btn = document.querySelector("#question9answer1");
question9answer1Btn.addEventListener("click", question9answer1BtnAction);
function question9answer1BtnAction() {
    question9deactivateButtons();
    document.getElementById("question9answer0").style.backgroundColor = "DarkRed";
    document.getElementById("question9answer1").style.backgroundColor = "DarkRed";
    document.getElementById("question9answer2").style.backgroundColor = "DarkRed";
    document.getElementById("question9answer3").style.backgroundColor = "DarkGreen";
    document.getElementById("feedbackText").innerText = "Incorrect!";
    document.getElementById("summarynext").style.display = "block";
    clearInterval(timeInterval);
    if (timeLeft >= 10) {
        timeLeft = timeLeft - 10;
    } else {
        timeLeft = 0;
    }
}

// question9answer2 button
var question9answer2Btn = document.querySelector("#question9answer2");
question9answer2Btn.addEventListener("click", question9answer2BtnAction);
function question9answer2BtnAction() {
    question9deactivateButtons();
    document.getElementById("question9answer0").style.backgroundColor = "DarkRed";
    document.getElementById("question9answer1").style.backgroundColor = "DarkRed";
    document.getElementById("question9answer2").style.backgroundColor = "DarkRed";
    document.getElementById("question9answer3").style.backgroundColor = "DarkGreen";
    document.getElementById("feedbackText").innerText = "Incorrect!";
    document.getElementById("summarynext").style.display = "block";
    clearInterval(timeInterval);
    if (timeLeft >= 10) {
        timeLeft = timeLeft - 10;
    } else {
        timeLeft = 0;
    }
}

// question9answer3 button
var question9answer3Btn = document.querySelector("#question9answer3");
question9answer3Btn.addEventListener("click", question9answer3BtnAction);
function question9answer3BtnAction() {
    question9deactivateButtons();
    document.getElementById("question9answer0").style.backgroundColor = "DarkRed";
    document.getElementById("question9answer1").style.backgroundColor = "DarkRed";
    document.getElementById("question9answer2").style.backgroundColor = "DarkRed";
    document.getElementById("question9answer3").style.backgroundColor = "DarkGreen";
    document.getElementById("feedbackText").innerText = "Correct!";
    document.getElementById("summarynext").style.display = "block";
    clearInterval(timeInterval);
    currentScore++;
}

// summary button
var summarynextBtn = document.querySelector("#summarynext");
summarynextBtn.addEventListener("click", summarynextBtnAction);
function summarynextBtnAction() {
    document.getElementById("feedbackText").innerText = "";
    document.getElementById("summarynext").style.display = "none";
    document.getElementById("question1").style.display = "none";
    document.getElementById("question2").style.display = "none";
    document.getElementById("question3").style.display = "none";
    document.getElementById("question4").style.display = "none";
    document.getElementById("question5").style.display = "none";
    document.getElementById("question6").style.display = "none";
    document.getElementById("question7").style.display = "none";
    document.getElementById("question8").style.display = "none";
    document.getElementById("question9").style.display = "none";
    document.getElementById("title").textContent = "Bootcamp Quiz"
    if (currentScore === 1) {
        document.getElementById("summaryStatement").textContent = "You answered 1 question correctly";
    } else {
        document.getElementById("summaryStatement").textContent = "You answered " + currentScore + " questions correctly";
    }
    if (timeLeft === 1) {
        document.getElementById("summaryStatement").textContent += " with 1 second remaining.";
    } else {
        document.getElementById("summaryStatement").textContent += " with " + timeLeft + " seconds remaining.";
    }
    document.getElementById("summary").style.display = "block";
    document.getElementById("initials").focus();
}

// ==============================================================================================
// Summary page
// ==============================================================================================

// submit button
var submitBtn = document.querySelector("#submit");
submitBtn.addEventListener("click", submitBtnAction);

// or hitting enter on the text field
document.getElementById("initials")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("submit").click();
    }
});

function submitBtnAction() {
    //////// NEED TO ADD CODE TO ACTUALLY SUBMIT ////////
    var initialsInput = document.querySelector("#initials");
    var highscoresList = document.getElementById("highscoresList");
    var newHighscore = document.createElement("li");
    var newHighscoreEntry;
    if (currentScore === 1) {
        newHighscoreEntry = '"' + initialsInput.value + '" answered 1 question correctly';
    } else {
        newHighscoreEntry = '"' + initialsInput.value + '" answered ' + currentScore + ' questions correctly';
    }
    if (timeLeft === 1) {
        newHighscoreEntry += " with 1 second remaining";
    } else {
        newHighscoreEntry += " with " + timeLeft + " seconds remaining";
    }
    newHighscore.appendChild(document.createTextNode(newHighscoreEntry));
    highscoresList.appendChild(newHighscore);
    //////////////////////////////////////////////////////
    document.getElementById("summary").style.display = "none";
    document.getElementById("highscores").style.display = "block";
}

// ==============================================================================================
// Highscores page
// ==============================================================================================

// reset quiz button
var resetBtn = document.querySelector("#reset");
resetBtn.addEventListener("click", resetBtnAction);
function resetBtnAction() {
    // re-active all multiple choice buttons
    question1answer0Btn.addEventListener("click", question1answer0BtnAction);
    question1answer1Btn.addEventListener("click", question1answer1BtnAction);
    question1answer2Btn.addEventListener("click", question1answer2BtnAction);
    question1answer3Btn.addEventListener("click", question1answer3BtnAction);
    document.getElementById("question1answer0").style.backgroundColor = "DarkBlue";
    document.getElementById("question1answer1").style.backgroundColor = "DarkBlue";
    document.getElementById("question1answer2").style.backgroundColor = "DarkBlue";
    document.getElementById("question1answer3").style.backgroundColor = "DarkBlue";
    question2answer0Btn.addEventListener("click", question2answer0BtnAction);
    question2answer1Btn.addEventListener("click", question2answer1BtnAction);
    question2answer2Btn.addEventListener("click", question2answer2BtnAction);
    question2answer3Btn.addEventListener("click", question2answer3BtnAction);
    document.getElementById("question2answer0").style.backgroundColor = "DarkBlue";
    document.getElementById("question2answer1").style.backgroundColor = "DarkBlue";
    document.getElementById("question2answer2").style.backgroundColor = "DarkBlue";
    document.getElementById("question2answer3").style.backgroundColor = "DarkBlue";
    question3answer0Btn.addEventListener("click", question3answer0BtnAction);
    question3answer1Btn.addEventListener("click", question3answer1BtnAction);
    question3answer2Btn.addEventListener("click", question3answer2BtnAction);
    question3answer3Btn.addEventListener("click", question3answer3BtnAction);
    document.getElementById("question3answer0").style.backgroundColor = "DarkBlue";
    document.getElementById("question3answer1").style.backgroundColor = "DarkBlue";
    document.getElementById("question3answer2").style.backgroundColor = "DarkBlue";
    document.getElementById("question3answer3").style.backgroundColor = "DarkBlue";
    question4answer0Btn.addEventListener("click", question4answer0BtnAction);
    question4answer1Btn.addEventListener("click", question4answer1BtnAction);
    question4answer2Btn.addEventListener("click", question4answer2BtnAction);
    question4answer3Btn.addEventListener("click", question4answer3BtnAction);
    document.getElementById("question4answer0").style.backgroundColor = "DarkBlue";
    document.getElementById("question4answer1").style.backgroundColor = "DarkBlue";
    document.getElementById("question4answer2").style.backgroundColor = "DarkBlue";
    document.getElementById("question4answer3").style.backgroundColor = "DarkBlue";
    question5answer0Btn.addEventListener("click", question5answer0BtnAction);
    question5answer1Btn.addEventListener("click", question5answer1BtnAction);
    question5answer2Btn.addEventListener("click", question5answer2BtnAction);
    question5answer3Btn.addEventListener("click", question5answer3BtnAction);
    document.getElementById("question5answer0").style.backgroundColor = "DarkBlue";
    document.getElementById("question5answer1").style.backgroundColor = "DarkBlue";
    document.getElementById("question5answer2").style.backgroundColor = "DarkBlue";
    document.getElementById("question5answer3").style.backgroundColor = "DarkBlue";
    question6answer0Btn.addEventListener("click", question6answer0BtnAction);
    question6answer1Btn.addEventListener("click", question6answer1BtnAction);
    question6answer2Btn.addEventListener("click", question6answer2BtnAction);
    question6answer3Btn.addEventListener("click", question6answer3BtnAction);
    document.getElementById("question6answer0").style.backgroundColor = "DarkBlue";
    document.getElementById("question6answer1").style.backgroundColor = "DarkBlue";
    document.getElementById("question6answer2").style.backgroundColor = "DarkBlue";
    document.getElementById("question6answer3").style.backgroundColor = "DarkBlue";
    question7answer0Btn.addEventListener("click", question7answer0BtnAction);
    question7answer1Btn.addEventListener("click", question7answer1BtnAction);
    question7answer2Btn.addEventListener("click", question7answer2BtnAction);
    question7answer3Btn.addEventListener("click", question7answer3BtnAction);
    document.getElementById("question7answer0").style.backgroundColor = "DarkBlue";
    document.getElementById("question7answer1").style.backgroundColor = "DarkBlue";
    document.getElementById("question7answer2").style.backgroundColor = "DarkBlue";
    document.getElementById("question7answer3").style.backgroundColor = "DarkBlue";
    question8answer0Btn.addEventListener("click", question8answer0BtnAction);
    question8answer1Btn.addEventListener("click", question8answer1BtnAction);
    question8answer2Btn.addEventListener("click", question8answer2BtnAction);
    question8answer3Btn.addEventListener("click", question8answer3BtnAction);
    document.getElementById("question8answer0").style.backgroundColor = "DarkBlue";
    document.getElementById("question8answer1").style.backgroundColor = "DarkBlue";
    document.getElementById("question8answer2").style.backgroundColor = "DarkBlue";
    document.getElementById("question8answer3").style.backgroundColor = "DarkBlue";
    question9answer0Btn.addEventListener("click", question9answer0BtnAction);
    question9answer1Btn.addEventListener("click", question9answer1BtnAction);
    question9answer2Btn.addEventListener("click", question9answer2BtnAction);
    question9answer3Btn.addEventListener("click", question9answer3BtnAction);
    document.getElementById("question9answer0").style.backgroundColor = "DarkBlue";
    document.getElementById("question9answer1").style.backgroundColor = "DarkBlue";
    document.getElementById("question9answer2").style.backgroundColor = "DarkBlue";
    document.getElementById("question9answer3").style.backgroundColor = "DarkBlue";
    // reset highscores and show welcome page (i.e. question 0)
    document.getElementById("highscores").style.display = "none";
    document.getElementById("question0").style.display = "block";
}

// ==============================================================================================
// Timer
// ==============================================================================================

var timeInterval;
const quizTime = 60;
var timeLeft = quizTime;
function countdownSecond() {
    if (timeLeft === 1) {
        document.getElementById("title").textContent = timeLeft + " second";
        timeLeft--;
    } else if (timeLeft > 0) {
        document.getElementById("title").textContent = timeLeft + " seconds";
        timeLeft--;
    } else {
        document.getElementById("title").textContent = "0 seconds";
        question1deactivateButtons();
        question2deactivateButtons();
        question3deactivateButtons();
        question4deactivateButtons();
        question5deactivateButtons();
        question6deactivateButtons();
        question7deactivateButtons();
        question8deactivateButtons();
        question9deactivateButtons();
        document.getElementById("question1next").style.display = "none";
        document.getElementById("question2next").style.display = "none";
        document.getElementById("question3next").style.display = "none";
        document.getElementById("question4next").style.display = "none";
        document.getElementById("question5next").style.display = "none";
        document.getElementById("question6next").style.display = "none";
        document.getElementById("question7next").style.display = "none";
        document.getElementById("question8next").style.display = "none";
        clearInterval(timeInterval);
        document.getElementById("feedbackText").innerText = "Time's up!";
        document.getElementById("summarynext").style.display = "block";
  }
}

function countdown() {
    timeLeft = quizTime;
    countdownSecond();
    timeInterval = setInterval(countdownSecond, 1000);
}

// ==============================================================================================
// Score keeping
// ==============================================================================================

var currentScore = 0;