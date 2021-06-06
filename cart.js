"use strict"

const catalog = document.querySelector("#catalog");
const $popup = document.querySelector("#popup");
const $pages = $popup.querySelectorAll(".popup_inner");
const $prvBtn = document.querySelector("#previouse");
const $nxtBtn = document.querySelector("#next");


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
    for (let i = 0; i < itemCart.length; i++) {
        const newDiv = document.createElement("div");
        let text = "Название: " + catalogList[i].name + " " + "Цена: " + catalogList[i].price;
        newDiv.insertAdjacentHTML("afterbegin", "<p>" + text + "</p>");
        const button = document.createElement("button");
        button.textContent = "Купить";
        button.addEventListener("click", function () {
            catalogList.push(
                new Item(...itemCart[i])
            );
            updateCart();
            drawCartItems();
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
    newDiv.addEventListener("click", function () {
        $popup.style.display = "block";
        drawCartItems();
    })
    catalog.appendChild(newDiv);
}

function updateCart() {
    let text = "В корзине: " + catalogList.length + " товаров на сумму " + getSum() + " рублей";
    const cart = document.querySelector(".cart");
    const p = cart.querySelector("p");
    p.textContent = text;
}

function drawCartItems() {
    const $itemList = document.querySelector("#cart_inner");
    $itemList.textContent = '';
    catalogList.forEach(function (item, i) {
        drawCartItem(item, i, $itemList);
    })
    changePage();
}

function drawCartItem(item, id, $container) {
    const html = `<div class="item">
        <p> Name: ${item.name} Price: ${item.price}</p>
        <button data-id="${id}">delete</button>
    </div>`
    $container.insertAdjacentHTML("beforeend", html);
}

const $itemList = document.querySelector("#cart_inner");

$itemList.addEventListener("click", function (e) {
    if (e.target.tagName === "BUTTON") {
        const index = Number(e.target.dataset.id);
        catalogList = catalogList.filter(function (item, i) {
            return i !== index
        });
        drawCartItems();
        updateCart();
    }
})

function changePage() {
    let currentPage = 0;
    if (currentPage === 0) {
        $prvBtn.style.display = "none";
    }

    function nxtPage() {
        $pages[currentPage].style.display = "none";
        if (currentPage === $pages.length - 1) {
            currentPage = 0;
            $popup.style.display = "none";
        }
        else {
            currentPage = currentPage + 1;
            $prvBtn.style.display = "block";
            $pages[currentPage].style.display = "block";
        }
    }

    function prvPage() {
        $pages[currentPage].style.display = "none";
        if (currentPage !== 0) {
            currentPage = currentPage - 1
        }
        if (currentPage === 0) {
            $prvBtn.style.display = "none";
        }
        $pages[currentPage].style.display = "block";
    }
    $nxtBtn.addEventListener("click", nxtPage);
    $prvBtn.addEventListener("click", prvPage);

    $pages[currentPage].style.display = "block"
}

addItemToCart();
createCart();
cartItem();
