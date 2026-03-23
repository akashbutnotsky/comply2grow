document.addEventListener("DOMContentLoaded", function () {

    // HAMBURGER
    const hamburger = document.querySelector(".hamburger");
    const nav = document.getElementById("navLinks");

    if (hamburger) {
        hamburger.addEventListener("click", function () {
            nav.classList.toggle("active");
        });
    }

    // MOBILE DROPDOWN
    const dropdowns = document.querySelectorAll(".dropdown");

    dropdowns.forEach(drop => {
        const link = drop.querySelector("a");

        link.addEventListener("click", function (e) {

            if (window.innerWidth <= 768) {
                e.preventDefault();
                drop.classList.toggle("active");
            }

        });
    });

});










document.querySelectorAll(".dropdown > a").forEach(item => {
  item.addEventListener("click", function(e) {
    if (window.innerWidth <= 900) {
      e.preventDefault();
      this.parentElement.classList.toggle("active");
    }
  });
});


/* CSR slider */
const csrSlides = document.querySelectorAll(".csr-slide");
let csrIndex = 0;

if (csrSlides.length > 0) {
    setInterval(() => {
        csrSlides[csrIndex].classList.remove("active");
        csrIndex = (csrIndex + 1) % csrSlides.length;
        csrSlides[csrIndex].classList.add("active");
    }, 4000);
}