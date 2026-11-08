function concat(words) {
    let result = "";

    for (let i = 0; i < words.length; i++) {
        result += words[i];
    }

    return result;
}

const names = ["Johnny", "DeeDee", "Joey", "Marky"];

const combined = concat(names);

document.querySelector("#result").textContent = combined;
