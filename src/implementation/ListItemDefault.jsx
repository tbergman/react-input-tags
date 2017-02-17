import React from 'react';

import { focusElement } from './util';

export class ListItemDefault extends React.Component {
  static propTypes = {
    value: React.PropTypes.string.isRequired,
    isHighlighted: React.PropTypes.bool.isRequired,
    handleHighlight: React.PropTypes.func.isRequired,
    handleSelect: React.PropTypes.func.isRequired,
    focusElement: React.PropTypes.func.isRequired,
  }

  static defaultProps = {
    focusElement,
  }

  componentDidMount() {
    const { isHighlighted } = this.props;
    this.checkFocusElement(isHighlighted);
  }

  componentWillReceiveProps(nextProps) {
    const { isHighlighted } = nextProps;
    this.checkFocusElement(isHighlighted);
  }

  checkFocusElement(isHighlighted) {
    if (!isHighlighted) return;
    this.props.focusElement(this.listItem);
  }

  render() {
    const { value, isHighlighted, handleHighlight, handleSelect } = this.props;
    const highlightClass = (isHighlighted) ? 'highlighted' : '';
    return (
      <li // eslint-disable-line jsx-a11y/no-static-element-interactions
        ref={(c) => { this.listItem = c; }}
        tabIndex={-1}
        className={highlightClass}
        onMouseOver={handleHighlight}
        onClick={handleSelect}
      >
        {value}
      </li>
    );
  }
}
