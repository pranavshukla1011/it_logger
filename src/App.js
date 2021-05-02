import React, { Fragment, useEffect } from 'react';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import SearchBar from './Components/Layout/SearchBar';
import Logs from './Components/Logs/Logs';
import Adbtn from './Components/Layout/Adbtn';
import AdLogModal from './Components/Logs/AdLogModal';
import EditLogModal from './Components/Logs/EditLogModal';
import AddTechModal from './Components/Techs/AddTechModal';
import TechListModal from './Components/Techs/TechListModal';

const App = () => {
  useEffect(() => {
    //initializes materialize js
    M.AutoInit();
  }, []);
  return (
    <Fragment>
      <SearchBar></SearchBar>
      <div className='container'>
        <Adbtn></Adbtn>
        <AdLogModal></AdLogModal>
        <EditLogModal></EditLogModal>
        <AddTechModal></AddTechModal>
        <TechListModal></TechListModal>
        <Logs></Logs>
      </div>
    </Fragment>
  );
};

export default App;
