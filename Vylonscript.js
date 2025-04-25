function toggleCountry(card) {
  const description = card.querySelector(".country-description");
  const arrow = card.querySelector(".arrow");
  description.classList.toggle("hidden");
  arrow.classList.toggle("rotate");
}
