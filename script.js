const navbar = document.querySelector(".nav-links");
const toggle = document.getElementById("toggle");
const navItem = document.querySelector(".navitem");

document.querySelectorAll(".menu-dropdown > a").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    link.nextElementSibling.classList.toggle("active");
  });
});

document.querySelectorAll(".submenu-dropdown > a").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    link.nextElementSibling.classList.toggle("active");
  });
});

window.onscroll = () => {
  toggle.onclick = function () {
    navbar.classList.toggle("active");
    toggle.classList.toggle("fa-x");
  };

  navbar.classList.remove("active");
  toggle.classList.remove("fa-x");
};
