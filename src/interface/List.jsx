import React from 'react';

import { ListDefault } from '../implementation/ListDefault.jsx';

export const List = ({
  ListImplementation,
  items,
  highlightedIndex,
  getListItemValue,
  handleSelect,
  handleHighlight,
}) =>
  <ListImplementation
    items={items}
    highlightedIndex={highlightedIndex}
    getListItemValue={getListItemValue}
    handleHighlight={handleHighlight}
    handleSelect={handleSelect}
  />;

List.propTypes = {
  ListImplementation: React.PropTypes.func.isRequired,
  items: React.PropTypes.arrayOf(React.PropTypes.any).isRequired,
  highlightedIndex: React.PropTypes.number.isRequired,
  getListItemValue: React.PropTypes.func.isRequired,
  handleHighlight: React.PropTypes.func.isRequired,
  handleSelect: React.PropTypes.func.isRequired,
};

List.defaultProps = {
  ListImplementation: ListDefault,
};
