// THIS FILE ROUTES OUR REACT COMPONENTS!
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AllPaintings from './AllPaintings';
import AllArtists from './AllArtists';

const Routes = () => {
  return (
    <div>
      <h1>Fullstack Musuem</h1>
      <Router>
        <div>
          <Route exact path="/paintings" component={AllPaintings} />
          <Route exact path="/artists" component={AllArtists} />
        </div>
      </Router>
    </div>
  );
};

export default Routes;
