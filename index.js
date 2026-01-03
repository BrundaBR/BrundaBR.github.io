ham = document.getElementsByClassName("hamburger")[0];
nav_links = document.getElementsByClassName("nav-links")[0];

ham.addEventListener("click", ()=>{
    console.log("clicked");
    ham.classList.toggle("active");
    nav_links.classList.toggle("active");
});


const cards = document.querySelector('.cards');
const card = document.querySelector('.card');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');

let index = 0;
const cardWidth = card.offsetWidth +20;


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