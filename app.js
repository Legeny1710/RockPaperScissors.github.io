const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
const CompPointDisplay = document.getElementById("computerPoint")
const UserPointDisplay = document.getElementById("userPoint")
const winnerDisplay = document.getElementById("winnerDisplay")
const startBtn = document.querySelector(".startBtn")



let userChoice
let computerChoice
let result
let computerPoint = 0
let userpoint = 0



possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
  userChoice = e.target.id
  userChoiceDisplay.innerHTML = userChoice
  generateComputerChoice()
  getResult()
}))

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1
  
  if (randomNumber === 1) {
    computerChoice = '🪨'
  }
  if (randomNumber === 2) {
    computerChoice = '✂️'
  }
  if (randomNumber === 3) {
    computerChoice = '📃'
  }
  computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
  if (computerChoice === userChoice) {
    result = 'its a draw!'
    resultDisplay.className = "resultDraw"
  }
  if (computerChoice === '🪨' && userChoice === "📃") {
    result = 'Rock covers paper, You win!'
    resultDisplay.className = "resultWIN"
    userpoint += 1
  }
  if (computerChoice === '🪨' && userChoice === "✂️") {
    result = 'you lost!'
    resultDisplay.className = "resultLose"
    computerPoint += 1
  }
  if (computerChoice === '📃' && userChoice === "✂️") {
    result = 'you win!'
    resultDisplay.className = "resultWIN"
    userpoint += 1
  }
  if (computerChoice === '📃' && userChoice === "🪨") {
    result = 'you lost!'
    resultDisplay.className = "resultLose"
    computerPoint += 1
  }
  if (computerChoice === '✂️' && userChoice === "🪨") {
    result = 'you win!'
    resultDisplay.className = "resultWIN"
    userpoint += 1
  }
  if (computerChoice === '✂️' && userChoice === "📃") {
    result = 'you lost!'
    resultDisplay.className = "resultLose"
    computerPoint += 1
  }
  if (userpoint === 3) {
    winnerDisplay.textContent = "YOU ARE THE WINNER!!!"
    winnerDisplay.className = "winnerDisplay"
    let btn = document.createElement("button");
    btn.innerHTML = "Start a new Game";
    btn.className = "startBtn"
    btn.addEventListener("click", function() {
      window.location.reload()
    })
    
    document.body.appendChild(btn);
  } else if (computerPoint === 3) {
      winnerDisplay.textContent = "COMPUTER WON!"
      winnerDisplay.className = "winnerDisplayCOM"
      let btn = document.createElement("button");
      btn.innerHTML = "Start a new Game";
      btn.className = "startBtn"
      btn.addEventListener("click", function() {
        window.location.reload()
      })
      document.body.appendChild(btn);
  } else if (computerPoint > 3) {
    winnerDisplay.textContent = "Game is over!"
  } else if(userpoint > 3) {
    winnerDisplay.textContent = "Game is over!"
  }
  resultDisplay.innerHTML = result
  
  UserPointDisplay.textContent = userpoint
  CompPointDisplay.textContent = computerPoint
}


