class itemBasket {
    constructor(item, qty, price, tax) {
        this.item = item;              
        this.qty = qty;       
        this.price = price; 
        this.tax = tax;     
    }

    totalBasket() {
        return this.qty * this.price;
    }

    taxCost() {
        return this.totalBasket() * this.tax;
    }
}

const bananas = new itemBasket("Bananas", 6, 1.0, 0.06);
const apples = new itemBasket("Apples", 3, 1.5, 0.06);
const wine = new itemBasket("Wine", 2, 10.0, 0.21);

const totalCost = bananas.totalBasket() + apples.totalBasket() + wine.totalBasket();
const totalTax = bananas.taxCost() + apples.taxCost() + wine.taxCost();

console.log('Total cost: ' + totalCost.toFixed(2) + '€');
console.log('Total tax: ' + totalTax.toFixed(2) + '€');