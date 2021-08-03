import { createElement } from '../../utils/createElement';

export const characterCards = createElement('div', {
  className: 'cc-grid',
  childElements: [
    createElement('article', {
      className: 'cc-article',
      childElements: [
        createElement('h3', {
          innerText: 'Artist Morty',
          className: 'cc-header',
        }),
        createElement('img', {
          src: 'https://rickandmortyapi.com/api/character/avatar/27.jpeg',
          className: 'cc-img',
        }),
        createElement('p', { innerText: 'Alive - Human' }),
      ],
    }),
    createElement('div', {
      childElements: [
        createElement('p', { innerText: 'Last known location:' }),
        createElement('p', { innerText: 'Citadel of Ricks' }),
      ],
    }),
    createElement('div', {
      childElements: [
        createElement('p', { innerText: 'Frist seen in: ' }),
        createElement('p', {
          innerText: 'Close Rick-counters of the Rick Kind',
        }),
      ],
    }),
  ],
});
