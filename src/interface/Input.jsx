import React from 'react';

import { InputDefault } from '../implementation/InputDefault.jsx';

export const Input = ({
  InputImplementation,
  inputRef,
  value,
  placeholder,
  tabIndex,
  handleOnChange,
  handleOnFocus,
  handleOnBlur,
  handleOnKeyDown,
  InputClassName,
}) =>
  <InputImplementation
    inputRef={inputRef}
    value={value}
    tabIndex={tabIndex}
    placeholder={placeholder}
    handleOnChange={handleOnChange}
    handleOnFocus={handleOnFocus}
    handleOnBlur={handleOnBlur}
    handleOnKeyDown={handleOnKeyDown}
    InputClassName={InputClassName}
  />;

Input.propTypes = {
  InputImplementation: React.PropTypes.func.isRequired,
  value: React.PropTypes.string.isRequired,
  handleOnChange: React.PropTypes.func.isRequired,
  handleOnBlur: React.PropTypes.func.isRequired,
  handleOnKeyDown: React.PropTypes.func.isRequired,
  placeholder: React.PropTypes.string,
  tabIndex: React.PropTypes.number,
  InputClassName: React.PropTypes.string,
};

Input.defaultProps = {
  InputImplementation: InputDefault,
};
