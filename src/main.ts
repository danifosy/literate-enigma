import './style.css';
import './utils/createElement';

const app = document.querySelector<HTMLDivElement>('#app');

const mainElement = createElement('main', {
  childElements: [createElement('h1', { innertext: 'Rick and Morty' })],
  createElement,
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

mainElement.append(title, subTitle, characterSearch, characterCards);
