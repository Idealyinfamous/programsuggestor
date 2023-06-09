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

//using one question from your html page, create a javascript function that
//will display ONE programming language at the bottom of the page after I click
//submit

//querySelector() method to access the matched element.

document.getElementById("extrovert").onclick = function () {
  let selected = document.querySelector(
    "input[type=radio] [name=personality]:checked"
  );
  alert(selected.value);
};
//below possible way to display in bottom of page
function questionOne() {
  let questionOne = document.getElementById("extrovert");
  let display = document.querySelector("h3");
}
result.addEventListener("click", questionOne);
