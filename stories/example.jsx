import React from 'react';
import { InputTags } from '../src/index';

export const handleInsert = (currentTags, newTag) => {
  const newTags = [...currentTags, newTag];
  return newTags;
}

export const handleEdit = (currentTags, editTagIndex, newValue) => {
  const newTags = [
    ...currentTags.slice(0, editTagIndex),
    newValue,
    ...currentTags.slice(editTagIndex + 1),
  ];
  return newTags;
}

export const handleRemove = (currentTags, removeTagIndex) => {
  const newTags = [
    ...currentTags.slice(0, removeTagIndex),
    ...currentTags.slice(removeTagIndex + 1),
  ];
  return newTags;
}

const data = ['apple', 'banana', 'cherry'];

export class Example extends React.Component {
  static propTypes = {
    onFocus: React.PropTypes.func,
    onBlur: React.PropTypes.func,
  }

  state = {
    tags: [],
    suggestions: [],
  }

  handleInsert = (currentTags, newTag) => {
    const newTags = handleInsert(currentTags, newTag);
    this.setState({ tags: newTags });
    this.setState({ suggestions: [] });
  }

  handleEdit = (currentTags, editTagIndex, newValue) => {
    const newTags = handleEdit(currentTags, editTagIndex, newValue);
    this.setState({ tags: newTags });
  }

  handleRemove = (currentTags, removeTagIndex) => {
    const newTags = handleRemove(currentTags, removeTagIndex);
    this.setState({ tags: newTags });
  }

  handleInputChange = (inputValue) => {
    const newSuggestions = data.filter(datum => datum.indexOf(inputValue) !== -1);
    this.setState({ suggestions: newSuggestions });
  }

  render() {
    return (
      <div
        className={'container'}
      >
        <InputTags
          tags={this.state.tags}
          handleInsert={this.handleInsert}
          handleEdit={this.handleEdit}
          handleRemove={this.handleRemove}
          suggestions={this.state.suggestions}
          handleInputChange={this.handleInputChange}
          inputPlaceholder={'add tag'}
        />
      </div>
    );
  }
}
