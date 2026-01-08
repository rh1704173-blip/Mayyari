/* =========================================
   MOBILE MENU TOGGLE
========================================= */
function toggleMenu(){
  const nav = document.getElementById("nav");

  if(nav.style.display === "flex"){
    nav.style.display = "none";
  } else {
    nav.style.display = "flex";
  }
}

/* =========================================
   CLOSE MENU WHEN LINK IS CLICKED (MOBILE)
========================================= */
const navLinks = document.querySelectorAll("#nav a");

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    if(window.innerWidth <= 900){
      document.getElementById("nav").style.display = "none";
    }
  });
});

/* =========================================
   REVEAL ANIMATION ON SCROLL
========================================= */
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll(){
  reveals.forEach(el => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    const revealPoint = 100;

    if(elementTop < windowHeight - revealPoint){
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

/* =========================================
   OPTIONAL: ACTIVE NAV LINK ON SCROLL
========================================= */
const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll("#nav a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 150;
    if(pageYOffset >= sectionTop){
      current = section.getAttribute("id");
    }
  });

  navItems.forEach(a => {
    a.classList.remove("active");
    if(a.getAttribute("href") === `#${current}`){
      a.classList.add("active");
    }
  });
});

/* =========================================
   OPTIONAL: SCROLL TO TOP (READY)
========================================= */
// Uncomment if you add a button later
/*
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {
  topBtn.style.display = window.scrollY > 500 ? "block" : "none";
});

topBtn.addEventListener("click", () => {
  window.scrollTo({ top:0, behavior:"smooth" });
});
*/
/* =========================================
   CONTACT FORM VIA WHATSAPP
========================================= */
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(e){
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if(name && email && message){
    const phone = "923490481896"; // Your WhatsApp number (without +)
    const text = `Hello! My name is ${name}.%0AEmail: ${email}%0AMessage: ${message}`;
    const url = `https://wa.me/${phone}?text=${text}`;
    window.open(url, "_blank");
  } else {
    alert("Please fill all fields!");
  }
});
