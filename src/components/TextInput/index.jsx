import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

export const TextInput = ({ searchValue, handleSearch, placeholder }) => {
  return (
    <input className="text-input" type="search" placeholder={placeholder} onChange={handleSearch} value={searchValue} />
  );
};

TextInput.propTypes = {
  searchValue: PropTypes.string,
  handleSearch: PropTypes.func,
  placeholder: PropTypes.string,
};
