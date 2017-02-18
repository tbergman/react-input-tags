import React from 'react';
import { InputTagsContainer } from '../index';

const suggestionsLocalDefault = ['apple', 'banana', 'cherry'];

export class LocalSuggestionsExample extends React.Component {
  static propTypes = {
    suggestions: React.PropTypes.arrayOf(React.PropTypes.any).isRequired,
  }

  static defaultProps = {
    suggestions: suggestionsLocalDefault,
  }

  state = {
    tags: [],
    suggestions: [],
  }

  handleUpdateTags = (newTags) => {
    this.setState({ tags: newTags });
  }

  handleUpdateSuggestions = (inputValue) => {
    const { suggestions } = this.props;
    const newSuggestions = suggestions.filter(suggestion => suggestion.indexOf(inputValue) !== -1);
    this.setState({ suggestions: newSuggestions });
  }

  render() {
    return (
      <InputTagsContainer
        tags={this.state.tags}
        handleUpdateTags={this.handleUpdateTags}
        inputPlaceholder={'Add tag'}
        suggestions={this.state.suggestions}
        handleUpdateSuggestions={this.handleUpdateSuggestions}
      />
    );
  }
}
