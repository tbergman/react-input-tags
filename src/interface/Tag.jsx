import React from 'react';

import { TagDefault } from '../implementation/TagDefault.jsx';

export const Tag = ({
  TagImplementation,
  value,
  handleEdit,
  handleRemove,
  TagClassName,
}) =>
  <TagImplementation
    value={value}
    handleEdit={handleEdit}
    handleRemove={handleRemove}
    TagClassName={TagClassName}
  />;

Tag.propTypes = {
  TagImplementation: React.PropTypes.func.isRequired,
  value: React.PropTypes.string.isRequired,
  handleEdit: React.PropTypes.func.isRequired,
  handleRemove: React.PropTypes.func.isRequired,
  TagClassName: React.PropTypes.string,
};

Tag.defaultProps = {
  TagImplementation: TagDefault,
};
