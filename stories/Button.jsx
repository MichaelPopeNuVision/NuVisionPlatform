import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

/**
 * Primary UI component for user interaction
 */
export const Button = (props) => {
  return (
    <button type="button" className={props.className}>
      {props.value}
    </button>
  );
};

Button.propTypes = {

};

Button.defaultProps = {
 
};
