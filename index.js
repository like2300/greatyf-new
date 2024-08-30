const chargement = () => {
  setTimeout(() => {
    document.getElementById("loader").style.display = "none";
    document.getElementById("main-content").classList.remove("opacity-0");
  }, 3000);
};

// mobile nav
// Configuration de la navigation mobile
const openNav = () => {
  const btn = document.getElementById("btn");
  const mobileNav = document.getElementById("moblie_nav");

  // Toggle le menu mobile lorsque l'utilisateur clique sur le bouton
  btn.addEventListener("click", () => {
    mobileNav.classList.add("translate-y-80"); // Cache le menu
    mobileNav.classList.remove("translate-y-0"); // Assure que le menu est fermé
  });

  // Fermer le menu mobile si l'utilisateur clique en dehors du menu ou du bouton
  document.addEventListener("click", (event) => {
    const isClickInsideNav = mobileNav.contains(event.target);
    const isClickOnButton = btn.contains(event.target);

    // Si le clic est à l'extérieur du menu et du bouton, on ferme le menu
    if (!isClickInsideNav && !isClickOnButton) {
      mobileNav.classList.add("translate-y-80"); // Cache le menu
      mobileNav.classList.remove("translate-y-0"); // Assure que le menu est fermé
    }
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
 

// config tailwind
document.addEventListener("DOMContentLoaded", function () {
  AOS.init();
 
  slideFond();
  openNav();  // Appel de la fonction pour la navigation mobile
  chargement(); // S'assurer que la fonction de chargement est appelée
});
