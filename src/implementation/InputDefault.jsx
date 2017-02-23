import React from 'react';

import { focusElement, selectElement, defaultClassNamePrefix } from './util';

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
    focusElement: React.PropTypes.func.isRequired,
    selectElement: React.PropTypes.func.isRequired,
  }

  static defaultProps = {
    placeholder: placeholderDefault,
    InputClassName: InputClassNameDefault,
    focusElement,
    selectElement,
  }

  componentDidMount() {
    // const element = this.inputNode;
    // this.props.focusElement(element);
    // this.props.selectElement(element);
    // this.mirrorInputStyle();
    // this.updateInputWidth();
    this.props.mirrorInputStyle();
    this.props.updateInputWidth();
  }

  componentDidUpdate(prevProps, prevState) {
    // this.updateInputWidth();
    this.props.updateInputWidth();
    if (prevProps.editMode === false && this.props.editMode === true) {
      this.props.setFocus();
    }

  }

  mirrorInputStyle() {
    const inputNode = this.getInputNode();
    const mirrorNode = this.getMirrorNode();
    if (!inputNode || !mirrorNode) return;
    const inputStyle = window.getComputedStyle(inputNode);
    MIRROR_STYLES.forEach((mStyle) => {
      mirrorNode.style[mStyle] = inputStyle[mStyle];
    });
  }

  updateInputWidth() {
    const inputNode = this.getInputNode();
    const mirrorNode = this.getMirrorNode();
    if (!inputNode || !mirrorNode) return;
    const newInputWidth = mirrorNode.offsetWidth + INPUT_WIDTH_EXTRA;
    inputNode.style.width = `${newInputWidth}px`;
  }

  getInputNode() {
    return this.inputNode;
    // return this.props.inputRef;
  }

  getMirrorNode() {
    return this.mirrorNode;
  }

  render() {
    const {
      inputRef,
      mirrorRef,
      value,
      placeholder,
      tabIndex,
      handleOnChange,
      handleOnBlur,
      handleOnFocus,
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
          ref={mirrorRef}
          // ref={(c) => { this.mirrorNode = c; }}
          style={mirrorStyle}
        >
          {mirrorValue}
        </span>
        <input
          id={'inputNode'}
          ref={inputRef}
          // ref={(c) => { this.inputNode = c; }}
          type={'text'}
          value={value}
          placeholder={placeholder}
          tabIndex={tabIndex}
          onChange={handleOnChange}
          onBlur={handleOnBlur}
          onFocus={handleOnFocus}
          onKeyDown={handleOnKeyDown}
          className={InputClassName}
        />
      </span>
    );
  }
}
