let userName = 'Sumeyya'; //variable userName contains user's name
userName ? console.log(`Hello, ${userName}!`) : console.log(`Hello`); //ternary expression prints Hello Sumeyya
let userQuestion = 'do you want to go shopping today?';
console.log(`${userName}, ${userQuestion}`); //prints the user's name and question
const randomNumber = Math.floor(Math.random() * 8); //random number generated using Math library methods
let eightBall = ''; //empty string saves value depending on value of the randomNumber variable
if (randomNumber === 0) { //start of control flow to return a reply from the Magic Eight Ball
    eightBall = 'Yes';
} else if (randomNumber === 1) {
    eightBall = 'No';
} else if (randomNumber === 2) {
    eightBall = 'Maybe tomorrow';
} else if (randomNumber === 3) {
    eightBall = 'Tired, not today ';
} else if (randomNumber === 4) {
    eightBall = 'Do not count on it';
} else if (randomNumber === 5) {
    eightBall = 'A bit later';
} else if (randomNumber === 6) {
    eightBall = 'I am not feeling well';
} else if (randomNumber === 7) {
    eightBall = 'Where should we go?';
}
console.log(`The magic eight ball answered: ${eightBall}`); //prints value of the eightBall variable