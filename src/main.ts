import './style.css';
import { Character } from './types';
import { createElement } from './utils/createElement';
import { getCharacters } from './utils/api';
import { createCharacterCards } from './components/character/character';

const app = document.querySelector<HTMLDivElement>('#app');

const characters: Character[] = await getCharacters();

const mainElement = createElement('main', {
  className: 'container',
  childElements: [
    createElement('img', {
      src: 'https://help.redbubble.com/hc/article_attachments/360002309526/Rick_and_Morty_-_logo__English_.png',
      className: 'headerLogo',
    }),

    createElement('input', {
      className: 'searchBar',
      placeholder: 'Dive into the world of Rick and Morty...',
    }),
    createElement('h2', { innerText: 'Your character of the day is:' }),
    ...characters.map((character) => createCharacterCards(character)),
  ],
});

if (app !== null) {
  app.append(mainElement);
}

//mainElement.append(title, subTitle, characterSearch, characterCards);
