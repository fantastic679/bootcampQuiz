# Bootcamp Quiz

## Synopsis

This webpage is a simple timed multiple choice quiz which can be adapted to different content. This particular example is a 60 second quiz of 9 multiple choice questions on the topic of basic web development in HTML, CSS and JS. It is called Bootcamp Quiz as the content is of that covered in The Coding Bootcamp at the University of Sydney. This website was developed as one of this bootcamp's homework tasks.

## Source and live demo

The repository for this quiz is located at https://github.com/fantastic679/bootcampQuiz/.

A live demo of the webpage can be found at https://fantastic679.github.io/bootcampQuiz/.

## Structure

The website features a homepage that introduces the user and allows them to start the quiz.

![Welcome](/assets/screenshots/screenshot1.png?raw=true)

Once the quiz is started, a countdown timer is displayed. If a question is answered incorrectly, 10 seconds will be subtracted from the time remaiming. The quiz end once the time remaining elapses or all 9 questions are completed. Completing the quiz will prompt the user to view the summary.

![Question](/assets/screenshots/screenshot2.png?raw=true)

![Answer](/assets/screenshots/screenshot3.png?raw=true)

The summary displays how many questions the user answered correct and the time remaining. They will then be prompted to enter their initials and proceed to the highscore pages.

![Summary](/assets/screenshots/screenshot4.png?raw=true)

The highscores page displays the summary information for previous runs of the quiz in the same session (will not retain previous information if the page is reloaded) and prompts the user to restart the quiz. This take the user back the homepage.

![Highscores](/assets/screenshots/screenshot5.png?raw=true)

## Design

The website functionality and content is provided on a single HTML page. The CSS ensure the page does not display the majority of this information initially so that users are only shown a landing page in the first instance. JavaScript is used determine which portions of the page are displayed depending on user input, as well as provide the timer functionality.

## Contact

Do not hesitate to contact me at stevenphan@msn.com if you have any questions or concerns.