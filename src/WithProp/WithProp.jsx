import React from 'react';
import PropTypes from 'prop-types';

const ComponentWithProp = ({ msg }) => (
  <h1>
    Here is the message: {msg}
  </h1>
);

ComponentWithProp.propTypes = {
  msg: PropTypes.string.isRequired,
};

export default ComponentWithProp;
