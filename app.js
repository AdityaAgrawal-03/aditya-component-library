const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav-links");
const navLinks = document.querySelectorAll(".nav-links li");
const hamburger = document.querySelector(".hamburger")

const navSlide = () => {
  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-open");
    hamburger.classList.toggle("hamburger-open")
    
    navLinks.forEach((link, index) => {
      link.style.animation ? link.style.animation = "" : 
      link.style.animation = `navLinkFade 0.3s ease forwards 0.3s`;
    })
  })
}

navSlide();