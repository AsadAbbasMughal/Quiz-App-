const questions = [
  {
    question: "What does the 'img' tag in HTML do?",
    options: ["Displays a text", "Displays an image", "Creates a link", "Defines a paragraph"],
    answer: "Displays an image",
  },
  {
    question: "Which HTML element is used to create a link?",
    options: ["<a>", "<link>", "<href>", "<url>"],
    answer: "<a>",
  },
  {
    question: "What is the default value of the 'position' property in CSS?",
    options: ["relative", "absolute", "static", "fixed"],
    answer: "static",
  },
  {
    question: "Which CSS property is used to change the background color of an element?",
    options: ["color", "background", "bg-color", "bg"],
    answer: "background",
  },
  {
    question: "What is the correct HTML element to define important text?",
    options: ["<strong>", "<b>", "<em>", "<i>"],
    answer: "<strong>",
  },
  {
    question: "How do you create a comment in CSS?",
    options: ["// This is a comment", "<!-- This is a comment -->", "/* This is a comment */", "// This is a comment in CSS"],
    answer: "/* This is a comment */",
  },
  {
    question: "Which HTML attribute is used to define the style of an element?",
    options: ["style", "class", "id", "type"],
    answer: "style",
  },
  {
    question: "Which of the following is used to center text using CSS?",
    options: ["text-align: center;", "center-align: true;", "align: center;", "text-center: true;"],
    answer: "text-align: center;",
  },
  {
    question: "Which CSS property is used to set the space between elements?",
    options: ["margin", "padding", "spacing", "border"],
    answer: "margin",
  },
  {
    question: "Which of the following is the correct CSS syntax to make a text bold?",
    options: ["font-weight: bold;", "font-style: bold;", "text-style: bold;", "text-weight: bold;"],
    answer: "font-weight: bold;",
  },
  {
    question: "Which HTML tag is used to define an unordered list?",
    options: ["<ul>", "<ol>", "<li>", "<list>"],
    answer: "<ul>",
  },
  {
    question: "How do you link an external CSS file to an HTML document?",
    options: ['<css href="style.css">', '<link rel="stylesheet" type="text/css" href="style.css">', '<style src="style.css">', '<link type="stylesheet" src="style.css">'],
    answer: '<link rel="stylesheet" type="text/css" href="style.css">',
  },
  {
    question: "What is the purpose of the 'z-index' property in CSS?",
    options: ["To control the stacking order of elements", "To set the zoom level", "To define the width of an element", "To define the height of an element"],
    answer: "To control the stacking order of elements",
  },
  {
    question: "Which HTML tag is used to create a form input field?",
    options: ["<input>", "<form>", "<textarea>", "<button>"],
    answer: "<input>",
  },
  {
    question: "Which property is used to change the font of an element in CSS?",
    options: ["font-family", "font-style", "font-size", "font-color"],
    answer: "font-family",
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