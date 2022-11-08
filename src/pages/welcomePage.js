import { USER_INTERFACE_ID } from '../constants.js';
import { createWelcomeElement } from '../views/welcomeView.js';
import { initNewsPage } from './newsPage.js';

export const initWelcomePage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const welcomeElement = createWelcomeElement();
  userInterface.appendChild(welcomeElement);

  const image_button = document.querySelectorAll('.image_button_styling');

  for (let i = 0; i < image_button.length; i++) {
    image_button[i].addEventListener('click', (el) => {
      statNewsShowing(el.target.id, el.target.alt);
    });
  }
};

const statNewsShowing = (APIsOfselectedImageButton, pageTitle) => {
  initNewsPage(APIsOfselectedImageButton, pageTitle);
};
