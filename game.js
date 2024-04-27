
function getComputerChoice(computerInput) {
    return Math.floor(Math.random() * computerInput);
}

let computerValue = getComputerChoice(3);
if (computerValue === 0){
    computerResult = 'Rock';
}
else if (computerValue === 1){
    computerResult = 'Paper';
}

else if (computerValue === 2){
    computerResult = 'Scissors';
}

console.log(computerResult)

getHumanChoice()

function getHumanChoice(){
    let humanInput = prompt('Rock, Paper or Scissors ?')
    if (humanInput === "Rock") {
        console.log("Rock");
      }
    else if (humanInput === "Paper") {
        console.log("Paper");
    }

    else if (humanInput === "Scissors") {
        console.log("Scissors");
    }
    else {
        console.log ("Choose only Rock, Paper or Scissors with correct syntaxe")
    }
}