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
          createElement('div', {
            className: 'cc-description',
            childElements: [
              createElement('h3', {
                innerText: 'Artist Morty',
                className: 'cc-header',
              }),
              createElement('p', {
                innerText: 'Alive - Human',
                className: 'cc-status',
              }),
              createElement('p', { innerText: 'Citadel of Ricks' }),
              createElement('p', {
                innerText: 'Close Rick-counters of the Rick Kind',
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
export function characterCards1(): HTMLElement {
  return createElement('div', {
    className: 'cc-grid',
    childElements: [
      createElement('article', {
        className: 'cc-article',
        childElements: [
          createElement('img', {
            src: 'https://rickandmortyapi.com/api/character/avatar/102.jpeg',
            className: 'cc-img',
          }),
          createElement('div', {
            className: 'cc-description',
            childElements: [
              createElement('h3', {
                innerText: 'Donna Gueterman',
                className: 'cc-header',
              }),
              createElement('p', {
                innerText: 'Dead - Robot',
                className: 'cc-status',
              }),
              createElement('p', { innerText: 'Planet Squanch' }),
              createElement('p', {
                innerText: 'The Wedding Squanchers',
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
