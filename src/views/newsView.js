import { USER_INTERFACE_ID } from '../constants.js';
import { selectedNews } from '../pages/newsPage.js';

const userInterface = document.getElementById(USER_INTERFACE_ID);
userInterface.innerHTML = '';

export function newsTitle(title) {
  const element = document.createElement('div');
  element.classList.add('news_title');
  element.innerHTML = String.raw` <h2>${title} </h2>`;

  return element;
}

export function newsDescription(description) {
  const element = document.createElement('div');
  element.classList.add('news_description');
  element.innerHTML = String.raw` <p> ${description} </p>`;

  return element;
}

export function showingimage(imagesrc, imagealt, url) {
  const element = document.createElement('input');
  element.classList.add('news_image');

  element.classList.add('newsImage');
  element.src = imagesrc;
  element.alt = imagealt;
  element.type = 'image';
  element.name = url;

  element.addEventListener('click', selectedNews);

  return element;
}

export function fetchingNews(data) {
  const news_list = document.createElement('ul');
  data.articles.length = 10;
  data.articles.forEach((el) => {
    const news_item = document.createElement('li');
    const image = showingimage(el.urlToImage, el.author, el.url);
    const title = newsTitle(el.title);
    const description = newsDescription(el.description);
    title.appendChild(image);
    title.appendChild(description);
    news_item.appendChild(title);
    news_list.appendChild(news_item);
  });

  userInterface.appendChild(news_list);
}
