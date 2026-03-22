/*
Shoajb Ahmadi
*/

let correctAnswer;
let score = 0;

// Skapar en ny uppgift
function newQuestion() {

    let number1 = Math.floor(Math.random() * 20) + 1;
    let number2 = Math.floor(Math.random() * 20) + 1;

    // tre räknesätt
    let operations = ["+", "-", "*"];
    let randomOperation = operations[Math.floor(Math.random() * operations.length)];

    // Räknar ut rätt svar
    if (randomOperation === "+") {
        correctAnswer = number1 + number2;
    }
    else if (randomOperation === "-") {
        correctAnswer = number1 - number2;
    }
    else {
        correctAnswer = number1 * number2;
    }

    document.getElementById("question").innerText =
        "Vad är " + number1 + " " + randomOperation + " " + number2 + "?";

    document.getElementById("result").innerText = "";
    document.getElementById("answer").value = "";
}


// Kollar om användaren svarade rätt
function checkAnswer() {

    let userInput = document.getElementById("answer").value;

    if (userInput == correctAnswer) {
        score++;
        document.getElementById("result").innerText = "Rätt svar!";
        document.getElementById("result").style.color = "green";
    } else {
        document.getElementById("result").innerText =
            "Fel! Rätt svar var " + correctAnswer;
        document.getElementById("result").style.color = "red";
    }

    document.getElementById("points").innerText = score;
}


// Startar om spelet utan att ladda om sidan
function restartGame() {
    score = 0;
    document.getElementById("points").innerText = score;
    document.getElementById("question").innerText =
        "Tryck på 'Ny fråga' för att börja.";
    document.getElementById("result").innerText = "";
    document.getElementById("answer").value = "";
}


// Kopplar knapparna till funktionerna
document.getElementById("newQuestion").addEventListener("click", newQuestion);
document.getElementById("checkAnswer").addEventListener("click", checkAnswer);
document.getElementById("restart").addEventListener("click", restartGame);