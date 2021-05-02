import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
const TechItem = ({ tech }) => {
  return (
    <Fragment>
      <li className='collection-item'>
        <span className='black-text'>
          {tech.firstName} {tech.lastName}
        </span>
        <a href='#!' className='secondary-content'>
          <i className='material-icons grey-text'>delete</i>
        </a>
      </li>
    </Fragment>
  );
};

TechItem.propTypes = {
  tech: PropTypes.object.isRequired,
};
export default TechItem;
