const finalScore = document.getElementById("finalScore");
const usernameInput = document.getElementById("username");
const saveScoreBtn = document.getElementById("saveScoreBtn");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
const mostRecentScore = localStorage.getItem("mostRecentScore");
//load mostRecentScore from localStorage
//TODO: navigate home if no previous score
finalScore.innerHTML = `${localStorage.getItem(
  "mostRecentScore"
)}<span>pts</span>`;

saveHighScore = e => {
  console.log("save high score");
  e.preventDefault();
  //add the score, sort the array, and splice off starting at position 5
  highScores.push({ score: mostRecentScore, username: usernameInput.value });
  highScores.sort((a, b) => b.score - a.score);
  highScores.splice(5);
  //Save to local storage for next time
  localStorage.setItem("highScores", JSON.stringify(highScores));

  //Go home
  window.location.assign("/");
};

usernameInput.addEventListener("keyup", () => {
  saveScoreBtn.disabled = !usernameInput.value;
});
