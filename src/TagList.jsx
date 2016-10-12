import React from 'react';

import { Tag } from './Tag.jsx';

export const TagList = ({ tags, handleRemove, renderTag, className }) =>
  <div
    className={className}
  >
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
  className: React.PropTypes.string.isRequired,
};
