
function getComputerChoice(computerInput) {
    return Math.floor(Math.random() * computerInput);
}

let computerValue = getComputerChoice(3);
if (computerValue === 0){
    computerResult = 'Computer = Rock';
}
else if (computerValue === 1){
    computerResult = 'Computer = Paper';
}

else if (computerValue === 2){
    computerResult = 'Computer = Scissors';
}

function getHumanChoice(){
    let humanInput = prompt('Rock, Paper or Scissors ?')
    if (humanInput === "Rock") {
        let humanRockValue = 0;
        if (humanRockValue === 0){
            humanRockResult = 'User = Rock';
        }
        console.log(humanRockResult);
      }
    else if (humanInput === "Paper") {
        let humanPaperValue = 1;
        if (humanPaperValue === 1){
            humanPaperResult = 'User = Paper';
        }
        console.log(humanPaperResult);
    }

    else if (humanInput === "Scissors") {
        let humanScissorsValue = 2;
        if (humanScissorsValue === 2){
            humanScissorsResult = 'User = Scissors';
        }
        console.log(humanScissorsResult);
    }
    else {
        console.log ("Choose only Rock, Paper or Scissors with correct syntaxe")
    }
}

let humanScore = 0;

let computerScore = 0;


function gameRules() {
    if ((computerResult === 'Computer = Rock') && (humanRockResult === 'User = Rock')){
        return console.log('Draw because Rock = Rock');
    }
    else if ((computerResult === 'Computer = Rock') && (humanScissorsResult === 'User = Scissors')){
        return console.log('Computer win because Rock break Scissors');
}
}

function playRound(humanChoice , computerChoice){
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    console.log(computerResult);
    gameRules();
    

}

playRound();