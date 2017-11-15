import React from 'react';
import PropTypes from 'prop-types';

const ComponentWithBranch = ({ show }) => (
  <div>
    <div>The part everyone sees...</div>
    { show && <div>The part that only some see...</div>}
  </div>
);

ComponentWithBranch.propTypes = {
  show: PropTypes.bool,
};

ComponentWithBranch.defaultProps = {
  show: false,
};

export default ComponentWithBranch;
