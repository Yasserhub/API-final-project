import {
  BBC_NEWS_ID,
  WALL_STREET_ID,
  TECH_CRUNCH_ID,
  APPLE_NEWS_ID,
} from '../constants.js';

export const createWelcomeElement = () => {
  const element = document.createElement('div');

  element.classList.add('content');
  element.innerHTML = String.raw`

    <h1 class="welc">See the World through One Window</h1>

    <input id="${BBC_NEWS_ID}" class="image_button_styling" type="image" src="./src/assets/channels4_profile.jpeg" 
        name="submit" alt="BBC News"/> 

   <input id="${WALL_STREET_ID}" class="image_button_styling" type="image" src="./src/assets/wsj_0.jpeg" 
        name="submit" alt="Wall Street News"/>  
        
   <input id="${TECH_CRUNCH_ID}" class="image_button_styling" type="image" src="./src/assets/techcrunch-logo.png" 
        name="submit" alt="Tech Crunch News"/>  

   <input id="${APPLE_NEWS_ID}" class="image_button_styling" type="image" src="./src/assets/apple-intro.jpeg" 
        name="submit" alt="Apple News"/>  
        
  
  `;
  return element;
};
