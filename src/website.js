import loadHome from "./home";

function createHeader() {
  const header = document.createElement("header");
  header.classList.add("header");

  const restaurantName = document.createElement('h1');
  restaurantName.classList.add("restaurant-name");
  restaurantName.textContent = "El Cabron";

  header.appendChild(restaurantName);

  return header;
}

function initizalizeWebsite() {
  const content = document.getElementById('content');
  content.appendChild(createHeader());
}

export default initizalizeWebsite;