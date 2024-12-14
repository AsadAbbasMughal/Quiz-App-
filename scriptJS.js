const questions = [
    {
      question: "What is the correct way to declare a variable in JavaScript?",
      options: ["var x;", "let x;", "const x;", "All of the above"],
      answer: "All of the above",
    },
    {
      question: "What will `console.log(typeof null);` output?",
      options: ["object", "null", "undefined", "error"],
      answer: "object",
    },
    {
      question: "Which method is used to add a new element to the beginning of an array in JavaScript?",
      options: ["push()", "shift()", "unshift()", "pop()"],
      answer: "unshift()",
    },
    {
      question: "Which of the following is not a valid data type in JavaScript?",
      options: ["undefined", "boolean", "integer", "symbol"],
      answer: "integer",
    },
    {
      question: "Which of the following methods can be used to sort an array in JavaScript?",
      options: ["sort()", "order()", "arrange()", "shuffler()"],
      answer: "sort()",
    },
    {
      question: "What does the `map()` method do in JavaScript?",
      options: ["Loops through an array", "Creates a new array based on the existing array", "Filters an array", "None of the above"],
      answer: "Creates a new array based on the existing array",
    },
    {
      question: "Which of the following is used to define a function in JavaScript?",
      options: ["function()", "def()", "func()", "method()"],
      answer: "function()",
    },
    {
      question: "What will the following code output? `console.log(2 + '2');`",
      options: ["4", "'22'", "NaN", "undefined"],
      answer: "'22'",
    },
    {
      question: "What does `JSON.parse()` do in JavaScript?",
      options: ["Converts a JavaScript object to a JSON string", "Parses a JSON string into a JavaScript object", "Converts an array to a string", "None of the above"],
      answer: "Parses a JSON string into a JavaScript object",
    },
    {
      question: "What is the purpose of the `this` keyword in JavaScript?",
      options: ["Refers to the current function", "Refers to the current object", "Refers to the global object", "All of the above"],
      answer: "Refers to the current object",
    },
    {
      question: "Which of the following is used to stop a loop in JavaScript?",
      options: ["stop", "break", "exit", "continue"],
      answer: "break",
    },
    {
      question: "Which function is used to remove the last element of an array in JavaScript?",
      options: ["pop()", "shift()", "unshift()", "push()"],
      answer: "pop()",
    },
    {
      question: "What is the purpose of the `eval()` function in JavaScript?",
      options: ["Evaluates a string as JavaScript code", "Creates a new array", "Sets a timeout", "None of the above"],
      answer: "Evaluates a string as JavaScript code",
    },
    {
      question: "What is the default value of `this` in a regular function in JavaScript?",
      options: ["Window", "null", "undefined", "Object"],
      answer: "Window",
    },
    {
      question: "What is the correct way to add an event listener in JavaScript?",
      options: ["element.on('click', function)", "element.addEventListener('click', function)", "element.addEvent('click', function)", "element.add('click', function)"],
      answer: "element.addEventListener('click', function)",
    },
  ];
  
  
  // DOM Elements
  const quizContainer = document.getElementById("quiz-container");
  const resultContainer = document.getElementById("result-container");
  const questionText = document.querySelector(".question-text");
  const options = document.querySelectorAll(".option");
  const nextBtn = document.getElementById("next-btn");
  const totalQuestionsElement = document.getElementById("total-questions");
  const correctAnswersElement = document.getElementById("correct-answers");
  const percentageElement = document.getElementById("percentage");
  
  // Quiz State
  let currentQuestionIndex = 0;
  let correctAnswers = 0;
  
  // Load Question Function
  function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    
    // Display question number along with the question text
    questionText.textContent = ` ${currentQuestionIndex + 1}: ${currentQuestion.question}`;
  
    document.querySelectorAll("input[name='option']").forEach(input => {
      input.checked = false;
    });
    
    options.forEach((option, index) => {
      option.querySelector("label").textContent = currentQuestion.options[index];
      option.querySelector("input").value = currentQuestion.options[index];
    });
  }
  
  // Check Answer and Move to Next Question
  function checkAnswer() {
    const selectedOption = document.querySelector("input[name='option']:checked");
    if (selectedOption) {
      if (selectedOption.value === questions[currentQuestionIndex].answer) {
        correctAnswers++;
      }
      currentQuestionIndex++;
  
      if (currentQuestionIndex < questions.length) {
        loadQuestion();
      } else {
        showResult();
      }
    } else {
      alert("Please select an answer before proceeding.");
    }
  }
  
  // Show Result Function
  function showResult() {
    quizContainer.classList.add("d-none");
    resultContainer.classList.remove("d-none");
  
    totalQuestionsElement.textContent = `Total Questions: ${questions.length}`;
    correctAnswersElement.textContent = `Correct Answers: ${correctAnswers}`;
    const percentage = ((correctAnswers / questions.length) * 100).toFixed(2);
    percentageElement.textContent = `Your Percentage: ${percentage}%`;
  }
  
  // Event Listener
  nextBtn.addEventListener("click", checkAnswer);
  
  // Load First Question
  loadQuestion();
  
  window.onload = function() {
    // Get the user's name from localStorage
    let userName = localStorage.getItem("name");

    // If the userName exists, update the welcome message
    if (userName) {
      document.getElementById("welcomeMessage").innerText = "Welcome, " + userName + "!";
    } else {
      document.getElementById("welcomeMessage").innerText = "Welcome, Guest!";
    }
  };