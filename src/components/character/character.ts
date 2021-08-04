import styles from './character.module.css';
import { Character } from '../../types';
import { createElement } from '../../utils/createElement';

export function createCharacterCards({
  thumbnail,
  name,
  status,
  origin,
}: Character): HTMLElement {
  return createElement('div', {
    className: styles.grid,
    childElements: [
      createElement('article', {
        className: styles.article,
        childElements: [
          createElement('img', {
            src: thumbnail,
            className: styles.img,
          }),
          createElement('div', {
            className: styles.description,
            childElements: [
              createElement('h3', {
                innerText: name,
                className: styles.header,
              }),
              createElement('p', {
                innerText: status,
                className: styles.status,
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
