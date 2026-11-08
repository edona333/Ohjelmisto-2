function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

const result = document.querySelector("#result");

let roll = 0;

while (roll !== 6) {
    roll = rollDice();
    result.innerHTML += "<li>" + roll + "</li>";
}
