"use strict"

const catalog = document.querySelector("#catalog");

let itemCart = [["Fish", 10], ["Meat", 20], ["Fruit", 30]];

let catalogList = [];

function addItemToCart() {
    class Item {
        constructor(name, price) {
            this.name = name;
            this.price = price;
        }
    }
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
        newDiv.classList.add("cart");
        catalog.appendChild(newDiv);
    }
}

addItemToCart();
createCart();