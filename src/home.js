function createHomePage() {
  const home = document.createElement('div');
  home.classList.add('home');

  home.appendChild(copy("No El Cabron, cada pizza é uma obra-prima artesanal, preparada com paixão e ingredientes selecionados."));
  home.appendChild(copy("Explore sabores autênticos que elevam a experiência gastronômica a um novo patamar."));

  return home;
}

function copy(text) {
  const paragraph = document.createElement('p');
  paragraph.textContent = text;
  return paragraph;
}

function loadHome() {
  const main = document.getElementById('main');
  main.textContent = '';
  main.appendChild(createHomePage());
}

export default loadHome;