const dogs = [];

for (let i = 0; i < 6; i++) {
    const name = prompt("Enter dog name:");
    dogs.push(name);
}

dogs.sort();
dogs.reverse();

const result = document.querySelector("#result");

for (let i = 0; i < dogs.length; i++) {
    result.innerHTML += "<li>" + dogs[i] + "</li>";
}
