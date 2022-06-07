//Create a function computerPlay that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’
//Declare the function computerPlay
function computerPlay(){
    //Create an array possiblePicks that has the values 'Rock', 'Paper'  'Scissors'
    const possiblePicks = ['Rock', 'Paper',  'Scissors'];
    //Create a variable randomNumber that has a random number from 0 1 2
    let randomNumber = Math.floor(Math.random() * 3);
    //Create a variable computerPick that has the value of possiblePicks with its index being the randomNumber
    let computerPick = possiblePicks[randomNumber];
    //Return computerPick
    return computerPick;
}
//Create a function playRound that has 2 parameters playerSelection, computerSelection which returns the winner of the round
//Declare the function playRound
function playRound(playerSelection, computerSelection) {
    //If the playerSelection is rock
    if(playerSelection.toLowerCase()==='rock'){
        //If the computerSelection is paper set the winner to computer and return "You Lose! Paper beats Rock"
        if(computerSelection.toLowerCase()==='paper'){
            winner = 'computer';
            return "You Lose! Paper beats Rock";
        }
        //Else if the computerSelection is scissors set the winner to player and return "You Win! Rock beats Scissors"
        else if(computerSelection.toLowerCase()==='scissors'){
            winner = 'player';
            return "You Win! Rock beats Scissors";
        }
        //Else if the computerSelection is rock set the winner to none and return "Draw!"
        else if(computerSelection.toLowerCase()==='rock'){
            winner = 'none';
            return 'Draw!';
        }
    }
    //Else if the playerSelection is paper
    else if(playerSelection.toLowerCase()==='paper'){
        //If the computerSelection is scissors set the winner to computer and return "You Lose! Scissors beats Paper"
        if(computerSelection.toLowerCase()==='scissors'){
            winner = 'computer';
            return "You Lose! Scissors beats Paper";
        }
        //Else if the computerSelection is rock set the winner to player and return "You Win! Paper beats Rock"
        else if(computerSelection.toLowerCase()==='rock'){
            winner = 'player';
            return "You Win! Paper beats Rock";
        }
        //Else if the computerSelection is paper set the winner to none and return "Draw!"
        else if(computerSelection.toLowerCase()==='paper'){
            winner = 'none';
            return 'Draw!';
        }
    }
    //Else if the playerSelection is scissors
    else if(playerSelection.toLowerCase()==='scissors'){
        //If the computerSelection is rock set the winner to computer and return "You Lose! Rock beats Scissors"
        if(computerSelection.toLowerCase()==='rock'){
            winner = 'computer';
            return "You Lose! Rock beats Scissors";
        }
        //Else if the computerSelection is paper set the winner to player and return "You Win! Scissors beats Paper"
        else if(computerSelection.toLowerCase()==='paper'){
            winner = 'player';
            return "You Win! Scissors beats Paper";
        }
        //Else if the computerSelection is scissors set the winner to none return "Draw!"
        else if(computerSelection.toLowerCase()==='scissors'){
            winner = 'none';
            return 'Draw!';
        } 
    }      
  }
//Create a function game that calls playRound until the player or computer wins 5 times and return the winner at the end
//Declare the function game
function game(){
    //Create the variables computerScore and playerScore and initialize them with 0
    let computerScore = 0;
    let playerScore = 0;
    //Create a while loop that keeps going until computerScore or playerScore reaches 5
    while(computerScore<5 && playerScore <5){
        //Call playRound
        console.log(playRound(playerPlay(),computerPlay()));
        //If the winner is the player increment playerScore by 1
        if(winner === 'player'){
            playerScore +=1;
        }
        //Else if the winner is the computer increment computerScore by 1
        else if(winner === 'computer'){
            computerScore += 1;
        }

    }
    //If playerScore is greater than computerScore return `You win {playerScore} to {computerScore}`
    if(playerScore > computerScore){
        return `You win ${playerScore} to ${computerScore}`;
    }
    //Else if computerScore is greater than playerScore return `You lose {computerScore} to {playerScore}`
    else if(computerScore > playerScore){
        return `You lose ${computerScore} to ${playerScore}`;
    }
}
//Create a global variable winner
let winner;
//Add an event listener to the buttons that call playRound function with the correct playerSelection every time a button is clicked
//Create a nodeList of all the buttons
const buttons = document.querySelectorAll('button');
//Create a variable of the roundResult div
const roundResult = document.querySelector(".roundResult p");
//Iterate through the nodeList
buttons.forEach((button)=>{
    //For each button add a click event listener that calls the playRound function with playerSelection = button value
    button.addEventListener('click',()=>{
        //Set button value to its text content
        button.value = button.textContent;
        //Display the roundResult
        roundResult.innerText = playRound(button.value,computerPlay());
    });
    
});
 