const chargement = () => {
  setTimeout(() => {
    document.getElementById("loader").style.display = "none";
    document.getElementById("main-content").classList.remove("opacity-0");
  }, 3000);
};

// mobile nav
// Configuration de la navigation mobile
const openNav = () => {
  const btn = document.getElementById("btn");  // Utilisez "btn" ici
  const mobileNav = document.getElementById("moblie_nav");

  btn.addEventListener("click", () => {
    mobileNav.classList.toggle("translate-y-80");
    mobileNav.classList.toggle("translate-y-0");

  });
};

 

// slide fond for head page

const slideFond = () => {
  const slides = document.querySelectorAll("#carousel div");
  let currentSlide = 0;

  function nextSlide() {
    slides[currentSlide].classList.remove("opacity-100");
    slides[currentSlide].classList.add("opacity-0");
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.remove("opacity-0");
    slides[currentSlide].classList.add("opacity-100");
  }

  setInterval(nextSlide, 3000); // Change l'image toutes les 3 secondes
};

// Initialize Typewriter effect
const effect_typewriter = () => {
  const app = document.getElementById("typing-effect");
  const typewriter = new Typewriter(app, {
    loop: true,
    delay: 500, // Speed of typing effect
    cursor: "|", // Cursor symbol
  });

  typewriter.typeString("Bienvenue sur GreatFy").start();
};

// config tailwind
document.addEventListener("DOMContentLoaded", function () {
  AOS.init();
  effect_typewriter();
  slideFond();
  openNav();  // Appel de la fonction pour la navigation mobile
  chargement(); // S'assurer que la fonction de chargement est appelée
});
