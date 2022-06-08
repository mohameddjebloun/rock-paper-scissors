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
//Create a global variable winner
let winner;
//Add an event listener to the buttons that call playRound function with the correct playerSelection every time a button is clicked
//Create a nodeList of all the buttons
const buttons = document.querySelectorAll('button');
//Create a variable of the roundResult div
const roundResult = document.querySelector(".roundResult p");
//Create variables of the computerScore and playerScore paragraphs
const computerScore = document.querySelector('.computerScore p');
const playerScore = document.querySelector('.playerScore p');
//Create a new p element gameWinner
const gameWinner = document.createElement('p');
//Create a variable of the scoreboard div
const scoreboard = document.querySelector(".scoreboard");
//Make gameWinner a child of scoreboard
scoreboard.appendChild(gameWinner);
//Iterate through the nodeList
buttons.forEach((button)=>{
    //For each button add a click event listener that calls the playRound function with playerSelection = button value
    button.addEventListener('click',()=>{
        //Set button value to its text content
        button.value = button.textContent;
        //Display the roundResult
        roundResult.innerText = playRound(button.value,computerPlay());
        //if computer score is 5
        if((computerScore.textContent === '4') && (winner === 'computer')){
            //Set computerScore text content to 5
            computerScore.textContent = '5';
            //Disable buttons
            buttons.forEach((button => button.disabled = true));
            //Give gameWinner the text content 'You lose! Good luck next time'
            gameWinner.textContent = 'You lose! Good luck next time';
            //Add class computerWin
            gameWinner.classList.add('computerWin');
            //Set computerScore and playerScore to 0 and enable the buttons after 3 seconds
            setTimeout(() => {
                //Empty roundResult
                roundResult.textContent = '';
                //Reset scores
                computerScore.textContent = '0';
                playerScore.textContent = '0';
                gameWinner.textContent = '';
                //Enable buttons
                buttons.forEach((button => button.disabled = false));
              }, "3000")
        }  
        //else if player score is 5 
        else if((playerScore.textContent === '4') &&(winner === 'player')){
            //Set playerScore text content to 5
            playerScore.textContent = '5';
            //Disable buttons
            buttons.forEach((button => button.disabled = true));
            //Give gameWinner the text content 'You win!'
            gameWinner.textContent = 'You win!';
            //Add class playerWin
            gameWinner.classList.add('playerWin');
            //Set computerScore and playerScore to 0 and enable the buttons after 3 seconds
            setTimeout(() => {
                //Empty roundResult
                roundResult.textContent = '';
                //Reset scores
                computerScore.textContent = '0';
                playerScore.textContent = '0';
                gameWinner.textContent = '';
                //Enable buttons
                buttons.forEach((button => button.disabled = false));
              }, "3000")
            
        }
        //else if winner is computer
        else if(winner === 'computer'){
            //Increment computerScore by 1
            computerScore.textContent = (+computerScore.textContent + 1).toString();
        }
            
        //else if winner is player   
        else if(winner === 'player'){
            //Increment playerScore by 1
            playerScore.textContent = (+playerScore.textContent + 1).toString();
        } 
            
    });
    
});
 