//Handles the Human Choice
function getHumanChoice() {
  let choice = prompt("What do you choose? Rock, Paper or Scissors: ");
  return String(choice).toLowerCase();
}

//Handle the computer choices
function getComputerChoice() {
  let comChoice = Math.floor(Math.random() * 3);
  if (comChoice === 0) return "rock";
  else if (comChoice === 1) return "paper";
  else if (comChoice === 2) return "scissors";
}
function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log("Draw!");
    return "draw";
  }
  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    console.log("You Win " + humanChoice + " beats " + computerChoice);
    return "human win";
  } else {
    console.log("You Lose " + computerChoice + " beats " + humanChoice);
    return "computer win";
  }
}
function playRound5() {
  let humanScore = 0;
  let compScore = 0;

  while (humanScore < 5 && compScore < 5) {
    const humanSelect = getHumanChoice();
    const computerSelect = getComputerChoice();

    console.log("You Chose: " + humanSelect);
    console.log("Computer Chose: " + computerSelect);

    const result = playRound(humanSelect, computerSelect);

    if (result === "human win") humanScore++;
    else if (result === "computer win") compScore++;

    console.log("Human Score: " + humanScore + " Computer Score: " + compScore);
    console.log(" ");
    
  }
  if (humanScore === 5) console.log("You Win!");
  else console.log("You Lose!");
}
playRound5();
