function computerChoice() {
  var choice = ["Bulbasaur", "Charmander", "Squirtle"];
  var randoChoice = Math.floor(Math.random()*choice.length);
  return choice[randoChoice];
}

var playerPick;
var computerPick;
var winnerPic;

var playerScore = window.name.playerScore;
var computerScore = window.name.computerScore;

if (playerScore === undefined) {
  playerScore = 0;
}
if (computerScore === undefined) {
  computerScore = 0;
}


function matchResults(playerPick){
  var computerPick = computerChoice();
  var result;
  if (playerPick === "Bulbasaur" && computerPick === "Bulbasaur") {
    result = "Tie";
    winnerPic = "img/static-"+computerPick+".png";

  }
  if (playerPick === "Bulbasaur" && computerPick === "Charmander") {
    result = "Computer Wins";
    winnerPic = "img/charmander.gif";
    computerScore = computerScore+1;
  }
  if (playerPick === "Bulbasaur" && computerPick === "Squirtle") {
    result = "Player Wins";
    winnerPic = "img/bulbasaur.gif";
    playerScore = playerScore+1;
  }

  if (playerPick === "Charmander" && computerPick === "Bulbasaur") {
    result = "Player Wins";
    winnerPic = "img/charmander.gif";
    playerScore = playerScore+1;
  }
  if (playerPick === "Charmander" && computerPick === "Charmander") {
    result = "Tie";
  }
  if (playerPick === "Charmander" && computerPick === "Squirtle") {
    result = "Computer Wins";
    winnerPic = "img/squirtle.gif";
    computerScore = computerScore+1;
  }

  if (playerPick === "Squirtle" && computerPick === "Bulbasaur") {
    result = "Computer Wins";
    winnerPic = "img/bulbasaur.gif";
    computerScore = computerScore+1;
  }
  if (playerPick === "Squirtle" && computerPick === "Charmander") {
    result = "Player Wins";
    winnerPic = "img/squirtle.gif";
    playerScore = playerScore+1;
  }
  if (playerPick === "Squirtle" && computerPick === "Squirtle") {
    result = "Tie";
  }
  document.getElementById("Player_choice").innerHTML = playerPick;
  document.getElementById("Computer_choice").innerHTML = computerPick; 
  document.getElementById("BCS_result").innerHTML = result;
  document.getElementById("playerPokemon").src="img/static-"+playerPick+".png";
  document.getElementById("computerPokemon").src="img/static-"+computerPick+".png";
  document.getElementById("winningPokemon").src=winnerPic;
  document.getElementById("playerScore").innerHTML = playerScore;
  document.getElementById("computerScore").innerHTML = computerScore;

  document.getElementById("choices").style.display="none";
  document.getElementById("directions").style.display="none";
  document.getElementById("match").style.display="block";
  document.getElementById("results").style.display="block";
}
function newGame(){
  document.getElementById("choices").style.display="block";
  document.getElementById("directions").style.display="block";
  document.getElementById("match").style.display="none";
  document.getElementById("results").style.display="none";
  // document.getElementById("player").style.display="inline";
  // document.getElementById("choices").style.display="inline"; 
}

console.log(playerPick); 
console.log(computerPick);
// console.log(result);




//https://answers.yahoo.com/question/index?qid=20101208112148AAvahPD


