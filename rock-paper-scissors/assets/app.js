let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".scoreboard");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
      

}

function convertWords(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    if (letter === "s") return "Scissors";

}


function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    const smallUserWord = "user".fontsize(3).sub();
      const smallCompWord = "comp".fontsize(3).sub();
    result_div.innerHTML = `${convertWords(userChoice)}${smallUserWord}beats ${convertWords(computerChoice)}${smallCompWord} you win!`
    document.getElementById(userChoice).classList.add('glow');
    setTimeout(function () {
        document.getElementById(userChoice).classList.remove('glow'), 3;

    })
}

function lose(userChoice, computerChoice) {
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(3).sub();
      const smallCompWord = "comp".fontsize(3).sub();
    result_div.innerHTML = `${convertWords(computerChoice)}${smallUserWord} beats ${convertWords(userChoice)}${smallCompWord} you lose!`

    
}

function draw(userChoice, computerChoice) {

    const smallUserWord = "user".fontsize(3).sub();
      const smallCompWord = "comp".fontsize(3).sub();
    result_div.innerHTML = `${convertWords(userChoice)} ${smallUserWord} equals ${convertWords(computerChoice)}${smallCompWord} it's a DRAW!`

    
}


function game(userChoice) {
    const computerChoice = getComputerChoice();

    switch (userChoice + computerChoice) {

        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;

    }



}
 

function main() {
  rock_div.addEventListener("click", function () {
    game("r");
  });

  paper_div.addEventListener("click", function () {
    game("p");
  });

  scissors_div.addEventListener("click", function () {
    game("s");
  });
    
}

main();


