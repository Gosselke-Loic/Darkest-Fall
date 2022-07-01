import { PrimaryClass } from "./PrimaryClass.js";
import { Weapons } from "./weapons.js";
class Merchant extends PrimaryClass {
    constructor(player) {
        super();
        this.name = Merchant.names[Math.floor(Math.random() * Merchant.names.length)];
        this._inventory = [new Weapons("", 0, 0, 0, player), new Weapons("", 0, 0, 0, player), new Weapons("", 0, 0, 0, player)];
    }
}
Merchant.names = [
    "Moron Labe",
    "Morganna",
    "Cypher",
    "Opus",
    "Cirrila"
];
export { Merchant };
