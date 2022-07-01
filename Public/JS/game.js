import { Player } from "./player.js";
import { AlterEgo } from "./alterEgo.js";
import { Enemies } from "./Enemies.js";
import { Merchant } from "./merchant.js";
//Instance AlterEgo
const You = new AlterEgo();
class Game {
    //funtions game
    //index1.html
    /**
     * Take name hero from input.
     * @param value input name
     */
    static listener(value) {
        const event = value.target.value;
        if (event == null || event == undefined) {
        }
        else {
            this.infoName.innerHTML = "Let's gonna die!";
            this.hero.setAttribute("disabled", "disabled");
            localStorage.setItem("Name", event);
            this.start.classList.remove("hide");
        }
    }
    /**
     * transition to the history of the game
     */
    static travelling() {
        this.part1.classList.add("display-n");
        this.part2.classList.remove("display-n");
        //take name from start page
        let nameplayer = localStorage.getItem("Name");
        this.nextStep.innerHTML = "Continue Travel " + nameplayer;
    }
    /**
     * Enter to scene before dungeon
     */
    static Entrance() {
        this.part2.classList.add("display-n");
        this.part3.classList.remove("display-n");
    }
    /**
     * take massage from input for later in the game
     * @param value input message
     */
    static LastWords(value) {
        if (value == null || value == undefined || value == "") {
            this.infoMessage.innerHTML = "Are you Sure? Just a word, even if it is.";
        }
        else {
            this.infoMessage.innerHTML = "Message Send";
            localStorage.setItem("Message", value);
            function w() {
                return Game.part4.classList.add("display-n"), Game.part5.classList.remove("display-n");
            }
            this.Timer2(2000)
                .then(w);
        }
    }
    /**
     * first encounter with AlterEgo, function writer
     */
    static AlterEgo() {
        this.infoYou = "Hello there, welcome! First of all choose your class";
        AlterEgo.typeWriter(this.infoYou, this.infoAlter);
    }
    //Index2.HTML
    /**
     * choice your class to create specs of the hero
     * @param value value button for switch
     */
    static Choice(value) {
        switch (value) {
            case "0":
                this.player = new Player(2, 3, 1);
                this.infoYou = "WoW tank, ohh Yeah!";
                break;
            case "1":
                this.player = new Player(2, 1, 3);
                this.infoYou = "Rogue... meh.";
                break;
            case "2":
                this.player = new Player(3, 1, 2);
                this.infoYou = "Archer, not bad...";
                break;
            case "3":
                this.player = new Player(2, 2, 2);
                this.infoYou = "Standard experience! let's go!";
                break;
        }
        //store player base attributes for count
        const storePlayer = JSON.stringify(this.player);
        localStorage.setItem("player", storePlayer);
        //equip first weapon and load next step
        this.FirstWeapon();
        this.part12.classList.add("display-n");
        this.finallyEnter.classList.remove("display-n");
        AlterEgo.typeWriter(this.infoYou, this.infoAlter);
    }
    /**
     * Finally enter to the dungeon, writer AlterEgo, display inv and Attributes
     */
    static FinallyEnter() {
        this.finallyEnter.classList.add("display-n");
        this.part11.classList.add("display-n");
        this.part13.classList.remove("display-n");
        this.AttBoard();
        this.AddWeaponInventory("1");
        this.infoYou = "Here we are, let's kill some goblins, or better DRAGON's.",
            AlterEgo.typeWriter(this.infoYou, this.infoAlter1);
    }
    /**
     * Button for random encounter
     */
    static NextRoom() {
        const Fate = Math.floor(Math.random() * 19) + 1;
        if (this.player.life === 0 || this.player.exp === 40) {
            this.displayInv.classList.add("display-n");
            this.part18.classList.remove("display-n");
        }
        else if (Fate >= 16) {
            this.DisplayMerch();
        }
        else if (Fate == 1) {
            this.displayInv.classList.add("display-n");
            this.EventTrap();
        }
        else if (Fate == 6) {
            this.displayInv.classList.add("display-n");
            this.RestCamp();
        }
        else {
            this.displayInv.classList.add("display-n");
            this.Battle();
        }
        this.nextRoom.classList.add("display-n");
    }
    ;
    /**
     * Create enemie and display battle ground
     */
    static Battle() {
        this.battleButton0.classList.remove("display-n");
        this.battleButton1.classList.remove("display-n");
        this.part14.classList.remove("display-n");
        this.enemDam.value = "0";
        this.enemDef.value = "0";
        this.CreateEnemie();
    }
    ;
    /**
     * Engine for calc issue of the battle
     */
    static Attack() {
        if (this.player.Speed >= this.enemie.Speed && this.player.dam >= this.enemie.def) {
            this.infoYou = "Fast and clean, victory!";
            this.Loot();
            this.DefaultWeapon();
        }
        else if (this.enemie.dam >= this.player.def) {
            this.infoYou = "I had too much hope, lose.";
            this.player.hpSub = 1;
        }
        else {
            if (this.enemie.dam >= this.player.def) {
                this.infoYou = "Slow and wicked, you lose.";
                this.player.hpSub = 1;
            }
            else if (this.player.dam >= this.enemie.def) {
                this.infoYou = "By a whisker, victory...";
                this.Loot();
                this.DefaultWeapon();
            }
            else {
                this.infoYou = "Dead Heat, loser.";
            }
        }
        AlterEgo.typeWriter(this.infoYou, this.infoAlter1);
        this.ClearBattle();
    }
    ;
    /**
     * Button to scape the battle
     */
    static Run() {
        this.infoYou = "Bloody bastard!, don't run. Fight!";
        AlterEgo.typeWriter(this.infoYou, this.infoAlter1);
        this.player.expSub = 1;
        this.ClearBattle();
    }
    /**
     * Create merchant, display Inventories
     */
    static DisplayMerch() {
        this.Merchant = new Merchant(this.player.exp);
        this.part15.classList.remove("display-n");
        this.merchName.innerHTML = this.Merchant.name;
        let j = 0;
        let i = 0;
        for (const items of this.Merchant.Inv) {
            let option = document.createElement("option");
            option.innerHTML = "Weapon: " + j++ + " ; dam: " + items.dam + "; " + "def: " + items.def + "; " + "gold: " + items.gold;
            let div = document.createElement("div");
            div.className = "row justify-center mt-2";
            let button = document.createElement("button");
            button.addEventListener("click", (e) => {
                this.BuyMerch(e);
            });
            button.className = "btn2-info text-warning p-0 pl-2 pr-3 mt-1 font-600";
            button.textContent = "Weapon " + i++;
            button.value = items.ID;
            div.appendChild(button);
            this.buyMerch.appendChild(div);
            this.selectMerchant.appendChild(option);
        }
        this.DisInventoryPlayerMerch();
        this.infoYou = "Be careful, smells like a buglar";
        AlterEgo.typeWriter(this.infoYou, this.infoAlter1);
    }
    /**
     * Clicks in buttons to buy a weapon
     * @param e value button to buy weapon
     */
    static BuyMerch(e) {
        let valueId = e.target;
        if (this.player.Inv.length > 4) {
            this.infoMerch.innerHTML = "sorry Friend, your pockets are full.";
        }
        else {
            const item = this.Merchant.Inv.find(i => i.ID === parseInt(valueId.value));
            if (this.player.gold >= item.gold) {
                this.player.goldsub = item.gold;
                this.player.invAdd = item;
                this.AddWeaponInventory(item.ID);
                this.infoMerch.innerHTML = "thank you, my Friend.";
                this.infoYou = "uhhhh, shiny!";
                AlterEgo.typeWriter(this.infoYou, this.infoAlter1);
            }
            else {
                this.infoMerch.innerHTML = "not enough money, my Friend.";
                this.infoYou = "hahaha, you are poor!";
            }
        }
        this.DefaultWeapon();
    }
    /**
     * Buttons to sell your weapons
     * @param e value button equal to id weapon linked
     */
    static SellMerch(e) {
        let valueId = e.target;
        const item = this.player.Inv.find(i => i.ID === parseInt(valueId.value));
        if (item !== undefined) {
            this.player.goldAdd = item.gold;
            const index = this.player.Inv.map(function (x) { return x.ID; }).indexOf(parseInt(valueId.value));
            if (index == 0) {
                this.player.invSub = 0;
                this.player.Reset(this.countDamage, this.countDefense);
            }
            else {
                this.player.invSub = index;
            }
            this.RemoveWeapon(item.ID);
            this.infoMerch.innerHTML = "Weapon sold!";
        }
    }
    /**
     * check gold for buy an upgrade, if gold is enough you can buy upgrade
     * @param value value button for set up Attribute
     */
    static Upgrades(value) {
        if (this.player.gold >= 100) {
            this.player.goldsub = 100;
            switch (value) {
                case "1":
                    this.player.damageAdd = 1;
                    this.countDamage + 1;
                    break;
                case "2":
                    this.player.defenseAdd = 1;
                    this.countDefense + 1;
                    break;
                case "3":
                    this.player.speedAdd = 1;
                    break;
            }
            if (!!this.infoMerch)
                this.infoMerch.innerHTML = "you have been upgraded.";
        }
        else {
            this.infoMerch.innerHTML = "No money no upgrades, my friend.";
        }
    }
    /**
     * function to change weapon in the inventory
     * @param id id of the weapon
     */
    static ChangeWeapon(id) {
        this.player.Reset(this.countDamage, this.countDefense);
        const item = this.player.Inv.find(i => i.ID === parseInt(id));
        this.player.WeaponAdd(item.dam, item.def);
    }
    /**
     * Equip your first weapon
     */
    static FirstWeapon() {
        this.player.WeaponAdd(this.player.Inv[0].dam, this.player.Inv[0].def);
    }
    /**
     * Create enemie for the battle, display attributes
     */
    static CreateEnemie() {
        this.enemie = new Enemies(this.player.exp);
        this.enemName.innerHTML = this.enemie.name;
        this.inforNameEnemie.innerHTML = this.enemie.name;
        this.enemDam.value = -this.enemDam.value + "" + this.enemie.dam;
        this.enemDef.value = -this.enemDef.value + "" + this.enemie.def;
    }
    /**
     * Get the loot of an enemie if the player win
     */
    static Loot() {
        this.player.expAdd = 1;
        this.player.goldAdd = this.enemie.gold;
        if (this.enemie.Weapon !== undefined && this.player.Inv.length < 4) {
            this.player.invAdd = this.enemie.Weapon;
            this.AddWeaponInventory(this.enemie.Weapon.ID);
        }
    }
    /**
     * Change display if leave the merchant
     */
    static LeaveMerch() {
        this.part15.classList.add("display-n");
        this.nextRoom.classList.remove("display-n");
        this.displayInv.classList.remove("display-n");
        this.DefaultWeapon();
        this.ClearAfterMarket();
    }
    /**
     * Clear the battle ground with a timesetout
     */
    static ClearBattle() {
        this.battleButton0.classList.add("display-n");
        this.battleButton1.classList.add("display-n");
        function w() {
            Game.displayInv.classList.remove("display-n");
            Game.part14.classList.add("display-n");
            Game.nextRoom.classList.remove("display-n");
            Game.infoAlter1.innerHTML = "";
        }
        this.Timer2(3000)
            .then(w);
    }
    /**
     * Display button weapon for sell on market
     */
    static DisInventoryPlayerMerch() {
        let i = 0;
        for (const items of this.player.Inv) {
            let div = document.createElement("div");
            div.className = "row justify-center mt-2";
            let button = document.createElement("button");
            button.addEventListener("click", (e) => {
                this.SellMerch(e);
            });
            button.className = "btn2-info text-warning p-0 pl-2 pr-3 mt-1 font-600 id" + items.ID;
            button.textContent = "Weapon " + i++;
            button.value = items.ID;
            div.appendChild(button);
            this.sellMerch.appendChild(div);
        }
    }
    ;
    /**
     * Add weapon to the inventory
     * @param value ID of the weapon
     */
    static AddWeaponInventory(value) {
        let item;
        if (this.player.Inv.find(i => i.ID === parseInt(value)) !== undefined) {
            item = this.player.Inv.find(i => i.ID == value);
        } else if(this.Merchant.Inv.find(i => i.ID === parseInt(value)) !== undefined) {
            item = this.Merchant.Inv.find(i => i.ID === parseInt(value));
        } else {
            item = this.enemie.Weapon;
        }
        let option = document.createElement("option");
        option.value = item.ID;
        option.className = "id" + item.ID;
        option.innerHTML = "Name: " + item.Name + "; damage: " + item.dam + "; defense: " + item.def + "; gold: " + item.gold;
        this.selectPlayer.appendChild(option);
    }
    /**
     * remove options and buttons after sell a weapon.
     * @param id classname in option and button is equal "id"+ id of the weapon
     */
    static RemoveWeapon(id) {
        let option = document.querySelector(".id" + id);
        option.remove();
        let button = document.querySelector(".id" + id);
        button.remove();
    }
    /**
     * remove all create element, prevent acumulation.
     */
    static ClearAfterMarket() {
        while (this.selectMerchant.hasChildNodes()) {
            this.selectMerchant.removeChild(this.selectMerchant.lastChild);
        }
        while (this.buyMerch.hasChildNodes()) {
            this.buyMerch.removeChild(this.buyMerch.lastChild);
        }
        while (this.sellMerch.hasChildNodes()) {
            this.sellMerch.removeChild(this.sellMerch.lastChild);
        }
    }
    /**
     * If don't have weapon equipped, equip default weapon if have one
     */
    static DefaultWeapon() {
        if (this.player.dam == this.player.damCount + this.countDamage && this.player.Inv[0] !== undefined) {
            this.player.WeaponAdd(this.player.Inv[0].dam, this.player.Inv[0].def);
        }
    }
    /**
     * TWo types of event trap
     */
    static EventTrap() {
        const lucky = Math.floor(Math.random() * 19) + 1;
        if (lucky >= 10) {
            this.part16.classList.remove("display-n");
        }
        else {
            this.part17.classList.remove("display-n");
        }
    }
    /**
     * leave the trap
     */
    static LeaveTrap() {
        this.player.expSub = 1;
        this.infoYou = "maybe it's better this way, coward... there will be no loot for you today.";
        AlterEgo.typeWriter(this.infoYou, this.infoAlter1);
        function w() {
            Game.part16.classList.add("display-n");
            Game.nextRoom.classList.remove("display-n");
        }
        this.Timer2(3000)
            .then(w);
    }
    /**
     * Go to the trap
     */
    static GoTrap() {
        const lucky = Math.floor(Math.random() * 19) + 1;
        if (lucky >= 9) {
            this.player.hpSub = 2;
        }
        else {
            this.player.speedAdd = 1;
            this.player.damageAdd = 1;
            this.player.defenseAdd = 1;
            this.countDamage + 1;
            this.countDefense + 1;
        }
        this.infoYou = "This is my dungeon partner! Let's go for a good loot, or maybe a certain death... Whatever.";
        AlterEgo.typeWriter(this.infoYou, this.infoAlter1);
        function w() {
            Game.part16.classList.add("display-n");
            Game.nextRoom.classList.remove("display-n");
        }
        this.Timer2(3000)
            .then(w);
    }
    /**
     * Rest CampFire event
     */
    static RestCamp() {
        this.part17.classList.remove("display-n");
        this.infoYou = "Finally a little break, tell me do you have a wife or children? Better not answer me, let's continue being professional, shall we?";
        AlterEgo.typeWriter(this.infoYou, this.infoAlter1);
    }
    /**
     * Leave the campfire
     */
    static LeaveCamp() {
        this.player.goldAdd = 100;
        this.infoYou = "Look look, I see gold in that corpse! What a lucky bastard, come on let's go.";
        AlterEgo.typeWriter(this.infoYou, this.infoAlter1);
        function w() {
            Game.part17.classList.add("display-n");
            Game.nextRoom.classList.remove("display-n");
        }
        this.Timer2(3000)
            .then(w);
    }
    /**
     * Final Event of the game
     */
    static FinalEscape() {
        this.finalText.innerHTML = "Finally, before me. I have to say that you have entertained me well for a mere mortal, but this quest of yours for revenge was doomed from the start.";
        this.finalText1.innerHTML = "Why do you think you didn't die with your wife and child that day? quick answer, quench my boredom. A game to pass the time.";
        this.finalText2.innerHTML = "Now it's time to move on, there will be no happy ending for you. There never was because I wanted it that way. Goodbye my friend, haha.";
        function w() {
            Game.part19.classList.add("display-n");
            Game.part21.classList.remove("display-n");
        }
        this.Timer2(45000)
            .then(w);
    }
    static FinalAttack() {
        this.finalText.innerHTML = "After all this time together in this adventure, you attack me. I feel offended...";
        this.finalText1.innerHTML = "I could explain why all this but I don't feel like it, I just got bored of you mortal. Goodbye.";
        function w2() {
            Game.part19.classList.add("display-n");
            Game.part21.classList.remove("display-n");
        }
        this.Timer2(30000)
            .then(w2);
    }
    static Credits() {
        this.part21.classList.add("display-n");
        this.part20.classList.remove("display-n");
        //take name from start page
        let nameplayer = localStorage.getItem("Name");
        this.credits.innerHTML = "Thank you very much " + nameplayer + " for playing Darkest Times, I hope you liked it. There is not always a happy ending.";
        const lastMessage = localStorage.getItem("Message");
        this.message.innerHTML = "Your last message " + "'" + lastMessage + "'" + " will be sent in the hope that someone will read it someday, as proof that you ever existed.";
    }
    /**
     * Display all attributes of the player
     */
    static AttBoard() {
        this.boardHp.value = this.player.life + "";
        this.boardDam.value = this.player.dam + "";
        this.boardDef.value = this.player.def + "";
        this.boardSpd.value = this.player.Speed + "";
        this.boardExp.value = this.player.exp + "";
        this.boardGold.value = this.player.gold + "";
    }
    /**
     * Generic function to setTimeOut
     * @param time custom time to resolve the function Timer2
     * @returns Do something after x seconds
     */
    static Timer2(time) {
        return new Promise((resolve) => {
            setTimeout(function () {
                resolve();
            }, time);
        });
    }
}
//Counts damgage and defense for reset player
Game.countDamage = 0;
Game.countDefense = 0;
//index.HTML
//InnerHTML/button/inputs part1 page
Game.infoName = document.getElementById("infoName");
Game.hero = document.getElementById("name");
Game.start = document.getElementById("start");
//InnerHTML/button part2 page
Game.nextStep = document.getElementById("goToDungeon");
//InnerHTML/button part3/4 page
Game.infoMessage = document.getElementById("infoMessage");
//content html displays transition
Game.part1 = document.getElementById("part1");
Game.part2 = document.getElementById("part2");
Game.part3 = document.getElementById("part3");
Game.part4 = document.getElementById("part4");
Game.part5 = document.getElementById("part5");
//index2.HTML
//InnerHTML/buttons/info
Game.infoAlter = document.getElementById("alterEgo");
Game.infoAlter1 = document.getElementById("alterEgo1");
Game.finallyEnter = document.getElementById("finallyEnter");
Game.nextRoom = document.getElementById("nextRoom");
//AttBoard inputs
Game.boardHp = (document.getElementById("boardHp"));
Game.boardDam = (document.getElementById("boardDam"));
Game.boardDef = (document.getElementById("boardDef"));
Game.boardSpd = (document.getElementById("boardSpd"));
Game.boardExp = (document.getElementById("boardExp"));
Game.boardGold = (document.getElementById("boardGold"));
///innerhtml/inputs battle
Game.enemName = document.getElementById("enemName");
Game.inforNameEnemie = document.getElementById("infoNameEnemie");
Game.infoCombat = document.getElementById("infoCombat");
Game.enemDam = document.getElementById("enemDam");
Game.enemDef = document.getElementById("enemDef");
Game.battleButton0 = document.getElementById("battleButton0");
Game.battleButton1 = document.getElementById("battleButton1");
// Merch/InnerHtml/selects
Game.merchName = document.getElementById("merchName");
Game.infoMerch = document.getElementById("infoMerch");
Game.selectMerchant = document.querySelector("#selectMerchant");
Game.buyMerch = document.querySelector("#buyMerch");
Game.sellMerch = document.querySelector("#sellMerch");
//Inventory selects
Game.displayInv = document.getElementById("displayInv");
Game.selectPlayer = document.querySelector("#changeWeapon");
Game.imgEnemies = document.getElementById("imgEnemies");
//content html displays transition
Game.part11 = document.getElementById("part11");
Game.part12 = document.getElementById("part12");
Game.part13 = document.getElementById("part13");
Game.part14 = document.getElementById("part14");
Game.part15 = document.getElementById("part15");
Game.part16 = document.getElementById("part16");
Game.part17 = document.getElementById("part17");
Game.part18 = document.getElementById("part18");
Game.part19 = document.getElementById("part19");
Game.part20 = document.getElementById("part20");
Game.part21 = document.getElementById("part21");
//final event of the game
Game.finalText = document.getElementById("finalText");
Game.finalText1 = document.getElementById("finalText1");
Game.finalText2 = document.getElementById("finalText2");
Game.credits = document.getElementById("credits");
Game.message = document.getElementById("message");
export default Game;
