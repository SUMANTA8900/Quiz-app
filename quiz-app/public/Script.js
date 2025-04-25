
const quizData = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    answer: "Paris",
  },
  {
    question: "What is the largest planet in our solar system?",
    options: ["Mars", "Saturn", "Jupiter", "Neptune"],
    answer: "Jupiter",
  },
  {
    question: "Which country won the FIFA World Cup in 2018?",
    options: ["Brazil", "Germany", "France", "Argentina"],
    answer: "France",
  },
  {
    question: "What is the tallest mountain in the world?",
    options: ["Mount Everest", "K2", "Kangchenjunga", "Makalu"],
    answer: "Mount Everest",
  },
  {
    question: "Which is the largest ocean on Earth?",
    options: [
      "Pacific Ocean",
      "Indian Ocean",
      "Atlantic Ocean",
      "Arctic Ocean",
    ],
    answer: "Pacific Ocean",
  },
  {
    question: "What is the chemical symbol for gold?",
    options: ["Au", "Ag", "Cu", "Fe"],
    answer: "Au",
  },
  {
    question: "Who painted the Mona Lisa?",
    options: [
      "Pablo Picasso",
      "Vincent van Gogh",
      "Leonardo da Vinci",
      "Michelangelo",
    ],
    answer: "Leonardo da Vinci",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Mars", "Venus", "Mercury", "Uranus"],
    answer: "Mars",
  },
  {
    question: "What is the largest species of shark?",
    options: [
      "Great White Shark",
      "Whale Shark",
      "Tiger Shark",
      "Hammerhead Shark",
    ],
    answer: "Whale Shark",
  },
  {
    question: "Which animal is known as the King of the Jungle?",
    options: ["Lion", "Tiger", "Elephant", "Giraffe"],
    answer: "Lion",
  },
  {
    question: "What is the capital of Japan?",
    options: ["Tokyo", "Kyoto", "Osaka", "Nagoya"],
    answer: "Tokyo",
  },
  {
    question: "Which element has the atomic number 1?",
    options: ["Helium", "Oxygen", "Hydrogen", "Carbon"],
    answer: "Hydrogen",
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    options: [
      "Charles Dickens",
      "William Shakespeare",
      "Mark Twain",
      "Leo Tolstoy",
    ],
    answer: "William Shakespeare",
  },
  {
    question: "What is the smallest country in the world?",
    options: ["Monaco", "San Marino", "Liechtenstein", "Vatican City"],
    answer: "Vatican City",
  },
  {
    question: "Which planet is known for its rings?",
    options: ["Venus", "Saturn", "Jupiter", "Neptune"],
    answer: "Saturn",
  },
  {
    question: "Who discovered penicillin?",
    options: [
      "Marie Curie",
      "Alexander Fleming",
      "Louis Pasteur",
      "Isaac Newton",
    ],
    answer: "Alexander Fleming",
  },
  {
    question: "Which continent is the Sahara Desert located on?",
    options: ["Asia", "Africa", "Australia", "Europe"],
    answer: "Africa",
  },
  {
    question: "What is the main ingredient in guacamole?",
    options: ["Tomato", "Avocado", "Onion", "Pepper"],
    answer: "Avocado",
  },
  {
    question: "Which country is known as the Land of the Rising Sun?",
    options: ["China", "South Korea", "Thailand", "Japan"],
    answer: "Japan",
  },
  
    {
      question: "What is the capital of India?",
      options: ["New Delhi", "Mumbai", "Kolkata", "Chennai"],
      answer: "New Delhi",
    },
    {
      question: "Which is the smallest planet in our solar system?",
      options: ["Mercury", "Mars", "Venus", "Earth"],
      answer: "Mercury",
    },
    {
      question: "What is the national animal of India?",
      options: ["Tiger", "Elephant", "Peacock", "Lion"],
      answer: "Tiger",
    },
    {
      question: "Which is the longest river in the world?",
      options: ["Nile", "Amazon", "Yangtze", "Mississippi"],
      answer: "Nile",
    },
    {
      question: "What is the national flower of Japan?",
      options: ["Cherry Blossom", "Rose", "Lotus", "Tulip"],
      answer: "Cherry Blossom",
    },
    {
      question: "What is the chemical symbol for water?",
      options: ["H2O", "O2", "CO2", "NaCl"],
      answer: "H2O",
    },
    {
      question: "Who invented the telephone?",
      options: ["Alexander Graham Bell", "Thomas Edison", "Nikola Tesla", "James Watt"],
      answer: "Alexander Graham Bell",
    },
    {
      question: "Which is the largest continent by area?",
      options: ["Asia", "Africa", "Europe", "North America"],
      answer: "Asia",
    },
    {
      question: "What is the national currency of the United States?",
      options: ["Dollar", "Euro", "Pound", "Yen"],
      answer: "Dollar",
    },
    {
      question: "Which is the tallest animal in the world?",
      options: ["Giraffe", "Elephant", "Kangaroo", "Camel"],
      answer: "Giraffe",
    },
    {
      question: "What is the capital of Australia?",
      options: ["Canberra", "Sydney", "Melbourne", "Brisbane"],
      answer: "Canberra",
    },
    {
      question: "Which is the largest desert in the world?",
      options: ["Sahara", "Gobi", "Kalahari", "Arctic"],
      answer: "Sahara",
    },
    {
      question: "Who wrote the national anthem of India?",
      options: ["Rabindranath Tagore", "Bankim Chandra Chatterjee", "Sarojini Naidu", "Subhas Chandra Bose"],
      answer: "Rabindranath Tagore",
    },
    {
      question: "Which is the largest mammal in the world?",
      options: ["Blue Whale", "Elephant", "Giraffe", "Hippopotamus"],
      answer: "Blue Whale",
    },
    {
      question: "What is the boiling point of water in Celsius?",
      options: ["100°C", "90°C", "80°C", "120°C"],
      answer: "100°C",
    },
    {
      question: "Who was the first man to step on the moon?",
      options: ["Neil Armstrong", "Buzz Aldrin", "Yuri Gagarin", "Michael Collins"],
      answer: "Neil Armstrong",
    },
    {
      question: "Which is the largest island in the world?",
      options: ["Greenland", "Australia", "Madagascar", "Iceland"],
      answer: "Greenland",
    },
    {
      question: "What is the national bird of the United States?",
      options: ["Bald Eagle", "Peacock", "Sparrow", "Robin"],
      answer: "Bald Eagle",
    },
    {
      question: "Which is the fastest land animal?",
      options: ["Cheetah", "Lion", "Horse", "Leopard"],
      answer: "Cheetah",
    },
    // Add these questions to the quizData array in Script.js
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Mars", "Venus", "Jupiter", "Saturn"],
    answer: "Mars",
  },
  {
    question: "Who painted the Mona Lisa?",
    options: ["Leonardo da Vinci", "Vincent van Gogh", "Pablo Picasso", "Claude Monet"],
    answer: "Leonardo da Vinci",
  },
  {
    question: "What is the largest ocean on Earth?",
    options: ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean"],
    answer: "Pacific Ocean",
  },
  {
    question: "Who is known as the Father of Computers?",
    options: ["Charles Babbage", "Alan Turing", "John von Neumann", "Ada Lovelace"],
    answer: "Charles Babbage",
  },
  {
    question: "What is the hardest natural substance on Earth?",
    options: ["Diamond", "Gold", "Iron", "Platinum"],
    answer: "Diamond",
  },
  {
    question: "Which country is known as the Land of the Rising Sun?",
    options: ["Japan", "China", "South Korea", "Thailand"],
    answer: "Japan",
  },
  {
    question: "What is the smallest bone in the human body?",
    options: ["Stapes", "Femur", "Tibia", "Humerus"],
    answer: "Stapes",
  },
  {
    question: "Which gas is most abundant in Earth's atmosphere?",
    options: ["Nitrogen", "Oxygen", "Carbon Dioxide", "Hydrogen"],
    answer: "Nitrogen",
  },
  {
    question: "Who discovered penicillin?",
    options: ["Alexander Fleming", "Marie Curie", "Louis Pasteur", "Gregor Mendel"],
    answer: "Alexander Fleming",
  },
  {
    question: "What is the capital of Canada?",
    options: ["Ottawa", "Toronto", "Vancouver", "Montreal"],
    answer: "Ottawa",
  },
  {
    question: "Which element has the chemical symbol 'O'?",
    options: ["Oxygen", "Gold", "Silver", "Hydrogen"],
    answer: "Oxygen",
  },
  {
    question: "What is the largest planet in our solar system?",
    options: ["Jupiter", "Saturn", "Earth", "Mars"],
    answer: "Jupiter",
  },
  {
    question: "Who wrote the play 'Romeo and Juliet'?",
    options: ["William Shakespeare", "Charles Dickens", "Mark Twain", "Jane Austen"],
    answer: "William Shakespeare",
  },
  {
    question: "What is the main ingredient in guacamole?",
    options: ["Avocado", "Tomato", "Onion", "Pepper"],
    answer: "Avocado",
  },
  {
    question: "Which planet is known for its rings?",
    options: ["Saturn", "Jupiter", "Uranus", "Neptune"],
    answer: "Saturn",
  },
  {
    question: "What is the largest organ in the human body?",
    options: ["Skin", "Liver", "Heart", "Lungs"],
    answer: "Skin",
  }
    ];
 

// Handle Signup
document.getElementById("signupForm")?.addEventListener("submit", function (e) {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Save user data to localStorage
  localStorage.setItem("user", JSON.stringify({ username, password }));
  alert("Signup successful! Please login.");
  window.location.href = "index.html"; // Redirect to login page
});

// Handle Login
document.getElementById("loginForm")?.addEventListener("submit", function (e) {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Retrieve user data from localStorage
  const storedUser = JSON.parse(localStorage.getItem("user"));

  if (storedUser && storedUser.username === username && storedUser.password === password) {
    alert("Login successful!");
    window.location.href = "quiz.html"; // Redirect to the quiz page
  } else {
    alert("Invalid username or password.");
  }
});

const quizContainer = document.getElementById("quiz");
const resultContainer = document.getElementById("result");
const submitButton = document.getElementById("submit");
const retryButton = document.getElementById("retry");
const showAnswerButton = document.getElementById("showAnswer");
const progressBar = document.getElementById("progressBar");

let currentQuestion = 0;
let score = 0;
let incorrectAnswers = [];




const backButton = document.getElementById("back");
const skipButton = document.getElementById("skip");

// Display the current question
function displayQuestion() {
  const questionData = quizData[currentQuestion];

  const questionElement = document.createElement("div");
  questionElement.className = "question";
  questionElement.innerHTML = `${currentQuestion + 1}. ${questionData.question}`;

  const optionsElement = document.createElement("div");
  optionsElement.className = "options";

  const shuffledOptions = [...questionData.options];
  shuffleArray(shuffledOptions);

  for (let i = 0; i < shuffledOptions.length; i++) {
    const option = document.createElement("label");
    option.className = "option";

    const radio = document.createElement("input");
    radio.type = "radio";
    radio.name = "quiz";
    radio.value = shuffledOptions[i];

    const optionText = document.createTextNode(shuffledOptions[i]);

    option.appendChild(radio);
    option.appendChild(optionText);
    optionsElement.appendChild(option);
  }

  quizContainer.innerHTML = "";
  quizContainer.appendChild(questionElement);
  quizContainer.appendChild(optionsElement);

  // Update the progress bar
  updateProgressBar();

  // Disable Back button if on the first question
  backButton.disabled = currentQuestion === 0;
}

// Skip to the next question
function skipQuestion() {
  if (currentQuestion < quizData.length - 1) {
    currentQuestion++;
    displayQuestion();
  } else {
    alert("This is the last question. You cannot skip further.");
  }
}

// Go back to the previous question
function backQuestion() {
  if (currentQuestion > 0) {
    currentQuestion--;
    displayQuestion();
  } else {
    alert("This is the first question. You cannot go back further.");
  }
}

// Event listeners for Skip and Back buttons
skipButton.addEventListener("click", skipQuestion);
backButton.addEventListener("click", backQuestion);

// Event listeners for Submit, Retry, and Show Answer buttons
submitButton.addEventListener("click", checkAnswer);
retryButton.addEventListener("click", retryQuiz);
showAnswerButton.addEventListener("click", showAnswer);

// Start the quiz
displayQuestion();
// Shuffle the options for randomness
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Display the current question
function displayQuestion() {
  const questionData = quizData[currentQuestion];

  const questionElement = document.createElement("div");
  questionElement.className = "question";
  questionElement.innerHTML = `${currentQuestion + 1}. ${questionData.question}`;

  const optionsElement = document.createElement("div");
  optionsElement.className = "options";

  const shuffledOptions = [...questionData.options];
  shuffleArray(shuffledOptions);

  for (let i = 0; i < shuffledOptions.length; i++) {
    const option = document.createElement("label");
    option.className = "option";

    const radio = document.createElement("input");
    radio.type = "radio";
    radio.name = "quiz";
    radio.value = shuffledOptions[i];

    const optionText = document.createTextNode(shuffledOptions[i]);

    option.appendChild(radio);
    option.appendChild(optionText);
    optionsElement.appendChild(option);
  }

  quizContainer.innerHTML = "";
  quizContainer.appendChild(questionElement);
  quizContainer.appendChild(optionsElement);

  // Update the progress bar
  updateProgressBar();
}

// Update the progress bar
function updateProgressBar() {
  const progress = ((currentQuestion + 1) / quizData.length) * 100;
  progressBar.style.width = `${progress}%`; // Update the width of the progress bar
}

// Check the selected answer
function checkAnswer() {
  const selectedOption = document.querySelector('input[name="quiz"]:checked');
  if (selectedOption) {
    const answer = selectedOption.value;
    if (answer === quizData[currentQuestion].answer) {
      score++;
    } else {
      incorrectAnswers.push({
        question: quizData[currentQuestion].question,
        incorrectAnswer: answer,
        correctAnswer: quizData[currentQuestion].answer,
      });
    }
    currentQuestion++;
    selectedOption.checked = false;
    if (currentQuestion < quizData.length) {
      displayQuestion();
    } else {
      displayResult();
    }
  }
}

// Display the quiz result
function displayResult() {
  quizContainer.style.display = "none";
  submitButton.style.display = "none";
  retryButton.style.display = "inline-block";
  showAnswerButton.style.display = "none";

  let incorrectAnswersHtml = "";
  if (incorrectAnswers.length > 0) {
    incorrectAnswersHtml = "<h3>Incorrect Answers:</h3>";
    for (let i = 0; i < incorrectAnswers.length; i++) {
      incorrectAnswersHtml += `
        <p>
          <strong>Question:</strong> ${incorrectAnswers[i].question}<br>
          <strong>Your Answer:</strong> ${incorrectAnswers[i].incorrectAnswer}<br>
          <strong>Correct Answer:</strong> ${incorrectAnswers[i].correctAnswer}
        </p>
      `;
    }
  } else {
    incorrectAnswersHtml = "<p>Great job! You got all the answers correct! 🎉</p>";
  }

  resultContainer.innerHTML = `
    <h2>Quiz Completed!</h2>
    <p>You scored ${score} out of ${quizData.length}.</p>
    ${incorrectAnswersHtml}
  `;
}

// Retry the quiz
function retryQuiz() {
  currentQuestion = 0;
  score = 0;
  incorrectAnswers = [];
  quizContainer.style.display = "block";
  submitButton.style.display = "inline-block";
  retryButton.style.display = "none";
  showAnswerButton.style.display = "none";
  resultContainer.innerHTML = "";

  // Reset progress bar
  progressBar.style.width = "0%";

  displayQuestion();
}

// Show the correct answers for incorrect questions
function showAnswer() {
  quizContainer.style.display = "none";
  submitButton.style.display = "none";
  retryButton.style.display = "inline-block";
  showAnswerButton.style.display = "none";

  let incorrectAnswersHtml = "";
  for (let i = 0; i < incorrectAnswers.length; i++) {
    incorrectAnswersHtml += `
      <p>
        <strong>Question:</strong> ${incorrectAnswers[i].question}<br>
        <strong>Your Answer:</strong> ${incorrectAnswers[i].incorrectAnswer}<br>
        <strong>Correct Answer:</strong> ${incorrectAnswers[i].correctAnswer}
      </p>
    `;
  }

  resultContainer.innerHTML = `
    <p>You scored ${score} out of ${quizData.length}!</p>
    <p>Incorrect Answers:</p>
    ${incorrectAnswersHtml}
  `;
}

// Event listeners
submitButton.addEventListener("click", checkAnswer);
retryButton.addEventListener("click", retryQuiz);
showAnswerButton.addEventListener("click", showAnswer);

// Start the quiz
displayQuestion();