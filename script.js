//question one
function checkButton() {
  var getSelectedValue = document.querySelector(
    'input[name="taste"]:checked'
  ).value;

  if (getSelectedValue == "salty") {
    document.getElementById("disp").innerHTML = "Python I choose you!";
  } else if (getSelectedValue == "sweet") {
    document.getElementById("disp").innerHTML = "Javascript I choose you!";
  } else if (getSelectedValue == "both") {
    document.getElementById("disp").innerHTML = "Golang....sure!";
  }
}
