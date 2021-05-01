'use strict';

let score = 20;
let highScore = document.querySelector('.highscore').textContent
console.log(highScore)
const generateSecretNumber = () => {
   return Math.trunc(Math.random() * 20) + 1;
}
let secretNumber = generateSecretNumber();
console.log( secretNumber) 
//document.querySelector('.number').textContent =
const decrementScore = () => {
    document.querySelector('.score').textContent = --score
}
const setScore = (score) => {
    document.querySelector('.score').textContent = score;
}
const setTextGuess = (text) => {
    document.querySelector('.message').textContent = text
}
const setSecretNumber = (number) => {
    document.querySelector('.number').textContent = number
}
const setHighScore = (number) => {
    document.querySelector('.highscore').textContent = number
}
const checkNumber = () => {
   const guess = Number(document.querySelector('.guess').value)

   /* when there is no input */
   if(!guess){
    setTextGuess('No number!')
   }
   /* when the player wins */
   else if(guess === secretNumber ){
        setTextGuess(' 🎉 Correct Number') 
        setSecretNumber(secretNumber)   
        document.querySelector('body').style.backgroundColor = '#60b347'
        document.querySelector('.number').style.width = '30rem'
        if(score > highScore ) setHighScore(score)
   }
   else if(guess!== secretNumber){       
        
        if(score > 0 ) {
            setTextGuess('📉 Too low')
            if(guess > secretNumber) setTextGuess('📈 Too high')
            decrementScore();
        }
        else{
         setTextGuess('You lost the game') 
        }
   }
  
}
const restoreInitialState = () => {
    setScore(20);
    setTextGuess('Start guessing...') 
    secretNumber = generateSecretNumber(); 
    setSecretNumber('?')
    document.querySelector('.guess').value = ''
    document.querySelector('body').style.backgroundColor = '#222'
    document.querySelector('.number').style.width = '15rem'
}

document.querySelector('.check').addEventListener('click', checkNumber) 

document.querySelector('.again').addEventListener('click', restoreInitialState)