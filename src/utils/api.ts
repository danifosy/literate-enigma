import type { AllCharactersFromAPI, Character } from '../types';

export async function getCharacters(): Promise<Character[]> {
  const response = await fetch('https://rickandmortyapi.com/api/character');
  const data: AllCharactersFromAPI = await response.json();
  const characters = data.results;
  const formattedCharacters: Character[] = characters.map((character) => {
    const formattedCharacter: Character = {
      thumbnail: character.image,
      name: character.name,
      status: character.status,
      origin: character.origin.name,
    };
    return formattedCharacter;
  });
  return formattedCharacters;
}
