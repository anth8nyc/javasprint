// // Create Start Button function
// Begin Timer function
// Replicate function with rules explanation or build into previous function
 
let startBtnEl = document.querySelector(".startBtn");
let timeBtnEl = document.querySelector(".time");
let timerEl = document.querySelector(".timer");
let mainEl = document.querySelector(".main");

let questContainEl = document.querySelector(".questContain")
let questEl = document.querySelector(".question")

let answerBtnsEl = document.getElementsByClassName("answerBtn")
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
  {
    question: "What's my favorite animal?", 
    answers:[
      { text: "Lion", correct: false},
      { text: "Eagle", correct: false},
      { text: "Snake", correct: false},
      { text: "Fox", correct: true},
    ]},
  {
    question: "What's my favorite TV show?", 
    answers:[
      { text: "Game Of Thrones", correct: false},
      { text: "Midnight Gospel", correct: true},
      { text: "Black Mirror", correct: false},
      { text: "Bob's Burgers", correct: false},
    ]},
  
]

startBtnEl.addEventListener("click", function(){
  
  clearInterval(setTime);
  setTime();
  removeStartBtn();
  startGame();
  
});

function startGame() {

  questContainEl.setAttribute("style", "display: flex");
  
  renderQuestions();
     
}


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
  
  questEl.textContent = questions[currentQuest].question
  answerBtnAEl.textContent = questions[currentQuest].answers[0].text
  answerBtnBEl.textContent = questions[currentQuest].answers[1].text
  answerBtnCEl.textContent = questions[currentQuest].answers[2].text
  answerBtnDEl.textContent = questions[currentQuest].answers[3].text

  for (let i = 0; i < answerBtnsEl.length; i++) {
    
    let ac = questions[currentQuest].answers[i].correct;
    
    if(ac === true){
      answerBtnsEl[i].classList.add("correct")
    }
    
  }
  
  for (let i = 0; i < answerBtnsEl.length; i++) {
    
    answerBtnsEl[i].addEventListener("click", function(chose){
      let chosenA = chose.target;
      checkValidity(chosenA);
      
    })    
    
  }
  
  currentQuest++;
  renderQuestions;
};


function checkValidity(chosenA){
  
  chosenA
  if (chosenA.classList.contains("correct")){
    addScore();
  } else {
    subTime();
  };
  resetQA();
  renderQuestions();
  
  console.log(chosenA);
  console.log(score)
};

function resetQA() {
  
  for (let i = 0; i < answerBtnsEl.length; i++) {
    
    answerBtnsEl[i].classList.remove("correct")    
    
  }
}

function sTime() {
  
  secondsLeft--;
}

function addScore() {
  score++;
}
function subTime() {
  secondsLeft - 10;
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

  

function endGame() {


}


// Begin Quiz function 

    // Each question should track the correct answer choice to the score 
    // and subtract time from the timer for incorrect answers

// Push score number to large display when timer hits zero to display page 
// include form in display page for initials input

// use local storage to take information for display page to log high score
