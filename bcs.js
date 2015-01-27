function computerChoice() {
  var choice = ["Bulbasaur", "Charmander", "Squirtle"];
  var randoChoice = Math.floor(Math.random()*choice.length);
  return choice[randoChoice];
}

var playerPick;
var computerPick;

playerPick = window.location.search.substr(1);
computerPick = computerChoice();

var result;
if (playerPick === "Bulbasaur" && computerPick === "Bulbasaur") {
  result = "Tie";
}
if (playerPick === "Bulbasaur" && computerPick === "Charmander") {
  result = "Computer Wins";
}
if (playerPick === "Bulbasaur" && computerPick === "Squirtle") {
  result = "Player Wins";
}

if (playerPick === "Charmander" && computerPick === "Bulbasaur") {
  result = "Player Wins";
}
if (playerPick === "Charmander" && computerPick === "Charmander") {
  result = "Tie";
}
if (playerPick === "Charmander" && computerPick === "Squirtle") {
  result = "Computer Wins";
}

if (playerPick === "Squirtle" && computerPick === "Bulbasaur") {
  result = "Computer Wins";
}
if (playerPick === "Squirtle" && computerPick === "Charmander") {
  result = "Player Wins";
}
if (playerPick === "Squirtle" && computerPick === "Squirtle") {
  result = "Tie";
}

console.log(playerPick); 
console.log(computerPick);
console. log(result);

window.onload = function(){
  document.getElementById("Player_choice").innerHTML = playerPick;
  document.getElementById("Computer_choice").innerHTML = computerPick; 
  document.getElementById("BCS_result").innerHTML = result;
};




var score=[];
function point(){
  score++;
}
function getScore(){
  return score;
//https://answers.yahoo.com/question/index?qid=20101208112148AAvahPD
}

