let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let card
let firstCard
let secondCard

let player = {
  name: "Mateusz",
  chips: 145
}

let playerEl = document.querySelector("#player-el")
let messageEl = document.querySelector("#message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")

playerEl.textContent = player.name + ": $" + player.chips

function startGame() {
  hasBlackJack = false
  isAlive = true
  firstCard = getRandomCard()
  secondCard = getRandomCard()
  sum = firstCard + secondCard
  cards = [firstCard, secondCard]
  renderGame()
}

function renderGame() {
  sumEl.textContent = "Sum: " + sum
  cardsEl.textContent = "Cards: "
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " "
  }
  if (sum <= 20) {
    message = "Do you want to draw a new card?"
  } else if (sum === 21) {
    message = "You've hit blackjack!"
    hasBlackJack = true
  } else {
    message = "You're out of the game!"
    isAlive = false
  }
  messageEl.textContent = message
}

function newCard() {
  if (isAlive === true && hasBlackJack === false) {
    console.log("Drawing a new card from the deck!")
    card = getRandomCard()
    cards.push(card)
    sum += card
    renderGame()
  }
}

function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1
  if (randomNumber > 10) {
    return 10
  } else if (randomNumber === 1) {
    return 11
  } else {
    return randomNumber
  }
}