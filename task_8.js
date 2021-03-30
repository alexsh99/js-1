console.log(power(3,3)); //27
console.log(power(2, -2)); //0.25

function power(val, pow) {
    if (pow === 0) return 1;
    else if (pow > 0) return val * power(val, pow - 1);
    else if (pow < 0) return 1 / val * power(val, pow + 1);
}