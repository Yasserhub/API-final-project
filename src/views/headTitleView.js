import { initWelcomePage } from '../pages/welcomePage.js';

export const createHeadTitleElement = (pageTitle) => {
  const element = document.createElement('header');
  const home = document.createElement('div');

  home.innerHTML = String.raw`
   <a href="#" class="home_page">Main Page</a>
   <h2 class="page_title">${pageTitle}</h2>
  `;
  home.addEventListener('click', initWelcomePage);
  element.appendChild(home);

  return element;
};
