const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.2 }
);

document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));

function toggleSpells(id, element) {
  const container = document.getElementById(id);
  const arrow = element.querySelector(".arrow");
  container.classList.toggle("hidden");
  arrow.classList.toggle("rotate");
}
