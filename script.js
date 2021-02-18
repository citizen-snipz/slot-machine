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

function randomIcon() {
  return Math.floor(Math.random() * icons.length);
}
const reel1 = document.getElementById("reel1");
const reel2 = document.getElementById("reel2");
const reel3 = document.getElementById("reel3");
const earnings = document.querySelector(".currentEarnings");
document.querySelector(".spinBtn").addEventListener("click", spinReels);
const betBtn = document
  .querySelector(".startBet")
  .addEventListener("click, calcBet");

function calcBet() {
  const add10 = document.querySelector(".betUp");
  const minus10 = document.querySelector(".betDown");
  const yolo = document.querySelector(".maxBet");
  let betAmt = 100;
  earnings.insertAdjacentHTML("beforeend", `Current bet: ${betAmt}`);
  add10.addEventListener("click", () => {
    betAmt += 10;
    earnings.insertAdjacentHTML("beforeend", `Current bet: ${betAmt}`);
  });
  minus10.addEventListener("click", () => (betAmt -= 10));
}

function spinReels() {
  reel1.innerHTML = icons[randomIcon()];
  reel2.innerHTML = icons[randomIcon()];
  reel3.innerHTML = icons[randomIcon()];
}
