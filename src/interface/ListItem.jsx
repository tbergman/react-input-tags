import React from 'react';

import { ListItemDefault } from '../implementation/ListItemDefault.jsx';

export const ListItem = ({
  ListItemImplementation,
  value,
  isHighlighted,
  handleHighlight,
  handleSelect,
}) =>
  <ListItemImplementation
    value={value}
    isHighlighted={isHighlighted}
    handleHighlight={handleHighlight}
    handleSelect={handleSelect}
  />;

ListItem.propTypes = {
  ListItemImplementation: React.PropTypes.func.isRequired,
  value: React.PropTypes.string.isRequired,
  isHighlighted: React.PropTypes.bool.isRequired,
  handleHighlight: React.PropTypes.func.isRequired,
  handleSelect: React.PropTypes.func.isRequired,
};

ListItem.defaultProps = {
  ListItemImplementation: ListItemDefault,
};
