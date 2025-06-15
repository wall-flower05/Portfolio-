const questions = [
  {
    question: "What does HTML stand for?",
    options: [
      "Hyperlinks and Text Markup Language",
      "Hyper Text Markup Language",
      "Home Tool Markup Language",
      "Hyperlinking Text Management Language"
    ],
    answer: 1
  },
  {
    question: "Which language is used for styling web pages?",
    options: ["HTML", "Python", "CSS", "Java"],
    answer: 2
  },
  {
    question: "Which is not a JavaScript Framework?",
    options: ["React", "Angular", "Vue", "Django"],
    answer: 3
  },
  {
    question: "Which company developed JavaScript?",
    options: ["Mozilla", "Microsoft", "Netscape", "Google"],
    answer: 2
  }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
  const q = questions[currentQuestion];
  document.getElementById("question").textContent = q.question;
  const answerButtons = document.querySelectorAll("#answers button");
  answerButtons.forEach((btn, index) => {
    btn.textContent = q.options[index];
    btn.disabled = false;
    btn.classList.remove("correct", "wrong");
  });
  document.getElementById("nextBtn").style.display = "none";
}

function selectAnswer(index) {
  const q = questions[currentQuestion];
  const buttons = document.querySelectorAll("#answers button");
  buttons.forEach((btn, i) => {
    btn.disabled = true;
    if (i === q.answer) {
      btn.classList.add("correct");
    } else if (i === index) {
      btn.classList.add("wrong");
    }
  });

  if (index === q.answer) {
    score++;
  }

  document.getElementById("nextBtn").style.display = "block";
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  document.querySelector(".quiz-container").innerHTML = `
    <h2>Quiz Completed!</h2>
    <p>Your Score: ${score} / ${questions.length}</p>
    <button onclick="restartQuiz()">Restart</button>
  `;
}

function restartQuiz() {
  currentQuestion = 0;
  score = 0;
  location.reload();
}

window.onload = loadQuestion;
