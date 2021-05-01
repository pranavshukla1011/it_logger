import React, { Fragement, Fragment } from 'react';
import PropTypes from 'prop-types';

const LogItem = ({ log }) => {
  return (
    <Fragment>
      <li className='collection-item'>
        <div>
          <a
            href='#edit-log-model'
            className={`model-trigger ${
              log.attention ? 'red-text' : 'blue-text'
            }`}
          >
            {log.message}
          </a>
        </div>
      </li>
    </Fragment>
  );
};

LogItem.propTypes = {
  log: PropTypes.object.isRequired,
};

export default LogItem;
