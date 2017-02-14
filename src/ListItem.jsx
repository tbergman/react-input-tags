import React from 'react';

/*
// TODO: default component for list item

// these can both be callbacks

onMouseOver to focus / highlight an item
onClick should select the item

// TODO: test that these get called
*/

export const ListItem = ({ value, isFocused, onMouseOver }) => {
  const focusClass = (isFocused) ? 'focused' : '';
  return (
    <li
      className={focusClass}
      onMouseOver={onMouseOver}
    >
      {value}
    </li>
  );
};
