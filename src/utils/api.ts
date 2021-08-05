export async function getCharacters() {
  const response = await 'https://rickandmortyapi.com/api/character';
  const data = await response.json();
  const characters = data.results;
  return characters;
}
