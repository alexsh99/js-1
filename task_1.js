'use strict'
console.log('Задание 1');
let n = 2; // число n является простым, если оно больше 1 и при этом делится без остатка только на 1 и на n
while (n <= 100){ // Диапозон
    let  i = 2; // делить на 0 и 1 нет смысла - начнем с 2
    let flag = true;
    while (i <= n){
        if (n !== i && n % i === 0) {
            flag = false;
            break;
        }
        i++;
    }
    if (flag) console.log(n);
    n++;
}
