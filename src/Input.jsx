import React from 'react';

export class Input extends React.Component {
  static propTypes = {
    value: React.PropTypes.string.isRequired,
    onChange: React.PropTypes.func.isRequired,
    onBlur: React.PropTypes.func.isRequired,
    onKeyDown: React.PropTypes.func.isRequired,
    placeholder: React.PropTypes.string.isRequired,
  }

  componentDidMount() {
    this.mirrorInputStyle();
    this.updateInputWidth();
  }

  componentDidUpdate() {
    this.updateInputWidth();
  }

  mirrorInputStyle() {
    const inputStyle = window.getComputedStyle(this.inputNode);
    const mirrorStyles = [
      'fontFamily',
      'fontSize',
      'fontStyle',
      'fontWeight',
      'lineHeight',
      'letterSpacing',
      'wordSpacing',
    ];
    mirrorStyles.forEach((mStyle) => {
      this.mirrorNode.style[mStyle] = inputStyle[mStyle];
    });
  }

  updateInputWidth() {
    const newInputWidth = this.mirrorNode.offsetWidth + 2;
    console.log('offset width', this.mirrorNode.offsetWidth);
    console.log('scroll width', this.mirrorNode.scrollWidth);
    this.inputNode.style.width = `${newInputWidth}px`;
  }

  render() {
    const { value, onChange, onBlur, onKeyDown, placeholder } = this.props;

    const mirrorValue = value || placeholder;
    const mirrorStyle = {
      position: 'absolute',
      whiteSpace: 'pre',
      visibility: 'hidden',
      // overflow: 'scroll',
    };

    return (
      <div>
        <span
          ref={(c) => { this.mirrorNode = c; }}
          style={mirrorStyle}
        >
          {mirrorValue}
        </span>
        <input
          ref={(c) => { this.inputNode = c; }}
          type={'text'}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          onKeyDown={onKeyDown}
          placeholder={placeholder}
        />
      </div>
    );
  }
}
