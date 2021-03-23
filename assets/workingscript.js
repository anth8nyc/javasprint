var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");

var todos = [];

// Calls init to retrieve data and render it to the page on load
scoreload();
// TODO: What is the purpose of the following function?
// Called upon on page load and immediately checks for ----^
function scoreload() {
  // TODO: What is the purpose of the following line of code?
  // Converts local storage string named "todos" into an object
  var storedHS = JSON.parse(localStorage.getItem("highscores"));
  // TODO: Describe the functionality of the following `if` statement.
  // If there are no todos stored, todos variable is not updated
  if (storedHS !== null) {
    highscores = storedHS;
  }
  // TODO: Describe the purpose of the following line of code.
  // Calls previous function with updated todos object
  renderHighScores();
}

// TODO: What is the purpose of this function?
// Creates todo list on page
function renderHighScores() {
  // TODO: Describe the functionality of the following two lines of code.
  // Clears ul list within HTML before rebuilding it with local storage info from init function 
  // and updates todo count display number
  
  
    //   todoList.innerHTML = "";
    //   todoCountSpan.textContent = todos.length;
  
  // TODO: Describe the functionality of the following `for` loop.
  //
  // Displays complete button for the number of items within todo list 
  for (var i = 0; i < todos.length; i++) {
    var highsco = highscores[i];

    var li = document.createElement("li");
    li.textContent = highsco;
    li.setAttribute("data-index", i);

    var button = document.createElement("button");
    button.textContent = "Complete ✔️";

    li.appendChild(button);
    todoList.appendChild(li);
  }
}

function storeTodos() {
  // TODO: Describe the purpose of the following line of code.
  // Converts updated object into JSON string format for local storage under 'todos' name
  // Stringify and store todo object to local storage
  localStorage.setItem("highscore", JSON.stringify(highscores));
}

// TODO: Describe the purpose of the following line of code.
// Causes submit event to trigger following code
todoForm.addEventListener("timer", function(event) {
  event.preventDefault();
  var correctanswers = todoInput.value.trim();
  // TODO: Describe the functionality of the following `if` statement.
  if (todoText === "") {
    return;
  }
 // TODO: Describe the purpose of the following lines of code.
  todos.push(todoText);
  todoInput.value = "";
 
  // TODO: What will happen when the following functions are called?
  storeTodos();
  renderTodos();
});

// TODO: Describe the purpose of the following line of code.
// Tracks all lis 
todoList.addEventListener("click", function(event) {
  var element = event.target;
  // TODO: Describe the functionality of the following `if` statement.
  // Rewrites local storage and splices it from the index
  if (element.matches("button") === true) {
    var index = element.parentElement.getAttribute("data-index");
    todos.splice(index, 1);
    // TODO: What will happen when the following functions are called?
    storeTodos();
    renderTodos();
  }
});




























//////////////////////////////////////////////////////////////////////////







///// Selection of answers

var questContain = document.querySelector(".questcontain");

// Listen for any clicks within the img-container div
questContain.addEventListener("click", function(event) {
  var element = event.target;

  // Check if the clicked element was a button
  if (element.matches("button")) {
    // Get the current value of the image's data-state attribute
    var state = element.getAttribute("data-state");

    if (state === "stop") {
      // Change the data-state attribute's value
      // There are two different ways this attribute can be set
      element.dataset.state = "move";
      element.setAttribute("data-state", "move");

      // Update the image's source to the string being stored in the data-animate attribute
      element.setAttribute("src", element.dataset.animate);

    } else {
      // Change the attributes back to their non-animated values
      element.dataset.state = "stop";
      element.setAttribute("src", element.dataset.still);
    }
  }
});



////// Timer Area

setTime();

// Selects time header element by class (.time)
var timeEl = document.querySelector(".time");
// Selects element by id
var mainEl = document.getElementById("main");

var secondsLeft = 75;

function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left";

    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);

      // Calls function to create and append image
      endGame();
    }
  }, 1000);
}

// Function to create and append colorsplosion image
function endGame() {
  timeEl.textContent = " ";
  var imgEl = document.createElement("img");
  imgEl.setAttribute("src", "images/image_1.jpg");
  mainEl.appendChild(imgEl);

}







/// Has button creation and formation


var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");

var todos = [];

// Calls init to retrieve data and render it to the page on load
init();
// TODO: What is the purpose of the following function?
// Called upon on page load and immediately checks for ----^
function init() {
  // TODO: What is the purpose of the following line of code?
  // Converts local storage string named "todos" into an object
  var storedTodos = JSON.parse(localStorage.getItem("todos"));
  // TODO: Describe the functionality of the following `if` statement.
  // If there are no todos stored, todos variable is not updated
  if (storedTodos !== null) {
    todos = storedTodos;
  }
  // TODO: Describe the purpose of the following line of code.
  // Calls previous function with updated todos object
  renderTodos();
}

// TODO: What is the purpose of this function?
// Creates todo list on page
function renderTodos() {
  // TODO: Describe the functionality of the following two lines of code.
  // Clears ul list within HTML before rebuilding it with local storage info from init function 
  // and updates todo count display number
  todoList.innerHTML = "";
  todoCountSpan.textContent = todos.length;
  
  // TODO: Describe the functionality of the following `for` loop.
  //
  // Displays complete button for the number of items within todo list 
  for (var i = 0; i < todos.length; i++) {
    var todo = todos[i];

    var li = document.createElement("li");
    li.textContent = todo;
    li.setAttribute("data-index", i);

    var button = document.createElement("button");
    button.textContent = "Complete ✔️";

    li.appendChild(button);
    todoList.appendChild(li);
  }
}

function storeTodos() {
  // TODO: Describe the purpose of the following line of code.
  // Converts updated object into JSON string format for local storage under 'todos' name
  // Stringify and store todo object to local storage
  localStorage.setItem("todos", JSON.stringify(todos));
}

// TODO: Describe the purpose of the following line of code.
// Causes submit event to trigger following code
todoForm.addEventListener("submit", function(event) {
  event.preventDefault();
  var todoText = todoInput.value.trim();
  // TODO: Describe the functionality of the following `if` statement.
  if (todoText === "") {
    return;
  }
 // TODO: Describe the purpose of the following lines of code.
  todos.push(todoText);
  todoInput.value = "";
 
  // TODO: What will happen when the following functions are called?
  storeTodos();
  renderTodos();
});

// TODO: Describe the purpose of the following line of code.
// Tracks all lis 
todoList.addEventListener("click", function(event) {
  var element = event.target;
  // TODO: Describe the functionality of the following `if` statement.
  // Rewrites local storage and splices it from the index
  if (element.matches("button") === true) {
    var index = element.parentElement.getAttribute("data-index");
    todos.splice(index, 1);
    // TODO: What will happen when the following functions are called?
    storeTodos();
    renderTodos();
  }
});

