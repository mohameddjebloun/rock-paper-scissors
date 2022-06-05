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
