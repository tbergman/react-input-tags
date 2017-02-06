import React from 'react';
import InputTags from '../src/index.js';

const data = ['apple', 'banana', 'cherry'];

export class Example extends React.Component {
  state = {
    tags: [],
    suggestions: [],
  }

  handleInsert = (currentTags, newTag) => {
    const newTags = [...currentTags, newTag];
    this.setState({ tags: newTags });
    this.setState({ suggestions: [] });
  }

  handleRemove = (currentTags, removeTagIndex) => {
    const newTags = [
      ...currentTags.slice(0, removeTagIndex),
      ...currentTags.slice(removeTagIndex + 1),
    ];
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
          handleRemove={this.handleRemove}
          suggestions={this.state.suggestions}
          handleInputChange={this.handleInputChange}
          inputPlaceholder={'add tag'}
        />
      </div>
    );
  }
}
