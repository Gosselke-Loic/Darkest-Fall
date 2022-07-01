import Game from "./game";

const game = new Game();

//Two finals of the game
let finalA = <HTMLButtonElement>document.getElementById("finalA");
let finalB = <HTMLButtonElement>document.getElementById("finalB");
let Acknowledgments = <HTMLButtonElement>document.getElementById("Acknowledgments");

finalA.addEventListener("click", () => {
    Game.FinalAttack();
})

finalB.addEventListener("click", () => {
    Game.FinalEscape();
})

Acknowledgments.addEventListener("click", () => {
    Game.Credits();
})