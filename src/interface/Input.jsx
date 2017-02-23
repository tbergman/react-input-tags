import React from 'react';

import { InputDefault } from '../implementation/InputDefault.jsx';

export const Input = ({
  InputImplementation,
  inputRef,
  mirrorRef,
  mirrorInputStyle,
  updateInputWidth,
  setFocus,
  value,
  editMode,
  stopEditing,
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
    mirrorRef={mirrorRef}
    mirrorInputStyle={mirrorInputStyle}
    updateInputWidth={updateInputWidth}
    setFocus={setFocus}
    value={value}
    editMode={editMode}
    stopEditing={stopEditing}
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
