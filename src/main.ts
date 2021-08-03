import './style.css';
import { createElement } from './utils/createElement';

const app = document.querySelector<HTMLDivElement>('#app');

const mainElement = createElement('main', {
  className: 'container',
  childElements: [
    createElement('h1', { innerText: 'Rick and Morty' }),
    createElement('h2', { innerText: 'Lorem ipsum dolor sit amet' }),
    createElement('input', {
      placeholder: 'Dive into the world of Rick and Morty...',
    }),
  ],
});

/* const mainElement = document.createElement('main');
mainElement.className = 'container';

const title = document.createElement('h1');
title.innerText = 'Rick and Morty';

const subTitle = document.createElement('h2');
subTitle.innerText = 'Lorem ipsum dolor sit amet,';

const characterSearch = document.createElement('input');
characterSearch.placeholder = 'Dive into the world of Rick and Morty...';

const characterCards = document.createElement('div');
characterCards.className = 'character-cards';

const characterCardArticle = document.createElement('article');
characterCardArticle.className = 'cc-article';

const characterCardHeader = document.createElement('h3');
characterCardHeader.className = 'cc-header';

const characterCardImg = document.createElement('img');
characterCardImg.className = 'cc-img';

characterCardArticle.append(characterCardHeader, characterCardImg);
characterCards.append(characterCardArticle);*/

if (app !== null) {
  app.append(mainElement);
}

//mainElement.append(title, subTitle, characterSearch, characterCards);
