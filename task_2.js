'use strict'
console.log('Задание 2');

/**
 * Каждый элемент корзины basket отдельный товар в виде массива
 * Элементы товара - массив с индексами 0 - название, 1 - кол-во, 2 - цена за 1 единицу товара
 */

let basket = [
    ['Яблоки', 10, 23],
    ['Бананы', 3, 55],
    ['Апельсины', 8, 31],
];

console.log(`Стоимость корзины ${countBasketPrice(basket)}`)

function countBasketPrice(basket) {
    return basket.reduce(function (total, item) {
        return total + (item[1] * item[2]);
    }, 0);
}