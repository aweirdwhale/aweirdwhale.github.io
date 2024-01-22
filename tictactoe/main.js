document.addEventListener("DOMContentLoaded", function () {
    var x = "x"; // Symbole pour le joueur X
    var o = "o"; // Symbole pour le joueur O
    var count = 0; // Compteur de coups joués
    var o_win = 0; // Compteur de victoires pour le joueur O
    var x_win = 0; // Compteur de victoires pour le joueur X

    function checkWinner(symbol) {
        var combinations = [
            ["one", "two", "three"], // Ligne 1
            ["four", "five", "six"], // Ligne 2
            ["seven", "eight", "nine"], // Ligne 3
            ["one", "four", "seven"], // Colonne 1
            ["two", "five", "eight"], // Colonne 2
            ["three", "six", "nine"], // Colonne 3
            ["one", "five", "nine"], // Diagonale 1
            ["three", "five", "seven"] // Diagonale 2
        ];

        return combinations.some(function (combination) {
            return combination.every(function (id) {
                return document.getElementById(id).classList.contains(symbol);
            });
        });
    }

    function resetGame() {
        var gameLiElements = document.querySelectorAll("#game li");
        gameLiElements.forEach(function (element) {
            element.textContent = "+"; // Réinitialise le contenu des cases
            element.classList.remove("disable", "o", "x", "btn-primary", "btn-info", "blue", "red"); // Réinitialise les classes CSS des cases
        });
        count = 0; // Réinitialise le compteur de coups joués
    }

    document.getElementById("game").addEventListener("click", function (event) {
        var clickedElement = event.target;

        if (clickedElement.classList.contains("disable")) {
            alert("Tricheur !"); // Alerte si la case est déjà jouée
        } else {
            count++; // Incrémente le compteur de coups joués

            if (count % 2 === 0) {
                clickedElement.textContent = o; // Affiche le symbole O dans la case
                clickedElement.classList.add("o", "btn-primary", "blue"); // Ajoute les classes CSS pour le symbole O

                if (checkWinner("o")) {
                    alert("Les O ont gagné!"); // Alerte si le joueur O a gagné
                    count = 0; // Réinitialise le compteur de coups joués
                    o_win++; // Incrémente le compteur de victoires pour le joueur O
                    document.getElementById("o_win").textContent = o_win; // Met à jour le score du joueur O
                }
            } else {
                clickedElement.textContent = x; // Affiche le symbole X dans la case
                clickedElement.classList.add("x", "btn-info", "red"); // Ajoute les classes CSS pour le symbole X

                if (checkWinner("x")) {
                    alert("Les X ont gagné!"); // Alerte si le joueur X a gagné
                    count = 0; // Réinitialise le compteur de coups joués
                    x_win++; // Incrémente le compteur de victoires pour le joueur X
                    document.getElementById("x_win").textContent = x_win; // Met à jour le score du joueur X
                }
            }

            if (count === 9) {
                alert("Exaeco! Le jeu va recommencer."); // Alerte si la partie est terminée avec un match nul
                resetGame(); // Réinitialise le jeu
            }
        }
    });

    document.getElementById("reset").addEventListener("click", function () {
        resetGame(); // Réinitialise le jeu lorsque le bouton "Reset" est cliqué
    });
});
