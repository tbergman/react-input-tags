import React from 'react';

/*
// TODO: test that these get called
onMouseOver to focus / highlight an item
onClick should select the item
*/

export const focusElement = (element) => {
  if (!element) return;
  element.focus();
};

export class ListItem extends React.Component {
  static defaultProps = {
    focusElement,
  }

  // TODO: test
  componentWillReceiveProps(nextProps) {
    // console.log('next props');
    const { isHighlighted } = nextProps;
    if (isHighlighted) {
      // console.log(`${this.props.item.value} is focused`);
      // console.log(this.node);
      // if (!this.node) return;
      this.props.focusElement(this.node);
    }
  }

  render() {
    const { item, isHighlighted, highlightItem, selectItem } = this.props;
    // TODO: default React component for list item
    const highlightClass = (isHighlighted) ? 'highlighted' : '';
    return (
      <li
        ref={(c) => { this.node = c; }}
        tabIndex={-1}
        className={highlightClass}
        onMouseOver={highlightItem}
        onClick={selectItem}
      >
        {item.value}
      </li>
    );
  }
}
