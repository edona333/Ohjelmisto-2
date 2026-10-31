const rolls = Number(prompt("How many times should I roll the dice?"));

let sum = 0;

for (let i = 0; i < rolls; i++) {
    const dice = Math.floor(Math.random() * 6) + 1;
    sum = sum + dice;
}

document.querySelector("#result").textContent =
    "The sum of the dice rolls is " + sum;