import { PrimaryClass } from "./PrimaryClass.js";
import { Weapons } from "./weapons.js";
import Game from "./game.js";
//take name from start page
const nameplayer = localStorage.getItem("Name");
class Player extends PrimaryClass {
    constructor(dam, def, spd) {
        super();
        this._hp = 12;
        if (nameplayer === null) {
            throw new Error("error name not found");
        }
        else {
            this.name = nameplayer;
        }
        this._experience = 0;
        this._damage = dam;
        this._defense = def;
        this._speed = spd;
        this._gold = Math.floor(Math.random() * 49) + 1;
        this._inventory = [new Weapons("spoon", 1, 1, 20, undefined)];
    }
    //getters
    /**
     * hp
     */
    get life() {
        return this._hp;
    }
    get damCount() {
        const playerCount = JSON.parse(localStorage.getItem("player"));
        return playerCount._damage;
    }
    //setters
    /**
     * set exp add
     */
    set expAdd(value) {
        this._experience += value;
        Game.AttBoard();
    }
    /**
     * set exp sub
     */
    set expSub(value) {
        if (this._experience > 0) {
            this._experience -= value;
            Game.AttBoard();
        }
    }
    /**
     * set hp sub
     */
    set hpSub(value) {
        if (this._hp > 0) {
            this._hp -= value;
            Game.AttBoard();
        }
    }
    /**
     * reset dam and def with counts in game.ts
     */
    Reset(dam, def) {
        const playerCount = JSON.parse(localStorage.getItem("player"));
        this._damage = dam + playerCount._damage;
        this._defense = def + playerCount._defense;
        Game.AttBoard();
    }
    /**
     * add weapon dam and def
     */
    WeaponAdd(dam, def) {
        this._damage += dam;
        this._defense += def;
        Game.AttBoard();
    }
    /**
     * sub weapon dam and def
     */
    WeaponSub(dam, def) {
        this._damage -= dam;
        this._defense -= def;
        Game.AttBoard();
    }
    /**
     * set damage add
     */
    set damageAdd(value) {
        this._damage += value;
        Game.AttBoard();
    }
    /**
     * set defense add
     */
    set defenseAdd(value) {
        this._defense += value;
        Game.AttBoard();
    }
    set speedAdd(value) {
        this._speed += value;
        Game.AttBoard();
    }
    /**
     * set gold add
     */
    set goldAdd(value) {
        this._gold += value;
        Game.AttBoard();
    }
    /**
     * set gold sub
     */
    set goldsub(value) {
        this._gold -= value;
        Game.AttBoard();
    }
    /**
     * set inventory add
     */
    set invAdd(value) {
        this._inventory.push(value);
    }
    /**
     * set inventory sub
     */
    set invSub(index) {
        this._inventory.splice(index, 1);
    }
}
export { Player };
