function createMenu() {
  const menu = document.createElement('div');
  menu.classList.add('menu');

  menu.appendChild(
    createMenuItem(
      "Basca",
      "Molho, muçarela, bacon, tomates, catupiry"
    )
  );
  
  menu.appendChild(
    createMenuItem(
      "Bianca",
      "Molho, muçarela, chester defumado, provolone e orégano"
    )
  );

  menu.appendChild(
    createMenuItem(
      "Brocolis",
      "Molho, muçarela, brócolis refogado com azeite de oliva"
    )
  );

  menu.appendChild(
    createMenuItem(
      "ElCabron",
      "Molho, muçarela, calabresa apimentada, berinjela, cebola fatiada"
    )
  );

  return menu;
}

function createMenuItem(name, description) {
  const menuItem = document.createElement('div');
  menuItem.classList.add('menu-item');

  const foodName = document.createElement('h2');
  foodName.textContent = name;

  const foodDescription = document.createElement('p');
  foodDescription.textContent = description;

  const foodImg = document.createElement('img');
  foodImg.src = `/src/assets/images/${name.toLowerCase()}.png`;

  menuItem.appendChild(foodImg);
  menuItem.appendChild(foodName);
  menuItem.appendChild(foodDescription);

  return menuItem;
}

function loadMenu() {
  const main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(createMenu());
}

export default loadMenu;