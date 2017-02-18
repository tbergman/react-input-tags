import React from 'react';

import { ListItem } from '../interface/ListItem.jsx';

export class ListDefault extends React.Component {
  static propTypes = {
    items: React.PropTypes.arrayOf(React.PropTypes.any).isRequired,
    highlightedIndex: React.PropTypes.number.isRequired,
    getListItemValue: React.PropTypes.func.isRequired,
    handleHighlight: React.PropTypes.func.isRequired,
    handleSelect: React.PropTypes.func.isRequired,
  }

  render() {
    const { items, highlightedIndex, getListItemValue, handleHighlight, handleSelect } = this.props;
    return (
      <ul>
        {items.map((item, index) => {
          const isHighlighted = highlightedIndex === index;
          return (
            <ListItem
              key={index}
              value={item}
              isHighlighted={isHighlighted}
              handleHighlight={() => handleHighlight(index)}
              handleSelect={() => handleSelect(getListItemValue(item))}
            />
          );
        })}
      </ul>
    );
  }
}
