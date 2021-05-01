import React, { Fragment, useEffect } from 'react';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import SearchBar from './Components/Layout/SearchBar';
const App = () => {
  useEffect(() => {
    //initializes materialize js
    M.AutoInit();
  }, []);
  return (
    <Fragment>
      <SearchBar></SearchBar>
    </Fragment>
  );
};

export default App;
