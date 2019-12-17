
var firstContentSection = document.querySelector('.firstspan');
var secondContentSection = document.querySelector('.secondspan');
var thirdContentSection = document.querySelector('.thirdspan');
var firstButton = document.getElementById('cta1');
var secondButton = document.getElementById('cta2');
var thirdButton = document.getElementById('cta3');

function firstButtonFunction() {
  if (firstContentSection.classList.contains('hide')) {
    firstContentSection.classList.remove('hide');
    firstContentSection.classList.add('show');
    firstButton.innerHTML = 'READ LESS';
  } else {
    firstContentSection.classList.add('hide');
    firstContentSection.classList.remove('show');
    firstButton.innerHTML = 'READ MORE';
  }
}

function secondButtonFunction() {
  if (secondContentSection.classList.contains('hide')) {
    secondContentSection.classList.remove('hide');
    secondContentSection.classList.add('show');
    secondButton.innerHTML = 'READ LESS';
  } else {
    secondContentSection.classList.add('hide');
    secondContentSection.classList.remove('show');
    secondButton.innerHTML = 'READ MORE';
  }
}

function thirdButtonFunction() {
  if (thirdContentSection.classList.contains('hide')) {
    thirdContentSection.classList.remove('hide');
    thirdContentSection.classList.add('show');
    thirdButton.innerHTML = 'READ LESS';
  } else {
    thirdContentSection.classList.add('hide');
    thirdContentSection.classList.remove('show');
    thirdButton.innerHTML = 'READ MORE';
  }
}

function readMore(e) {
  if (e.target.classList.contains('cta1')) {
    firstButtonFunction();
  } else if (e.target.classList.contains('cta2')) {
    secondButtonFunction();
  } else if (e.target.classList.contains('cta3')) {
    thirdButtonFunction();
  }
}

document.querySelector('.section-blog').addEventListener('click', readMore);
