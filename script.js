let playerScore = 0
let computerScore = 0

let pScore = document.getElementById('player-score-val');
let cScore = document.getElementById('computer-score-val');
let winnerText = document.getElementById('winner');

function player(str){
    console.log('called')

    if (playerScore == 5 || computerScore == 5){
        resetScore();
    }

    let computerMove = generateComputerMove();
    console.log(computerMove)
    let winner = checkMove(str, computerMove);
    console.log("Winner: "  +winner)

    if (winner == 'c'){
        computerScore++;
        
        cScore.innerText = computerScore;
        
    }
    else if (winner == 'p') {
        playerScore++;
        pScore.innerText = playerScore;
    }

    if (playerScore == 5) {
        winnerText.innerText = 'Player Wins!'
    }
    if (computerScore == 5){
        winnerText.innerText = "Computer Wins!"
    }
}

function generateComputerMove(){
    let x = Math.floor((Math.random() * 3) + 1);
    let move = null;
    if (x == 1){
        move = 'rock';
    }
    else if (x == 2){
        move = 'paper';
    }
    else {
        move = 'scissors';
    }
    return move;
}

function checkMove(playermove, computerMove){
    if (playermove == 'rock'){
        if (computerMove == 'paper'){
            return 'c';
        }
        if (computerMove == 'scissors'){
            return 'p';
        }
    }
    if (playermove == 'paper'){
        if (computerMove == 'scissors'){
            return 'c';
        }
        if (computerMove == 'rock'){
            return 'p';
        }
    }
    if (playermove == 'scissors'){
        if (computerMove == 'rock'){
            return 'c';
        }
        if (computerMove == 'paper'){
            return 'p';
        }
    }
    return 'n';
}

function resetScore() {
    playerScore = 0;
    computerScore = 0;
    pScore.innerText = 0;
    cScore.innerText = 0;
    winnerText.innerText = ""
}
