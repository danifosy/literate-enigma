export type Character = {
  thumbnail: string;
  name: string;
  status: string;
  origin: string;
};

export type CharacterFromAPI = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    locationUrl: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  cardUrl: string;
  created: string;
};

export type AllCharactersFromAPI = {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: null | string;
  };
  results: CharacterFromAPI[];
};
