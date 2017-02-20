import React from 'react';

export const placeholderDefault = '';

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
    placeholder: React.PropTypes.string,
  }

  static defaultProps = {
    placeholder: placeholderDefault,
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
    const { value, placeholder, handleOnChange, handleOnBlur, handleOnKeyDown } = this.props;

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
          onChange={handleOnChange}
          onBlur={handleOnBlur}
          onKeyDown={handleOnKeyDown}
        />
      </span>
    );
  }
}
