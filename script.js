let rounds = prompt("How many rounds do you wanna play?");
console.log("Help");
let integer = parseInt(rounds, 10);
let userWins = 0;
let computerWins = 0;
let tie = 0;
for(let i = 0; i < integer; i++){
    let userChoice = prompt ("Rock, paper or scissors? (Use r, p or s)");
    console.log(userChoice) 
    let randomNumber = Math.floor(Math.random() * 3);
    console.log (randomNumber);
    let computerChoice;
    if (randomNumber === 0) {
        computerChoice = "r";
    } else if (randomNumber === 1){
        computerChoice = "p";
    } else {
        computerChoice ="s";
    }
    console.log (computerChoice);
    if (computerChoice === "r" && userChoice === "p") {
        userWins++;
        alert ("You won!");
    } else if (computerChoice === "p" && userChoice === "s"){
        userWins++;
        alert ("You won!");
    } else if (computerChoice === "s" && userChoice === "r"){
        userWins++;
        alert ("You won!");
    } else if (computerChoice === userChoice){
        tie++;
        alert ("It's a tie.");
    } else {
        computerWins++;
        alert ("You lost.");
    }
}
alert ("Good Game! You won " + userWins + " time(s)! You lost " + computerWins + " time(s) ans tied " + tie + " time(s)!")