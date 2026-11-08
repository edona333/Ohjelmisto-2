
const participants = [];

const amount = Number(prompt("How many participants?"));

for (let i = 0; i < amount; i++) {
    const name = prompt("Enter participant name:");
    participants.push(name);
}

participants.sort();

for (let i = 0; i < participants.length; i++) {
    document.querySelector("#result").innerHTML +=
        "<li>" + participants[i] + "</li>";
}
