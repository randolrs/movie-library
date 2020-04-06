import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Possible optimization: lazy load images

export const MovieIndexCard = ({movie}) => {
  return (
    <Link to={ `/movie/${ movie.id }` } style={{ textDecoration: 'none' }}>
      <Card className='clickable'>
        <CardContent>
          <div className="img">
           {
            movie.poster_path ?
              <img src={ movie.poster_path } alt={ `${ movie.title } movie poster` } />
              : null
            }
          </div>
          <div className="data">
            <div className="title">{ movie.title }</div>
            <div>{ movie.tagline }</div>
            <div className="release-date"><b>Release Date:</b> { movie.release_date }</div>

          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export const MovieShowCard = ({movie}) => {
  return (
    <Card>
      <CardContent>
        <div className="img">
         {
          movie.poster_path ?
            <img src={ movie.poster_path } alt={ `${ movie.title } movie poster` } />
            : null
          }
        </div>
        <div className="data">
          <div className="release-date"><b>Release Date:</b> { movie.release_date }</div>
          <div>{ movie.overview }</div>
        </div>
      </CardContent>
    </Card>
  );
};

const Card = styled.div`
  background: #fff;
  box-shadow: 0px 2px 5px rgba(200,200,200,0.1);
  padding: 10px;
  margin-bottom: 30px;
  border-radius: 3px;

  border: 2px solid transparent;
  text-decorartion: none;
  &.clickable {
    cursor: pointer;
  }
  &.clickable:hover {
    border: 2px solid yellow;
  }
`;

const CardContent = styled.div`
  display: flex;

  .img {
    width: 150px;
    height: 225px;
    background: #ddd;
    img {
      max-width: 100%;
      max-height: 100%;
      border-radius: 2px;
    }
  }

  .data {
    color: #343;
    flex: 3;
    padding-left: 15px;
    .title {
      font-size: 30px;
      font-weight: 600;
      margin-bottom: 15px;
      color: #232;
    }
    .release-date {
      margin-bottom: 10px;
    }
  }
`;
