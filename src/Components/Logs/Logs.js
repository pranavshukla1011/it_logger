import React, { Fragment, useEffect } from 'react';
import LogItem from './LogItem';
import Loader from '../Layout/Loader';
import { getLogs } from '../../Redux/actions/logAction';

//using redux
import { useSelector, useDispatch } from 'react-redux';

const Logs = () => {
  const log = useSelector((state) => state.log);

  const { loading, logs } = log;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getLogs());
    // eslint-disable-next-line
  }, []);

  if (loading || logs === null) {
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
