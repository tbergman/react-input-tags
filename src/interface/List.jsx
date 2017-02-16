import React from 'react';

import { ListDefault } from '../implementation/ListDefault.jsx';

export const List = ({
  ListImplementation,
  items,
  handleSelect,
  handleClose,
}) =>
  <ListImplementation
    items={items}
    handleSelect={handleSelect}
    handleClose={handleClose}
  />;

List.propTypes = {
  ListImplementation: React.PropTypes.func.isRequired,
  items: React.PropTypes.arrayOf(React.PropTypes.any).isRequired,
  handleSelect: React.PropTypes.func.isRequired,
  handleClose: React.PropTypes.func.isRequired,
};

List.defaultProps = {
  ListImplementation: ListDefault,
};
