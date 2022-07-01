import Game from "./game";

const game = new Game();

//Start Adventure EventListener
let hero = document.getElementById("name");

hero!.addEventListener("change", (e: Event) => {
    Game.listener(e);
});
   
let travel = document.getElementById("start");

travel!.addEventListener("click", () => {
    Game.travelling();
});

let dungeon = document.getElementById("goToDungeon");

dungeon!.addEventListener("click", () => {
    Game.Entrance();
});

let send = document.getElementById("send");

send!.addEventListener("click", () => {
   let words = (<HTMLInputElement>document.getElementById("words")).value;
   Game.LastWords(words);
});