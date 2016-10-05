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
    inputWidth: 1,
  }

  render() {
    const { value, onChange, onBlur, onKeyDown, placeholder } = this.props;
    return (
      <input
        type="text"
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        onKeyDown={onKeyDown}
        placeholder={placeholder}
      />
    );
  }
}
