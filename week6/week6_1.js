let submit = document.querySelector("button");
let pattern = document.querySelector(".pattern");
let input = document.querySelector("input");

function hourglass(n) {
    let result = "";
    for (let i = 0; i < Math.ceil(n / 2); i++) {
        result += " ".repeat(i) + "*".repeat(n - i * 2) + "\n";
    }
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        result += " ".repeat(i) + "*".repeat(n - i * 2) + "\n";
    }
    return result;
}
submit.onclick = () => {
    let n = parseInt(input.value);          // input.value give a string
    if (isNaN(n) || n % 2 === 0 || n < 1) {
        pattern.innerText = "Please enter a valid odd number greater than 0.";
    } else {
        pattern.innerText = hourglass(n);
    }
}