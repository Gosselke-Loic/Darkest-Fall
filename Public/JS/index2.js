import Game from "./game.js";
const game = new Game();
//index2.HTML
//select a class
let choice = document.getElementById("choice");
choice.addEventListener("click", (e) => {
    const value = e.target.value;
    Game.Choice(value);
});
//enter dungeon
let finallyEnter = document.getElementById("finallyEnter");
finallyEnter.addEventListener("click", () => {
    Game.FinallyEnter();
});
//start event
let nextRoom = document.getElementById("nextRoom");
nextRoom.addEventListener("click", () => {
    Game.NextRoom();
});
//battle event
let attack = document.getElementById("attack");
let run = document.getElementById("run");
attack.addEventListener("click", () => {
    Game.Attack();
});
run.addEventListener("click", () => {
    Game.Run();
});
//merchant event
const leaveMerch = document.getElementById("leaveMerch");
const upGrades = document.getElementById("upGrades");
upGrades.addEventListener("click", (e) => {
    const valueW = e.target.value;
    Game.Upgrades(valueW);
});
leaveMerch.addEventListener("click", () => {
    Game.LeaveMerch();
});
// inventory change weapon
let changeWeapon = document.getElementById("changeWeapon");
changeWeapon.addEventListener("change", (e) => {
    const id = e.target.value;
    console.log(id);
    Game.ChangeWeapon(id);
});
//Random Events
let goTrap = document.getElementById("goTrap");
let leaveTrap = document.getElementById("leaveTrap");
goTrap.addEventListener("click", () => {
    Game.GoTrap();
});
leaveTrap.addEventListener("click", () => {
    Game.LeaveTrap();
});
let leaveCamp = document.getElementById("leaveCamp");
leaveCamp.addEventListener("click", () => {
    Game.LeaveCamp();
});
Game.AlterEgo();
