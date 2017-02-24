import React from 'react';

import { defaultClassNamePrefix, noop } from './util';

export const InputClassNameDefault = `${defaultClassNamePrefix}-input`;

export const mirrorInputStyleDefault = noop;
export const updateInputWidthDefault = noop;
export const handleEditDefault = noop;

export class InputDefault extends React.Component {
  static propTypes = {
    value: React.PropTypes.string.isRequired,
    handleOnChange: React.PropTypes.func.isRequired,
    handleOnBlur: React.PropTypes.func.isRequired,
    handleOnKeyDown: React.PropTypes.func.isRequired,
    InputClassName: React.PropTypes.string,
    placeholder: React.PropTypes.string,
    tabIndex: React.PropTypes.number,
    inputRef: React.PropTypes.func,
    mirrorRef: React.PropTypes.func,
    mirrorInputStyle: React.PropTypes.func,
    updateInputWidth: React.PropTypes.func,
    isEditing: React.PropTypes.bool,
    handleEdit: React.PropTypes.func,
  }

  static defaultProps = {
    InputClassName: InputClassNameDefault,
    mirrorInputStyle: mirrorInputStyleDefault,
    updateInputWidth: updateInputWidthDefault,
    handleEdit: handleEditDefault,
  }

  componentDidMount() {
    const { mirrorInputStyle, updateInputWidth } = this.props;
    mirrorInputStyle();
    updateInputWidth();
  }

  componentDidUpdate(prevProps) {
    const { updateInputWidth, handleEdit } = this.props;
    updateInputWidth();

    if (prevProps.isEditing === false && this.props.isEditing === true) {
      handleEdit();
    }
  }

  render() {
    const {
      value,
      handleOnChange,
      handleOnBlur,
      handleOnKeyDown,
      placeholder,
      tabIndex,
      inputRef,
      mirrorRef,
      InputClassName,
    } = this.props;

    const mirrorValue = value || placeholder;
    const mirrorStyle = {
      position: 'absolute',
      whiteSpace: 'pre',
      overflow: 'scroll',
      visibility: 'hidden',
    };

    return (
      <span>
        <span
          ref={mirrorRef}
          style={mirrorStyle}
        >
          {mirrorValue}
        </span>
        <input
          ref={inputRef}
          type={'text'}
          value={value}
          onChange={handleOnChange}
          onBlur={handleOnBlur}
          onKeyDown={handleOnKeyDown}
          placeholder={placeholder}
          tabIndex={tabIndex}
          className={InputClassName}
        />
      </span>
    );
  }
}
