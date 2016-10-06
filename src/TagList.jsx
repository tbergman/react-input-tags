import React from 'react';

import { Tag } from './Tag.jsx';

const TagListStyle = {
  display: 'flex',
};

export const TagList = ({ tags, handleRemove, renderTag }) =>
  <div style={TagListStyle}>
    {tags.map((tag, index) =>
      <Tag
        key={index}
        value={tag}
        handleRemove={() => handleRemove(tags, index)}
        renderTag={renderTag}
      />
    )}
  </div>;

TagList.propTypes = {
  tags: React.PropTypes.arrayOf(React.PropTypes.any).isRequired,
  handleRemove: React.PropTypes.func.isRequired,
  renderTag: React.PropTypes.func.isRequired,
};
