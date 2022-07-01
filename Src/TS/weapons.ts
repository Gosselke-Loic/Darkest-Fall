import { PrimaryClass } from "./PrimaryClass";

class Weapons extends PrimaryClass {

    protected _ID:number;
    static _ID: number;
    static names: string[]= [
        "Glaive",
        "Longsword",
        "Mace",
        "Darksword",
        "Claymore",
        "Zweihander",
        "Shotel",
        "Falchion",
        "Laito",
        "Murakumo",
        "Club",
        "Grant",
        "Lucerne",
        "Estoc",
        "Greatsword"
    ];
    readonly name: string;
    protected _damage: number;
    protected _defense: number;
    protected _gold: number;

    constructor (name : string, damage: number, defense: number, gold: number, player: number | undefined) {
        super();
        this._ID = Weapons.UniqueID();
        if (player === undefined) {
            this.name = name;
            this._damage = damage;
            this._defense = defense;
            this._gold = gold
        } else {
            this.name = Weapons.names[Math.floor(Math.random() * Weapons.names.length)];
            this._damage = this.Levelling(player);
            this._defense = this.Levelling(player);
            this._gold = this.Levelling(player);
        } 
    }

    static UniqueID():number {
        if (!this._ID) this._ID = 1
        else this._ID++
        return this._ID;
    }

    get ID(): number {
        return this._ID
    }

    private Levelling(player: number): number {
        switch (player) {
            case 0:
                this._damage =  player + 1 * Math.floor(Math.random() * 2) + 1;
                this._defense =  player + 1 * Math.floor(Math.random() * 2) + 1;
                this._gold = Math.floor(Math.random() * 29) + 1;
                break;
            case 1 :
            case 2 : 
                this._damage =  player * Math.floor(Math.random() * 4) + 1;
                this._defense =  player * Math.floor(Math.random() * 4) + 1;
                this._gold = Math.floor(Math.random() * 29) + 1;
                break;
            case 3 :
            case 4 :
            case 5 :
                this._damage =  player * Math.floor(Math.random() * 5) + 1;
                this._defense =  player * Math.floor(Math.random() * 5) + 1;
                this._gold = Math.floor(Math.random() * 39) + 1;
                break;
            case 6 :
            case 7 :
            case 8 :
            case 9 :
            case 10 :
                this._damage =  player * Math.floor(Math.random() * 6) + 1;
                this._defense =  player * Math.floor(Math.random() * 6) + 1;
                this._gold = Math.floor(Math.random() * 49) + 1;
                break;
            case 11 :
            case 12 :
            case 13 :
            case 14 :
            case 15 :
                this._damage =  player * Math.floor(Math.random() * 9) + 1;
                this._defense =  player * Math.floor(Math.random() * 9) + 1;
                this._gold = Math.floor(Math.random() * 69) + 1;
                break;
            case 16 :
            case 17 :
            case 18 :
            case 19 :
            case 20 :
                this._damage  =  player * Math.floor(Math.random() * 12) + 1;
                this._defense =  player * Math.floor(Math.random() * 12) + 1;
                this._gold = Math.floor(Math.random() * 89) + 1;
                break;
            case 21 :
            case 22 :
            case 23 :
            case 24 :
            case 25 :
                this._damage  =  player * Math.floor(Math.random() * 14) + 1;
                this._defense =  player * Math.floor(Math.random() * 14) + 1;
                this._gold = Math.floor(Math.random() * 119) + 1;
                break;
            case 26 :
            case 27 :
            case 28 :
            case 29 :
            case 30 :
                this._damage =  player * Math.floor(Math.random() * 17) + 1;
                this._defense =  player * Math.floor(Math.random() * 17) + 1;
                this._gold = Math.floor(Math.random() * 139) + 1;
                break;
            case 31 :
            case 32 :
            case 33 :
            case 34 :
            case 35 :
                this._damage =  player * Math.floor(Math.random() * 20) + 1;
                this._defense =  player * Math.floor(Math.random() * 20) + 1;
                this._gold = Math.floor(Math.random() * 159) + 1;
                break;
            case 36 :
            case 37 :
            case 38 :
                this._damage =  player * Math.floor(Math.random() * 22) + 1;
                this._defense =  player * Math.floor(Math.random() * 22) + 1;
                this._gold = Math.floor(Math.random() * 199) + 1;
                break;
            case 39 :
                this._damage =  player * Math.floor(Math.random() * 26) + 1;
                this._defense =  player * Math.floor(Math.random() * 26) + 1;
                this._gold = Math.floor(Math.random() * 249) + 1;
                break;
            case 40 :
        }
        return this._damage, this._defense, this._gold;
    }
}

export { Weapons };