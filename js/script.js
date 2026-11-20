const menu = document.getElementById("menu");
const menuBtn = document.getElementById("menu-btn");
const linksMenu = document.querySelectorAll(".link-menu");

menuBtn.addEventListener("click", () => {
  const isOpen = menu.classList.toggle("is-open");
  document.body.classList.remove("menu-open");
});

linksMenu.forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("is-open");
    menuBtn.setAttribute("aria-expanded", "false");
    document.body.classList.remove("menu-open");
  });
});
