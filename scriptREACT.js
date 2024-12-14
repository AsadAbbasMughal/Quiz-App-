const questions = [
    {
      question: "What is the purpose of React?",
      options: ["To build user interfaces", "To manage databases", "To handle server-side logic", "To style webpages"],
      answer: "To build user interfaces",
    },
    {
      question: "What is JSX in React?",
      options: ["JavaScript XML", "JavaScript Object", "JavaScript Extension", "None of the above"],
      answer: "JavaScript XML",
    },
    {
      question: "Which of the following is used to create a new React component?",
      options: ["function", "class", "React.createElement()", "Both function and class"],
      answer: "Both function and class",
    },
    {
      question: "What is the purpose of `useState()` hook in React?",
      options: ["To manage state in a function component", "To manage side-effects", "To define component lifecycle", "None of the above"],
      answer: "To manage state in a function component",
    },
    {
      question: "Which of the following is used to pass data from a parent component to a child component in React?",
      options: ["props", "state", "context", "None of the above"],
      answer: "props",
    },
    {
      question: "Which React method is called when a component is mounted to the DOM?",
      options: ["componentDidMount", "useEffect", "componentWillMount", "render"],
      answer: "componentDidMount",
    },
    {
      question: "Which of the following hooks are available in React functional components?",
      options: ["useState", "useEffect", "useContext", "All of the above"],
      answer: "All of the above",
    },
    {
      question: "What is the purpose of `key` prop in React?",
      options: ["To uniquely identify elements in a list", "To set the CSS class of an element", "To define the order of elements", "None of the above"],
      answer: "To uniquely identify elements in a list",
    },
    {
      question: "What does `ReactDOM.render()` do in React?",
      options: ["It renders a React component to the DOM", "It compiles JSX", "It binds event handlers", "None of the above"],
      answer: "It renders a React component to the DOM",
    },
    {
      question: "How do you create a class component in React?",
      options: ["class MyComponent extends React.Component", "function MyComponent()", "React.Component()", "class MyComponent()"],
      answer: "class MyComponent extends React.Component",
    },
    {
      question: "What is `useEffect()` used for in React?",
      options: ["To perform side effects in function components", "To manage state in function components", "To bind event handlers", "To optimize rendering"],
      answer: "To perform side effects in function components",
    },
    {
      question: "Which of the following lifecycle methods is called before a component is removed from the DOM?",
      options: ["componentWillUnmount", "componentDidMount", "shouldComponentUpdate", "render"],
      answer: "componentWillUnmount",
    },
    {
      question: "What is the purpose of `React.Fragment`?",
      options: ["To group multiple elements without adding an extra node to the DOM", "To create a new React component", "To manage state", "None of the above"],
      answer: "To group multiple elements without adding an extra node to the DOM",
    },
    {
      question: "What is the purpose of the `context` API in React?",
      options: ["To manage global state across the application", "To handle form inputs", "To make components responsive", "None of the above"],
      answer: "To manage global state across the application",
    },
    {
      question: "What does `setState()` do in React?",
      options: ["Updates the state of a component", "Renders the component", "Updates the component's DOM", "All of the above"],
      answer: "Updates the state of a component",
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