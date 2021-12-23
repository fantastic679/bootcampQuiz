


// start quiz button
var question0answer0Btn = document.querySelector("#question0answer0");
question0answer0Btn.addEventListener("click", question0answer0BtnAction);
function question0answer0BtnAction() {
    question0answer0Btn.removeEventListener("click", question0answer0BtnAction);
    document.getElementById("question0").style.display = "none";
    document.getElementById("question1").style.display = "block";
}

// ==============================================================================================
// NUMBERING STARTS AT 0
// ==============================================================================================


// ==============================================================================================
// QUESTION 1 | ANSWER BUTTON 2
// ==============================================================================================

// question1answer0 button
var question1answer0Btn = document.querySelector("#question1answer0");
question1answer0Btn.addEventListener("click", question1answer0BtnAction);
function question1answer0BtnAction() {
    question1answer0Btn.removeEventListener("click", question1answer0BtnAction);
    question1answer1Btn.removeEventListener("click", question1answer1BtnAction);
    question1answer2Btn.removeEventListener("click", question1answer2BtnAction);
    question1answer3Btn.removeEventListener("click", question1answer3BtnAction);
    document.getElementById("question1answer0").style.backgroundColor = "DarkRed";
    document.getElementById("question1answer1").style.backgroundColor = "DarkRed";
    document.getElementById("question1answer2").style.backgroundColor = "DarkGreen";
    document.getElementById("question1answer3").style.backgroundColor = "DarkRed";
    document.getElementById("feedbackText").innerText = "Incorrect!";
    document.getElementById("question1next").style.display = "block";
}

// question1answer1 button
var question1answer1Btn = document.querySelector("#question1answer1");
question1answer1Btn.addEventListener("click", question1answer1BtnAction);
function question1answer1BtnAction() {
    question1answer0Btn.removeEventListener("click", question1answer0BtnAction);
    question1answer1Btn.removeEventListener("click", question1answer1BtnAction);
    question1answer2Btn.removeEventListener("click", question1answer2BtnAction);
    question1answer3Btn.removeEventListener("click", question1answer3BtnAction);
    document.getElementById("question1answer0").style.backgroundColor = "DarkRed";
    document.getElementById("question1answer1").style.backgroundColor = "DarkRed";
    document.getElementById("question1answer2").style.backgroundColor = "DarkGreen";
    document.getElementById("question1answer3").style.backgroundColor = "DarkRed";
    document.getElementById("feedbackText").innerText = "Incorrect!";
    document.getElementById("question1next").style.display = "block";
}

// question1answer2 button
var question1answer2Btn = document.querySelector("#question1answer2");
question1answer2Btn.addEventListener("click", question1answer2BtnAction);
function question1answer2BtnAction() {
    question1answer0Btn.removeEventListener("click", question1answer0BtnAction);
    question1answer1Btn.removeEventListener("click", question1answer1BtnAction);
    question1answer2Btn.removeEventListener("click", question1answer2BtnAction);
    question1answer3Btn.removeEventListener("click", question1answer3BtnAction);
    document.getElementById("question1answer0").style.backgroundColor = "DarkRed";
    document.getElementById("question1answer1").style.backgroundColor = "DarkRed";
    document.getElementById("question1answer2").style.backgroundColor = "DarkGreen";
    document.getElementById("question1answer3").style.backgroundColor = "DarkRed";
    document.getElementById("feedbackText").innerText = "Correct!";
    document.getElementById("question1next").style.display = "block";
}

// question1answer3 button
var question1answer3Btn = document.querySelector("#question1answer3");
question1answer3Btn.addEventListener("click", question1answer3BtnAction);
function question1answer3BtnAction() {
    question1answer0Btn.removeEventListener("click", question1answer0BtnAction);
    question1answer1Btn.removeEventListener("click", question1answer1BtnAction);
    question1answer2Btn.removeEventListener("click", question1answer2BtnAction);
    question1answer3Btn.removeEventListener("click", question1answer3BtnAction);
    document.getElementById("question1answer0").style.backgroundColor = "DarkRed";
    document.getElementById("question1answer1").style.backgroundColor = "DarkRed";
    document.getElementById("question1answer2").style.backgroundColor = "DarkGreen";
    document.getElementById("question1answer3").style.backgroundColor = "DarkRed";
    document.getElementById("feedbackText").innerText = "Incorrect!";
    document.getElementById("question1next").style.display = "block";
}

var question1nextBtn = document.querySelector("#question1next");
question1nextBtn.addEventListener("click", question1nextBtnAction);
function question1nextBtnAction() {
    document.getElementById("question1").style.display = "none";
    document.getElementById("question2").style.display = "block";
}

// ==============================================================================================