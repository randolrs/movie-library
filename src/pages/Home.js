import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useHistory, useLocation } from 'react-router-dom';

import { addSearchQueryToHistory } from '../helpers/route-helpers';
import { MovieIndexCard } from '../resources/movies/views';
import SearchInput from '../components/SearchInput';
import MovieAPI from '../resources/movies/api';

// potential optimations:
// 1) add blank state: prompt user to enter search query where results are rendered
// 2) add 'no results' component to render where search results would render when request returns no movies
// 3) pagination

const Home = () => {
  const [ movies, setMovies ] = useState([]);
  const [ searchQuery, setSearchQuery ] = useState('');

  const history = useHistory();
  const location = useLocation();
  const params = new URLSearchParams(window.location.search);
  const queryParam = params.get('query');

  const fetchMovies = async () => {
    try {
      const { results } = await MovieAPI.index(queryParam || '');
      setMovies(results);
    } catch(err) {
      // potential optimazation: better request error handling
      // react-toastify would work pretty well here
    }
  };

  useEffect(() => {
    if(queryParam) setSearchQuery(queryParam);

    fetchMovies();
  }, []);

  useEffect(() => {
    addSearchQueryToHistory(history, location, searchQuery);
  }, [ searchQuery ])

  useEffect(() => {
    fetchMovies();
  }, [ queryParam ])

  return (
    <div>
      <PageHeader>
        <header className="page-header-title">Search</header>
        <SearchContainer>
          <SearchInput value={ searchQuery } onChange={ (e) => setSearchQuery(e.target.value) } />
        </SearchContainer>
      </PageHeader>
      <div>
        {
          movies.map(movie => <MovieIndexCard key={ `movie-${ movie.id }` } movie={ movie } />)
        }
      </div>
    </div>
  );
}

export default Home;

const PageHeader = styled.div`
  padding-bottom: 3px;
  border-bottom: 2px solid red;
  display: flex;
  margin-bottom: 40px;

  .page-header-title {
    font-size: 40px;
    color: #fff;
  }
`;

const SearchContainer = styled.div`
  flex: 1;
  text-align: right;
`;

