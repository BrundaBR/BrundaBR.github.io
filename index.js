ham = document.getElementsByClassName("hamburger")[0];
nav_links = document.getElementsByClassName("nav-links")[0];

ham.addEventListener("click", ()=>{
    console.log("clicked");
    ham.classList.toggle("active");
    nav_links.classList.toggle("active");
});
