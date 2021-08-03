import './style.css';

const app = document.querySelector<HTMLDivElement>('#app');

const mainElement = document.createElement('main');

const title = document.createElement('h1');
title.innerText = 'Rick and Morty App';

const subTitle = document.createElement('h2');
subTitle.innerText =
  'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam';

const characterSearch = document.createElement('input');
characterSearch.placeholder = 'Deep dive into the world of Rick and Morty...';

if (app !== null) {
  app.append(mainElement);
}

mainElement.append(title, subTitle, characterSearch);
