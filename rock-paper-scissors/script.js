let humanScore = 0;
let computerScore = 0;


//Handles the Human Choice
function getHumanChoice(choice){
    return choice;
}
let choice = prompt("What do you choose? Rock, Paper or Scissors: ");
let human = getHumanChoice(choice);
console.log(human);

//Handle the computer choices
function getComputerChoice(comChoice) {
  if (comChoice == 1) {
    return "Rock";
  } else if (comChoice == 2) {
    return "Paper";
  } else {
    return "Scissors";
  }
}
let random = Math.floor(Math.random() * 2) + 1;
let computer = getComputerChoice(random);
console.log(computer);



