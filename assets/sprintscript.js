
// let mainEl = document.getElementById("main");

// // Create Start Button function

// startfunction()

// function startfunction(){






// Replicate function with rules explanation or build into previous function

// Begin Timer function

 
let startBtnEl = document.querySelector("#startBtn");
let timerEl = document.querySelector(".timer");
let mainEl = document.querySelector(".main");
let questContainEl = document.querySelector(".questContain")
let answerBtnEl = document.querySelector(".answerBtn")
let questEl = document.querySelector(".question")

startBtnEl.addEventListener("click", function(){
  
  clearInterval(setTime);
  let secondsLeft = 10;
  setTime();
  removeStartBtn();
  renderQuestions();
  
  for (var i = 0; i < answerBtnEl.length; i++) {
    answerBtnEl[i].setAttribute("style", "display:flex");
  }
  
  function setTime() {
    var timerInterval = setInterval(function() {
      timerEl.setAttribute("style", "display: flex")
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

});


function renderQuestions(){

  questContainEl.setAttribute("style", "display: flex")

}


function endGame() {


}


// Begin Quiz UI function 

    // Each question should track the correct answer choice to the score 
    // and subtract time from the timer for incorrect answers

// Push score number to large display when timer hits zero to display page 
// include form in display page for initials input

// use local storage to take information for display page to log high score



