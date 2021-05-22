//1

let x = 2;
let flag = true;

while (x < 100) {
    for (let i = 2; i < x; i++) {
        if (x % i === 0) {
            flag = false;
            break;
        }
    }
    if (flag) {
        console.log(x);
    }
    flag = true;
    x++;
}

// 2

let basket = [2, 3, 4, 5, 6, 7]

let sum = basket.reduce(function(acc, elem){
    return acc + elem;
}, 0)

console.log(sum);

// 3

for(let i = 0; i < 10; console.log(i++)){}

// 4



for(let i = 1; i <= 20; i++){
    let string = "";
    for(let j = 0; j < i; j++){
        string += "*";
    }
    console.log(string + "\n");
}
