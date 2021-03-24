let startBtnEl = document.querySelector(".startBtn");
let instructEl = document.querySelector("#instructions");
let timeBtnEl = document.querySelector(".time");
let HighSBtnEl = document.querySelector(".hss");
let timerEl = document.querySelector(".timer");
let mainEl = document.querySelector(".main");

let finalScoreEl = document.querySelector(".finalScore")
let endScreenEl = document.querySelector(".endScreen")
let questContainEl = document.querySelector(".questContain")
let questEl = document.querySelector(".question")

let answerBtnsEl = document.getElementsByClassName("answerBtn")
let answerBtnAEl = document.querySelector("#answerchoicea")
let answerBtnBEl = document.querySelector("#answerchoiceb")
let answerBtnCEl = document.querySelector("#answerchoicec")
let answerBtnDEl = document.querySelector("#answerchoiced")

let secondsLeft = 100;
let score = 0;
let currentQuest = 0;

let questions = [
  
  {
    question: "Which HTML element do we insert JavaScript into?", 
    answers:[
      { text: "<javascript>", correct: false},
      { text: "<js>", correct: false},
      { text: "<script>", correct: true},
      { text: "<link>", correct: false},
    ]},
  {
    question: "Where is best to insert a JavaScript?", 
    answers:[
      { text: "The end of the <body> section", correct: true},
      { text: "The end of the <head> section", correct: false},
      { text: "Within the <html> tag ", correct: false},
      { text: "None of the above", correct: false},
    ]},
  {
    question: "How do you comment in JavaScript?", 
    answers:[
      { text: "<!-- comment -->", correct: false},
      { text: "// comment", correct: true},
      { text: "/* comment */ ", correct: false},
      { text: "// comment //", correct: false},
    ]},
  {
    question: "boolean(4>2) will return:", 
    answers:[
      { text: "2", correct: false},
      { text: "false", correct: false},
      { text: "true", correct: true},
      { text: "NaN", correct: false},
    ]},
  {
    question: "Is JavaScript case-sensitive?", 
    answers:[
      { text: "no", correct: false},
      { text: "No", correct: false},
      { text: "Yes", correct: true},
      { text: "yes", correct: true},
    ]},
  {
    question: "JavaScript is a _____ programming language.", 
    answers:[
      { text: "Client-side", correct: false},
      { text: "Server-side", correct: false},
      { text: "All of the above", correct: true},
      { text: "None of the above", correct: false},
    ]},
  
]

setTime();

startBtnEl.addEventListener("click", function(){
  secondsLeft = 71;
  removeStartBtn();
  timeBtnEl.setAttribute("style", "display: flex")
  startGame();
});

function startGame() {
  questContainEl.setAttribute("style", "display: flex");
  renderQuestions();
}

function setTime() {
  let timerInterval = setInterval(function() {
    if(secondsLeft > 0){
      secondsLeft--;
    } else {
      endGame();
    }
    timerEl.textContent = secondsLeft + " seconds left";
  }, 1000);
  if(secondsLeft <= 0) {
    clearInterval(timerInterval);
    endGame();
    return;
  }
} 

function removeStartBtn() {
  startBtnEl.setAttribute("style", "display:none")
  instructEl.setAttribute("style", "display:none")
}

function renderQuestions(){
  
  questEl.textContent = questions[currentQuest].question
  answerBtnAEl.textContent = questions[currentQuest].answers[0].text
  answerBtnBEl.textContent = questions[currentQuest].answers[1].text
  answerBtnCEl.textContent = questions[currentQuest].answers[2].text
  answerBtnDEl.textContent = questions[currentQuest].answers[3].text

  if ((secondsLeft<= 0)) {
    endGame();
  } else {
  }
  for (let i = 0; i < answerBtnsEl.length; i++) {
    
    let ac = questions[currentQuest].answers[i].correct;
    if(ac === true){
      answerBtnsEl[i].classList.add("correct")
    }
  }

  answerBtnAEl.addEventListener("click", checkValidity)
  answerBtnBEl.addEventListener("click", checkValidity)
  answerBtnCEl.addEventListener("click", checkValidity)
  answerBtnDEl.addEventListener("click", checkValidity)
};

function checkValidity(chose){

  let chosenA = chose.target;
  if (chosenA.classList.contains("correct")){
    score++;
  } else {   
    secondsLeft = secondsLeft - 10;
  };

  resetQA();
  currentQuest++;
  if (currentQuest < questions.length){
    renderQuestions();
  } else{
    secondsLeft = 0;
    endGame();
  }
  
};

function resetQA() {
  
  if(answerBtnAEl.classList.contains("correct")){
    answerBtnAEl.classList.remove("correct")    
  }  
  if(answerBtnBEl.classList.contains("correct")){
    answerBtnBEl.classList.remove("correct")    
  } 
  if(answerBtnCEl.classList.contains("correct")){
    answerBtnCEl.classList.remove("correct")    
  }  
  if (answerBtnDEl.classList.contains("correct")){
    answerBtnDEl.classList.remove("correct")    
  }  
  return
}


  
function endGame() {
  questContainEl.setAttribute("style", "display: none")
  endScreenEl.setAttribute("style", "display: flex")

  finalScoreEl.textContent = "Final score: " + score;
}

HighSBtnEl.addEventListener("click", function(event) {
  event.preventDefault();
  secondsLeft = 0
  removeStartBtn();
  endGame();
})

let userInput = document.querySelector("#initialsText");
let highscorelog = document.querySelector("#highscorelog");
let highscoreList = document.querySelector("#highscorelist");
let clearHSBtnEl = document.querySelector(".clearHighScores");
let saveHSBtnEl = document.querySelector(".saveHighScores");
let playAgainBtnEl = document.querySelector(".playAgain");

let highscores = [];

function renderHighScores() {
  highscoreList.innerHTML = "";

  for (var i = 0; i < highscores.length; i++) {
    var highscore = highscores[i];

    var li = document.createElement("li");
    li.textContent = highscore.userText + " --- " + highscore.userScore;
    highscoreList.appendChild(li);
  }
}

function storeHighscores() {
  localStorage.setItem("highscores", JSON.stringify(highscores));
}

saveHSBtnEl.addEventListener("click", function(event) {
  event.preventDefault();
  
  let userText = userInput.value.trim();
  let userScore = score;
  
  if (userText === "") {
    return;
  }
  
  highscores.push({userText, userScore});
  userInput.value = "";
  
  storeHighscores();
  renderHighScores();
});

clearHSBtnEl.addEventListener("click", function(event){
  event.preventDefault();
  highscores = [];
  
  renderHighScores();
  
});

playAgainBtnEl.addEventListener("click", function(event){
  event.preventDefault();
  
  storeHighscores();
  secondsLeft = 100
  currentQuest = 0;
  score = 0;
  endScreenEl.setAttribute("style", "display: none")  
  timeBtnEl.setAttribute("style", "display: none")  
  startBtnEl.setAttribute("style", "display:flex")
  
});
  
function init() {
  let storedHighscores = JSON.parse(localStorage.getItem("highscores"));
  
  if (storedHighscores !== null) {
    highscores = storedHighscores;
  }
  
  renderHighScores();
}
    
init();