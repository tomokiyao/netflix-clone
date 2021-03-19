export const API_KEY = '';

export const baseUrl = 'https://api.themoviedb.org/3';

export const requests = {
  feachTrending: `${baseUrl}/trending/all/week?api_key=${API_KEY}&language=en-us`,
  feachNetflixOriginals: `${baseUrl}/discover/tv?api_key=${API_KEY}&with_networks=213`,
  feactTopRated: `${baseUrl}/discover/tv?api_key=${API_KEY}&languager=en-us`,
  feactActionMovies: `${baseUrl}/discover/tv?api_key=${API_KEY}&with_genres=28`,
  feactComedyMovies: `${baseUrl}/discover/tv?api_key=${API_KEY}&with_genres=35`,
  feactHorrorMovies: `${baseUrl}/discover/tv?api_key=${API_KEY}&with_genres=27`,
  feactRomanceMovies: `${baseUrl}/discover/tv?api_key=${API_KEY}&with_genres=10749`,
  feactDocumentMovies: `${baseUrl}/discover/tv?api_key=${API_KEY}&with_genres=99`,
};
