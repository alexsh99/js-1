let number_1 = Number.parseFloat(prompt('Первое число'));
let number_2 = Number.parseFloat(prompt('Второе число'));
let operation = prompt('операция (+,-,/,*)');
alert(mathOperation(number_1, number_2, operation))

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case "+":
            return sum(arg1, arg2);
        case "-":
            return sub(arg1, arg2);
        case "*":
            return mul(arg1, arg2);
        case "/":
            return div(arg1, arg2);
        default:
            return null;
    }
}