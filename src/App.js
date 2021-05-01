import React, { Fragment, useEffect } from 'react';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import SearchBar from './Components/Layout/SearchBar';
import Logs from './Components/Logs/Logs';
const App = () => {
  useEffect(() => {
    //initializes materialize js
    M.AutoInit();
  }, []);
  return (
    <Fragment>
      <SearchBar></SearchBar>
      <div className='container'>
        <Logs></Logs>
      </div>
    </Fragment>
  );
};

export default App;
