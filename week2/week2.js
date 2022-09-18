/*
FUNCTION DECLARATION
function hello(){
console.log('Hello World!');
}

FUNCTION EXPRESSION
const goodbye = function(){
console.log('Goodbye World!');
};

All functions return values
RETURN keyword

DEFAULT PARAMETERS
function hello(name='World') {
console.log(`Hello ${name}!);
}

ARROW FUNCTIONS
const square = x => x*x;
const add = (x,y) => x + y;

.map()
[1,2,3].map( square )
<< [1, 4, 9]

.sort() arranges alpahbetically even if numbers

reduce() iterates through each item but combines each to result to return a single value
filter() returns new array according to filters
*/


/*
alert('Welcome to Quiz Ninja!');

const question = "What is Superman's real name?"
const answer = prompt(question);
alert(`You answered ${answer}`);
            
const quiz = [
    ["What is Superman's real name?","Clark Kent"],
    ["What is Wonder Woman's real name?","Diana Prince"],
    ["What is Batman's real name?","Bruce Wayne"]
];

let score = 0 // initialize score

for(const [question,answer] of quiz){
    const response = prompt(question);
    if(response === answer){
        alert('Correct!');
        score++;
    } else {
        alert(`Wrong! The correct answer was ${answer}`);
    }
    }
    // At the end of the game, report the player's score
    alert(`Game Over, you scored ${score} point${score !== 1 ? 's' : ''}`);
*/

const quiz = [
    ["What is Superman's real name?","Clark Kent"],
    ["What is Wonder Woman's real name?","Diana Prince"],
    ["What is Batman's real name?","Bruce Wayne"]
];

function start(quiz){
let score = 0;

// main game loop
for(const [question,answer] of quiz){
    const response = ask(question);
    check(response,answer);
}
// end of main game loop

gameOver();

// function declarations
function ask(question){
    return prompt(question);
}

function check(response,answer){
    if(response === answer){
    alert('Correct!');
    score++;
    } else {
    alert(`Wrong! The correct answer was ${answer}`);
    }
}

function gameOver(){
    alert(`Game Over, you scored ${score} point${score !== 1 ? 's' : ''}`);
}
}
start(quiz);