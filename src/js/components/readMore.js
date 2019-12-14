var firstContentSection = document.querySelector('.firstspan');
var secondContentSection = document.querySelector('.secondspan');
var thirdContentSection = document.querySelector('.thirdspan');
var firstButton = document.getElementById('cta1');
var secondButton = document.getElementById('cta2');
var thirdButton = document.getElementById('cta3');

function firstReadMoreFunction() {
  if (firstContentSection.style.display === '' || firstContentSection.style.display === 'none') {
    firstContentSection.style.display = 'inline';
    firstButton.innerHTML = 'READ LESS';
  } else {
    firstContentSection.style.display = 'none';
    firstButton.innerHTML = 'READ MORE';
  }
}

firstButton.addEventListener('click', firstReadMoreFunction);

function secondReadMoreFunction() {
  if (secondContentSection.style.display === '' || secondContentSection.style.display === 'none') {
    secondContentSection.style.display = 'inline';
    secondButton.innerHTML = 'READ LESS';
  } else {
    secondContentSection.style.display = 'none';
    secondButton.innerHTML = 'READ MORE';
  }
}

secondButton.addEventListener('click', secondReadMoreFunction);

function thirdReadMoreFunction() {
  if (thirdContentSection.style.display === '' || thirdContentSection.style.display === 'none') {
    thirdContentSection.style.display = 'inline';
    thirdButton.innerHTML = 'READ LESS';
  } else {
    thirdContentSection.style.display = 'none';
    thirdButton.innerHTML = 'READ MORE';
  }
}

thirdButton.addEventListener('click', thirdReadMoreFunction);
