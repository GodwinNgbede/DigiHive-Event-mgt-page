const navEl = document.querySelector(".navBar");
const menuEl = document.querySelector(".fa-bars");
const iconEl = document.querySelector(".menu-icon");

// function to add the nav to the menu icon on smaller device
function addNavMenu() {
  console.log("clicked");
  navEl.classList.toggle("active");
}

menuEl.addEventListener("click", addNavMenu);
