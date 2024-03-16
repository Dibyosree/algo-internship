const quizData = [
  {
      question: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Rome"],
      correctAnswer: "Paris",
  },
  {
      question: "Which planet is known as the 'Red Planet'?",
      options: ["Mars", "Jupiter", "Venus", "Saturn"],
      correctAnswer: "Mars",
  },
  {
      question: "Who wrote 'To Kill a Mockingbird'?",
      options: ["Harper Lee", "J.K. Rowling", "Ernest Hemingway", "George Orwell"],
      correctAnswer: "Harper Lee",
  },
  {
      question: "What is the largest ocean on Earth?",
      options: ["Atlantic Ocean", "Indian Ocean", "Southern Ocean", "Pacific Ocean"],
      correctAnswer: "Pacific Ocean",
  },
  {
      question: "Which country is known as the 'Land of the Rising Sun'?",
      options: ["China", "South Korea", "Japan", "Thailand"],
      correctAnswer: "Japan",
  },
  {
      question: "Who painted the Mona Lisa?",
      options: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Claude Monet"],
      correctAnswer: "Leonardo da Vinci",
  },






  
  {
      question: "What is the currency of Japan?",
      options: ["Yuan", "Won", "Yen", "Ringgit"],
      correctAnswer: "Yen",
  },
  {
      question: "What is the largest mammal in the world?",
      options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
      correctAnswer: "Blue Whale",
  },
  {
      question: "Who developed the theory of relativity?",
      options: ["Isaac Newton", "Galileo Galilei", "Albert Einstein", "Stephen Hawking"],
      correctAnswer: "Albert Einstein",
  },
  {
      question: "What is the capital of Australia?",
      options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
      correctAnswer: "Canberra",
  },
];

let currentQuestionIndex = 0;
let userScore = 0;

const questionElement = document.getElementById("question");
const optionsContainer = document.getElementById("options-container");
const resultContainer = document.getElementById("result-container");
const scoreElement = document.getElementById("score");

function loadQuestion() {
    const currentQuizData = quizData[currentQuestionIndex];
    questionElement.textContent = currentQuizData.question;

    optionsContainer.innerHTML = "";
    currentQuizData.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.classList.add("btn");
        button.addEventListener("click", () => checkAnswer(option));
        optionsContainer.appendChild(button);
    });
}

function checkAnswer(selectedOption) {
    const currentQuizData = quizData[currentQuestionIndex];
    if (selectedOption === currentQuizData.correctAnswer) {
        userScore++;
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    questionElement.style.display = "none";
    optionsContainer.style.display = "none";
    resultContainer.style.display = "block";
    
    scoreElement.textContent = `Your Score: ${userScore}/${quizData.length}`;

    // Show the replay button
    const replayButton = document.createElement('button');
    replayButton.className = 'btn';
    replayButton.innerText = 'Replay';
    replayButton.onclick = replayQuiz;

    // Clear the result container before appending replay button
    resultContainer.innerHTML = '';
    resultContainer.appendChild(scoreElement);  // Display the score
    resultContainer.appendChild(replayButton);
}

function replayQuiz() {
    currentQuestionIndex = 0;
    userScore = 0;
    questionElement.style.display = "block";
    optionsContainer.style.display = "flex";
    resultContainer.style.display = "none";
    loadQuestion();
}

// Initial load
loadQuestion();
