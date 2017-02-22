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
    InputTagsImplementation: React.PropTypes.func,
    InputImplementation: React.PropTypes.func,
    TagImplementation: React.PropTypes.func,
    SuggestionListImplementation: React.PropTypes.func,
    SuggestionImplementation: React.PropTypes.func,
    SuggestionsLoaderImplementation: React.PropTypes.func,
    tags: React.PropTypes.arrayOf(React.PropTypes.any).isRequired,
    handleUpdateTags: React.PropTypes.func.isRequired,
    inputPlaceholder: React.PropTypes.string,
    suggestions: React.PropTypes.arrayOf(React.PropTypes.any),
    handleUpdateSuggestions: React.PropTypes.func,
    getSuggestionValue: React.PropTypes.func,
    suggestionsAreLoading: React.PropTypes.bool,
    handleInsert: React.PropTypes.func.isRequired,
    handleEdit: React.PropTypes.func.isRequired,
    handleRemove: React.PropTypes.func.isRequired,
    InputTagsClassName: React.PropTypes.string,
    InputClassName: React.PropTypes.string,
    TagClassName: React.PropTypes.string,
    SuggestionListClassName: React.PropTypes.string,
    SuggestionClassName: React.PropTypes.string,
    SuggestionsLoaderClassName: React.PropTypes.string,
  }

  static defaultProps = {
    handleInsert: handleInsertDefault,
    handleEdit: handleEditDefault,
    handleRemove: handleRemoveDefault,
  }

  handleInsert = (currentTags, newTag) => {
    const { handleInsert, handleUpdateTags } = this.props;
    const newTags = handleInsert(currentTags, newTag);
    handleUpdateTags(newTags);
  }

  handleEdit = (currentTags, editTagIndex, newValue) => {
    const { handleEdit, handleUpdateTags } = this.props;
    const newTags = handleEdit(currentTags, editTagIndex, newValue);
    handleUpdateTags(newTags);
  }

  handleRemove = (currentTags, removeTagIndex) => {
    const { handleRemove, handleUpdateTags } = this.props;
    const newTags = handleRemove(currentTags, removeTagIndex);
    handleUpdateTags(newTags);
  }

  render() {
    const {
      InputTagsImplementation,
      InputImplementation,
      TagImplementation,
      SuggestionListImplementation,
      SuggestionImplementation,
      SuggestionsLoaderImplementation,
      tags,
      inputPlaceholder,
      suggestions,
      handleUpdateSuggestions,
      getSuggestionValue,
      suggestionsAreLoading,
      InputTagsClassName,
      InputClassName,
      TagClassName,
      SuggestionListClassName,
      SuggestionClassName,
      SuggestionsLoaderClassName,
    } = this.props;
    return (
      <InputTags
        InputTagsImplementation={InputTagsImplementation}
        InputImplementation={InputImplementation}
        TagImplementation={TagImplementation}
        SuggestionListImplementation={SuggestionListImplementation}
        SuggestionImplementation={SuggestionImplementation}
        SuggestionsLoaderImplementation={SuggestionsLoaderImplementation}
        tags={tags}
        handleInsert={this.handleInsert}
        handleEdit={this.handleEdit}
        handleRemove={this.handleRemove}
        inputPlaceholder={inputPlaceholder}
        suggestions={suggestions}
        handleUpdateSuggestions={handleUpdateSuggestions}
        getSuggestionValue={getSuggestionValue}
        suggestionsAreLoading={suggestionsAreLoading}
        InputTagsClassName={InputTagsClassName}
        InputClassName={InputClassName}
        TagClassName={TagClassName}
        SuggestionListClassName={SuggestionListClassName}
        SuggestionClassName={SuggestionClassName}
        SuggestionsLoaderClassName={SuggestionsLoaderClassName}
      />
    );
  }
}
