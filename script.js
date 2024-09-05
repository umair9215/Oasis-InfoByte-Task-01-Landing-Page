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




  sections.forEach( sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height) {
        navLinks.forEach( links => {
            links.classList.remove('active');
            document.querySelector('header nav ul li a[href*=' + id + ']').classList.add('active');
        });
    };
});



};


let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav ul li a');

