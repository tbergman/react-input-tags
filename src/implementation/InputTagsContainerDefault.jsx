import React from 'react';
import { InputTags } from '../interface/InputTags.jsx';

export const handleInsertDefault = (currentTags, insertTagIndex, newTag) => {
  // console.log(currentTags, insertTagIndex, newTag);
  const newTags = [
    ...currentTags.slice(0, insertTagIndex),
    newTag,
    ...currentTags.slice(insertTagIndex),
  ];
  // console.log(newTags);
  return newTags;
};

export const handleRemoveDefault = (currentTags, removeTagIndex) => {
  const newTags = [
    ...currentTags.slice(0, removeTagIndex),
    ...currentTags.slice(removeTagIndex + 1),
  ];
  return newTags;
};

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
    const { handleUpdateTags } = this.props;
    const newTags = this.props.handleInsert(currentTags, insertTagIndex, newTag);
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
    return (
      <InputTags
        tags={tags}
        handleInsert={() => {
          console.log('hi');
          // this.handleInsert
        }}
        handleRemove={this.handleRemove}
        {...otherProps}
      />
    );
  }
}
