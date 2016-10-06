import React from 'react';

const TagStyle = {
  display: 'flex',
};

export const Tag = ({ value, handleRemove }) =>
  <div style={TagStyle}>
    <div>
      {value}
    </div>
    <button
      onClick={handleRemove}
    >
      {'X'}
    </button>
  </div>;

Tag.propTypes = {
  value: React.PropTypes.string.isRequired,
  handleRemove: React.PropTypes.func.isRequired,
};
