import React from 'react';

import { ListItem } from './interface/ListItem.jsx';
import { defaultNextKeyCodes, defaultPreviousKeyCodes } from './default.jsx';

export class List extends React.Component {
  static defaultProps = {
    nextKeyCodes: defaultNextKeyCodes,
    previousKeyCodes: defaultPreviousKeyCodes,
  };

  // TODO: props for
  // selectItem
  // closeList

  state = {
    highlightedIndex: 0,
  }

  // TODO: test
  handleOnKeyDown = (event) => {
    const { keyCode } = event;
    const { nextKeyCodes, previousKeyCodes, items } = this.props;
    const { highlightedIndex } = this.state;

    // TODO: test this
    if (nextKeyCodes.hasOwnProperty(keyCode)) {
      // TODO: unit test this function
      const newHighlightedIndex = (highlightedIndex + 1) % items.length;
      // test
      this.setState({ highlightedIndex: newHighlightedIndex });
    }

    // TODO: test this
    if (previousKeyCodes.hasOwnProperty(keyCode)) {
      // TODO: unit test this function
      const newHighlightedIndex = ((highlightedIndex - 1) + items.length) % items.length;
      // test
      this.setState({ highlightedIndex: newHighlightedIndex });
    }

    // TODO: select item
    // test that callback gets called
    if (keyCode === 13) {
      console.log(`selected item: ${this.props.items[this.state.highlightedIndex].value}`);
    }

    // TODO: close list
    // test that callback gets called
    if (keyCode === 27) {
      console.log('close list');
    }
  }

  render() {
    const { highlightedIndex } = this.state;
    const { items } = this.props;
    return (
      <ul
        tabIndex="-1" // allows us to listen to keyDown events
        onKeyDown={this.handleOnKeyDown}
      >
        {items.map((item, index) => {
          const isHighlighted = highlightedIndex === index;
          return (
            <ListItem
              key={index}
              value={item}
              isHighlighted={isHighlighted}
              handleHighlight={() => this.setState({ highlightedIndex: index })}
              handleSelect={() => { console.log(`selected: ${item.value}`); }}
            />
          );
        }
        )}
      </ul>
    );
  }
}
