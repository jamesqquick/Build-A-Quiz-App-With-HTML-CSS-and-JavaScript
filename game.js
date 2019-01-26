//GAME Elements
const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const scoreText = document.getElementById("score");
const questionCounterText = document.getElementById("questionCounter");

const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 5;

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];
//TODO: load form json file
let questions = [
  {
    question: "What is the answer to question 1?",
    choice1: "Choice Choice 1",
    choice2: "Choice Choice 2",
    choice3: "Choice Choice 3",
    choice4: "Choice Choice 4",
    answer: 1
  },
  {
    question: "What is the answer to question 2?",
    choice1: "Choice Choice 1",
    choice2: "Choice Choice 2",
    choice3: "Choice Choice 3",
    choice4: "Choice Choice 4",
    answer: 2
  },
  {
    question: "What is the answer to question 3?",
    choice1: "Choice Choice 1",
    choice2: "Choice Choice 2",
    choice3: "Choice Choice 3",
    choice4: "Choice Choice 4",
    answer: 4
  }
];

startGame = () => {
  questionCounter = 0;
  score = 0;
  availableQuestions = [...questions];
  getNewQuestion();
};

getNewQuestion = () => {
  if (availableQuestions.length === 0) {
    //save score in localstorage for end screen to use
    localStorage.setItem("mostRecentScore", score);
    //Go to the end page
    window.location.assign("/end.html");
  }
  questionCounter++;
  questionCounterText.innerText = `Question ${questionCounter}/${MAX_QUESTIONS}`;
  const questionIndex = Math.floor(Math.random() * availableQuestions.length);
  currentQuestion = availableQuestions[questionIndex];
  question.innerHTML = currentQuestion.question;

  choices.forEach(choice => {
    const number = choice.dataset["number"];
    console.log("setting choice");
    choice.innerHTML = currentQuestion["choice" + number];
  });

  //Remove question from available questions
  availableQuestions.splice(questionIndex, 1);

  //let users answer now that question is ready
  acceptingAnswers = true;
};

choices.forEach(choice => {
  choice.addEventListener("click", e => {
    //dont let the user attempt to answer until the new question is ready
    if (!acceptingAnswers) return;
    acceptingAnswers = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset["number"];

    const classToApply =
      selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

    //Add the correct/incorrect animation

    selectedChoice.parentElement.classList.add(classToApply);

    //Increase the score
    incrementScore(classToApply === "correct" ? CORRECT_BONUS : 0);

    setTimeout(() => {
      selectedChoice.parentElement.classList.remove(classToApply);
      //Load New Question
      getNewQuestion();
    }, 1000);
  });
});

incrementScore = num => {
  score += num;
  scoreText.innerHTML = "Score: " + score;
};

startGame();
