// 1

function obj(number) {
    let x = {};
    if (number > 999)
        console.log("Number bigger than 999");
    else if (number < 0)
        console.log("Number less than 0");
    else {
        x = {
            "unit": number % 10,
            "ten": parseInt(number % 100 / 10),
            "hundred": parseInt(number / 100),
        };
    }
    return x;
}

console.log(obj(111));

//2

let items = [["Fish", 10], ["Meat", 20], ["Fruit", 30]];

let basket = [];

class AddItem {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

for (let i = 0; i < items.length; i++) {
    basket.push(
        new AddItem(...items[i])
    )
}

let sum = basket.reduce(function (acc, elem) {
    return acc + elem.price;
}, 0)

console.log(sum);
