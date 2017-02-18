import React from 'react';

import { InputDefault } from '../implementation/InputDefault.jsx';

export const Input = ({
  InputImplementation,
  value,
  placeholder,
  handleOnChange,
  handleOnBlur,
  handleOnKeyDown,
}) =>
  <InputImplementation
    value={value}
    placeholder={placeholder}
    handleOnChange={handleOnChange}
    handleOnBlur={handleOnBlur}
    handleOnKeyDown={handleOnKeyDown}
  />;

Input.propTypes = {
  InputImplementation: React.PropTypes.func.isRequired,
  value: React.PropTypes.string.isRequired,
  placeholder: React.PropTypes.string.isRequired,
  handleOnChange: React.PropTypes.func.isRequired,
  handleOnBlur: React.PropTypes.func.isRequired,
  handleOnKeyDown: React.PropTypes.func.isRequired,
};

Input.defaultProps = {
  InputImplementation: InputDefault,
};
