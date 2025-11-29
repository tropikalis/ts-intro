class Product {
    id;
    name;
    acquisitionPrice;
    sellingPrice;
    amount;
    secret;
    constructor(id, name, buyPrice, sellPrice, amount) {
        /** @type {number} id */
        this.id = id;
        /** @type {string} name */
        this.name = name;
        /** @type {number} acquisitionPrice */
        this.acquisitionPrice = buyPrice;
        /** @type {number} sellingPrice */
        this.sellingPrice = sellPrice;
        /** @type {number} amount */
        this.amount = amount;
        this.secret = 'SECRET!';
    }
    getId() {
        return this.id;
    }
    getDetails() {
        return {
            name: this.name,
            acquisitionPrice: this.acquisitionPrice,
            sellingPrice: this.sellingPrice,
            amount: this.amount,
        };
    }
    getName() {
        return this.name;
    }
    getAmount() {
        return this.amount;
    }
    getSellingPrice() {
        return this.sellingPrice;
    }
    reduceAmount(amount) {
        if (this.amount < amount) {
            return false;
        }
        this.amount -= amount;
        return true;
    }
    drop() {
        this.amount = 0;
    }
    increaseAmount(amount) {
        if (amount > 0) {
            this.amount += amount;
        }
    }
}
export { Product };
