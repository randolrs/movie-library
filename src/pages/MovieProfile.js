import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams, useHistory } from 'react-router-dom';

import MovieAPI from '../resources/movies/api';
import { MovieShowCard } from '../resources/movies/views';

const MovieProfile = () => {
  const { id } = useParams();
  const [ movie, setMovie ] = useState(null);

  const fetchMovie = async () => {
    try {
      const data = await MovieAPI.show(id);
      setMovie(data);
    } catch(err) {
      // potential optimazation: better request error handling
      // react-toastify would work pretty well here
    }
  };

  useEffect(() => {
    fetchMovie();
  }, []);

  const history = useHistory();

  if(!id) return history.push('/');// redirect to home
  if(!movie) return null; // potential optimazation: render instead "movie not found" component

  return (
    <div>
      <div>
        <PageHeader>
          <header className="page-header-title">{ movie.title }</header>
        </PageHeader>
        <MovieShowCard movie={ movie } />
      </div>
    </div>
  );
}

export default MovieProfile;

const PageHeader = styled.div`
  margin-bottom: 40px;
  .page-header-title {
    font-size: 60px;
    color: #fff;
  }
`;
