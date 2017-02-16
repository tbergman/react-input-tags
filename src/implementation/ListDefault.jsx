import React from 'react';

import { ListItem } from '../interface/ListItem.jsx';
import {
  tabKeyCode,
  enterKeyCode,
  commaKeyCode,
  downKeyCode,
  upKeyCode,
  escapeKeyCode,
} from '../keyCodes';

export const selectKeyCodesDefault = [
  tabKeyCode,
  enterKeyCode,
  commaKeyCode,
];

export const nextKeyCodesDefault = [
  downKeyCode,
];

export const previousKeyCodesDefault = [
  upKeyCode,
];

export const closeKeyCodesDefault = [
  escapeKeyCode,
];

export const calcNextIndexDefault = (oldIndex, numItems) =>
  (oldIndex + 1) % numItems;

export const calcPreviousIndexDefault = (oldIndex, numItems) =>
  ((oldIndex - 1) + numItems) % numItems;

export const getListItemValueDefault = listItem =>
  listItem;

export class ListDefault extends React.Component {
  static propTypes = {
    items: React.PropTypes.arrayOf(React.PropTypes.any).isRequired,
    handleSelect: React.PropTypes.func.isRequired,
    handleClose: React.PropTypes.func.isRequired,
    selectKeyCodes: React.PropTypes.arrayOf(React.PropTypes.number).isRequired,
    nextKeyCodes: React.PropTypes.arrayOf(React.PropTypes.number).isRequired,
    previousKeyCodes: React.PropTypes.arrayOf(React.PropTypes.number).isRequired,
    closeKeyCodes: React.PropTypes.arrayOf(React.PropTypes.number).isRequired,
    calcNextIndex: React.PropTypes.func.isRequired,
    calcPreviousIndex: React.PropTypes.func.isRequired,
    getListItemValue: React.PropTypes.func.isRequired,
  }

  static defaultProps = {
    selectKeyCodes: selectKeyCodesDefault,
    nextKeyCodes: nextKeyCodesDefault,
    previousKeyCodes: previousKeyCodesDefault,
    closeKeyCodes: closeKeyCodesDefault,
    calcNextIndex: calcNextIndexDefault,
    calcPreviousIndex: calcPreviousIndexDefault,
    getListItemValue: getListItemValueDefault,
  }

  state = {
    highlightedIndex: 0,
  }

  handleOnKeyDown = (event) => {
    const { keyCode } = event;
    const {
      items,
      handleSelect,
      handleClose,
      selectKeyCodes,
      nextKeyCodes,
      previousKeyCodes,
      closeKeyCodes,
      calcNextIndex,
      calcPreviousIndex,
      getListItemValue,
    } = this.props;
    const { highlightedIndex } = this.state;

    if (selectKeyCodes.includes(keyCode)) {
      handleSelect(getListItemValue(items[highlightedIndex]));
    }

    if (closeKeyCodes.includes(keyCode)) {
      handleClose();
    }

    const oldHighlightedIndex = highlightedIndex;
    const numItems = items.length;

    if (nextKeyCodes.includes(keyCode)) {
      const newHighlightedIndex = calcNextIndex(oldHighlightedIndex, numItems);
      this.handleHighlight(newHighlightedIndex);
    }

    if (previousKeyCodes.includes(keyCode)) {
      const newHighlightedIndex = calcPreviousIndex(oldHighlightedIndex, numItems);
      this.handleHighlight(newHighlightedIndex);
    }
  }

  handleHighlight = (index) => {
    this.setState({ highlightedIndex: index });
  }

  render() {
    const { items, handleSelect } = this.props;
    const { highlightedIndex } = this.state;
    return (
      <ul // eslint-disable-line jsx-a11y/no-static-element-interactions
        tabIndex="-1" // enables keyDown events
        onKeyDown={this.handleOnKeyDown}
      >
        {items.map((item, index) => {
          const isHighlighted = highlightedIndex === index;
          return (
            <ListItem
              key={index}
              value={item}
              isHighlighted={isHighlighted}
              handleHighlight={() => this.handleHighlight(index)}
              handleSelect={handleSelect}
            />
          );
        })}
      </ul>
    );
  }
}
