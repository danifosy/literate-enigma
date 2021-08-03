import './character.css';
import { createElement } from '../../utils/createElement';

export function characterCards(): HTMLElement {
  return createElement('div', {
    className: 'cc-grid',
    childElements: [
      createElement('article', {
        className: 'cc-article',
        childElements: [
          createElement('img', {
            src: 'https://rickandmortyapi.com/api/character/avatar/27.jpeg',
            className: 'cc-img',
          }),
          createElement('h3', {
            innerText: 'Artist Morty',
            className: 'cc-header',
          }),
          createElement('p', {
            innerText: 'Alive - Human',
            className: 'cc-status',
          }),
        ],
      }),
      createElement('div', {
        className: 'cc-location',
        childElements: [
          createElement('p', { innerText: 'Last known location:' }),
          createElement('p', { innerText: 'Citadel of Ricks' }),
        ],
      }),
      createElement('div', {
        className: 'cc-appearance',
        childElements: [
          createElement('p', { innerText: 'Frist seen in: ' }),
          createElement('p', {
            innerText: 'Close Rick-counters of the Rick Kind',
          }),
        ],
      }),
    ],
  });
}
