////////////////////////////////////////////////////////////////////////////
//                                                                        //
//                              Landing page                              //
//                                                                        //
////////////////////////////////////////////////////////////////////////////

var startQuizBtn = document.querySelector("#startQuiz");
startQuizBtn.addEventListener("click", question1);

function question1() {
    startQuizBtn.removeEventListener("click", question1);

    var question1Title = document.querySelector("#title");
    question1Title.innerText = "Question 1";
    var question1Content1 = document.querySelector("#content1");
    question1Content1.innerHTML = "<p>Who is our class instructor?</p>" + 
                                  "<button type='button' class='button' id='question1Incorrect1'>Douglas Chan</button><br><br>" + 
                                  "<button type='button' class='button' id='question1Incorrect2'>Scott Basquil</button><br><br>" + 
                                  "<button type='button' class='button' id='question1Correct3'>David Impey</button><br><br>" + 
                                  "<button type='button' class='button' id='question1Incorrect4'>Rachel Wilson</button><br><br>";

    var question1Incorrect1Btn = document.querySelector("#question1Incorrect1");
    question1Incorrect1Btn.addEventListener("click", answer1Incorrect1);
    function answer1Incorrect1() {
        document.getElementById("question1Incorrect1").style.backgroundColor = "darkred";
        var answer1Content2 = document.querySelector("#content2");
        answer1Content2.innerHTML = "<p>Incorrect!</p>" + 
                                    "<button type='button' class='button' id='nextQuestion2'>Next Question</button>";
     }

    var question1Incorrect2Btn = document.querySelector("#question1Incorrect2");
    question1Incorrect2Btn.addEventListener("click", answer1Incorrect2);
    function answer1Incorrect2() {
        document.getElementById("question1Incorrect2").style.backgroundColor = "darkred";
        var answer1Content2 = document.querySelector("#content2");
        answer1Content2.innerHTML = "<p>Incorrect!</p>" + 
                                    "<button type='button' class='button' id='nextQuestion2'>Next Question</button>";
     }

    var question1Correct3Btn = document.querySelector("#question1Correct3");
    question1Correct3Btn.addEventListener("click", answer1Correct3);
    function answer1Correct3() {
        document.getElementById("question1Correct3").style.backgroundColor = "darkgreen";
        var answer1Content2 = document.querySelector("#content2");
        answer1Content2.innerHTML = "<p>Correct!</p>" + 
                                    "<button type='button' class='button' id='nextQuestion2'>Next Question</button>";
     }

    var question1Incorrect4Btn = document.querySelector("#question1Incorrect4");
    question1Incorrect4Btn.addEventListener("click", answer1Incorrect4);
    function answer1Incorrect4() {
        document.getElementById("question1Incorrect4").style.backgroundColor = "darkred";
        var answer1Content2 = document.querySelector("#content2");
        answer1Content2.innerHTML = "<p>Incorrect!</p>" + 
                                    "<button type='button' class='button' id='nextQuestion2'>Next Question</button>";
     }


}

