import React from 'react';

export class Input extends React.Component {
  static propTypes = {
    value: React.PropTypes.string.isRequired,
    onChange: React.PropTypes.func.isRequired,
    onBlur: React.PropTypes.func.isRequired,
    onKeyDown: React.PropTypes.func.isRequired,
    placeholder: React.PropTypes.string.isRequired,
  }

  state = {
    inputWidth: 0,
  }

  componentWillMount() {
    // console.log('will mount');
    // this.inputNode.style.width = '10px';
  }

  componentWillReceiveProps() {
    /*
    const { value } = this.props;
    this.textNode.textContent = value;

    const widthText = this.textNode.offsetWidth;
    console.log('text offset width', widthText);
    */
  }

  componentDidMount() {
    this.inputNode.style.width = '1px';
  }

  componentDidUpdate(prevProps, prevState) {
    // /*
    const { value } = this.props;
    this.textNode.textContent = value;

    const widthText = this.textNode.offsetWidth;
    console.log('text offset width', widthText);
    console.log(this.inputNode.style.width);
    this.inputNode.style.width = `${widthText}px`;
    console.log(this.inputNode.style.width);
    // */

    // this.setState({ inputWidth: widthText });
    // can't setState, so directly change the input DOM node
    // this.inputNode.style.width = `#${widthText}px`;
  }

  render() {
    const { inputWidth } = this.state;
    const { value, onChange, onBlur, onKeyDown, placeholder } = this.props;

    const containerStyle = {
    };
    const inputStyle = {
    };
    const textStyle = {
      // visibility: 'hidden',
      whitespace: 'pre',
    };

    return (
      <div
        style={containerStyle}
      >
        <span
          ref={(c) => { this.textNode = c; }}
          style={textStyle}
        />
        <hr />
        <input
          ref={(c) => { this.inputNode = c; }}
          // style={inputStyle}
          type={'text'}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          onKeyDown={onKeyDown}
          // placeholder={placeholder}
        />
      </div>
    );
  }
}
