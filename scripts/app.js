const nav_items_links = document.querySelector('.nav-items-links')
const btn_menu_toggle = document.querySelector('.nav-items-toggle-btn').addEventListener('click',(e)=>{
    nav_items_links.classList.toggle('active')
})