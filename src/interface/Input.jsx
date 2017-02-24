import React from 'react';

import { InputDefault } from '../implementation/InputDefault.jsx';

export const Input = ({
  InputImplementation,
  value,
  handleOnChange,
  handleOnBlur,
  handleOnKeyDown,
  ...tagProps
}) =>
  <InputImplementation
    value={value}
    handleOnChange={handleOnChange}
    handleOnBlur={handleOnBlur}
    handleOnKeyDown={handleOnKeyDown}
    {...tagProps}
  />;

Input.propTypes = {
  InputImplementation: React.PropTypes.func.isRequired,
  value: React.PropTypes.string.isRequired,
  handleOnChange: React.PropTypes.func.isRequired,
  handleOnBlur: React.PropTypes.func.isRequired,
  handleOnKeyDown: React.PropTypes.func.isRequired,
};

Input.defaultProps = {
  InputImplementation: InputDefault,
};
