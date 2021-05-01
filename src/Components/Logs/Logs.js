import React, { useState, Fragment, useEffect } from 'react';
import axios from 'axios';
import LogItem from './LogItem';
import Loader from '../Layout/Loader';
const Logs = () => {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getLogs();
    //eslint-disable-next-line
  }, []);

  const getLogs = async () => {
    setLoading(true);
    const res = await axios.get('/logs');
    setLogs(res.data);
    setLoading(false);
  };

  if (loading) {
    return <Loader></Loader>;
  }
  return (
    <Fragment>
      <ul className='collection with-header'>
        <li className='collection-header'>
          <h4 className='center'>System Logs</h4>
        </li>
        {!loading && logs.length === 0 ? (
          <Fragment>
            <p>No logs to show</p>
          </Fragment>
        ) : (
          logs.map((log) => <LogItem log={log} key={log.id}></LogItem>)
        )}
      </ul>
    </Fragment>
  );
};

export default Logs;
