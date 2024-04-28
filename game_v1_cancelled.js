
function getComputerChoice(computerInput) {
    return Math.floor(Math.random() * computerInput);
}

let computerValue = getComputerChoice(3);
if (computerValue === 0){
    console.log(computerValue);
}
else if (computerValue === 1){
    console.log(computerValue);
}

else if (computerValue === 2){
    console.log(computerValue);
}

function getHumanChoice(){
    let humanInput = prompt('Rock, Paper or Scissors ?', '')
    if (humanInput === ('Rock')){
        let humanValue = 0;
        if (humanValue === 0){
           return console.log(humanValue);
        }
      }
    else if (humanInput === ("Paper")) {
        let humanValue = 1;
        if (humanValue === 1){
            return console.log(humanValue);
        }
    }

    else if (humanInput === ("Scissors")) {
        let humanValue = 2;
        if (humanValue === 2){
            return console.log(humanValue);
        }
    }
    else {
        console.log ("Choose only Rock, Paper or Scissors with correct syntaxe")
    }
}

let humanScore = 0;

let computerScore = 0;

function gameRules() {
    if (humanValue === computerValue){
        return console.log('Draw');
    }
}


function playRound(humanChoice , computerChoice){
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    gameRules();
}

playRound();