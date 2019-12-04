/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable no-multiple-empty-lines */


import footerTemplate from '../../templates/footer.hbs';

var footerContainer = document.getElementById('footer-hbs');

var footerLinks = [{
  label: 'CONTACT US',
  url: '#',
},
{
  label: 'PRIVACY POLICY',
  url: '#',
},
{
  label: 'TERMS AND CONDITIONS',
  url: '#',
},
];


if (footerContainer) {
  footerContainer.innerHTML = footerTemplate({ footerLinks });
}
