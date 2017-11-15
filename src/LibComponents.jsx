import React from 'react';
import PropTypes from 'prop-types';

const LibraryButton = ({ text }) => (<button>Complicated library JSX for a button: {text}</button>);

LibraryButton.propTypes = {
  text: PropTypes.string.isRequired,
};

const LibraryForm = () => (<form>Complicated libary JSX for a form</form>);

export {
  LibraryButton,
  LibraryForm,
};

export default LibraryButton;
