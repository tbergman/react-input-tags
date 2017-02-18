import React from 'react';

export class ListItemDefault extends React.Component {
  static propTypes = {
    value: React.PropTypes.string.isRequired,
    isHighlighted: React.PropTypes.bool.isRequired,
    handleHighlight: React.PropTypes.func.isRequired,
    handleSelect: React.PropTypes.func.isRequired,
  }

  render() {
    const { value, isHighlighted, handleHighlight, handleSelect } = this.props;
    const highlightClass = (isHighlighted) ? 'highlighted' : '';
    return (
      <li // eslint-disable-line jsx-a11y/no-static-element-interactions
        ref={(c) => { this.listItem = c; }}
        className={highlightClass}
        onMouseOver={handleHighlight}
        onMouseDown={event => event.preventDefault()} // prevents onBlur from inserting inputValue
        onClick={handleSelect}
      >
        {value}
      </li>
    );
  }
}
