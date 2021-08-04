import './character.css';
import { Character } from '../../types';
import { createElement } from '../../utils/createElement';

export function createCharacterCards({
  thumbnail,
  name,
  status,
  origin,
}: Character): HTMLElement {
  return createElement('div', {
    className: 'cc-grid',
    childElements: [
      createElement('article', {
        className: 'cc-article',
        childElements: [
          createElement('img', {
            src: thumbnail,
            className: 'cc-img',
          }),
          createElement('div', {
            className: 'cc-description',
            childElements: [
              createElement('h3', {
                innerText: name,
                className: 'cc-header',
              }),
              createElement('p', {
                innerText: status,
                className: 'cc-status',
              }),
              createElement('p', { innerText: 'Citadel of Ricks' }),
              createElement('p', {
                innerText: origin,
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
