class Product {
    private id: number;
    private name: string;
    private acquisitionPrice: number;
    private sellingPrice: number;
    private amount: number;
    private secret: string;

    constructor(id: number, name: string, buyPrice: number, sellPrice: number, amount: number) {
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

    getId(): number {
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

    getName(): string {
        return this.name;
    }

    getAmount(): number {
        return this.amount;
    }
    getSellingPrice(): number {
        return this.sellingPrice;
    }

    reduceAmount(amount: number): boolean {
        if (this.amount < amount) {
            return false;
        }

        this.amount -= amount;
            return true;
    }

    drop(): void {
        this.amount = 0;
    }
    increaseAmount(amount: number){
        if (amount > 0) {
            this.amount += amount
        }
    }
}

export { Product };


