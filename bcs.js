var previousPlayerPick;
var previousComputerPick;

//http://gizmodo.com/science-has-finally-figured-out-how-to-win-rock-paper-s-1571019588
function computerChoice() {
  var choice = ["Bulbasaur", "Charmander", "Squirtle"];
  var randoChoice = Math.floor(Math.random()*choice.length);
  if (winnerPic=== undefined || result === "Tie") {
    return choice[randoChoice];
  }else if (result === "Player Wins"){
    if (previousPlayerPick==="Bulbasaur"){
      return "Charmander";
    }
    if (previousPlayerPick==="Squirtle"){
      return "Bulbasaur";
    }
    if (previousPlayerPick==="Charmander"){
      return "Squirtle";
    }
  }else if (result === "Computer Wins"){
    if (previousComputerPick==="Bulbasaur"){
      return "Squirtle";
    }
    if (previousComputerPick==="Charmander"){
      return "Bulbasaur";
    }
    if (previousComputerPick==="Squirtle"){
      return "Charmander";
    }
  }
}

var playerPick;
var computerPick;
var winnerPic;
var result;

var playerScore = 0;
var computerScore = 0;
function matchResults(playerPick){
  var computerPick = computerChoice();
  previousPlayerPick=playerPick;
  previousComputerPick=computerPick;
console.log(playerPick, computerPick);
  if (playerPick === "Bulbasaur" && computerPick === "Bulbasaur") {
    result = "Tie";
    winnerPic = "img/tie.gif";

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
    winnerPic = "img/tie.gif";
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
    winnerPic = "img/tie.gif";
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

// console.log(playerPick); 
// console.log(computerPick);
// console.log(result);