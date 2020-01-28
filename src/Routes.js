import React, { Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./views/Home";
import Personal from "./views/Personal";
import Setting from "./views/Setting";

function Routes() {
  return (
    <Fragment>
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/personal" component={Personal} />
        <Route path="/setting" exact component={Setting} />
      </Router>
    </Fragment>
  );
}

export default Routes;
