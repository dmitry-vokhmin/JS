//1
var a = 1, b = 1, c , d;
c = ++a; console.log(c); //К перемнной а прибавляем 1
d = b++; console.log(d); //Переменная b увеличилась на один
c = (2 + ++a); console.log(c); //К a прибавляем еще один
d = (2 + b++); console.log(d); //К b прибавляем еще один

//2
var a = 2;
var x = 1 + (a *= 2); // 5

//3
var a = -2;
var b = -4;

if ((a >= 0) && (b >= 0)) {
    console.log(a - b);
} else if ((a < 0) && (b < 0)) {
    console.log(a * b);
} else if (((a >= 0) && (b < 0)) || ((a < 0) && (b >= 0))) {
    console.log(a + b);
}

//4
var a = 10;
switch (a) {
    case 10:
        console.log(10);
    case 11:
        console.log(11);
    case 12:
        console.log(12);
    case 13:
        console.log(13);
    case 14:
        console.log(14);
    default:
        console.log(15)
        break;
}

//5
function plus(a, b) {
    return a + b;
}

function minus(a, b) {
    return a - b;
}

function mul(a, b) {
    return a * b;
}

function div(a, b) {
    return a / b;
}

//6
function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case "plus":
            return plus(arg1, arg2);
        case "minus":
            return minus(arg1, arg2);
        case "mul":
            return mul(arg1, arg2);
        case "div":
            return div(arg1, arg2);
        default:
            break;
    }
}

console.log(mathOperation(2, 3, "mul"));

//7
// null и 0 при сравнение дают false

//8
function power(val, pow) {
    if (pow == 1) {
        return val;
    }
    return val * power(val, pow - 1);
}

console.log(power(3, 3));