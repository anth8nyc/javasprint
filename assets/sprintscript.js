// // Create Start Button function
// Begin Timer function
// Replicate function with rules explanation or build into previous function
 
let startBtnEl = document.querySelector(".startBtn");
let timeBtnEl = document.querySelector(".time");
let timerEl = document.querySelector(".timer");
let mainEl = document.querySelector(".main");

let questContainEl = document.querySelector(".questContain")
let questEl = document.querySelector(".question")

let answerBtnsEl = document.querySelectorAll(".answerBtn")
let answerBtnAEl = document.querySelector("#answerchoicea")
let answerBtnBEl = document.querySelector("#answerchoiceb")
let answerBtnCEl = document.querySelector("#answerchoicec")
let answerBtnDEl = document.querySelector("#answerchoiced")

let secondsLeft = 75;
let score = 0;
let currentQuest = 0;

let questions = [
  
  {
    question: "What's my favorite color?", 
    answers:[
      { text: "Red", correct: true},
      { text: "Yellow", correct: false},
      { text: "Blue", correct: false},
      { text: "Green", correct: false},
    ]},
  {
    question: "What's my favorite number?", 
    answers:[
      { text: "8", correct: false},
      { text: "21", correct: false},
      { text: "4", correct: true},
      { text: "0", correct: false},
    ]},
  {
    question: "What's my favorite food?", 
    answers:[
      { text: "Tacos", correct: false},
      { text: "Hot Dogs", correct: false},
      { text: "Pizza", correct: true},
      { text: "Burgers", correct: false},
    ]},
  
]

startBtnEl.addEventListener("click", function(){
  
  clearInterval(setTime);
  setTime();
  removeStartBtn();
  renderQuestions();
    
});

function setTime() {
  timeBtnEl.setAttribute("style", "display: flex")
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timerEl.textContent = secondsLeft + " seconds left";
    
    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      endGame();
    }
  }, 1000);
} 

function removeStartBtn() {
  startBtnEl.setAttribute("style", "display:none")
}

function renderQuestions(){
  
  questContainEl.setAttribute("style", "display: flex");
  
  questEl.textContent = questions[currentQuest].question
  
  answerBtnAEl.textContent = questions[currentQuest].answers[0].text
  answerBtnBEl.textContent = questions[currentQuest].answers[1].text
  answerBtnCEl.textContent = questions[currentQuest].answers[2].text
  answerBtnDEl.textContent = questions[currentQuest].answers[3].text
  
  
  for (let currentQuest = 0; currentQuest < questions.length; currentQuest++) {
    
    answerBtnsEl.addEventListener("click", function(){
    
      let chosenQ = questions[currentQuest];
      let chosenA = answerBtnsEl.currentTarget
      console.log(chosenA)

      if (this.correct === true) {
        score++;
        currentQuest++;
      } else {
        secondsLeft - 10;
        currentQuest++;
      }
      
    });
      
  }
    
  // for (let index = 0; index < array.length; index++) {
    //   const element = array[index];
    
    // }
    
    // For loop //
    // on click, check correct t/f 
    //if else 
    // either renders next question
    // if correct add to score
    // else subtract time
    
    // currentQuest++;    
    // renderQuestions();  

  
}


function endGame() {


}


// Begin Quiz function 

    // Each question should track the correct answer choice to the score 
    // and subtract time from the timer for incorrect answers

// Push score number to large display when timer hits zero to display page 
// include form in display page for initials input

// use local storage to take information for display page to log high score
