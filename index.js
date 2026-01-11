document.addEventListener("DOMContentLoaded", () => {
  const ham = document.querySelector(".hamburger");
  const nav_links = document.querySelector(".nav-links");

  if (ham && nav_links) {
    ham.addEventListener("click", () => {
      console.log("CLicked");
      console.log("nav_links before:", nav_links.className);
      ham.classList.toggle("active");
      nav_links.classList.toggle("active");
      console.log("nav_links after:", nav_links.className);
    });
  } else {
    console.error("Hamburger or nav-links element not found");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelector('.cards');
  const card = document.querySelector('.card');
  const next = document.querySelector('.next');
  const prev = document.querySelector('.prev');

  if (cards && card && next && prev) {
    let index = 0;
    const cardWidth = card.offsetWidth + 20;

    next.addEventListener('click', () => {
      if (index < cards.children.length - 1) {
        index++;
        cards.style.transform = `translateX(-${index * cardWidth}px)`;
      }
    });

    prev.addEventListener('click', () => {
      if (index > 0) {
        index--;
        cards.style.transform = `translateX(-${index * cardWidth}px)`;
      }
    });
  }
});