import { PrimaryClass } from "./PrimaryClass";
import { Weapons } from "./weapons";

class Enemies extends PrimaryClass {

    static names = [
        "Cultist Brawler",
        "Brigand",
        "Ghoul",
        "The Collector",
        "Defender",
        "Prophet",
        "Swine",
        "Ghast"
    ];
    readonly name: string;
    protected _damage: number;
    protected _defense: number;
    protected _speed: number;
    protected _gold: number;
    protected _weapon?: any;

    /**
     * consturctor for enemies
     * @param player exp player
     */
    constructor (player: number) {
        super();
        this.name = Enemies.names[Math.floor(Math.random() * Enemies.names.length)];
        let number: number = Math.floor(Math.random() * 19)+ 1;
        if (number > 10) {
            this._weapon = new Weapons("",0,0,0,player);
        } else {
            this._weapon = undefined; 
        }
        this._damage = this.Levelling(player);
        this._defense = this.Levelling(player);
        this._speed = this.Levelling(player);
        this._gold = player + 1 * Math.floor(Math.random() * 9) + 1;
    }

    /**
     * getter Weapon
     */
    get Weapon () {
        return this._weapon;
    }

    /**
     * genered enemies based on exp player
     * @param player exp player
     * @returns levelling damage, speed and defense
     */
    private Levelling(player: number):number {
        switch (player) {
            case 0:
                this._damage =  player + 1 * Math.floor(Math.random() * 2) + 1
                this._defense =  player + 1 * Math.floor(Math.random() * 2) + 1
                this._speed =  player + 1 * Math.floor(Math.random() * 2) + 1;
                break;
            case 1 :
            case 2 : 
                this._damage =  player * Math.floor(Math.random() * 4) + 1
                this._defense =  player * Math.floor(Math.random() * 4) + 1;
                this._speed =  player * Math.floor(Math.random() * 2) + 1;
                break;
            case 3 :
            case 4 :
            case 5 :
                this._damage =  player * Math.floor(Math.random() * 5) + 1
                this._defense =  player * Math.floor(Math.random() * 5) + 1;
                this._speed =  player * Math.floor(Math.random() * 3) + 1;
                break;
            case 6 :
            case 7 :
            case 8 :
            case 9 :
            case 10 :
                this._damage =  player * Math.floor(Math.random() * 7) + 1
                this._defense =  player * Math.floor(Math.random() * 7) + 1;
                this._speed =  player * Math.floor(Math.random() * 3) + 1;
                break;
            case 11 :
            case 12 :
            case 13 :
            case 14 :
            case 15 :
                this._damage =  player * Math.floor(Math.random() * 10) + 1
                this._defense =  player * Math.floor(Math.random() * 10) + 1;
                this._speed =  player * Math.floor(Math.random() * 4) + 1;
                break;
            case 16 :
            case 17 :
            case 18 :
            case 19 :
            case 20 :
                this._damage =  player * Math.floor(Math.random() * 13) + 1
                this._defense =  player * Math.floor(Math.random() * 13) + 1;
                this._speed =  player * Math.floor(Math.random() * 5) + 1;
                break;
            case 21 :
            case 22 :
            case 23 :
            case 24 :
            case 25 :
                this._damage =  player * Math.floor(Math.random() * 15) + 1
                this._defense =  player * Math.floor(Math.random() * 15) + 1;
                this._speed =  player * Math.floor(Math.random() * 6) + 1;
                break;
            case 26 :
            case 27 :
            case 28 :
            case 29 :
            case 30 :
                this._damage =  player * Math.floor(Math.random() * 18) + 1;
                this._defense =  player * Math.floor(Math.random() * 18) + 1;
                this._speed =  player * Math.floor(Math.random() * 7) + 1;
                break;
            case 31 :
            case 32 :
            case 33 :
            case 34 :
            case 35 :
                this._damage =  player * Math.floor(Math.random() * 21) + 1;
                this._defense =  player * Math.floor(Math.random() * 21) + 1;
                this._speed =  player * Math.floor(Math.random() * 8) + 1;
                break;
            case 36 :
            case 37 :
            case 38 :
                this._damage  =  player * Math.floor(Math.random() * 23) + 1;
                this._defense =  player * Math.floor(Math.random() * 23) + 1;
                this._speed =  player * Math.floor(Math.random() * 9) + 1;
                break;
            case 39 :
                this._damage =  player * Math.floor(Math.random() * 25) + 1;
                this._defense =  player * Math.floor(Math.random() * 25) + 1;
                this._speed =  player * Math.floor(Math.random() * 10) + 1;
                break;
            case 40 :
        }
        return this._damage, this._defense, this._speed;
    }
}

export { Enemies };