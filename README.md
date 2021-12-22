# Thought process

## Components

* Questions
* High score
* Timer
* Maybe a landing page

We will make a deliberate attempt at this time not to use third part APIs and try to code from scratch for practice.

## Website structure

* When user visits webpage, should be presented with landing page

* When user clicks start, should take you to questions and the timer should start to stepdown

* When each question is presented, should present stem + answer options

* When user select answer, should display whether correct or not, then provide option to proceed to next question

* When all questions are completed OR the timer is up, an end of quiz alert should appear, then allow user to input initials, present a summary and allow users to view the highcores

## Page structure

Let's try to start of simple first. We can add to this later.

Essentially, our website can just have three main sections.

* Title
* Body text including any input fields like buttons or text
* Responsive section which changes user input

For example, for the landing page, those elements could have the following content:

* **Title:** Welcome to Bootcamp Quiz!
* **Body text:** This is a timed 1 minute multiple choice quiz of 10 questions relating to the content covered thus far in the Coding Bootcamp.
  * Button for *Start*
* **Responsive section:** *empty*

For a question, those elements could be populated as so:

* **Title:** Question X | Y seconds remaining
* **Body text:** Question stem...
  * Button for *Answer 1*
  * Button for *Answer 2*
  * Button for *Answer 3*
  * Button for *Answer 4*
* **Responsive section:** *empty*
  * On response, changes to *Correct!* or *Incorrect!*
  * Button for *Next question* would also appear

On quiz completion (time elapsed or nil further questions):

* **Title:** Quiz completed!
* **Body text:** Either *You ran out of time!* or *You've finished all the questions!*
  * You scored X correctly out of Y questions correctly.
  * Spoiler section to see questions and solutions??
* **Responsive section:** *View highscores!*

Of course, there are many way to do this, but this is just a starting point.

## Changing page context

Our base HTML will have context these three sections.

We will use some basic CSS to set underlying theme of the page.

We will use Javascript to dynamically change the context of the page as per user input. 

# Preliminary coding process




