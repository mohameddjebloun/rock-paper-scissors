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
//Create a function playerPlay that returns the player's pick
//Declare the function playerPlay
function playerPlay(){
    //Create a variable playerPick that prompts the user for his choice
    let playerPick = prompt("What's your choice ? rock, paper or scissors ?");
    //if the playerPick is either 'rock' 'paper' or 'scissors' then return it
    switch(playerPick.toLowerCase()){
        case 'rock':
        case 'paper':
        case 'scissors':  
            return playerPick;
            break;  
        //else ask the user for his choice again
        default:
            return playerPlay();    
    }
    
}
//Create a function playRound that has 2 parameters playerSelection, computerSelection which returns the winner of the round
//Declare the function playRound
function playRound(playerSelection, computerSelection) {
    //If the playerSelection is rock
    if(playerSelection.toLowerCase()==='rock'){
        //If the computerSelection is paper return "You Lose! Paper beats Rock"
        if(computerSelection.toLowerCase()==='paper'){
            return "You Lose! Paper beats Rock";
        }
        //Else if the computerSelection is scissors return "You Win! Rock beats Scissors"
        else if(computerSelection.toLowerCase()==='scissors'){
            return "You Win! Rock beats Scissors";
        }
        //Else if the computerSelection is rock return "Draw!"
        else if(computerSelection.toLowerCase()==='rock'){
            return 'Draw!';
        }
    }
    //Else if the playerSelection is paper
    else if(playerSelection.toLowerCase()==='paper'){
        //If the computerSelection is scissors return "You Lose! Scissors beats Paper"
        if(computerSelection.toLowerCase()==='scissors'){
            return "You Lose! Scissors beats Paper";
        }
        //Else if the computerSelection is rock return "You Win! Paper beats Rock"
        else if(computerSelection.toLowerCase()==='rock'){
            return "You Win! Paper beats Rock";
        }
        //Else if the computerSelection is paper return "Draw!"
        else if(computerSelection.toLowerCase()==='paper'){
            return 'Draw!';
        }
    }
    //Else if the playerSelection is scissors
    else if(playerSelection.toLowerCase()==='scissors'){
        //If the computerSelection is rock return "You Lose! Rock beats Scissors"
        if(computerSelection.toLowerCase()==='rock'){
            return "You Lose! Rock beats Scissors";
        }
        //Else if the computerSelection is paper return "You Win! Scissors beats Paper"
        else if(computerSelection.toLowerCase()==='paper'){
            return "You Win! Scissors beats Paper";
        }
        //Else if the computerSelection is scissors return "Draw!"
        else if(computerSelection.toLowerCase()==='scissors'){
            return 'Draw!';
        } 
    }      
  }
