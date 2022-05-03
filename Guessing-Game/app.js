/* A guessing game where the user is prompted to enter a maximum number and keep guessing until they guess the correct randomly selected number */

/* 
STEP ONE
Create a variable for the maximum number
The parseInt() function parses a string and returns an integer thus preventing anything other than a number from being entered 
Run a while statement (to check multiple times) stating if the entered maximum number is falsy (!) then prompt user to enter another number. Important to get a valid number for the maximum before moving on.
*/
let maximum = parseInt(prompt('Please enter maximum number for the game.'));
while (!maximum) {
    maximum = parseInt(prompt('Please enter a valid number.'));
}

/*
STEP TWO
Create a variable for the target number (from 1 to the maximum)
Math.floor() - returns the largest integer less than or equal to a given number (removes the decimal)
Math.random() - returns a floating-point, pseudo-random number in the range 0 to less than 1 (0-1 as a decimal)
*/
const targetNum = Math.floor(Math.random() * maximum) + 1;

/*
STEP THREE
Create a variable for the guess, again including parseInt()
Create a variable for keeping track of the number of attempts
*/
let guess = parseInt(prompt('Please enter your first guess'));
let attempts = 1;

/*
STEP FOUR
Run a while statement stating that if the guess is not the target number then...
Stop the game if they entered 'q'
Continually add one to each guess made
If guess is greater than target number provide a prompt stating such
If guess is less than target number provide a prompt stating such
*/
while (parseInt(guess) !== targetNum) {
    if (guess === 'q') break;
    attempts++;
    if (guess > targetNum) {
        guess = prompt('Too high. Please enter a new guess.');
    } else {
        guess = prompt('Too low. Please enter a new guess.');
    }
}

/*
STEP FIVE
If the guess is 'q' then prompt that they quit
Otherwise, prompt when they guess the target number correctly
*/
if (guess === 'q') {
    prompt('OK, you quit.');
} else {
    prompt(`Congrats! You win! It took you ${attempts} guesses.`);
}
