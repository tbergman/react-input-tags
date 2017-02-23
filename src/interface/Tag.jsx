import React from 'react';

import { TagDefault } from '../implementation/TagDefault.jsx';

export const Tag = ({
  TagImplementation,
  value,
  handleEdit,
  handleRemove,
  handleStartEditing,
  handleDoneEditing,
  TagClassName,
}) =>
  <TagImplementation
    value={value}
    handleEdit={handleEdit}
    handleRemove={handleRemove}
    handleStartEditing={handleStartEditing}
    handleDoneEditing={handleDoneEditing}
    TagClassName={TagClassName}
  />;

Tag.propTypes = {
  TagImplementation: React.PropTypes.func.isRequired,
  value: React.PropTypes.string.isRequired,
  handleEdit: React.PropTypes.func.isRequired,
  handleRemove: React.PropTypes.func.isRequired,
  handleDoneEditing: React.PropTypes.func,
  TagClassName: React.PropTypes.string,
};

Tag.defaultProps = {
  TagImplementation: TagDefault,
};
