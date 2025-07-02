// Navbar Toggle
const menuBtn = document.getElementById("menu-btn");
const navbarMenu = document.getElementById("menu-links");
const closeMenuBtn = document.getElementById("close-menu-btn");

menuBtn.onclick = () => {
  navbarMenu.classList.add("active");
};

closeMenuBtn.onclick = () => {
  navbarMenu.classList.remove("active");
};

// Search Box Toggle
const searchBtn = document.getElementById("search-btn");
const searchForm = document.getElementById("search-form");

searchBtn.onclick = () => {
  searchForm.style.display =
    searchForm.style.display === "flex" ? "none" : "flex";
};

// Cart Toggle
const cartBtn = document.getElementById("cart-btn");
const cartItems = document.getElementById("cart-items");

cartBtn.onclick = () => {
  cartItems.style.display =
    cartItems.style.display === "block" ? "none" : "block";
};
