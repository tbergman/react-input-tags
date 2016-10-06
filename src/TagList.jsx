import React from 'react';

import { Tag } from './Tag.jsx';

export const TagList = ({ tags, handleRemove }) =>
  <div>
    {tags.map((tag, index) =>
      <Tag
        key={index}
        value={tag}
        handleRemove={() => handleRemove(tags, index)}
      />
    )}
  </div>;

TagList.propTypes = {
  tags: React.PropTypes.arrayOf(React.PropTypes.any).isRequired,
  handleRemove: React.PropTypes.func.isRequired,
};
