import Game from "./game.js";
const game = new Game();
//Two finals of the game
let finalA = document.getElementById("finalA");
let finalB = document.getElementById("finalB");
let Acknowledgments = document.getElementById("Acknowledgments");
finalA.addEventListener("click", () => {
    Game.FinalAttack();
});
finalB.addEventListener("click", () => {
    Game.FinalEscape();
});
Acknowledgments.addEventListener("click", () => {
    Game.Credits();
});
