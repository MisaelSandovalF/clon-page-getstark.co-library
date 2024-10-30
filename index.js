
const enlaces = document.querySelectorAll(".nav__item ");
const enlacesLaptop = document.querySelectorAll(".nav-laptop__item");


enlaces.forEach((link) => {
  link.addEventListener("click", function (event) {

    enlaces.forEach((el) => el.classList.remove("active"));

    this.classList.add("active");
  });
});


enlacesLaptop.forEach((link) => {
  link.addEventListener("click", function (event) {

    enlacesLaptop.forEach((el) => el.classList.remove("active"));

    this.classList.add("active");
  });
});

const btnShowMenu = document.getElementById("show-menu");
const divMenuMobile = document.getElementById("menu-mobile");
const arrow = document.getElementById("arrow");

btnShowMenu.addEventListener("click", function () {
  if (divMenuMobile.style.display === "none") {
    divMenuMobile.style.display = "block";
    arrow.textContent = "keyboard_arrow_up";
  } else {
    divMenuMobile.style.display = "none";
    arrow.textContent = " keyboard_arrow_down ";
  }
});

const btnShowMenuLaptop = document.getElementById("show-menu-laptop");
const divMenuMobileLaptop = document.getElementById("menu-mobile-laptop");
const arrowLoptop = document.getElementById("arrow-laptop");

btnShowMenuLaptop.addEventListener("click", function () {
  if (divMenuMobileLaptop.style.display === "none") {
    divMenuMobileLaptop.style.display = "block";
    arrow.textContent = "keyboard_arrow_up";
  } else {
    divMenuMobileLaptop.style.display = "none";
    arrow.textContent = " keyboard_arrow_down ";
  }
});

const btnHamburgerMenu = document.getElementById("btn-hamburger-menu");
const divHamburgerMenu = document.getElementById("hamburger-menu");
const hamburgerIcon = document.getElementById("hamburger-icon");

btnHamburgerMenu.addEventListener("click", function () {
  if (divHamburgerMenu.style.display === "none") {
    divHamburgerMenu.style.display = "block";
    hamburgerIcon.textContent = "close";
  } else {
    divHamburgerMenu.style.display = "none";
    hamburgerIcon.textContent = " menu ";
  }
});
