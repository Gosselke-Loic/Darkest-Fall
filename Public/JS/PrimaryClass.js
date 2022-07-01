class PrimaryClass {
    //getters
    /**
     *  getter name
     */
    get Name() {
        return this.name;
    }
    /**
     * getter damage
     */
    get dam() {
        if (this._damage === undefined) {
            throw new Error("undefined");
        }
        else {
            return this._damage;
        }
    }
    /**
     * getter defense
     */
    get def() {
        if (this._defense === undefined) {
            throw new Error("undefined");
        }
        else {
            return this._defense;
        }
    }
    /**
     * getter Experience
     */
    get exp() {
        if (this._experience === undefined) {
            throw new Error("undefined");
        }
        else {
            return this._experience;
        }
    }
    /**
     * getter gold
     */
    get gold() {
        if (this._gold === undefined) {
            throw new Error("undefined");
        }
        else {
            return this._gold;
        }
    }
    /**
     * getter speed
     */
    get Speed() {
        if (this._speed === undefined) {
            throw new Error("undefined");
        }
        else {
            return this._speed;
        }
    }
    /**
     * getter Inventory
     */
    get Inv() {
        if (this._inventory === undefined) {
            throw new Error("undefined");
        }
        else {
            return this._inventory;
        }
    }
}
export { PrimaryClass };
