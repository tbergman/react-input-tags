import React from 'react';

import { defaultClassNamePrefix } from './util';

export const TagClassNameDefault = `${defaultClassNamePrefix}-tag`;

export class TagDefault extends React.Component {
  static propTypes = {
    value: React.PropTypes.string.isRequired,
    handleEdit: React.PropTypes.func.isRequired,
    handleRemove: React.PropTypes.func.isRequired,
    TagClassName: React.PropTypes.string,
  }

  static defaultProps = {
    TagClassName: TagClassNameDefault,
  }

  render() {
    const { value, handleEdit, handleRemove, TagClassName } = this.props;
    return (
      <span
        className={TagClassName}
      >
        <span // eslint-disable-line jsx-a11y/no-static-element-interactions
          onClick={handleEdit}
        >
          {value}
        </span>
        <button
          onClick={handleRemove}
        >
          {'x'}
        </button>
      </span>
    );
  }
}
