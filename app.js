// Navigation section

const navButton = document.getElementById("bars");
const closeButton = document.getElementById("close-button");
const links = document.getElementById("links");
const item = document.querySelectorAll(".item");
navButton.addEventListener("click", () => {
  links.style.right = "0";
});

closeButton.addEventListener("click", () => {
  links.style.right = "-300px";
});

// Shop section

for (let x = 0; x < item.length; x++) {
  item[x].addEventListener("click", () => {
    location.href = "single-product.html";
  });
}
