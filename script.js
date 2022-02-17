let rounds = prompt("How many rounds do you wanna play?");
console.log("Help");
let integer = parseInt(rounds, 10);
let userWins = 0;
let computerWins = 0;
let tie = 0;
for(let i = 0; i < integer; i++){
    let userChoice = prompt ("Rock, paper or scissors? (Enter r, p or s)");
    if (userChoice === "r" || userChoice === "p" || userChoice === "s"){
        console.log(userChoice);
    } else {
        alert ("Invalid input!!");
        integer++;
        continue;
    }
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
        alert ("You won! " + userChoice + " beats " + computerChoice + ".");
    } else if (computerChoice === "p" && userChoice === "s"){
        userWins++;
        alert ("You won! " + userChoice + " beats " + computerChoice + ".");
    } else if (computerChoice === "s" && userChoice === "r"){
        userWins++;
        alert ("You won! " + userChoice + " beats " + computerChoice + ".");
    } else if (computerChoice === userChoice){
        tie++;
        alert ("It's a tie.");
    } else {
        computerWins++;
        alert ("You lost. The computer chose " + computerChoice + " which beats " + userChoice + ".");
    }
}
alert ("Good game! You won " + userWins + " time(s)! You lost " + computerWins + " time(s) and tied " + tie + " time(s)!");