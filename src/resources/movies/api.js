// meh, fetched with url from the TMDB config endpoint (https://developers.themoviedb.org/3/configuration/get-api-configuration)
// could be more dynamic but it's a code challenge and not a public project ¯\_(ツ)_/¯
const SMALL_IMG_BASE_URL = 'http://image.tmdb.org/t/p/w300/';

const index = async (searchQuery) => {
  if(!searchQuery) return { results: [] };

  const response = await fetch(`/api/movies/${ searchQuery }`);
  const data = await response.json();

  // adding absolute paths to the poster images
  data.results = data.results.map(movie => {
    if(movie.poster_path) movie.poster_path = `${ SMALL_IMG_BASE_URL }${ movie.poster_path }`;
    return movie;
  });

  return data;
}

const show = async (id) => {
  if(!id) return {};

  const response = await fetch(`/api/movie/${ id }`);
  const data = await response.json();
  if(data.poster_path) data.poster_path = `${ SMALL_IMG_BASE_URL }${ data.poster_path }`;

  return data;
}

const Movie = { show, index };

export default Movie;
