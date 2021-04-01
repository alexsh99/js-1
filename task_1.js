'use strict'

console.log(getObj(152));
console.log(getObj2(128));

// Математический вариант
function getObj(number) {
    const n = +number;
    if (isNaN(n) || n > 999){
        console.log('Это не число или число больше 999');
        return {};
    }
    return {
        'единицы': n % 10,
        'десятки': Math.floor((n - (Math.floor(n / 100) * 100)) / 10),
        'сотни': Math.floor(n / 100),
    };
}

// Вариант через массив
function getObj2(number) {
    if (isNaN(+number) || parseInt(number) > 999){
        console.log('Это не число или число больше 999');
        return {};
    }
    const n = [...String(number)].reverse();
    return {
        'единицы': parseInt(n[0]),
        'десятки': n[1] ? parseInt(n[1]) :0,
        'сотни': n[2] ? parseInt(n[2]) :0,
    };
}
