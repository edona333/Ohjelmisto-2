const numbers = [];

while (true) {
    const number = Number(prompt("Enter your number:"));

    if (numbers.includes(number)) {
        alert("Number already given!");
        break;
    }

    numbers.push(number);
}

numbers.sort((a, b) => a - b);

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}