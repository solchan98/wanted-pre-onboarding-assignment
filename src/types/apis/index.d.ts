export interface IRMovie {
  Title: string,
  Year: string,
  imdbId: string,
  Type: string,
  Poster: string,
  isFavorite: boolean,
};


export interface IMoiveResponse {
  Search: IRMoive[],
  totalResults: string,
  Response: string,
};