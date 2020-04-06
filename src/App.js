import React from 'react';
import styled from 'styled-components';
import DIMENSIONS from './layout/dimensions';

import Nav from './layout/Nav';
import Home from './pages/Home';
import MovieProfile from './pages/MovieProfile';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <ContentContainer>
        <Router>
          <Switch>
            <Route path="/" exact children={ <Home /> } />
            <Route path="/movie/:id" children={ <MovieProfile /> } />
            <Route path="*">
              <Redirect to="/" />
            </Route>
          </Switch>
        </Router>
      </ContentContainer>
    </div>
  );
}

export default App;

const ContentContainer = styled.div`
  padding-top: ${ DIMENSIONS.nav_height + 30 }px;
  max-width: ${ DIMENSIONS.content_width }px;
  margin: 0 auto;
`;

