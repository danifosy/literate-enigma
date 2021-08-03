import './style.css';
import { createElement } from './utils/createElement';
import { characterCards } from './components/character/character';

const app = document.querySelector<HTMLDivElement>('#app');

const mainElement = createElement('main', {
  className: 'container',
  childElements: [
    createElement('img', {
      src: 'https://help.redbubble.com/hc/article_attachments/360002309526/Rick_and_Morty_-_logo__English_.png',
      className: 'headerLogo',
    }),
    createElement('img', {
      src: 'https://static1.cbrimages.com/wordpress/wp-content/uploads/2021/06/Rick-and-Morty-Movie-Will-Happen-Header.jpg',
      className: 'headerImg',
    }),
    createElement('input', {
      className: 'searchBar',
      placeholder: 'Dive into the world of Rick and Morty...',
    }),
    createElement('h2', { innerText: 'Your character of the day is:' }),
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
  mainElement.append(characterCards());
}

//mainElement.append(title, subTitle, characterSearch, characterCards);
