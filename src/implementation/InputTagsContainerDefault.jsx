import React from 'react';
import { InputTags } from '../interface/InputTags.jsx';

export const handleInsertDefault = (currentTags, insertTagIndex, newTag) =>
  [
    ...currentTags.slice(0, insertTagIndex),
    newTag,
    ...currentTags.slice(insertTagIndex),
  ];

export const handleRemoveDefault = (currentTags, removeTagIndex) =>
  [
    ...currentTags.slice(0, removeTagIndex),
    ...currentTags.slice(removeTagIndex + 1),
  ];

export class InputTagsContainerDefault extends React.Component {
  static propTypes = {
    tags: React.PropTypes.arrayOf(React.PropTypes.any).isRequired,
    handleUpdateTags: React.PropTypes.func.isRequired,
    handleInsert: React.PropTypes.func,
    handleRemove: React.PropTypes.func,
  }

  static defaultProps = {
    handleInsert: handleInsertDefault,
    handleRemove: handleRemoveDefault,
  }

  handleInsert = (currentTags, insertTagIndex, newTag) => {
    const { handleInsert, handleUpdateTags } = this.props;
    const newTags = handleInsert(currentTags, insertTagIndex, newTag);
    handleUpdateTags(newTags);
  }

  handleRemove = (currentTags, removeTagIndex) => {
    const { handleRemove, handleUpdateTags } = this.props;
    const newTags = handleRemove(currentTags, removeTagIndex);
    handleUpdateTags(newTags);
  }

  render() {
    const {
      tags,
      ...otherProps
    } = this.props;
    console.log(otherProps);
    return (
      <InputTags
        tags={tags}
        handleInsert={this.handleInsert}
        handleRemove={this.handleRemove}
        {...otherProps}
      />
    );
  }
}
