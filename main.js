// Designed by:  Mauricio Bucardo
// Original image:
// https://dribbble.com/shots/5619509-Animated-Tab-Bar

"use strict"; 

const body = document.body;
const bgColorsBody = ["#ffb457", "#ff96bd", "#9999fb", "#ffe797", "#cffff1"];
const menu = body.querySelector(".menu");
const menuItems = menu.querySelectorAll(".menu__item");
const menuBorder = menu.querySelector(".menu__border");
let activeItem = menu.querySelector(".active");

function clickItem(item, index) {

    menu.style.removeProperty("--timeOut");
    
    if (activeItem == item) return;
    
    if (activeItem) {
        activeItem.classList.remove("active");
    }

    
    item.classList.add("active");
    body.style.backgroundColor = bgColorsBody[index];
    activeItem = item;
    offsetMenuBorder(activeItem, menuBorder);
    
    
}

function offsetMenuBorder(element, menuBorder) {

    const offsetActiveItem = element.getBoundingClientRect();
    const left = Math.floor(offsetActiveItem.left - menu.offsetLeft - (menuBorder.offsetWidth  - offsetActiveItem.width) / 2) +  "px";
    menuBorder.style.transform = `translate3d(${left}, 0 , 0)`;

}

offsetMenuBorder(activeItem, menuBorder);

menuItems.forEach((item, index) => {

    item.addEventListener("click", () => clickItem(item, index));
    
})

window.addEventListener("resize", () => {
    offsetMenuBorder(activeItem, menuBorder);
    menu.style.setProperty("--timeOut", "none");
});


var dteData = {
    "2024-02-01": {"nifty": "0", "banknifty": "6", "finnifty": "5"},
    "2024-02-02": {"nifty": "6", "banknifty": "5", "finnifty": "4"},
    "2024-02-05": {"nifty": "3", "banknifty": "2", "finnifty": "1"},
    "2024-02-06": {"nifty": "2", "banknifty": "1", "finnifty": "0"},
    "2024-02-07": {"nifty": "1", "banknifty": "0", "finnifty": "6"},
    "2024-02-08": {"nifty": "0", "banknifty": "6", "finnifty": "5"},
    "2024-02-09": {"nifty": "6", "banknifty": "5", "finnifty": "4"},
    "2024-02-12": {"nifty": "3", "banknifty": "2", "finnifty": "1"},
    "2024-02-13": {"nifty": "2", "banknifty": "1", "finnifty": "0"},
    "2024-02-14": {"nifty": "1", "banknifty": "0", "finnifty": "6"},
    "2024-02-15": {"nifty": "0", "banknifty": "6", "finnifty": "5"},
    "2024-02-16": {"nifty": "6", "banknifty": "5", "finnifty": "4"},
    "2024-02-19": {"nifty": "3", "banknifty": "2", "finnifty": "1"},
    "2024-02-20": {"nifty": "2", "banknifty": "1", "finnifty": "0"},
    "2024-02-21": {"nifty": "1", "banknifty": "0", "finnifty": "6"},
    "2024-02-22": {"nifty": "0", "banknifty": "7", "finnifty": "5"},
    "2024-02-23": {"nifty": "6", "banknifty": "6", "finnifty": "4"},
    "2024-02-26": {"nifty": "3", "banknifty": "3", "finnifty": "1"},
    "2024-02-27": {"nifty": "2", "banknifty": "2", "finnifty": "0"},
    "2024-02-28": {"nifty": "1", "banknifty": "1", "finnifty": "6"}
  };

document.getElementById("nifty").addEventListener("click", displayDTENifty);

function displayDTENifty() {
    const todaysDate = new Date();

    console.log(todaysDate.toISOString().substring(0, 10));

    for (const [key, value] of Object.entries(dteData)) {
        console.log(`${key}: ${value}`);
        if(key == todaysDate.toISOString().substring(0, 10)){
            document.getElementById("dte").innerText = value.nifty;
        }
    }

}

document.getElementById("banknifty").addEventListener("click", displayDTEBankNifty);

function displayDTEBankNifty() {
    const todaysDate = new Date();

    console.log(todaysDate.toISOString().substring(0, 10));

    for (const [key, value] of Object.entries(dteData)) {
        console.log(`${key}: ${value}`);
        if(key == todaysDate.toISOString().substring(0, 10)){
            document.getElementById("dte").innerText = value.banknifty;
        }
    }

}

document.getElementById("finnifty").addEventListener("click", displayDTEFinNifty);

function displayDTEFinNifty() {
    const todaysDate = new Date();

    console.log(todaysDate.toISOString().substring(0, 10));

    for (const [key, value] of Object.entries(dteData)) {
        console.log(`${key}: ${value}`);
        if(key == todaysDate.toISOString().substring(0, 10)){
            document.getElementById("dte").innerText = value.finnifty;
        }
    }

}
