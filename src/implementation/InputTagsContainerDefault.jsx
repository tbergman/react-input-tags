import React from 'react';
import { InputTags } from '../interface/InputTags.jsx';

export const handleInsertDefault = (currentTags, newTag) => {
  const newTags = [...currentTags, newTag];
  return newTags;
};

export const handleEditDefault = (currentTags, editTagIndex, newValue) => {
  const newTags = [
    ...currentTags.slice(0, editTagIndex),
    newValue,
    ...currentTags.slice(editTagIndex + 1),
  ];
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
    onChange: React.PropTypes.func.isRequired,
    inputPlaceholder: React.PropTypes.string.isRequired,
    suggestions: React.PropTypes.arrayOf(React.PropTypes.any).isRequired,
    filter: React.PropTypes.func.isRequired,
    handleInsert: React.PropTypes.func.isRequired,
    handleEdit: React.PropTypes.func.isRequired,
    handleRemove: React.PropTypes.func.isRequired,
  }

  static defaultProps = {
    // TODO: get these from InputTags
    // inputPlaceholder:
    // suggestions:
    // suggestionsFilter:
    handleInsert: handleInsertDefault,
    handleEdit: handleEditDefault,
    handleRemove: handleRemoveDefault,
  }

  handleInsert = (currentTags, newTag) => {
    const { handleInsert, onChange } = this.props;
    const newTags = handleInsert(currentTags, newTag);
    onChange(newTags);
  }

  handleEdit = (currentTags, editTagIndex, newValue) => {
    const { handleEdit, onChange } = this.props;
    const newTags = handleEdit(currentTags, editTagIndex, newValue);
    onChange(newTags);
  }

  handleRemove = (currentTags, removeTagIndex) => {
    const { handleRemove, onChange } = this.props;
    const newTags = handleRemove(currentTags, removeTagIndex);
    onChange(newTags);
  }

  handleUpdateSuggestions = (inputValue) => {
    const { suggestions, filter } = this.props;
    // const newSuggestions = this.props.suggestions.filter(suggestion => suggestion.indexOf(inputValue) !== -1);
    const newSuggestions = suggestions.filter(filter);
  }

  render() {
    const { tags, inputPlaceholder, suggestions } = this.props;
    return (
      <InputTags
        tags={tags}
        handleInsert={this.handleInsert}
        handleEdit={this.handleEdit}
        handleRemove={this.handleRemove}
        inputPlaceholder={inputPlaceholder}
        suggestions={suggestions}
        handleUpdateSuggestions={this.handleUpdateSuggestions}
      />
    );
  }
}
