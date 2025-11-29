import { Product } from "./Product.js";

console.clear();

export class Shop {
    private name: string;
    private currency: string;
    private lastProductId: number;
    private inventor: Product[];
    private profit: number;

    /**
     * 
     * @param {string} name Parduotuves pavadinimas 
     * @param {string} currency Valiuta, kuria prekiaujame pardduotuveje
     */
    constructor(name: string, currency: string) {
        this.name = name;
        this.currency = currency;
        this.lastProductId = 0;
        this.inventor = [];       // masyve mano prekes
        this.profit = 0;
    }
 
    intro(): string {
        return `Sveiki atvyke i ${this.name}!`;
    }

    /**
     * Parduotuves inventoriaus papildymas nauja preke.
     * 
     * @param {string} name Produkto pavadinimas
     * @param {number} buyPrice Produkto isigijimo kaina
     * @param {number} sellPrice Produkto pardavimo kaina
     * @param {number} amount Kiekis vienetais
     * @returns {[boolean, string]} Pranesimas apie produkto pridejima i inventoriu; Boolean - ar kylo klaidu? String - pranesimo tesktas.
     */
    addProduct(name: string, buyPrice: number, sellPrice: number, amount: number): [boolean, string]{
        const product = new Product(++this.lastProductId, name, buyPrice, sellPrice, amount);
        this.inventor.push(product);     
        
        return [false, '✅Preke prideta'];
    }
/**
     * 
     * @param {number} productId 
     * @returns {[boolean, string | Product]} Pranesimas apie produkta is inventoriaus; Boolean - ar kylo klaidu? String - pranesimo tesktas; Product - produkto objektas.
     */
    findProductById(productId: number): [boolean, string | Product] {
        let foundProduct = null;

        for (const product of this.inventor) {
            if(product.getId() === productId) {
                foundProduct = product;
                break;
            }
        }

        if (!foundProduct) {
            return [true, `❌ Nepavyko rasti prekes pagal id: ${productId}`];
        }

        return [false, foundProduct];
    }
        
    /**
     * 
     * @param {number} productId 
     * @param {number} amount
     * @returns {[boolean, string]} Pranesimas apie produkto pridejima i inventoriu; Boolean - ar kylo klaidu? String - pranesimo tesktas.
     */
    sellProduct(productId:number, amount:number): [boolean, string] {
        const[err, result] = this.findProductById(productId);
        if (err) {
            return [err, result] as [boolean, string];
        }
        
        const foundProduct = result as Product;
        const isSold = foundProduct.reduceAmount(amount);

        if(!isSold){
            return [true, `❌ Nera norimo ${foundProduct.getName()} kiekio: nori ${amount}; turim ${foundProduct.getAmount()}.`];
        }

        const {sellingPrice, acquisitionPrice} = foundProduct.getDetails();
        this.profit += amount * (sellingPrice - acquisitionPrice);

        return [false, '✅ Preke parduota ' + this.profit];
    }

/**
     * 
     * @param {number} productId 
     * @returns {[boolean, string]} Pranesimas apie produkto pasalinima is inventoriaus; Boolean - ar kylo klaidu? String - pranesimo tesktas.
     */
    dropProduct(productId: number): [boolean, string] {
        const[err, result] = this.findProductById(productId);
        if (err) {
            return [err, result] as [boolean, string];
        }
        
        const foundProduct = result as Product;
        foundProduct.drop();

        return [false, '✅ Atsikratytas prekės likutis'];
    }

 /**
     * 
     * @param {number} productId 
     * @param {number} amount
     * @returns {[boolean, string]} Pranesimas apie produkto papildyma inventoriuje; Boolean - ar kylo klaidu? String - pranesimo tesktas.
     */
    fillInventor(productId: number, amount: number): [boolean, string] {
        const[err, result] = this.findProductById(productId);
        if (err) {
            return [err, result] as [boolean, string];
        }
        
        const foundProduct = result as Product;
        foundProduct.increaseAmount(amount);

        return [false, '✅ Preke papildyta'];
    }

formatMoney(money: number): string {
    // return `${money.toFixed(2)} ${this.currency}`;

    let str = '' + money;

    if (money % 1 === 0){
        str += `.00`;
    } else if (money * 10 % 1 === 0){
        str += `0`;
    } 

    return `${str} ${this.currency}`;
}

    summary(){
        const listStrings = [];
        const title = `Parduotuves "${this.name}" atsakaita:`;
        let list = 'Nera prekiu.';
        
        if (this.inventor.length){
            let i = 0;

            for(const product of this.inventor){
                const { name, acquisitionPrice, sellingPrice,amount } = product.getDetails();
                listStrings.push(`${++i}) ${name}: ${this.formatMoney(acquisitionPrice)}; ${this.formatMoney(sellingPrice)}; ${amount} vnt;`);
            }
            
           list = listStrings.join('\r\n');
        }

        let logestString = title.length;
        for (const str of listStrings){
            if (str.length > logestString){
                logestString = str.length;
            }
        }
        const line = '='.repeat(logestString);
    
        return `\r\n${line}\r\n${title}\r\n${line}\r\n${list}\r\n${line}\n`;
    }
}

 const kioskas = new Shop('Kompas', 'Eur');

console.log(kioskas.intro());
console.log(kioskas.summary());

const [err0, msg0] = kioskas.addProduct('Svogunas', 6, 66, 666);
console.log(err0, msg0);
const [err1, msg1] = kioskas.addProduct('Labai raudonas pomidoras', 1.5, 2.5, 10);
console.log(err1, msg1);
const [err2, msg2] = kioskas.addProduct('Agurkas', 0.49, 1.49, 20);
console.log(err2, msg2);

const [err3, msg3] = kioskas.sellProduct(999, 5);
console.log(err3, msg3);
const [err4, msg4] = kioskas.sellProduct(2, 25);
console.log(err4, msg4);
const [err5, msg5] = kioskas.sellProduct(2, 5);
console.log(err5, msg5);
const [err5_2, msg5_2] = kioskas.sellProduct(2, 5);
console.log(err5_2, msg5_2);
const [err5_3, msg5_3] = kioskas.sellProduct(2, 5);
console.log(err5_3, msg5_3);
//const [err5_4, msg5_4] = kioskas.sellProduct(2, 6);
//console.log(err5_4, msg5_4);
const [err6, msg6] = kioskas.dropProduct(1);
console.log(err6, msg6);
const [err7, msg7] = kioskas.fillInventor(1, 50);
console.log(err7, msg7);

// console.log(kioskas.inventor);
console.log(kioskas.summary());