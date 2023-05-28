// Aside menu contents
// import { asideMenuData } from "./Data/AsideMenu";

const AsideMenuItems = document.querySelectorAll(".aside__menu a");

// asideMenuData.map(menu => {
//     AsideMenu.innerHTML = `
//     <div class="menu__item">
//         <span>${menu.icon}</span>
//         <h4>${menu.name}</h4>
//     </div>`
// })

AsideMenuItems.forEach(item => {
    item.addEventListener("click", () => {
        item.classList.toggle("active");
    })
})


//Open and close side menu

const openBtn = document.querySelector("#open-btn");
const closeBtn = document.querySelector("#close-btn");
const aside = document.querySelector(".dashboard__left");

openBtn.addEventListener("click", () => {
    aside.style.left = '0'
})

closeBtn.addEventListener("click", () => {
    aside.style.left = '-100%'
})


//Theme Mode Toggler
// const lightTheme = document.querySelector();
// const darkTheme = document.querySelector();
const themeToggler = document.querySelector(".theme");
const body = document.querySelector("body")


themeToggler.addEventListener("click", () => {
    body.classList.toggle("dark__theme")
})

//Table Data

const products = [
    {
        id: 1143155,
        product: "Acer Nitro 5",
        img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
        customer: "John Smith",
        date: "1 March",
        amount: 785,
        method: "Cash on Delivery",
        status: "Approved",
    },
    {
        id: 2235235,
        product: "Playstation 5",
        img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
        customer: "Michael Doe",
        date: "1 March",
        amount: 900,
        method: "Online Payment",
        status: "Pending",
    },
    {
        id: 2342353,
        product: "Redragon S101",
        img: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg",
        customer: "John Smith",
        date: "1 March",
        amount: 35,
        method: "Cash on Delivery",
        status: "Pending",
    },
    {
        id: 2357741,
        product: "Razer Blade 15",
        img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
        customer: "Jane Smith",
        date: "1 March",
        amount: 920,
        method: "Online",
        status: "Approved",
    },
    {
        id: 2342355,
        product: "ASUS ROG Strix",
        img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
        customer: "Harold Carol",
        date: "1 March",
        amount: 2000,
        method: "Online",
        status: "Pending",
    },
];

const productsContainer = document.querySelector(".table table tbody");

// const productsContent = document.querySelector(".table");

products.map(product => {
    productsContainer.innerHTML = `
    <tr>
    <td>${product.product}</td>
    <td>${product.id}</td>
    <td>${product.method}</td>
    <td class="green">${product.status}</td>
    <td>Details</td>
    </tr>`
}).join();



