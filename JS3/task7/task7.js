function rollDice(sides) {
    return Math.floor(Math.random() * sides) + 1;
}

const sides = Number(prompt("How many sides on the dice?"));

const result = document.querySelector("#result");

let roll = 0;

while (roll !== sides) {
    roll = rollDice(sides);
    result.innerHTML += "<li>" + roll + "</li>";
}
