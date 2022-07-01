import { PrimaryClass } from "./PrimaryClass";
import { Weapons } from "./weapons";

class Merchant extends PrimaryClass {

    static names = [
        "Moron Labe",
        "Morganna",
        "Cypher",
        "Opus",
        "Cirrila"
    ];
    readonly name: string;
    protected _inventory: any[];

    constructor(player: number) {
        super();
        this.name = Merchant.names[Math.floor(Math.random() * Merchant.names.length)];
        this._inventory = [new Weapons("",0,0,0,player), new Weapons("",0,0,0,player), new Weapons("",0,0,0,player)];
    }
}

export { Merchant };