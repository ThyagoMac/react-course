import PropTypes from "prop-types"
import React from 'react';
import "./styles.css";

export const Button = ({ text, onClick, disabled }) => (
      <button
        disabled={disabled}
        className="button"
        onClick={onClick}
      >
        { text }
      </button>
);

Button.defaultProps = {
  disabled: false,
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
}
