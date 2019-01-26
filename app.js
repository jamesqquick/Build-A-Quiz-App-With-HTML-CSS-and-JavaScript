//Simulated Navigation
navigateTo = pageName => {
  pages.forEach(page => {
    if (page.id === pageName) {
      page.classList.remove("hidden");
    } else {
      page.classList.add("hidden");
    }
  });
};

//saves score if appropriate in array of top 5 scores
// saveHighScore = () => {
//make a copy of existing scores
// const scoresCopy = [...highScores];

// //if there is not score yet, then just add the new one and move on
// if (highScores.length < 1) {
//   highScores.push(score);
// } else {
//   //iterate through existing scores and insert score where appropriate
//   for (let i = 0; i < scoresCopy.length; i++) {
//     const savedScore = scoresCopy[i];

//     if (score > savedScore) {
//       highScores.splice(i, 0, score);
//       //if we moved beyond the max number of scores, then remove the last one
//       if (highScores.length > 5) {
//         highScores.splice(highScores.length - 1, 1);
//       }
//       //we are done
//       break;
//     }
//     //if the score was not greater than any saved score but we hve an open slot, add it
//     else if (i === scoresCopy.length - 1 && highScores.length < 5) {
//       highScores.push(score);
//     }
//   }
// }

//Save to local storage for next time
// localStorage.setItem("highScores", JSON.stringify(highScores));
// };
