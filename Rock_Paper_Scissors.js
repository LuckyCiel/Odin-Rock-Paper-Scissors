
function getComputerChoice(computerInput) {
    return Math.floor(Math.random() * computerInput);
}

let computerValue = getComputerChoice(3);


function displayComputerValue(){
    if (computerValue == 0) {
        console.log("Computer ="+' Rock');
    }
    else if (computerValue == 1){
        console.log("Computer ="+' Paper');
    }
    else if (computerValue == 2){
        console.log("Computer ="+' Scissors');
    }
    else {
        console.log('Error Computer Value');
    }
}

function getHumanChoice() {
    let humanInput = prompt("Rock, Paper, Scissors ?", '');
    const humanInputText = humanInput.toLowerCase();
    if (humanInputText == 'rock'){
        console.log("User ="+" Rock");
        return humanValue = 0;
    }
    else if (humanInputText == 'paper'){
        console.log("User ="+" Paper");
        return humanValue = 1;
    }
    else if (humanInputText == 'scissors'){
        console.log("User ="+" Scissors");
        return humanValue = 2;
    }
    else {
        console.log("User ="+" You can only choose from Rock, Paper or Scissors")
        return humanValue = undefined;
    }
    
    
}

function roundChecker(){

    if (computerValue == humanValue){
        return console.log('Tie -> Rematch');
    }
    else if ((computerValue == 0) && (humanValue == 2)){
        ++computerScore;
        return console.log('Computer Win ! Rock Beat Scissors');
    }
    else if ((computerValue == 1) && (humanValue == 0)){
        ++computerScore;
        return console.log('Computer Win ! Paper Beat Rock');
    }
    else if ((computerValue == 2) && (humanValue == 1)){
        ++computerScore;
        return console.log('Computer Win ! Scissors Beat Paper');
    }
    else if ((humanValue == 0) && (computerValue == 2)){
        ++humanScore;
        return console.log('Human Win ! Rock Beat Scissors');
    }
    else if ((humanValue == 1) && (computerValue == 0)){
        ++humanScore;
        return console.log('Human Win ! Paper Beat Rock');
    }
    else if ((humanValue == 2) && (computerValue == 1)){
        ++humanScore;
        return console.log('Human Win ! Scissors Beat Paper');
    }

}

function playRound(){
    computerValue = getComputerChoice(3);
    humanSelection = getHumanChoice();
    computerSelection = displayComputerValue();
    roundChecker();
    console.log("-------------------------------");
    console.log('Computer Score = ' + computerScore);
    console.log('Human Score = ' + humanScore);
    console.log("-------------------------------");
}


function playGame(){
    playRound();
    if (computerScore === 5){
        return console.log('Computer WIN the Game');
    }
    else if (humanScore === 5){
        return console.log('Human WIN the Game');
    }
    else if ((computerScore != 5) || (humanScore != 5)){
        playGame();
    }
}


let computerScore = 0;
let humanScore = 0;



playGame();