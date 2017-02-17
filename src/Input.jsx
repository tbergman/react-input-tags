import React from 'react';

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

// TODO: interface
export class Input extends React.Component {
  static propTypes = {
    value: React.PropTypes.string.isRequired,
    onChange: React.PropTypes.func.isRequired,
    onFocus: React.PropTypes.func,
    onBlur: React.PropTypes.func,
    onKeyDown: React.PropTypes.func.isRequired,
    placeholder: React.PropTypes.string.isRequired,
    tabIndex: React.PropTypes.number,
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
    const { value, onChange, onFocus, onBlur, onKeyDown, placeholder, tabIndex } = this.props;

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
          onChange={onChange}
          onFocus={(event) => {
            if (onFocus) {
              onFocus(event);
            }
          }}
          onBlur={(event) => {
            if (onBlur) {
              onBlur(event);
            }
          }}
          onKeyDown={onKeyDown}
          placeholder={placeholder}
          tabIndex={tabIndex}
        />
      </span>
    );
  }
}
