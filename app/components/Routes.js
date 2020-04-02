import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AllPaintings from "./AllPaintings";

const Routes = () => {
  return (
    <div>
      <h1>Fullstack Museum</h1>
      <Router>
        <Route exact path="/paintings" component={AllPaintings} />
      </Router>
    </div>
  );
};

export default Routes;
