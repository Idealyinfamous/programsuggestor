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

// const python = ["extrovert", "salty", "anywhere","hedgehog"];
// const javascript = ["introvert", "sweet", "firm", "cat"];
// const golang = ["ambivert", "both", "soft", "dog"];

function resultShown() {
  resultShown = prompt("what language did you like?");
  let h3 = document.querySelector("h3");
  if (resultShown >= 5) {
    h3.innerHTML = " YAY PYTHON!";
  } else {
    h3.innerHTML = " YAY GO!";
  }
}
let resultShownButton = document.querySelector("button");
resultShown.addEventlistener("click", resultShown);
