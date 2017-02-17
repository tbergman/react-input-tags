import React from 'react';
import InputTags from '../src/index';

import { handleInsert, handleEdit, handleRemove } from './util';

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
