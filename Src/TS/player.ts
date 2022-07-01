import { PrimaryClass } from "./PrimaryClass";
import { Weapons } from "./weapons";
import Game from "./game"

//take name from start page
const nameplayer = localStorage.getItem("Name");

class Player extends PrimaryClass {
    readonly name: string;
    protected _hp: number = 12;
    protected _experience: number;
    protected _damage: number;
    protected _defense: number;
    protected _speed: number;
    protected _gold: number;
    protected _inventory: any[];

    constructor (dam: number, def: number, spd: number) {
        super();
        if (nameplayer === null) {
            throw new Error("error name not found");
        } else {
            this.name = nameplayer;
        }
        this._experience = 0;
        this._damage = dam;
        this._defense = def;
        this._speed = spd;
        this._gold = Math.floor(Math.random() * 49) + 1 ;
        this._inventory = [new Weapons("spoon", 1, 1, 20, undefined)];
    }

    //getters

    /**
     * hp
     */
    get life(): number {
        return this._hp;
    }

    get damCount(): number {
        const playerCount = JSON.parse(localStorage.getItem("player")!);
        return playerCount._damage;
    }

    //setters

    /**
     * set exp add
     */
    set expAdd(value: number) {
        this._experience += value;
        Game.AttBoard();
    }

    /**
     * set exp sub
     */
    set expSub(value: number) {
        if(this._experience > 0) {
            this._experience -= value;
            Game.AttBoard();
        }
        
    }

    /**
     * set hp sub
     */
    set hpSub(value: number) {
        if(this._hp > 0) {
            this._hp -= value;
            Game.AttBoard();
        }
    }

    /**
     * reset dam and def with counts in game.ts
     */
    Reset(dam: number, def:number) {
        const playerCount = JSON.parse(localStorage.getItem("player")!);
        this._damage = dam + playerCount._damage;
        this._defense = def + playerCount._defense;
        Game.AttBoard();
    }

    /**
     * add weapon dam and def
     */
    WeaponAdd(dam: number, def:number) {
        this._damage += dam;
        this._defense += def;
        Game.AttBoard();
    }

    /**
     * sub weapon dam and def
     */
    WeaponSub(dam: number, def:number) {
        this._damage -= dam;
        this._defense -= def;
        Game.AttBoard();
    }

    /**
     * set damage add
     */
    set damageAdd(value: number) {
        this._damage+= value;
        Game.AttBoard();
    }

    /**
     * set defense add
     */
    set defenseAdd(value: number) {
        this._defense+= value;
        Game.AttBoard();
        
    }

    set speedAdd(value: number) {
        this._speed+= value;
        Game.AttBoard();
    }

    /**
     * set gold add
     */
    set goldAdd(value: number) {
        this._gold+= value;
        Game.AttBoard();
    }

    /**
     * set gold sub
     */
    set goldsub(value: number) {
        this._gold-= value;
        Game.AttBoard();
    }

    /**
     * set inventory add
     */
    set invAdd(value: object) {
        this._inventory.push(value);
    }

    /**
     * set inventory sub
     */
    set invSub(index: number) {
        this._inventory.splice(index, 1);
    }
}

export { Player };