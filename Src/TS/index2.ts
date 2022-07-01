import Game from "./game";

const game = new Game();

//index2.HTML

//select a class
let choice = document.getElementById("choice");

choice!.addEventListener("click", (e) => {
    const value = (<HTMLButtonElement>e.target).value;
    Game.Choice(value);
});

//enter dungeon
let finallyEnter = <HTMLButtonElement>document.getElementById("finallyEnter");

finallyEnter!.addEventListener("click", () => {
    Game.FinallyEnter();
});

//start event
let nextRoom = <HTMLButtonElement>document.getElementById("nextRoom");

nextRoom!.addEventListener("click", () => {
    Game.NextRoom();
});

//battle event
let attack = <HTMLButtonElement>document.getElementById("attack");
let run = <HTMLButtonElement>document.getElementById("run");

attack!.addEventListener("click", () => {
    Game.Attack();
});

run!.addEventListener("click", () => {
    Game.Run();
});

//merchant event
const leaveMerch = <HTMLButtonElement>document.getElementById("leaveMerch");
const upGrades = <HTMLButtonElement>document.getElementById("upGrades");

upGrades!.addEventListener("click", (e) => {
    const valueW = (<HTMLButtonElement>e.target).value;
    Game.Upgrades(valueW);
});

leaveMerch!.addEventListener("click", () =>{
    Game.LeaveMerch();
});

// inventory change weapon
let changeWeapon = <HTMLSelectElement>document.getElementById("changeWeapon");

changeWeapon.addEventListener("change", (e) => {
    const id = (<HTMLButtonElement>e.target).value;
    console.log(id)
    Game.ChangeWeapon(id);
});

//Random Events
let goTrap = <HTMLButtonElement>document.getElementById("goTrap");
let leaveTrap = <HTMLButtonElement>document.getElementById("leaveTrap");

goTrap.addEventListener("click", () => {
   Game.GoTrap();
});

leaveTrap.addEventListener("click", () => {
    Game.LeaveTrap();
})

let leaveCamp = <HTMLButtonElement>document.getElementById("leaveCamp");

leaveCamp.addEventListener("click", () => {
    Game.LeaveCamp();
})

Game.AlterEgo();