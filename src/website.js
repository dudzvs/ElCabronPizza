import loadHome from "./home";

function createHeader() {
  const header = document.createElement("header");
  header.classList.add("header");

  const restaurantName = document.createElement('h1');
  restaurantName.classList.add("restaurant-name");
  restaurantName.textContent = "El Cabron";

  header.appendChild(restaurantName);
  header.appendChild(createNav())

  return header;
}

function createNav() {
  const nav = document.createElement('nav');
  const homeBtn = document.createElement('button');
  homeBtn.classList.add('button-nav');
  homeBtn.textContent = 'Home';

  homeBtn.onclick = () => loadHome();

  const menuBtn= document.createElement('button');
  menuBtn.classList.add('button-nav');
  menuBtn.textContent = 'Menu';
  //loadMenu()

  const contactBtn = document.createElement('button');
  contactBtn.classList.add('button-nav');
  contactBtn.textContent = 'Contact';
  //loadContact()

  nav.appendChild(homeBtn);
  nav.appendChild(menuBtn);
  nav.appendChild(contactBtn);

  return nav;
}

function createMain() {
  const main = document.createElement('main');
  main.classList.add('main');
  main.setAttribute("id", "main");

  return main
}

function initizalizeWebsite() {
  const content = document.getElementById('content');

  content.appendChild(createHeader());
  content.appendChild(createMain());

  loadHome();
}

export default initizalizeWebsite;