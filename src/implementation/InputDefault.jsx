import React from 'react';

import { defaultClassNamePrefix } from './util';

export const placeholderDefault = '';

export const InputClassNameDefault = `${defaultClassNamePrefix}-input`;

export const MIRROR_STYLES = [
  'fontFamily',
  'fontSize',
  'fontStyle',
  'fontWeight',
  'lineHeight',
  'letterSpacing',
  'wordSpacing',
];

export const INPUT_WIDTH_EXTRA = 2;

export class InputDefault extends React.Component {
  static propTypes = {
    value: React.PropTypes.string.isRequired,
    handleOnChange: React.PropTypes.func.isRequired,
    handleOnBlur: React.PropTypes.func.isRequired,
    handleOnKeyDown: React.PropTypes.func.isRequired,
    placeholder: React.PropTypes.string.isRequired,
    tabIndex: React.PropTypes.number,
    InputClassName: React.PropTypes.string,
  }

  static defaultProps = {
    placeholder: placeholderDefault,
    InputClassName: InputClassNameDefault,
  }

  componentDidMount() {
    this.mirrorInputStyle();
    this.updateInputWidth();
  }

  componentDidUpdate() {
    this.updateInputWidth();
  }

  mirrorInputStyle() {
    if (!this.inputNode) return;
    const inputStyle = window.getComputedStyle(this.inputNode);
    MIRROR_STYLES.forEach((mStyle) => {
      this.mirrorNode.style[mStyle] = inputStyle[mStyle];
    });
  }

  updateInputWidth() {
    if (!this.mirrorNode) return;
    const newInputWidth = this.mirrorNode.offsetWidth + INPUT_WIDTH_EXTRA;
    this.inputNode.style.width = `${newInputWidth}px`;
  }

  render() {
    const {
      value,
      placeholder,
      tabIndex,
      handleOnChange,
      handleOnBlur,
      handleOnKeyDown,
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
          id={'mirrorNode'}
          ref={(c) => { this.mirrorNode = c; }}
          style={mirrorStyle}
        >
          {mirrorValue}
        </span>
        <input
          id={'inputNode'}
          ref={(c) => { this.inputNode = c; }}
          type={'text'}
          value={value}
          placeholder={placeholder}
          tabIndex={tabIndex}
          onChange={handleOnChange}
          onBlur={handleOnBlur}
          onKeyDown={handleOnKeyDown}
          className={InputClassName}
        />
      </span>
    );
  }
}
