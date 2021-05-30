"use strict"

const main = document.querySelector("#main");

let items = [["Fish", 10], ["Meat", 20], ["Fruit", 30]];

let cart = [];

function addItemToCart() {
    class Item {
        constructor(name, price) {
            this.name = name;
            this.price = price;
        }
    }
    for (let i = 0; i < items.length; i++) {
        cart.push(
            new Item(...items[i])
        )
    }
}

function getSum() {
    return cart.reduce(function (acc, elem) {
        return acc + elem.price;
    }, 0)
}


function cartItem() {
    let text = "";

    if (cart.length) {
        text = "В корзине: " + cart.length + " товаров на сумму " + getSum() + " рублей";
    }
    else {
        text = "Корзина пуста";
    }

    main.insertAdjacentHTML("afterbegin", "<p>" + text + "</p>");
}

addItemToCart();

cartItem();
