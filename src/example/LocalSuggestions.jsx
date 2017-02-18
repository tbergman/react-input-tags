import React from 'react';
import { InputTagsContainer } from '../interface/InputTagsContainer.jsx';

const suggestionsLocalDefault = ['apple', 'banana', 'cherry'];

export class Example extends React.Component {
  state = {
    tags: [],
    suggestions: [],
  }

  handleOnChange = (newTags) => {
    this.setState({ tags: newTags });
  }

  handleSuggestionsFilter = () => {

  }

  handleUpdateSuggestions = (inputValue) => {
    const newSuggestions =
      this.props.suggestions.filter(suggestion => suggestion.indexOf(inputValue) !== -1);
    this.setState({ suggestions: newSuggestions });
  }

  render() {
    return (
      <InputTags
        tags={this.state.tags}
        handleInsert={this.handleInsert}
        handleEdit={this.handleEdit}
        handleRemove={this.handleRemove}
        inputPlaceholder={'Add tag'}
        suggestions={this.state.suggestions}
        handleUpdateSuggestions={this.handleUpdateSuggestions}
      />
    );
  }
}
