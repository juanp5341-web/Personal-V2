// ========== DYNAMIC YEAR ==========
document.getElementById("year").textContent = new Date().getFullYear();

// ========== SMOOTH SCROLL ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// ========== IMAGE HOVER ZOOM W/ LIGHTBOX ==========
const cards = document.querySelectorAll(".card img, .card video");
const lightbox = document.createElement("div");
lightbox.id = "lightbox";
document.body.appendChild(lightbox);

cards.forEach(item => {
  item.addEventListener("click", () => {
    lightbox.classList.add("active");
    const clone = item.cloneNode(true);
    while (lightbox.firstChild) {
      lightbox.removeChild(lightbox.firstChild);
    }
    lightbox.appendChild(clone);
  });
});

lightbox.addEventListener("click", () => {
  lightbox.classList.remove("active");
});

// ========== SCROLL FADE-IN EFFECT ==========
const faders = document.querySelectorAll(".card, .hero__text, .contact-form");

const appearOptions = {
  threshold: 0.2,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("fade-in");
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});
