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
        item.classList.toggle("active") || item.classList.add("");
    })
})




