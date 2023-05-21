function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if(choice == 0) choice = "r";
    else if(choice == 1) choice = "p";
    else choice = "s";
    return choice;
}

let playerScores = 0; 
let computerScores = 0; 
let playerChoice = document.querySelectorAll('.box');
playerChoice.forEach(choice => {
    choice.addEventListener('click', () => {
        let player = choice.id;
        let computer = getComputerChoice();
        if(player == computer) choice.classList.add('bd--draw');
        else {
            choice.classList.add('bd--green');
        if(computer == 'r') {
            document.querySelector('#r').classList.add('bd--red');
            
        }
        else if(computer == 'p') {
            document.querySelector('#p').classList.add('bd--red');
            
        }
        else if(computer == 's') {
            document.querySelector('#s').classList.add('bd--red');
            
        }
    }
    document.querySelector('.result').textContent = (compare(player, computer));
    setTimeout(() => {
        document.querySelector('#r').classList.remove('bd--red');
        document.querySelector('#p').classList.remove('bd--red');
        document.querySelector('#s').classList.remove('bd--red');
        choice.classList.remove('bd--green');
        choice.classList.remove('bd--draw');
        document.querySelector('.result').textContent = '';
    }, 1000);
    if(playerScores == 5 || computerScores == 5) {
        document.querySelector('.humanScores p').innerHTML = playerScores;
        document.querySelector('.comScores p').innerHTML = computerScores;
        setTimeout(() => {
            let modal = document.querySelector('.modal');
            modal.classList.remove('displayNone-modal');
            document.querySelector('.restart-modal').addEventListener('click', () => {
            document.querySelector('.humanScores p').innerHTML = 0;
            document.querySelector('.comScores p').innerHTML = 0;
            playerScores = 0; 
            computerScores = 0;  
            modal.classList.add('displayNone-modal');
            document.querySelector('main').classList.remove('displayNone');
        })
        document.querySelector('main').classList.add('displayNone');
        let final = document.querySelector('.modal p');
        if(playerScores == 5) final.innerHTML = "You Won!!!";
        else final.innerHTML = "You Lost!!!";
        }, 1000)
    }
    else {
        document.querySelector('.humanScores p').innerHTML = playerScores;
        document.querySelector('.comScores p').innerHTML = computerScores;
    } 
    })
});
function compare(playerChoice, computerChoice) {
    if(playerChoice + computerChoice == 'rs'){
        playerScores++;
        return "You Win";
    }
    else if(playerChoice + computerChoice == 'pr'){
        playerScores++;
        return "You Win";
    }
    else if(playerChoice + computerChoice == 'sp'){
        playerScores++;
        return "You Win";
    }
    else if(playerChoice == computerChoice) return "Draw";
    else {
        computerScores++;
        return "You Lose";
    }
}
let start = document.querySelector('.btn--start');
let rps = document.querySelectorAll('.displayNone');
start.addEventListener('click', () => {
    start.classList.add('restart');
    let restart = document.querySelector('.restart');
    restart.textContent = "Restart";
    restart.addEventListener('click', () => {
        document.querySelector('.humanScores p').innerHTML = 0;
        document.querySelector('.comScores p').innerHTML = 0;  
        playerScores = 0; 
        computerScores = 0;
    })
    rps.forEach(ele => {
        ele.classList.remove("displayNone");
    })
})

let ruleBtn = document.querySelector('.btn--rule');
ruleBtn.addEventListener('click', () => {
    document.querySelector('.rule').classList.remove('rule--modal');
    document.querySelector('main').classList.add('displayNone');
})

let checkBtn = document.querySelector('.check--btn');
checkBtn.addEventListener('click', () => {
    document.querySelector('.rule').classList.add('rule--modal');
    document.querySelector('main').classList.remove('displayNone');
});
let exit = document.querySelector('i');
exit.addEventListener('click', () => {
    document.querySelector('.rule').classList.add('rule--modal');
    document.querySelector('main').classList.remove('displayNone');
})