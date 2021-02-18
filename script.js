/* 
REEL ACTION
1. create an array of icons
2. randomize selection from array once for each reel
3. Insert emoji into DOM
4. Create CSS animation to imitate spinning reel

BETTING
1. Add event listeners to betting btns
2. Have +/- buttons increment/decrement respectively
3. Set max bet to 100
4. Add event listener to spin btn, give condition if bet > 0
5. Give player 1000 starting earnings
6. Calculate earnings based on reel result
    no match = lose bet, 2 match = return bet + 10, 3 match = double bet, 3 mermaids bonus = 5x bet
7. disable bet and spin button if out of money and alert
8. After all money lost, populate "Play again button" to reset the game
*/

const icons = ["🌊", "🦑", "🦭", "🧜🏽‍♀️", "🐚", "🐬", "🐡", "🐠", "🦈", "🦀"];

const reel1 = document.getElementById("reel1");
const reel2 = document.getElementById("reel2");
const reel3 = document.getElementById("reel3");

let betAmt = 100;
let currentEarnings = 1000;
const earnings = document.querySelector(".currentEarnings");
const totalBet = document.querySelector(".totalBet");
const add10 = document.querySelector(".betUp");
const minus10 = document.querySelector(".betDown");
const yolo = document.querySelector(".maxBet");
const betBtn = document.querySelector(".startBet");
totalBet.innerHTML = `Current Bet: $0`;

add10.addEventListener("click", () => {
  betAmt += 10;
  currentEarnings -= 10;
  if (betAmt > currentEarnings) {
    alert("Slow down there, big spender! You don't have anymore to bet!");
  } else {
    earnings.innerHTML = `Current Earnings: $${currentEarnings}`;
    totalBet.innerHTML = `Current Bet: $${betAmt}`;
  }
});
minus10.addEventListener("click", () => {
  betAmt -= 10;
  currentEarnings += 10;
  earnings.innerHTML = `Current Earnings: $${currentEarnings}`;
  if (betAmt <= 0) {
    alert("You're out of sand dollars! Better luck next time!");
  } else {
    totalBet.innerHTML = `Current Bet: $${betAmt}`;
  }
});
betBtn.addEventListener("click", () => {
  betAmt = 100;
  earnings.innerHTML = `Current Earnings: $${currentEarnings - 100}`;
  totalBet.innerHTML = `Current Bet: $${betAmt}`;
});
yolo.addEventListener("click", () => {
  betAmt = currentEarnings;
  earnings.innerHTML = `Current Earnings: $0`;
  totalBet.innerHTML = `Current Bet: $${currentEarnings}`;
});

function randomIcon() {
  return Math.floor(Math.random() * icons.length);
}

document.querySelector(".spinBtn").addEventListener("click", spinReels);

function spinReels() {
  reel1.innerHTML = icons[randomIcon()];
  reel2.innerHTML = icons[randomIcon()];
  reel3.innerHTML = icons[randomIcon()];
}
