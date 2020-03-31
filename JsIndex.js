// const boutonAlert = document.getElementsByClassName('boutonAlert');

// boutonAlert.addEventListener('click', (e) => {
//   alert('Page à venir !');
// });

const aideMail = document.getElementById('aide-mail');

const nomElts = document.getElementById('nom');

const aideSelect = document.getElementById('aide-select');

const aideMsg = document.getElementById('aide-msg');

const aidePub = document.getElementById('aide-pub');

nomElts.addEventListener('focus', (e) => {
  document.getElementById('aide-nom').textContent = 'Entrez votre nom complet.';
});

nomElts.addEventListener('blur', (e) => {
  document.getElementById('aide-nom').textContent = '';
});

document.getElementById('email').addEventListener('blur', (e) => {
  const regex = /.+@.+\..+/; // xxx@yyy.yy

  let mailValide = '';

  if (!regex.test(e.target.value)) {
    mailValide = 'Votre adresse est invalide';
  }

  aideMail.textContent = mailValide;

  aideMail.style.color = 'red';
});

// Commence par un ou plusieurs caractères => .+

// Contient ensuite le caractère @ => @

// Puis contient ensuite encore un ou plusieurs caractères => .+

// Prend ensuite le caractère . => \.

// Et finit par un ou plusieurs caractères => .+
