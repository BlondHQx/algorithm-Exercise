import PromptSync from "prompt-sync";
const prompt = PromptSync();
let human: number = parseInt(prompt("0 pour la pierre , 1 pour la feuille , 2 pour le ciseaux : "));
let cpuChoice: number = random(0, 2)

while (human != 0 && human != 1 && human != 2) {
    human = parseInt(prompt("tu as fait une connerie !!!! 0 pour la pierre , 1 pour la feuille , 2 pour le ciseaux : "));
}
switch (cpuChoice) {
    case 0:
        console.log("caillou");
        break;
    case 1:
        console.log("feuillasse");
        break;
    case 2:
        console.log("coupe coupe");
        break;
}
if (cpuChoice == human) {
        console.log("Egalité !");
    } else if ((cpuChoice == 1 && human == 2) || (cpuChoice == 2 && human == 0) || (cpuChoice == 0 && human == 1)) {
        console.log("tu a gagné !");
    } else {
        console.log("Tu a perdu !");
    }
function random(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
