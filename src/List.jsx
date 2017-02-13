import React from 'react';

import { ListItem } from './ListItem.jsx';
import { defaultNextKeyCodes, defaultPreviousKeyCodes } from './default.jsx';

export class List extends React.Component {
  static defaultProps = {
    items: ['apple', 'banana', 'cherry'],
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

  componentWillUnmount() {
    // remove listener
  }

  handleOnKeyDown = (event) => {
    const { keyCode } = event;
    const { nextKeyCodes, previousKeyCodes, items } = this.props;
    const { focusedIndex } = this.state;

    if (nextKeyCodes.hasOwnProperty(keyCode)) {
      event.preventDefault();
      // TODO: unit test this function
      const newFocusedIndex = (focusedIndex + 1) % items.length;
      this.setState({ focusedIndex: newFocusedIndex });
    }

    if (previousKeyCodes.hasOwnProperty(keyCode)) {
      event.preventDefault();
      // TODO: unit test this function
      const newFocusedIndex = ((focusedIndex - 1) + items.length) % items.length;
      this.setState({ focusedIndex: newFocusedIndex });
    }

    // TODO: select the element

    // TODO: close list, call callback?
  }

  render() {
    const { focusedIndex } = this.state;
    const { items } = this.props;
    // TODO: default render component for List item
    return (
      <ul
        tabIndex="0"
        // tabIndex lets us listen to key events
        onKeyDown={this.handleOnKeyDown}
      >
        {items.map((item, index) => {
          const isFocused = focusedIndex === index;
          return (
            <ListItem
              key={index}
              value={item}
              isFocused={isFocused}
              onMouseOver={(event) => {
                // console.log(event);
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
