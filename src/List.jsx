import React from 'react';

import { ListItem } from './ListItem.jsx';
import { defaultNextKeyCodes, defaultPreviousKeyCodes } from './default.jsx';

export class List extends React.Component {
  static defaultProps = {
    nextKeyCodes: defaultNextKeyCodes,
    previousKeyCodes: defaultPreviousKeyCodes,
  };

  state = {
    focusedIndex: 0,
  }

  componentWillMount() {
    // TODO: if element exists, find it and call .focus()
    // https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/focus

    // add listener to list component if don't use tabindex
  }

  componentWillUpdate() {

  }

  componentWillUnmount() {
    // remove listener
  }

  // when component updates
  // try to focus

  // method to find element of focusedIndex
  // if element exists call .focus() method

  // TODO: test
  handleOnKeyDown = (event) => {
    const { keyCode } = event;
    const { nextKeyCodes, previousKeyCodes, items } = this.props;
    const { focusedIndex } = this.state;

    if (nextKeyCodes.hasOwnProperty(keyCode)) {
      // TODO: unit test this function
      const newFocusedIndex = (focusedIndex + 1) % items.length;
      // test
      this.setState({ focusedIndex: newFocusedIndex });
    }

    if (previousKeyCodes.hasOwnProperty(keyCode)) {
      // TODO: unit test this function
      const newFocusedIndex = ((focusedIndex - 1) + items.length) % items.length;
      // test
      this.setState({ focusedIndex: newFocusedIndex });
    }

    // TODO: select item
    // test that callback gets called

    // TODO: close list
    // test that callback gets called
  }

  render() {
    const { focusedIndex } = this.state;
    const { items } = this.props;
    return (
      <ul
        tabIndex="0"
        // tabIndex lets us listen to key events
        // but is there a better way to detect when we have focus on this element
        // so only listen when we have focus, then stopping listening when we don't have focus
        onKeyDown={this.handleOnKeyDown}
      >
        {items.map((item, index) => {
          const isFocused = focusedIndex === index;
          return (
            <ListItem
              key={index}
              item={item}
              isFocused={isFocused}
              onMouseOver={(event) => {
                event.preventDefault();
                this.setState({ focusedIndex: index });
              }}
            />
          );
        }
        )}
      </ul>
    );
  }
}
