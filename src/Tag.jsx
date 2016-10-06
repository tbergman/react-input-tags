import React from 'react';

export const Tag = ({ value, handleRemove, renderTag }) =>
  renderTag({ value, handleRemove });

Tag.propTypes = {
  value: React.PropTypes.string.isRequired,
  handleRemove: React.PropTypes.func.isRequired,
  renderTag: React.PropTypes.func.isRequired,
};
