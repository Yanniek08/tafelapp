function showTafel() {
    let tafel = document.getElementById("inputTafel").value;
    let output = "";

    for (let i = 1; i <= 10; i++) {
        output += i + " x " + tafel + " = " + (i * tafel) + "<br>";
    }

    document.getElementById("outputTafel").innerHTML = output;
}let tafel;
let getal;

nieuweSom();

function nieuweSom() {
    tafel = Math.floor(Math.random() * 10) + 1;
    getal = Math.floor(Math.random() * 10) + 1;

    document.getElementById("som").innerHTML =
        tafel + " x " + getal + " = ?";
}

function controleerAntwoord() {
    let antwoord = Number(document.getElementById("antwoord").value);
    let goedAntwoord = tafel * getal;

    if (antwoord === goedAntwoord) {
        document.getElementById("resultaat").innerHTML =
            "je kan een keer wat";
    } else {
        document.getElementById("resultaat").innerHTML =
            "ik snap dit is voor oefenen maar kom op het =" + goedAntwoord;
    }

    document.getElementById("antwoord").value = "";
    nieuweSom();
}
