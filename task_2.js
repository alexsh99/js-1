'use strict'

const product_1 = {
    name: "Яблоки",
    price: 10,
    count: 23
}

const product_2 = {
    name: "Бананы",
    price: 3,
    count: 55
}

const product_3 = {
    name: "Апельсины",
    price: 8,
    count: 31
}

let basket = {
    product: [],
    addProduct(p){
        this.product.push(p);
    },
    basketPrice() {
        return this.product.reduce(function (total, item) {
            return total + (item.price * item.count);
        }, 0);
    }
}

basket.addProduct(product_1);
basket.addProduct(product_2);
basket.addProduct(product_3);
console.log(basket.basketPrice());