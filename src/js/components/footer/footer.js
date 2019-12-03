/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable no-multiple-empty-lines */


import footerTemplate from '../../templates/footer.hbs';

var footerContainer = document.getElementById('footer-hbs');

if (footerContainer) {
  footerContainer.innerHTML = footerTemplate({});
}
