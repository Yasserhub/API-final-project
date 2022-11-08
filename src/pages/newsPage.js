import { USER_INTERFACE_ID } from '../constants.js';
import { createHeadTitleElement } from '../views/headTitleView.js';

import { main } from '../api/api.js';

export const initNewsPage = (urlOfSelectedButton, pageTitle) => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const titleElement = createHeadTitleElement(pageTitle);
  userInterface.appendChild(titleElement);

  main(urlOfSelectedButton);
};

export function selectedNews() {
  var link = document.createElement('a');
  link.href = this.name;
  link.target = '_blank';
  link.click();
}
