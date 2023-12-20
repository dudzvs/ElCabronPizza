function createContactPage () {
  const contact = document.createElement('div');
  contact.classList.add('contact');

  const phoneNumber = document.createElement('p');
  phoneNumber.textContent = '+55 (17) 98844-4860';

  const adress = document.createElement('p');
  adress.textContent = 'Av. San Vito 65, São Paulo';

  const location = document.createElement('img');
  location.src = '../src/assets/images/rota.PNG';

  contact.appendChild(phoneNumber);
  contact.appendChild(adress);
  contact.appendChild(location);

  return contact;
}

function loadContact() {
  const main = document.getElementById('main');
  main.textContent = '';
  main.appendChild(createContactPage());
}

export default loadContact;