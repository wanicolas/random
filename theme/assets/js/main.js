// Fichier JavaScript principal pour ton thème

document.addEventListener("DOMContentLoaded", function () {
  console.log("Thème Ghost chargé !");

  // Exemple : Smooth scroll pour les ancres
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  });

  // Tu peux ajouter tes scripts personnalisés ici
});
