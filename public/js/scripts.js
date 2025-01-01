const sidebarToggle = document.getElementById('sidebarToggle');
const close = document.getElementById('close');
const layoutSidenav_content = document.getElementById('layoutSidenav_content');
const layoutSidenav_nav = document.getElementById('layoutSidenav_nav');



sidebarToggle.addEventListener("click", () => {
    sidebarToggle.style.display = "none";
    layoutSidenav_nav.style.display = "block";
    layoutSidenav_content.style.marginLeft = "15%";

})

close.addEventListener("click", () => {
    sidebarToggle.style.display = "block";
    layoutSidenav_content.style.marginLeft = "0%";
    layoutSidenav_nav.style.display = "none";

})