"use strict"

const catalog = document.querySelector("#catalog");

let itemCart = [["Fish", 10], ["Meat", 20], ["Fruit", 30]];

let catalogList = [];

class Item {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

function addItemToCart() {
    for (let i = 0; i < itemCart.length; i++) {
        catalogList.push(
            new Item(...itemCart[i])
        )
    }
}

function createCart() {
    for (let i = 0; i < catalogList.length; i++) {
        const newDiv = document.createElement("div");
        let text = "Название: " + catalogList[i].name + " " + "Цена: " + catalogList[i].price;
        newDiv.insertAdjacentHTML("afterbegin", "<p>" + text + "</p>");
        const button = document.createElement("button");
        button.textContent = "Купить";
        button.addEventListener("click", function () {
            catalogList.push(
                new Item(catalogList[i].name, catalogList[i].price)
            );
            updateCart();
        });
        newDiv.appendChild(button);
        newDiv.classList.add("card");
        catalog.appendChild(newDiv);
    }
}

function getSum() {
    return catalogList.reduce(function (acc, elem) {
        return acc + elem.price;
    }, 0)
}


function cartItem() {
    let text = "";

    if (catalogList.length) {
        text = "В корзине: " + catalogList.length + " товаров на сумму " + getSum() + " рублей";
    }
    else {
        text = "Корзина пуста";
    }
    const newDiv = document.createElement("div");
    newDiv.insertAdjacentHTML("afterbegin", "<p>" + text + "</p>");
    newDiv.classList.add("cart");
    catalog.appendChild(newDiv);
}

function updateCart() {
    let text = "В корзине: " + catalogList.length + " товаров на сумму " + getSum() + " рублей";
    const cart = document.querySelector(".cart");
    const p = cart.querySelector("p");
    p.textContent = text;
}

addItemToCart();
createCart();
cartItem();