// function likeEggs() {
//   let likeEggs = prompt("How many eggs do you eat in a day?");
//   let p = document.querySelector("p");
//   if (likeEggs >= 5) {
//     p.innerHTML = "😍 <span><p>I love eggs! </p></span>";
//   } else {
//     p.innerHTML = "😏 <span><p>Eggs are amazing! </p></span>";
//   }
// }
// let likeEggsButton = document.querySelector("button");
// likeEggsButton.addEventListener("click", likeEggs);
// ~The above code is a function to change the header tag ( which is a p tag) into
//~ different title changes
const myQuestion = [
  {
    questionOne: "",
  },
];
function generateQuiz(
  questions,
  quizContainer,
  resultsContainer,
  submitButton
) {
  function showQuestions(questions, quizContainer) {
    //
  }
  function showResults(questions, quizContainer, resultsContainer) {}
  showQuestions(questions, quizContainer);
  submitButton.onclick = function () {
    showResults(questions, quizContainer, resultsContainer);
  };
}
